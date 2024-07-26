import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Tabs,
  Tab,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Divider,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const HomeContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

const HeaderContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ContentContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FeedContainer = styled(Box)`
  width: ${(props) => (props.fullWidth ? '100%' : '70%')};
`;

const CommunitiesContainer = styled(Box)`
  width: ${(props) => (props.hidden ? '0%' : '25%')};
  transition: width 0.3s;
`;

const StyledPaper = styled(Paper)`
  padding: 16px;
  margin-bottom: 16px;
`;

const StyledCard = styled(Card)`
  margin-bottom: 16px;
`;

const StyledCardContent = styled(CardContent)`
  padding: 16px;
`;

const StyledCardActions = styled(CardActions)`
  justify-content: flex-end;
`;

const NavLinks = styled(Box)`
  display: flex;
  gap: 16px;
`;

const NavLink = styled(Button)`
  color: ${(props) => (props.active ? 'green' : 'black')};
  border-bottom: ${(props) => (props.active ? '2px solid green' : 'none')};
  &:hover {
    color: green;
  }
`;

const CommunityList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const JoinButton = styled(Button)`
  margin-left: auto;
`;

const Home = () => {
  const [tab, setTab] = useState('feed');

  return (
    <HomeContainer>
      <HeaderContainer>
        <Typography variant="h5">{tab === 'communities' ? 'All communities' : 'My feed'}</Typography>
        <NavLinks>
          <NavLink active={tab === 'feed'} onClick={() => setTab('feed')}>
            My feed
          </NavLink>
          <NavLink active={tab === 'communities'} onClick={() => setTab('communities')}>
            All communities
          </NavLink>
        </NavLinks>
      </HeaderContainer>
      <Divider sx={{ marginBottom: 3, marginTop: 1 }} />
      <ContentContainer>
        <FeedContainer fullWidth={tab === 'communities'}>
          {tab === 'feed' && (
            <>
              <StyledPaper>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Ask for advice or share your thoughts"
                />
                <Box mt={2} mb={2}>
                  <Tabs value={0}>
                    <Tab label="Hot" />
                    <Tab label="Q&A" />
                    <Tab label="Discussion" />
                  </Tabs>
                </Box>
                <StyledCard>
                  <StyledCardContent>
                    <Box display="flex" alignItems="center">
                      <Avatar />
                      <Box ml={2}>
                        <Typography variant="subtitle1">@random_high_schooler</Typography>
                        <Typography variant="body2" color="textSecondary">
                          8 hours ago • Admissions Advice • Poll
                        </Typography>
                      </Box>
                      <Box ml="auto">
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <Typography variant="h6">Am I competitive enough?</Typography>
                      <Typography variant="body2">
                        Hello everyone! I am entering my senior year and would like to know what kinds of schools I should be applying to. Here's my profile:
                        <br />
                        Grades/Test Scores: 5.007/5.0 WGPA (not sure exactly what this would ...)
                      </Typography>
                      <Box mt={2}>
                        <Button variant="outlined">Ivy/T10</Button>
                        <Button variant="outlined">T20</Button>
                        <Button variant="outlined">T50</Button>
                        <Button variant="outlined">T100</Button>
                      </Box>
                    </Box>
                  </StyledCardContent>
                  <StyledCardActions>
                    <Typography variant="body2" color="textSecondary">64 hours left</Typography>
                  </StyledCardActions>
                </StyledCard>
              </StyledPaper>
            </>
          )}
          {tab === 'communities' && (
            <StyledPaper>
              <CommunityList>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary="Juniors" />
                  <JoinButton variant="outlined">Join</JoinButton>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary="School List Suggestions" />
                  <JoinButton variant="outlined">Join</JoinButton>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary="Admissions Advice" />
                  <JoinButton variant="outlined">Join</JoinButton>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary="Paying for College" />
                  <JoinButton variant="outlined">Join</JoinButton>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary="CollegeVine Expert FAQ" />
                  <JoinButton variant="outlined">Join</JoinButton>
                </ListItem>
                {/* Add more communities as needed */}
              </CommunityList>
            </StyledPaper>
          )}
        </FeedContainer>
        <CommunitiesContainer hidden={tab === 'communities'}>
          <StyledPaper>
            <Typography variant="h6">My communities</Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Admissions Advice" />
              </ListItem>
            </List>
            <Button variant="contained" color="primary">Explore</Button>
          </StyledPaper>
          <StyledPaper>
            <Typography variant="h6">Join the conversation</Typography>
            <Typography variant="body2">Ask a question</Typography>
            <Typography variant="body2">Start a discussion</Typography>
            <Typography variant="body2">Reply to a post</Typography>
          </StyledPaper>
          <StyledPaper>
            <Typography variant="h6">Community Guidelines</Typography>
            <Typography variant="body2">
              To keep this community safe and supportive:
              <br />
              • Be respectful
              <br />
              • Follow the rules
              <br />
              • Help others
            </Typography>
          </StyledPaper>
        </CommunitiesContainer>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
