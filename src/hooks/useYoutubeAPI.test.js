import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';
import useYoutubeAPI from './useYoutubeAPI';
import youTubeResponse from '../utils/mocks/youTubeResponse.json';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(youTubeResponse),
  })
);
describe('HOOK: useYoutubeAPI ', () => {
  test('Hook thow error if connection fail', async () => {
    fetch.mockClear();
    fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('something bad happened'))
    );
    const { result, waitForNextUpdate } = renderHook(() => useYoutubeAPI());
    expect(result.current.searchResult).toBe(null);
    act(() => {
      result.current.searchResult = 'wizeline';
    });
    expect(result.current.searchResult).toBe('wizeline');
    expect(result.current.loading).toBeTruthy();
    await waitForNextUpdate();
    expect(result.current.searchResult).toBe(null);
    expect(result.current.loading).toBeFalsy();
  });
  test('Handle reponse properly', async () => {
    fetch.mockClear();
    const { result, waitForNextUpdate } = renderHook(() => useYoutubeAPI());
    act(() => {
      result.current.searchResult = 'wizeline';
    });
    await waitForNextUpdate();
    expect(result.current.searchResult).toBe(youTubeResponse);
    expect(result.current.loading).toBeFalsy();
  });
});
