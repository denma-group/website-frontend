// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { H1, P } from 'src/components/UI/Text';

// Icons
import DesignIcon from '@material-ui/icons/DeveloperBoard';
import DevelopIcon from '@material-ui/icons/DeveloperMode';
import DeliverIcon from '@material-ui/icons/HowToReg';
import MaintainIcon from '@material-ui/icons/Sync';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const GetToKnowUs = () => (
  <Container>
    <Title>
      <span>Get to know us.</span>
    </Title>
    <P>
      We are experts in high-quality design and development of both mobile and web applications. Here in Denma, we will
      help you in all the stages of your venture:
      {/* <ul>
        <li>Design: Functionality with dazzling visuals. Guaranteed.</li>
        <li>Develop: We develop for you and with you. You’re the team’s priority.</li>
        <li>Deliver: Have a working beta in record time.</li>
        <li>Maintain: Sometimes you need a little help. We’re here for you.</li>
      </ul> */}
    </P>
    <StyledList>
        {[
          {
            key: 'design',
            primary: <React.Fragment><b>Design:</b> Functionality with dazzling visuals. Guaranteed.</React.Fragment>,
            secondary: 'Design - ("See more" maybe?)',
            icon: <DesignIcon />,
          },
          {
            key: 'develop',
            primary: <React.Fragment><b>Develop:</b> We develop for you and with you. You’re the team’s priority.</React.Fragment>,
            secondary: 'Develop - ("See more" maybe?)',
            icon: <DevelopIcon />,
          },
          {
            key: 'deliver',
            primary: <React.Fragment><b>Deliver:</b> Have a working beta in record time.</React.Fragment>,
            secondary: 'Deliver - ("See more" maybe?)',
            icon: <DeliverIcon />,
          },
          {
            key: 'maintain',
            primary: <React.Fragment><b>Maintain:</b> Sometimes people need a little help. We’re here for you.</React.Fragment>,
            secondary: 'Maintain - ("See more" maybe?)',
            icon: <MaintainIcon />,
          },
        ].map(({ key, primary, secondary, icon }) => (
          <ListItem
            key={key}
          >
            <ListItemAvatar>
              <Avatar>
                {icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
    </StyledList>
  </Container>
);


const Container = styled.div`
  &&& {
    font-size: 16px;
    text-align: justify;
    padding: 12px;
    margin: 0 auto;
    p {
      max-width: 800px;
    }
    .MuiAvatar-root {
      background-color: ${props => props.theme.primary};
    }
    @media (min-width: ${({ theme }) => theme.screenMd}) {
      .MuiTypography-root:not(h1):not(.MuiListItemText-secondary) {
        font-size: 1.2rem !important;
      }
      .MuiListItemText-secondary {
        font-size: 1.05rem !important;
      }
    }
    @media (max-width: ${({ theme }) => theme.screenMd}) {
      .MuiTypography-root:not(h1):not(.MuiListItemText-secondary) {
        font-size: 1rem !important;
      }
      .MuiListItemText-secondary {
        font-size: 0.9rem !important;
      }
    }
  }
`;

const Title = styled(H1)`
  &&& {
    padding: 24px 0;
    text-align: center;
    span {
      font-size: inherit;
      line-height: inherit;
      font-weight: 500;
      color: ${props => props.theme.primary}
    }
  }
`;

const StyledList = styled(List)`
  &&& {
    margin: 2rem auto 1rem;
    max-width: 720px;
    .MuiListItemAvatar-root {
      align-self: flex-start;
      margin-top: 0.66em;
    }
    b {
      font-size: inherit;
      line-height: inherit;
      color: ${props => props.theme.primary}
    }
  }
`;

export default GetToKnowUs;
