import React from 'react'
import Styled from 'styled-components';

interface IContainerProps {
    readonly backgroundColor: string;
    readonly hoverColor: string;
}

const Container = Styled.div<IContainerProps>`
  text-align: center;
  background-color: ${({backgroundColor}) => backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({hoverColor}) => hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`

const Label = Styled.div`
  color: #FFFFFF;
  font-size: 16px;
`


interface IButtonProps {
    readonly label: string;
    readonly onClick?: () => void; 
    readonly backgroundColor?: string;
    readonly hoverColor?: string;
}

export function Button({ label, onClick, backgroundColor = '#304FFE', hoverColor = '#1E40FF' }: IButtonProps) {
    return (
        <Container onClick={onClick} backgroundColor={backgroundColor} hoverColor={hoverColor}>
            <Label >
                {label}
            </Label>
        </Container>
    )
}
