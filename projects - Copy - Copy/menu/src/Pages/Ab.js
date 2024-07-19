import React from 'react';
import { Container, Grid, Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import hp1image from '../image/hp1.webp';

// Styled component for the circular card
const StyledCircularCard = styled(Card)({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'gold',
  alignItems: 'center',
  height: '400px', // Initial height of the circular card
  width: '2900px', // Initial width of the circular card, takes full width of container
  maxWidth: '100%', // Max width of the circular card
  borderRadius: '100px', // Make the card itself circular
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Box shadow for a subtle lift
  overflow: 'hidden', // Ensure content stays within the circle
});

const RoundedCardMedia = styled(CardMedia)({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensure the image covers the entire area without stretching
});

const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const Ab = () => {
  return (
    <Container>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={10} md={8} style={{ display: 'flex', alignItems: 'center' }}>
          <StyledCircularCard>
            <RoundedCardMedia
              component="img"
              image={hp1image}
              alt="Healthcare"
            />
          </StyledCircularCard>
          <ContentContainer>
            <Typography variant="h5" component="h2" align="center">
              Step into the brave new world of precise & personalized healthcare
            </Typography>
            <Typography variant="body1" style={{ fontSize: 'small' }} align="center">
              A pioneer in precision health, harnesses a vast genomic universe amassed over 12 years and state-of-the-art AI to produce superior genetic reports through its 50 different panels, offering in-depth insights and diagnostic clarity to physicians. This approach personalizes patient care, moving beyond one-size-fits-all treatments by considering genetic makeup, family history, and lifestyle factors to tailor.
            </Typography>
            <ArrowForwardIcon fontSize="large" style={{ marginTop: '10px' }} />
          </ContentContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Ab;
