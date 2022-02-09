import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import App from './App';

const tree = renderer.create(<App />)

describe('<App />', () => {
  it('shows the external link', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('external-link-text')).not.toBeNull()
  })
})