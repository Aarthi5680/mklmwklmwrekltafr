import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import scienceImage from './image/science.jpg';
import bioImage from './image/bio.png';
import gen1Image from './image/gen1.png';

const AboutSectionContainer = styled('section')({
  padding: '24px 0',
  '@media (min-width: 960px)': {
    padding: '40px',
  },
});

const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const Image = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '8px',
});

const FeatureContainer = styled('div')({
  textAlign: 'center',
  marginBottom: '16px',
  padding: '12px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#1976d2',
    color: '#ffffff',
    '& h4': {
      color: '#ffffff',
    },
  },
});

const TextPrimary = styled(Typography)({
  color: '#1976d2',
  fontFamily: 'Roboto, sans-serif',
});

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6} xl={5}>
            <ImageContainer>
              <Image
                src={scienceImage}
                alt="Science Image"
                loading="lazy"
              />
            </ImageContainer>
          </Grid>
          <Grid item xs={12} lg={6} xl={7}>
            <Grid container justifyContent="center">
              <Grid item xs={12} xl={11}>
                <Typography variant="h2" gutterBottom>
                 
                </Typography>
                <Typography variant="body1" paragraph>
                  On a mission to deliver impactful health foresight through genetic insight. We are a fast-growing company, but we have never lost sight of our core values. We believe in collaboration, innovation, and customer satisfaction. We are always looking for new ways to improve our products and services.
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <FeatureContainer>
                      <Image
                        src={bioImage}
                        alt="Bio Image"
                        loading="lazy"
                        style={{ width: '90px', height: '90px', marginBottom: '8px' }}
                      />
                      <TextPrimary variant="h4" gutterBottom>
                        Bio-Diversity
                      </TextPrimary>
                      <Typography variant="body1" gutterBottom>
                        We are crafting a digital method that subsists life across all mediums.
                      </Typography>
                    </FeatureContainer>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FeatureContainer>
                      <Image
                        src={gen1Image}
                        alt="Gen1 Image"
                        loading="lazy"
                        style={{ width: '100px', height: '90px', marginBottom: '8px' }}
                      />
                      <TextPrimary variant="h4" gutterBottom>
                        Evolution
                      </TextPrimary>
                      <Typography variant="body1" gutterBottom>
                        We believe in innovation by merging primary with elaborate ideas.
                      </Typography>
                    </FeatureContainer>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AboutSectionContainer>
  );
};

export default AboutSection;
