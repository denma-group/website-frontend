// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

// Dependencies
import { mainTheme } from 'styles';

const defaultColor = mainTheme.whiteColor;
const defaultBackgroundColor = mainTheme.lightDarkColor;
const defaultOpacity = 1;

const initialContext = {
  color: [defaultColor, undefined],
  backgroundColor: [defaultBackgroundColor, undefined],
  opacity: [defaultOpacity, undefined],
};

export const Context = React.createContext(initialContext);

const NavbarThemeProvider = props => {
  const {
    color,
    backgroundColor,
    opacity,
    theme,
    children
  } = props;

	const [fontColor, setFontColor] = useState(color || theme.brandLightBlack);
	const [navBackground, setNavBackground] = useState(backgroundColor || 'transparent');
  const [navOpacity, setNavOpacity] = useState(opacity || defaultOpacity);

	return (
    <Context.Provider
      value={{
        color: [fontColor, setFontColor],
        backgroundColor: [navBackground, setNavBackground],
        opacity: [navOpacity, setNavOpacity]
      }}
    >
      {children}
    </Context.Provider>
	);
};

NavbarThemeProvider.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node.isRequired
};

NavbarThemeProvider.defaultProps = {
  color: defaultColor,
  backgroundColor: defaultBackgroundColor,
  opacity: defaultOpacity,
};

export default withTheme(NavbarThemeProvider);
