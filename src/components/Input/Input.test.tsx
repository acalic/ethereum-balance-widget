import { render } from '@testing-library/preact';
import { describe, it, expect, vi } from 'vitest';
import Input from './Input';

describe('Input component', () => {
  it('renders the input with a label and placeholder', () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <Input value="test" onChange={vi.fn()} label="Username" placeholder="Enter username" id="username" />
    );

    // Check if the label is rendered
    const label = getByLabelText('Username');
    expect(label).toBeInTheDocument();

    // Check if the input has the placeholder text
    const input = getByPlaceholderText('Enter username');
    expect(input).toBeInTheDocument();
  });

  it('renders the correct value in the input field', () => {
    const { getByPlaceholderText } = render(
      <Input value="current value" onChange={vi.fn()} placeholder="Enter username" id="username" />
    );

    const input = getByPlaceholderText('Enter username') as HTMLInputElement;
    expect(input.value).toBe('current value');
  });
});
