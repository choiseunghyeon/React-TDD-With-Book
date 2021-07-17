import Styled from 'styled-components';
import { Button, Input } from 'components';
import { TodoItem } from './TodoItem';
import { Component, useState } from 'react';



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

interface Props {}
interface State {
  readonly todo: string,
  readonly todos: string[],
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      todo: '',
      todos: [],
    }
  }

  private addTodo = () : void => {
    const {todo, todos} = this.state;
    if (todo) {
      this.setState({
        todo: '',
        todos: todos.concat(todo),
      })
    }
  }

  private deleteTodo = (index: number): void => {
    this.setState({
      todos: this.state.todos.filter((todo, todoIndex) => todoIndex !== index),
    })
  }

  render () {
    const {
      todo,
      todos
    } = this.state;
    return (
      <Container>
        <Contents>
          <TodoListContainer data-testid='todos'>
            {todos.map((todo, index) => < TodoItem key={todo} label={todo} onDelete={() => this.deleteTodo(index)} />)}
          </TodoListContainer>
          <InputContainer>
            <Input placeholder="할 일을 입력해 주세요" value={todo} onChange={(text) => this.setState({todo: text})}/>
            <Button label="추가" onClick={this.addTodo}/>
          </InputContainer>
        </Contents>
      </Container>
      );
  }
}



export default App;
