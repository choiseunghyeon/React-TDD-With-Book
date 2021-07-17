import Styled from 'styled-components';
import {Button} from 'components/Button'; // 무한 반복으로 인해 직접 설정 components/index -> TodoItem -> componennts/index 

const Container = Styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  margin: 10px;
  padding: 10px;
`

const Label = Styled.div`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
`

interface TodoItemProps {
    readonly label: string;
    readonly onDelete?: () => void;
}

export function TodoItem({ label, onDelete }: TodoItemProps) {
    return (
        <Container>
            <Label>{label}</Label>
            <Button label="삭제" backgroundColor="#FF1744" hoverColor="#F01440" onClick={onDelete}/>
        </Container>
    )
}
