import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const FounderCard = (props) => {
  const { founder } = props;
  return (
    <CardOutside>
      <CircularImage src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
      <Card>
        <AppText fontSize="34">{founder.name}</AppText>
        <AppText fontSize="24" fontWeight="300" color={props.theme.brandDarkRed}>
          {founder.position}
        </AppText>
        <AppText fontSize="16">{founder.description}</AppText>
        <CornerDecoration />
      </Card>
    </CardOutside>
  );
};

const CardOutside = styled.div`
  display: flex;
  position: relative;
  width: 60%;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.darkColor};
  background-color: ${props => props.theme.darkColor};
  border-radius: 10px;
  overflow: hidden;
  padding: 100px 20px 20px 20px;
`;

const AppText = styled.p`
  font-size: ${props => `${props.fontSize}px`};
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  margin: 0;
`;

const CircularImage = styled.img`
  position: absolute;
  top: 25px;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  z-index: 1;
`;

const CornerDecoration = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${props => props.theme.brandRed};
  position: absolute;
  top: -50px;
  left: -50px;
`;

FounderCard.propTypes = {
  founder: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withTheme(FounderCard);
