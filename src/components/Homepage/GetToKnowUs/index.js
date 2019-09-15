// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { H1, P } from 'src/components/UI/Text';
import { PopIn } from 'src/components/UI/Animations';

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
      <span>Get to know us</span>
    </Title>
    <P>
      We are experts in high-quality design and development of both mobile and web applications. Here in Denma, we will
      help you in all the stages of your venture:
    </P>
    <StyledList>
        {[
          {
            key: 'design',
            primary: <><b>Design:</b> Functionality with dazzling visuals. Guaranteed.</>,
            secondary: 'Design - ("See more" maybe?)',
            icon: <DesignIcon />,
          },
          {
            key: 'develop',
            primary: <><b>Develop:</b> We develop for you and with you. You’re the team’s priority.</>,
            secondary: 'Develop - ("See more" maybe?)',
            icon: <DevelopIcon />,
          },
          {
            key: 'deliver',
            primary: <><b>Deliver:</b> Have a working beta in record time.</>,
            secondary: 'Deliver - ("See more" maybe?)',
            icon: <DeliverIcon />,
          },
          {
            key: 'maintain',
            primary: <><b>Maintain:</b> Sometimes people need a little help. We’re here for you.</>,
            secondary: 'Maintain - ("See more" maybe?)',
            icon: <MaintainIcon />,
          },
        ].map(({ key, primary, secondary, icon }, index) => (
          <PopIn
            classNames="list-item"
            key={key}
            animationDelayMultiplier={index}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          </PopIn>
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
    > p {
      max-width: 800px;
      text-align: center;
    }
    .MuiAvatar-root {
      background-color: ${props => props.theme.primary};
    }
    @media (min-width: ${({ theme }) => theme.screenMd}) {
      .MuiTypography-root:not(h1):not(.MuiListItemText-secondary) {
        font-size: 1.35rem !important;
      }
      .MuiListItemText-secondary {
        font-size: 1.15rem !important;
      }
    }
    @media (max-width: ${({ theme }) => theme.screenMd}) {
      .MuiTypography-root:not(h1):not(.MuiListItemText-secondary) {
        font-size: 1.1rem !important;
      }
      .MuiListItemText-secondary {
        font-size: 1.05rem !important;
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
      color: ${props => props.theme.primary}
    }
  }
`;

export default GetToKnowUs;
