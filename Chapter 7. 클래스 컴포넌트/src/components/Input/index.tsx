import { Component } from 'react';
import Styled from 'styled-components';


const InputBox = Styled.input`
    flex: 1;
    font-size: 16px;
    padding: 10px 10px;
    border-radius: 8px;
    border: 1px solid #BDBDBD;
    outline: none;
`

interface InputProps {
    readonly placeholder?: string;
    readonly onChange?: (text: string) => void;
    readonly value?: string;

}

export class Input extends Component<InputProps> {
    render () {
        const {
            value,
            placeholder,
            onChange
        } = this.props;

        return <InputBox placeholder={placeholder} value={value} onChange={(e) => {
            if (typeof onChange === 'function') {
                onChange(e.target.value)
            }
        }} />
    }
}

