import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { Mock } from 'vitest';
import ServerList from '..';

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual<any>('@mui/material');
  return {
    ...actual,
    useTheme: vi.fn().mockImplementation(actual.useTheme),
  };
});
vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual<any>('@tanstack/react-query');
  return {
    ...actual,
    useQuery: vi.fn(),
  };
});

describe('Header component', () => {
  const mockUseQuery = useQuery as Mock;

  afterAll(() => {
    vi.unmock('@mui/material');
  });

  it('should render component', () => {
    mockUseQuery.mockReturnValue({
      data: [
        { name: 'Japan #46', distance: 120, countryCode: 'jp' },
        { name: 'Japan #36', distance: 20, countryCode: 'jp' },
        { name: 'Japan #26', distance: 60, countryCode: 'jp' },
      ],
      isLoading: false,
      isError: false,
    });
    render(<ServerList />);
    expect(screen).toMatchSnapshot();
  });
  it('should make request', () => {
    mockUseQuery.mockReturnValue({
      data: [
        { name: 'Japan #46', distance: 120, countryCode: 'jp' },
        { name: 'Japan #36', distance: 20, countryCode: 'jp' },
        { name: 'Japan #26', distance: 60, countryCode: 'jp' },
      ],
      isLoading: false,
      isError: false,
    });
    render(<ServerList />);
    expect(mockUseQuery).toHaveBeenLastCalledWith({
      queryKey: ['servers'],
      queryFn: expect.any(Function),
    });
  });
});
