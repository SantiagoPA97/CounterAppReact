import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Tests in <CounterApp />', () => { 

    const value = 100;

    test('should match with the snapshot', () => { 
        const { container } = render(<CounterApp value={ value } />);
        expect(container).toMatchSnapshot();
    });

    test('should show the initial value of 100', () => {
        render(<CounterApp value={ value } />);
        expect(screen.getByText(value)).toBeTruthy();
    });

    test('should increment with +1 button', () => {
        render(<CounterApp value={ value } />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('should decrement with -1 button', () => {
        render(<CounterApp value={ value } />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('The reset button should works', () => {
        render(<CounterApp value={ value } />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        // screen.debug();
        // expect(screen.getByText(100)).toBeTruthy();
    });
 })