import React from 'react';
import Proptypes from 'prop-types';

import { Wrapper } from './styles';

export default function defaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

defaultLayout.propTypes = {
  children: Proptypes.element.isRequired,
};
