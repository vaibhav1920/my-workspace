import { render } from '@testing-library/react';

import Food from './waterpark-food';

describe('Food', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Food />);
    expect(baseElement).toBeTruthy();
  });
});
