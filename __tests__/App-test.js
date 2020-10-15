import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';

it('Pages App running without crash', () => {
  shallow(<App />);
});


