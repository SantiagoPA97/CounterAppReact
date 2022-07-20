import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Tests in <FirstApp />', () => { 
   
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';

    test('should match with snapshot', () => { 
        const { container } = render(<FirstApp title={ title } />);
        expect(container).toMatchSnapshot();
    });

    test('should show the message "Hola, soy Goku"', () => {
        render(<FirstApp title={ title } />);
        expect(screen.getByText(title)).toBeTruthy();
        //screen.debug();
    });

    test('should show the title in h1 tag', () => {
        render(<FirstApp title={ title } />);
        expect(screen.getByRole('heading', { level: 1})).toBeTruthy();
        //screen.debug();
    });

    test('should show the subtitle sent in the props', () => {
        render(<FirstApp title={ title } subtitle={ subTitle } />);
        expect(screen.getAllByText(subTitle).length).toBe(1);
    });
    
 })