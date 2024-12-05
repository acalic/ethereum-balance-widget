import { render, fireEvent, screen, waitFor } from '@testing-library/preact';
import { describe, it, expect, vi } from 'vitest';
import EthBalanceForm from './EthBalanceForm';

describe('EthBalanceForm', () => {
  it('renders the input field and button', () => {
    render(<EthBalanceForm />);

    // Check if the input field is rendered with the placeholder
    expect(screen.getByPlaceholderText('Enter Ethereum address')).toBeInTheDocument();
    // Check if the button with the correct text is rendered
    expect(screen.getByText('Check Balance')).toBeInTheDocument();
  });

  it('displays an error message when an invalid Ethereum address is entered', async () => {
    render(<EthBalanceForm />);

    const input = screen.getByPlaceholderText('Enter Ethereum address');
    const button = screen.getByText('Check Balance');

    // Type an invalid Ethereum address
    fireEvent.change(input, { target: { value: 'invalid_address' } });
    fireEvent.click(button);

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText('Invalid Ethereum address format. Please check and try again.')).toBeInTheDocument();
    });
  });
});