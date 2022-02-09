import React from 'react';
import { Linking } from "react-native"
import { render, fireEvent } from '@testing-library/react-native';
import App from './App';

jest.mock("react-native/Libraries/Linking/Linking", () => ({
	openURL: jest.fn(() => Promise.resolve("mockResolve")),
}))

describe('<App />', () => {
  it('shows the external link', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('external-link-text')).not.toBeNull()
  })

  it('handles external link onPress', () => {
    const { getByTestId } = render(<App />)
    fireEvent.press(getByTestId('external-link-text'))
    expect(Linking.openURL).toHaveBeenCalledTimes(1)
  })
})