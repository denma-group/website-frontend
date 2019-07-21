import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

/* 
	font sizes:
		type: p  - 16 px
					h1 - 42 px
					h2 - 34 px
					h3 - 24 px
*/
const AppText = (props) => {
  let fontSize = 16;
  switch (props.type) {
    case 'h1':
      fontSize = 42;
      break;
    case 'h2':
      fontSize = 34;
      break;
    case 'h3':
      fontSize = 24;
      break;
    case 'p':
      fontSize = 16;
      break;
    default:
  }
  return (
    <Text {...props} fontSize={fontSize}>
      {props.children}
    </Text>
  );
};

const Text = styled.span`
  font-size: ${props => `${props.fontSize}px`};
  color: ${props => props.color || '#000'};
  font-weight: ${props => props.fontWeight || 300};
  line-height: ${props => props.lineHeight || null};
  margin: ${props => props.margin || 0};
`;

AppText.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired
};

export default AppText;
