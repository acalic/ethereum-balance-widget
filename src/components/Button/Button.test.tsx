import { render, fireEvent } from '@testing-library/preact';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  it('renders the button with children text', () => {
    const { getByText } = render(<Button onClick={vi.fn()}>Click Me</Button>);
    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
    const button = getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
