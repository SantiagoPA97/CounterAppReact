import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Tests in <FirstApp />', () => { 

    test('should match with the snapshot', () => { 
        const title = 'Hola, Soy Goku'
        const { container } = render(<FirstApp title={ title } />);
        expect(container).toMatchSnapshot();
    });

    test('should show the title within h1 tag', () => { 
        const title = 'Hola, Soy Goku'
        const { container, getByText } = render(<FirstApp title={ title } />);
        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
    });
 })