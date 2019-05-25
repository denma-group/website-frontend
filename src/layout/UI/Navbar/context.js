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
  colorState: [defaultColor, undefined],
  backgroundColorState: [defaultBackgroundColor, undefined],
  opacityState: [defaultOpacity, undefined],
};

export const NavbarContext = React.createContext(initialContext);

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
    <NavbarContext.Provider
      value={{
        colorState: [fontColor, setFontColor],
        backgroundColorState: [navBackground, setNavBackground],
        opacityState: [navOpacity, setNavOpacity]
      }}
    >
      {children}
    </NavbarContext.Provider>
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
