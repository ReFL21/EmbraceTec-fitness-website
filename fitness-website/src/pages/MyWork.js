import ChartPage from "./ChartPage";
import React from 'react';
import { Container, Grid, Box, Typography, Avatar, Button, Card, CardContent, CardActions, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Edit, Email, Facebook, GitHub, Instagram, LinkedIn, Logout } from '@mui/icons-material';
import backgroundImage from '../media/profile background.jpg';

const user = {
  name: 'Hristo Kolev',
  bio: 'Fitness Enthusiast & Software Developper',
  profilePicture: require('../media/guze za profilna.jpg'), 
  email: 'h.kolev@student.fontys.nl',
  socialLinks: {
    facebook: 'https://www.facebook.com/hristo.kolev.319',
    instagram: 'https://www.instagram.com/hr.kolev/',
    linkedin: 'https://www.linkedin.com/in/hristo-kolev-475695254/',
    GitHub: 'https://github.com/ReFL21',
  },
  activities: [
    '💪 Working out 4x per week',
    '⚽ Every Wednesday football with friends',
    '🎾Free time- Tennis and 🏐 Volleyball',
  ],
  todo:[
    '🏃‍♂️Obstacle Run'
  ]
};

export default function MyWork(){
    return(
      <Box sx={{
                backgroundImage: require('../media/profile background.jpg'),
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                padding: "20px",
      }}>
        <Container maxWidth="lg" style={{ paddingTop: '20px' }}>
          <Grid container spacing={4}>
            {/* Profile Picture and Basic Information */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={2}>
                    <Avatar src={user.profilePicture} alt={user.name} sx={{ width: 100, height: 100 }} />
                  </Box>
                  <Typography variant="h5" align="center">{user.name}</Typography>
                  <Typography variant="body1" align="center" color="textSecondary">{user.bio}</Typography>
                </CardContent>
                {/* <CardActions>
                  <Button fullWidth startIcon={<Edit />} variant="contained" color="primary">Edit Profile</Button>
                </CardActions> */}
              </Card>
            </Grid>
    
            {/* Contact Information */}
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Contact Information</Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon><Email /></ListItemIcon>
                      <ListItemText primary={user.email} />
                    </ListItem>
                    <ListItem button component="a" href={user.socialLinks.facebook} target="_blank">
                      <ListItemIcon><Facebook /></ListItemIcon>
                      <ListItemText primary="Facebook" />
                    </ListItem>
                    <ListItem button component="a" href={user.socialLinks.instagram} target="_blank">
                      <ListItemIcon><Instagram /></ListItemIcon>
                      <ListItemText primary="Instagram" />
                    </ListItem>
                    <ListItem button component="a" href={user.socialLinks.linkedin} target="_blank">
                      <ListItemIcon><LinkedIn /></ListItemIcon>
                      <ListItemText primary="LinkedIn" />
                    </ListItem>
                    <ListItem button component="a" href={user.socialLinks.GitHub} target="_blank">
                      <ListItemIcon><GitHub /></ListItemIcon>
                      <ListItemText primary="GitHub" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
    
             <Grid item xs={12}>
              <Card>
                <CardContent>
                <Typography variant="h6">Recent Activities</Typography>
                  <List>
                    {user.activities.map((activity, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={activity} />
                      </ListItem>
                    ))}
                  </List>
                  <Divider sx={{ my: 2 }} />
                <Typography variant="h6">To Do</Typography>
                  <List>
                    {user.todo.map((activity, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={activity} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
    
            {/* Settings */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Fitness Journey</Typography>
                  <br/>
                  <br/>
                  <Box display="flex" justifyContent="center" alignItems="center" height="400px">
                    <ChartPage width="300px" height="500px" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
      </Container>

      </Box>                
    );

    
}