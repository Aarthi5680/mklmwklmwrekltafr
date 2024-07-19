import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import gen3Image from '../image/gen3.jpg';
import healthyImage from '../image/healthy.webp';
import newImage from '../image/new.png';
import consoleImage from '../image/console.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Sample images for the cards
const StyledCard = styled(Card)({
  width: '100%',
  maxWidth: 300,
  height: 'auto', // Adjusted to allow content to determine height
  margin: '16px',
  borderRadius:'20px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  backgroundColor: 'orange',
  color: 'white',
  display: 'flex',
  flexDirection: 'column', // Ensure content stacks properly
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
});

const RoundedCardMedia = styled(CardMedia)({
  borderRadius: '50%',
  width: '140px',
  height: '140px',
  objectFit: 'cover',
  margin: '20px auto',
});

const ReadMoreButton = styled('div')({
  marginTop: 'auto', // Pushes the button to the bottom
  backgroundColor: '#007BFF',
  color: 'white',
  padding: '8px 16px',
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const Bs = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom style={{ fontSize: 'medium' }}>
        <IconButton color="inherit">
          <ArrowForwardIcon /> {/* Arrow icon for rules */}
        </IconButton>
        Healthy Rules
      </Typography>
      <Typography variant="body1" paragraph>
        {/* Optional paragraph content */}
      </Typography>
      <Grid container justifyContent="center" spacing={2} wrap="wrap">
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <RoundedCardMedia
              component="img"
              image={gen3Image}
              alt="Genetic Testing"
            />
            <CardContent>
              <Typography variant="h5" component="div" style={{ fontSize: 'medium', color:"blueviolet" ,fontWeight:"bolder",marginLeft:"60px"}}>
                Genetic Testing
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{color:'white'}}>
                According to the researchers, genes are responsible for 26%
              </Typography>
              <ReadMoreButton  style={{marginTop:"10px"}}>Read More</ReadMoreButton>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard style={{ backgroundColor: 'green' }}>
            <RoundedCardMedia
              component="img"
              image={consoleImage}
              alt="Specialist Consultations"
            />
            <CardContent>
              <Typography variant="h5" component="div" style={{ fontSize: 'medium',color:"yellow", fontWeight:"bolder",textAlign:"center" }}>
                Specialist Consultations
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{color:"white"}}>
                Get immediate access to highly qualified doctors anytime
              </Typography>
              <ReadMoreButton style={{marginTop:"10px"}}>Read More</ReadMoreButton>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard style={{ backgroundColor: 'orange' }}>
            <RoundedCardMedia
              component="img"
              image={healthyImage}
              alt="Health Strategy"
            />
            <CardContent>
              <Typography variant="h5" component="div" style={{ fontSize: 'medium', color:"blueviolet",fontWeight:"bolder",textAlign:"center"  }}>
                Health Strategy
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{color:"white"}}>
                You can take charge of your health and improve your overall quality .
              </Typography>
              <ReadMoreButton  style={{marginTop:"10px"}}>Read More</ReadMoreButton>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard style={{ backgroundColor: 'green' }}>
            <RoundedCardMedia
              component="img"
              image={newImage}
              alt="Nutrition"
            />
            <CardContent>
              <Typography variant="h5" component="div" style={{ fontSize: 'medium', color:"yellow", fontWeight:"bolder",marginLeft:"70px" }}>
                Nutrition
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{color:"white"}}>
                At the most basic level, nutrition is about eating a regular.
              </Typography>
              <ReadMoreButton  style={{marginTop:"10px"}}>Read More</ReadMoreButton>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bs;
