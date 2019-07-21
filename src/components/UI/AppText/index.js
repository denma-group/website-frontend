import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

/* 
	font sizes:
		variants: p  - 16 px
					    h1 - 42 px
					    h2 - 34 px
					    h3 - 24 px
*/
const AppText = (props) => {
  let fontSize = 16;
  switch (props.variant) {
    case 'h1':
      fontSize = 42;
      break;
    case 'h2':
      fontSize = 34;
      break;
    case 'h3':
      fontSize = 24;
      break;
    case 'body1':
      fontSize = 16;
      break;
    default:
  }
  return (
    <Text {...props} variant={props.variant} fontSize={fontSize}>
      {props.children}
    </Text>
  );
};

const Text = styled(Typography)`
  &&& {
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => props.textcolor || '#000'};
    font-weight: ${props => props.fontWeight || 300};
    line-height: ${props => `${props.lineheight}px` || null};
    margin: ${props => `${props.margin}px` || 0};
    letter-spacing: ${props => `${props.letterSpacing}px`};
    span {
      font-size: inherit;
      font-weight: 500;
      color: ${props => props.spancolor};
    }
  }
`;

AppText.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired
};

export default AppText;
