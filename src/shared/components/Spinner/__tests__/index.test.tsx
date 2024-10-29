import { render, screen } from '@testing-library/react';
import Spinner from '..';

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<any>('@mui/material');
  return {
    ...actual,
    useTheme: vi.fn().mockImplementation(actual.useTheme),
  };
});

describe('Spinner component', () => {
  afterAll(() => {
    vi.unmock('@mui/material');
  });

  it('should render component', () => {
    render(<Spinner />);
    expect(screen).toMatchSnapshot();
  });
});
