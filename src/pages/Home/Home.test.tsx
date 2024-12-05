import { render } from '@testing-library/preact';
import { describe, it, expect, vi } from 'vitest';
import { Home } from './Home';

// Mock the EthBalanceForm component to avoid its internal logic during the test
vi.mock('../../components/EthBalanceForm/EthBalanceForm', () => ({
  default: () => <div>EthBalanceForm</div>,
}));

describe('Home component', () => {
  it('renders the Tatum logo correctly', () => {
    const { getByAltText } = render(<Home />);

    // Check if the logo is rendered with the correct alt text and src attribute
    const logo = getByAltText('Tatum logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('tatum.jpeg'));
    expect(logo).toHaveAttribute('alt', 'Tatum logo');
  });

  it('renders the title with the gradient mask', () => {
    const { getByRole } = render(<Home />);
  
    // Check if the h1 element contains "Tatum"
    const title = getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Tatum');
    expect(title).toHaveTextContent('ETH Balance Widget');
  
    // Ensure the title has the gradientMask class on the span
    const gradientSpan = title.querySelector('span');
    expect(gradientSpan).toHaveClass('gradientMask');
  });
  

  it('renders the EthBalanceForm component', () => {
    const { getByText } = render(<Home />);

    // Check if the EthBalanceForm component is rendered
    const ethBalanceForm = getByText('EthBalanceForm');
    expect(ethBalanceForm).toBeInTheDocument();
  });
});
