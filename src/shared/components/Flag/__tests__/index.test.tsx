import { render, screen } from '@testing-library/react';
import Flag from '..';

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<any>('@mui/material');
  return {
    ...actual,
    useTheme: vi.fn().mockImplementation(actual.useTheme),
  };
});

describe('Flag component', () => {
  const defaultProps = {
    code: 'us',
  };

  afterAll(() => {
    vi.unmock('@mui/material');
  });

  it('should render component', () => {
    render(<Flag {...defaultProps} />);
    expect(screen).toMatchSnapshot();
  });
});
