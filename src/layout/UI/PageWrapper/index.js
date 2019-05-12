// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RoutesWrapper = props => {
  const { children, ...rest } = props;
  return (
    <PageWrapper {...rest}>
      {children}
    </PageWrapper>
  );
};

RoutesWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

const PageWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export default RoutesWrapper;
