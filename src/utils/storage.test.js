import { storage } from './storage';

describe('Local storage', () => {
  test('Saves to local storage', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
    storage.get('aKey');
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });
  test('Saves to local storage', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
    storage.set('aKey', 'aValue');
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  test('Trhow error', () => {
    const key = 'nonExistingValue';
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => {
          throw new Error(`Error parsing storage item "${key}".`);
        }),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });

    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    storage.get(key);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.getItem).toThrowError(
      `Error parsing storage item "${key}".`
    );
    consoleSpy.mockRestore();
  });
});
