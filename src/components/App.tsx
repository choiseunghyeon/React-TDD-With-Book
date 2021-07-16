import Styled from 'styled-components';
import { Button, Input } from 'components';
import { TodoItem } from './TodoItem';
import { useState } from 'react';



const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`

const InputContainer = Styled.div`
  display: flex;
`

const TodoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  const addTodo = (): void => {
    if (todo) {
      setTodos( prevTodos => prevTodos.concat(todo));
      setTodo('');
    }
  }

  const deleteTodo = (index: number): void => {
    setTodos(prevTodos => prevTodos.filter((todo, todoIndex) => todoIndex !== index));
  }
  return (
  <Container>
    <Contents>
      <TodoListContainer data-testid='todos'>
        {todos.map((todo, index) => < TodoItem key={todo} label={todo} onDelete={() => deleteTodo(index)} />)}
      </TodoListContainer>
      <InputContainer>
        <Input placeholder="할 일을 입력해 주세요" value={todo} onChange={(text) => setTodo(text)}/>
        <Button label="추가" onClick={() => addTodo()}/>
      </InputContainer>
    </Contents>
  </Container>
  );
}

export default App;
