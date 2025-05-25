import { render } from '@testing-library/react';

import UiWaterpark from './ui-waterpark';

describe('UiWaterpark', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiWaterpark />);
    expect(baseElement).toBeTruthy();
  });
});
