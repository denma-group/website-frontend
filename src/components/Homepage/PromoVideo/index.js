// Libraries
import React from 'react';
import styled from 'styled-components';

const PromoVideo = () => (
  <Video id="homepage_promo_video" loop autoPlay muted>
      <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      Your browser does not support the video tag.
  </Video>
);

const Video = styled.video`
  background-size: cover;
  background-position: 50% 50%;
  margin: 2.5% auto;
  width: 95%;
  height: 95%;
`;

export default PromoVideo;
