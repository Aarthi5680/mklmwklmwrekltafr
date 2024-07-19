import * as React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const itemData = [
  {
    img: 'https://www.advisory.com/content/dam/advisory/en/public/images/woman-at-microscope-in-lab-setting.jpg',
    title: 'DNAs Story',
    description: `Discover your DNA's story with Lifescience gene testing services, guiding you through ancestry, insights, and future planning for your genetic wellness journey.`,
  },
  {
    img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_23/2426541/180509-running-outdoors-al-1053.jpg',
    title: 'LIFE FORECAST',
    description: `Understand your genetic risk for diseases to better plan your health and lifestyle.`,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vlbm5PNG2lowX7RPtNxkj_wP6t-JFgBfYg&s',
    title: 'PERSONALIZED MEDICINE',
    description: `Our expert genetic counselors offer tailored support, helping you understand your genetic test results and make informed choices about your health, heritage, and family planning.`,
  },
  {
    img:'https://media.istockphoto.com/id/1059268644/photo/a-female-doctor-with-a-stethoscope-on-her-neck-is-holding-a-crystal-sparkling-global-map-on.jpg?s=612x612&w=0&k=20&c=o5zU2Q9xtrdDw35JcsfLrOpijWTJlCtKW9xQlcQDnbQ=',
    title: 'HEALTH GUARD',
    description: `Learn how your genes affect medication responses to tailor treatments and reduce side effects.`,
  },
  {
    img:'https://media.istockphoto.com/id/1320800295/photo/parkinson-and-alzheimer-female-senior-elderly-patient-with-physician-doctor-in-hospice-care.jpg?s=612x612&w=0&k=20&c=7MMJzedRTqu-FkEvcD3l-aheLs2oVrLlfyX9XzyubQw=',
    title: 'GENETIC EXPERTISE',
    description: `Get personalized advice from our genetic counselors to understand your test results and make informed genetic decisions.`,
  },
];

const AnimatedBox = styled(Box)`
  transition: transform 0.3s ease-in-out;
  transform: translateY(${(props) => (props.visible ? '0%' : '-100%')});
`;

export default function ImageCard() {
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleClick = (item) => {
    // Toggle the selected item
    setSelectedItem(item === selectedItem ? null : item);
  };

  const handleMouseEnter = (item) => {
    // Show the item description on mouse enter
    setSelectedItem(item);
  };

  const handleMouseLeave = () => {
    // Hide the item description on mouse leave
    setSelectedItem(null);
  };

  return (
    <Card sx={{ maxWidth: 800, margin: 'auto', marginTop: 20 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
         Science
        </Typography>
        <Grid container spacing={2}>
          {itemData.map((item, index) => (
            <Grid item xs={12} sm={index === 4 ? 12 : 6} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  height: 200,
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(item)}
              >
                <img
                  src={item.img}
                  alt={item.title} // Ensure alt tag is properly populated
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {selectedItem === item && (
                  <AnimatedBox
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: getBackgroundColor(item.title), // Function to get background color based on item title
                      color: 'white',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '10px',
                      fontSize: 'medium',
                    }}
                    visible={selectedItem === item}
                  >
                    <Typography variant="h6" sx={{ color: 'blue' }}>{item.title}</Typography> {/* Display the item title with red color */}
                    <Typography variant="body1" sx={{ mt: 1, overflowWrap: 'break-word' }}>
                      {item.description}
                    </Typography>
                  </AnimatedBox>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

// Function to get background color based on item title
function getBackgroundColor(title) {
  switch (title.toLowerCase()) {
    case 'dnas story':
      return '#008080'; // Teal color for DNA's Story
    case 'life forecast':
      return '#FF6347'; // Tomato color for Life Forecast
    case 'personalized medicine':
      return '#6495ED'; // Cornflower Blue color for Personalized Medicine
    case 'health guard':
      return '#8B4513'; // Saddle Brown color for Health Guard
    case 'genetic expertise':
      return '#800080'; // Purple color for Genetic Expertise
    default:
      return 'brown'; // Default color for unknown items
  }
}
