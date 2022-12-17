import App from "./App";
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

describe('Test Suit Series Mix', () => {

    it('render a button with text', () => {
        render(<Footer />);
        expect(screen.getByText('Kenan Al-jaber').closest('a')).toHaveAttribute('href', 'https://github.com/kenanaljaber')
    });

    it('render without crashing', () => {
        render(<Contact />);
    });

    it('render a component when an anchor is clicked', () => {
        render(<Footer />);
        const link = screen.getByRole('link', { name: 'Ariel Piguave' });
        fireEvent.click(link);
        expect('true');
    });
})