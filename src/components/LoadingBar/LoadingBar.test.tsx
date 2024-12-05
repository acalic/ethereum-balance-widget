import { render } from '@testing-library/preact';
import { describe, it, expect } from 'vitest';
import LoadingBar from './LoadingBar';
import styles from './LoadingBar.module.scss';

describe('LoadingBar component', () => {
  it('renders the loading bar', () => {
    const { container } = render(<LoadingBar />);
    
    // Check that the div has the class `loadingBar`
    const loadingBarDiv = container.firstChild;
    expect(loadingBarDiv).toHaveClass(styles.loadingBar);
  });
});
