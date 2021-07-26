import React from 'react';
import Styled from 'styled-components';
import { Switch, Route} from 'react-router-dom'

import { ToDoListProvider } from 'Contexts';
import { Add, List, Detail } from 'Pages';


const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <ToDoListProvider>
      <Container>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          
          <Route path="/add">
            <Add />
          </Route>

          <Route path="/detail/:id">
            <Detail />
          </Route>
          
        </Switch>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
