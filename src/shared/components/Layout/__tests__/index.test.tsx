import { render, screen } from '@testing-library/react';
import Layout from '..';

vi.mock('@mui/material', async () => {
  const actual =
    await vi.importActual<typeof import('@mui/material')>('@mui/material');
  return {
    ...actual,
    useTheme: vi.fn().mockImplementation(actual.useTheme),
  };
});

describe('Header component', () => {
  afterAll(() => {
    vi.unmock('@mui/material');
  });

  it('should render component', () => {
    render(<Layout>children</Layout>);
    expect(screen).toMatchSnapshot();
  });
});
