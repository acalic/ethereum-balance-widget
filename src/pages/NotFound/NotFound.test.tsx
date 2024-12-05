import { render, fireEvent } from '@testing-library/preact';
import { describe, it, expect, vi } from 'vitest';
import { NotFound } from './NotFound';
import { useLocation } from 'preact-iso';

// Mock the Button component
vi.mock('../../components/Button/Button', () => ({
  default: ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

describe('NotFound component', () => {
  it('renders the 404 page content', () => {
    const { getByText } = render(<NotFound />);
    
    // Check if the 404 message is displayed
    expect(getByText('404: Not Found')).toBeInTheDocument();
    
    // Check if the "Back to Home" button is rendered
    expect(getByText('Back to Home')).toBeInTheDocument();
  });

});
