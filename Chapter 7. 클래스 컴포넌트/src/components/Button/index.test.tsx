import { render, screen, fireEvent } from "@testing-library/react";
import 'jest-styled-components';

import {Button} from './index';

describe('<Button />', () => {
    const labelText = 'Button Test';
    it('renders component correctly', () => {
        const {container} = render(<Button label={labelText} />);
        const label = screen.getByText(labelText);
        expect(label).toBeInTheDocument();
        const parent = label.parentElement;
        // 304FFE', hoverColor = '#1E40FF
        expect(parent).toHaveStyleRule('background-color', '#304FFE');
        expect(parent).toHaveStyleRule('background-color', '#1E40FF', {
            modifier: ':hover',
        });

        expect(container).toMatchSnapshot();
    })

    it('changes backgroundColor and hoverColor Props', () => {
        const backgroundColor = '#FF1744';
        const hoverColor = "#F01440";
        render(<Button label={labelText} backgroundColor={backgroundColor} hoverColor={hoverColor} />);
        const parent = screen.getByText(labelText).parentElement;
        expect(parent).toHaveStyleRule('background-color', backgroundColor);
        expect(parent).toHaveStyleRule('background-color', hoverColor, {
            modifier: ":hover"
        })
    })

    it('clicks the button', () => {
        const handleClick = jest.fn();
        render(<Button label={labelText} onClick={handleClick} />);

        const label = screen.getByText(labelText);
        expect(label).toBeInTheDocument();

        expect(handleClick).toHaveBeenCalledTimes(0);
        fireEvent.click(label);
        expect(handleClick).toHaveBeenCalledTimes(1);

        
    })
})
