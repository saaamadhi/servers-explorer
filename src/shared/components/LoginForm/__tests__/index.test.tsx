import { render, screen } from '@testing-library/react';
import LoginForm from '..';

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<any>('@mui/material');
  return {
    ...actual,
    useTheme: vi.fn().mockImplementation(actual.useTheme),
  };
});

describe('Login Form component', () => {
  const onSubmit = vi.fn();

  const defaultProps = {
    onSubmit,
    error: '',
  };

  afterAll(() => {
    vi.unmock('@mui/material');
  });

  it('should render component', () => {
    render(<LoginForm {...defaultProps} />);
    expect(screen).toMatchSnapshot();
  });

  it('should show error if credentials not valid', () => {
    render(
      <LoginForm {...defaultProps} error='Please, check your credentials.' />,
    );
    const error = screen.getByTestId('login-error');

    expect(error).toBeInTheDocument();
  });
});
