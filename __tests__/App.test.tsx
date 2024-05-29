/**
 * @format
 */

import 'react-native';
import * as React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<App />);
  expect(tree).not.toBeNull();
});
