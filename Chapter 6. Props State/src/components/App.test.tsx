import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components'

import App from './App';


describe('<App />', () => {
  const inputPlaceHolder = '할 일을 입력해 주세요';
  const addButtonLabel = '추가';
  const todosTestId = 'todos';
  it('renders component correctly', () => {
    const {container} = render(<App />);

    const todos = screen.getByTestId(todosTestId)
    expect(todos).toBeInTheDocument();
    expect(todos.firstChild).toBeNull();

    const input = screen.getByPlaceholderText(inputPlaceHolder);
    expect(input).toBeInTheDocument();
    const label = screen.getByText(addButtonLabel);
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  })
  it('adds and deletes Todo items', () => {
    render(<App />);

    const input = screen.getByPlaceholderText(inputPlaceHolder);
    const addButton = screen.getByText(addButtonLabel);
    fireEvent.change(input, { target: {value: 'first react tdd'} });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('first react tdd');
    expect(todoItem).toBeInTheDocument();

    const todos = screen.getByTestId(todosTestId);
    expect(todos.childElementCount).toBe(1);

    fireEvent.change(input, { target: { value: 'first react tdd2'} });
    fireEvent.click(addButton);
    
    const todoItem2 = screen.getByText('first react tdd2');
    expect(todoItem2).toBeInTheDocument();
    expect(todos.childElementCount).toBe(2);

    const deleteButton = screen.getAllByText('삭제');
    expect(deleteButton[0]).toBeInTheDocument();

    fireEvent.click(deleteButton[0]);
    
    expect(todoItem).not.toBeInTheDocument();
    expect(todos.childElementCount).toBe(1);
  })
  it('does not add empty todo', () => {
    render(<App />);

    const todos = screen.getByTestId(todosTestId);
    const initializedCount = todos.childElementCount;

    const button = screen.getByText(addButtonLabel);
    fireEvent.click(button);

    expect(todos.childElementCount).toBe(initializedCount);
  })
})
