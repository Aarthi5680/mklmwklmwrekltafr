import React, { useRef } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../App.css'; // Import CSS for styling

const FourCardsInLine = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const flipFlop = () => {
    if (sliderRef.current) {
      const scrollWidth = sliderRef.current.scrollWidth;
      const clientWidth = sliderRef.current.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      
      if (sliderRef.current.scrollLeft === 0) {
        sliderRef.current.scrollLeft += maxScrollLeft;
      } else {
        sliderRef.current.scrollLeft -= clientWidth;
      }
    }
  };

  return (
    <div className="cardContainer">
      <Grid container spacing={3} ref={sliderRef}>
        <Grid item xs={12} sm={6} md={3} className="cardItem">
          <Card className="card">
            <CardMedia
              component="img"
              height="140"
              image="https://www.wikihow.com/images/0/0d/Which_friend_are_you.png"  // Replace with your image URL
              alt="Card 1 Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                DUISAUTEM VELEU
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="cardItem">
          <Card className="card">
            <CardMedia
              component="img"
              height="140"
              image="https://assets.mixkit.co/videos/4773/4773-thumb-360-0.jpg"  // Replace with your image URL
              alt="Card 2 Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                ACCUMSANET
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="cardItem">
          <Card className="card">
            <CardMedia
              component="img"
              height="140"
              image="https://media.istockphoto.com/id/1390886692/photo/homecare-visit-with-a-senior-gentleman.jpg?s=612x612&w=0&k=20&c=Nczw0lwNa2-j33GZgVPMrMl7jmY9XyyuFeBXk_nxj6k="  // Replace with your image URL
              alt="Card 3 Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                SOBES SONES
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="cardItem">
          <Card className="card">
            <CardMedia
              component="img"
              height="140"
              image="https://www.health.com/thmb/FoGAoebC5kRDBkECH9Tel8sWDnw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JunkFood-a6c8e83e73234364952384b8ba49e783.jpg"  // Replace with your image URL
              alt="Card 4 Image"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                QUIS NOSTRUD
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div className="sliderControls">
        {/* Add slider control elements here if needed */}
      </div>
    </div>
  );
};

export default FourCardsInLine;
