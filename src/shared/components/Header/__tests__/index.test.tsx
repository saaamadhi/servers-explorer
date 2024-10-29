import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { Mock } from 'vitest';
import Header from '..';

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<any>('@mui/material');
  return {
    ...actual,
    useTheme: vi.fn().mockImplementation(actual.useTheme),
  };
});
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<any>('@mui/material');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('Header component', () => {
  const navigate = vi.fn();
  const mockUseNavigate = useNavigate as Mock;

  beforeEach(() => {
    mockUseNavigate.mockReturnValue(navigate);
  });

  afterAll(() => {
    vi.unmock('@mui/material');
  });

  it('should render component', () => {
    render(<Header />);
    expect(screen).toMatchSnapshot();
  });

  it('should logOut the user', () => {
    render(<Header />);
    const btn = screen.getByTestId('logout-btn');
    fireEvent.click(btn);
    expect(navigate).toHaveBeenCalledTimes(1);
  });
});
