import React from 'react';
import { render } from '@testing-library/react';

import Users from './users';
import { BrowserRouter } from 'react-router-dom';

function mockFetch(data) {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data,
    });
  });
}
describe('Users', () => {
  beforeEach(() => (window.fetch = mockFetch([])));
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Users />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
