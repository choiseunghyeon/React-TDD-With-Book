import React, { useState, useContext } from 'react';
import Styled from 'styled-components';

import { ToDoListContext } from 'Contexts';
import { Button } from 'Components/Button';
import { Input } from 'Components/Input';

interface Props {
  readonly onAdd?: () => void;
}

const Container = Styled.div`
  display: flex;
`;

export const InputContainer = ({ onAdd }: Props) => {
  const [toDo, setToDo] = useState('');
  const { addToDo } = useContext(ToDoListContext);
  return (
    <Container>
      <Input placeholder="할 일을 입력해 주세요" value={toDo} onChange={setToDo} />
      <Button
        label="추가"
        onClick={() => {
          addToDo(toDo);
          setToDo('');
          if (toDo && typeof onAdd === 'function') {
            onAdd();
          }
        }}
      />
    </Container>
  );
};
