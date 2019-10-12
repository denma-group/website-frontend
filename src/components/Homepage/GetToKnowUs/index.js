// Libraries
import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

// Assets
import DesignIcon from '@material-ui/icons/DeveloperBoard';
import DevelopIcon from '@material-ui/icons/DeveloperMode';
import DeliverIcon from '@material-ui/icons/HowToReg';
import MaintainIcon from '@material-ui/icons/Sync';

// Components
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Row, Col } from 'src/components/Layout';
import { H1, P } from 'src/components/UI/Text';
import { PopIn } from 'src/components/UI/Animations';

function GetToKnowUs(props) {
  const {
    theme: {
      brandOrange,
      brandRed,
      blueColor,
      greenColor,
    }
  } = props;
  return (
    <Container>
      <Title>
        <span>Get to know us</span>
      </Title>
      <P>
        We are experts in high-quality design and development of both mobile and web applications. Here in Denma, we will
        help you in all the stages of your venture:
      </P>
      <StyledRow spacing={2}>
          {[
            {
              key: 'design',
              primary: <b>Design</b>,
              secondary: 'Functionality with dazzling visuals. Guaranteed.',
              icon: <DesignIcon />,
              themeColor: brandOrange,
            },
            {
              key: 'develop',
              primary: <b>Develop</b>,
              secondary: 'We develop for you and with you. You’re the team’s priority.',
              icon: <DevelopIcon />,
              themeColor: brandRed,
            },
            {
              key: 'deliver',
              primary: <b>Deliver</b>,
              secondary: 'Have a working beta in record time.',
              icon: <DeliverIcon />,
              themeColor: blueColor,
            },
            {
              key: 'maintain',
              primary: <b>Maintain</b>,
              secondary: 'Sometimes people need a little help. We’re here for you.',
              icon: <MaintainIcon />,
              themeColor: greenColor,
            },
          ].map(({ key, primary, secondary, icon, href = '/what-we-do', themeColor }, index) => (
            <Link
              key={key}
              href={href}
            >
              <StyledCol
                md={6}
                xs={12}
                themeColor={themeColor}
              >
                <PopIn
                  classNames="list-item-wrapper"
                  animationDelayMultiplier={index}
                >
                  <div className="list-item-container">
                    <StyledListItem>
                      <ListItemAvatar>
                        <Avatar sizes="25px">
                          {icon}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={primary}
                        secondary={secondary}
                      />
                    </StyledListItem>
                  </div>
                </PopIn>
              </StyledCol>
            </Link>
          ))}
      </StyledRow>
    </Container>
  );
}

const Container = styled.div`
  &&& {
    font-size: 16px;
    text-align: justify;
    padding: 12px;
    margin: 0 auto;
    > p {
      max-width: ${({ theme }) => theme.screenMd};
      text-align: center;
      margin: 0 auto;
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
      color: ${({ themeColor }) => themeColor};
    }
  }
`;

const StyledRow = styled(Row)`
  &&& {
    padding: 2rem 0 1rem;
    max-width: ${({ theme }) => theme.screenLg};
  }
`;

const StyledCol = styled(Col)`
  &&& {
    .MuiAvatar-root {
      background-color: ${({ themeColor }) => themeColor};
    }
    b {
      font-size: inherit;
      color: ${({ themeColor }) => themeColor};
    }
    .list-item-wrapper,
    .list-item-container {
      width: 100%;
      height: 100%;
    }
    .list-item-container {
      padding: 8px;
      border: 1px solid ${({ themeColor }) => themeColor};
      transition: all ease 300ms;
      cursor: pointer;
    }
    .list-item-container:hover {
      background-color: ${({ themeColor }) => themeColor};
        .MuiListItemAvatar-root {
          .MuiAvatar-root {
            background-color: ${({ theme }) => theme.whiteColor};
            .MuiSvgIcon-root {
              fill: ${({ themeColor }) => themeColor};
            }
          }
        }
      .MuiListItemText-root {
        text-align: center;
        .MuiListItemText-primary b,
        .MuiListItemText-secondary {
          color: ${({ theme }) => theme.whiteColor};
        }
      }
    }
  }
`;

const StyledListItem = styled(ListItem)`
  &&& {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    .MuiListItemAvatar-root {
      margin-top: 0.535rem;
      .MuiAvatar-root {
        margin: 0 auto;
        width: 56px;
        height: 56px;
        border: 2px solid ${({ theme }) => theme.whiteColor};
        box-sizing: content-box;
        transition: all ease 300ms;
        .MuiSvgIcon-root {
          width: 66%;
          height: 66%;
        }
      }
    }
    .MuiListItemText-root {
      text-align: center;
      .MuiListItemText-secondary {
        color: ${({ theme }) => theme.grayColor};
      }
    }
    .MuiListItemText-primary b,
    .MuiListItemText-secondary,
    .MuiAvatar-root,
    .MuiSvgIcon-root {
      transition: all ease 300ms;
    }
  }
`;

GetToKnowUs.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme(GetToKnowUs);
