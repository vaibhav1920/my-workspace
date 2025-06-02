import { render } from '@testing-library/react';

import CreateNewClient from './create-new-client';

describe('CreateNewClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateNewClient />);
    expect(baseElement).toBeTruthy();
  });
});
