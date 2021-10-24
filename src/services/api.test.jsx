import {
  postLogin,
  fetchTestaments,
  fetchContents,
  fetchVerses,
} from './api';

import ACCESS_TOKEN from '../../fixtures/access-token';
import TESTAMENTS from '../../fixtures/testaments';
import CONTENTS from '../../fixtures/contents';
import VERSES from '../../fixtures/verses';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('postLogin', () => {
    beforeEach(() => {
      mockFetch({ accessToken: ACCESS_TOKEN });
    });

    it('returns accessToken', async () => {
      const accessToken = await postLogin({
        email: 'tester@example.com',
        password: '1234',
      });

      expect(accessToken).toEqual(ACCESS_TOKEN);
    });
  });

  describe('fetchTestaments', () => {
    beforeEach(() => {
      mockFetch(TESTAMENTS);
    });

    it('returns testaments', async () => {
      const testaments = await fetchTestaments();

      expect(testaments).toEqual(TESTAMENTS);
    });
  });

  describe('fetchContents', () => {
    beforeEach(() => {
      mockFetch(CONTENTS);
    });

    it('returns contents', async () => {
      const contents = await fetchContents();

      expect(contents).toEqual(CONTENTS);
    });
  });

  describe('fetchVerses', () => {
    beforeEach(() => {
      mockFetch(VERSES);
    });

    it('returns verses', async () => {
      const verses = await fetchVerses({
        testamentName: '구약',
        contentId: 1,
      });

      expect(verses).toEqual(VERSES);
    });
  });
});
