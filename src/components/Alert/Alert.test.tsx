import { render } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import Alert from './Alert';

describe('Alert component', () => {
  it('renders the message correctly for success type', () => {
    const { getByText } = render(<Alert type="success" message="Success!" />);
    const alertElement = getByText('Success!');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass('success');
  });

  it('renders the message correctly for error type', () => {
    const { getByText } = render(<Alert type="error" message="Error!" />);
    const alertElement = getByText('Error!');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass('error');
  });

  it('applies the correct styles based on the type', () => {
    const { container } = render(<Alert type="success" message="Success!" />);
    const alertDiv = container.firstChild;
    expect(alertDiv).toHaveClass('success');
    expect(alertDiv).toHaveClass('alert');

    const { container: errorContainer } = render(<Alert type="error" message="Error!" />);
    const errorDiv = errorContainer.firstChild;
    expect(errorDiv).toHaveClass('error');
    expect(errorDiv).toHaveClass('alert');
  });
});
