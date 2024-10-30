import { render, screen } from '@testing-library/react';
import LoginForm from '..';

vi.mock('@mui/material', async () => {
  const actual =
    await vi.importActual<typeof import('@mui/material')>('@mui/material');
  return {
    ...actual,
    useTheme: vi.fn().mockImplementation(actual.useTheme),
  };
});

describe('Login Form component', () => {
  const onSubmit = vi.fn();

  const defaultProps = {
    onSubmit,
    errorMessage: '',
  };

  afterAll(() => {
    vi.unmock('@mui/material');
  });

  it('should render component', () => {
    render(<LoginForm {...defaultProps} isError={false} />);
    expect(screen).toMatchSnapshot();
  });

  it('should show error if credentials not valid', () => {
    render(
      <LoginForm
        {...defaultProps}
        errorMessage='Please, check your credentials.'
        isError={true}
      />,
    );
    const error = screen.getByTestId('login-error');

    expect(error).toBeInTheDocument();
  });
});
