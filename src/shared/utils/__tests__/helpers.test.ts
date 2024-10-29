import { sortDesc } from '..';

describe('Helpers functions', () => {
  it('should sort values in desc order', () => {
    const mockArray = [
      { name: 'Andorra' },
      { name: 'Japan' },
      { name: 'France' },
      { name: 'Sweden' },
    ];

    const sortedArray = mockArray.sort((a, b) => sortDesc(a, b, 'name'));
    expect(sortedArray).toMatchObject([
      { name: 'Sweden' },
      { name: 'Japan' },
      { name: 'France' },
      { name: 'Andorra' },
    ]);
  });

  it('should sort values in asc order', () => {
    const mockArray = [
      { name: 'Andorra' },
      { name: 'Japan' },
      { name: 'France' },
      { name: 'Sweden' },
    ];

    const sortedArray = mockArray.sort((a, b) => -sortDesc(a, b, 'name'));
    expect(sortedArray).toMatchObject([
      { name: 'Andorra' },
      { name: 'France' },
      { name: 'Japan' },
      { name: 'Sweden' },
    ]);
  });
});
