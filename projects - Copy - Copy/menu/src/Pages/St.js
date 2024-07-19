import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const statsData = [
  { value: '2.2 Mn', description: 'Genomes Processed', bgColor: '#FF6347' },
  { value: '2017', description: 'Year Founded', bgColor: '#4682B4' },
  { value: '0', description: 'Data Breaches', bgColor: '#2E8B57' },
  { value: '25 Mn', description: 'Data Points Analyzed', bgColor: '#FFD700' },
];

const St = () => {
  return (
    <Box sx={{ bgcolor: "#1E3D7F", py: 8, color: "white",}}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          What Makes Us Special?
        </Typography>
        <Typography variant="body1" textAlign="center" mb={4}>
          Lifescience portal will ensure to cover the causes, remedies associated with the challenges of fertility & sexual well-being of both men and women based on genetic tests thereby enabling confidence, clarity, and substance required for performance and results towards a harmonious life.
        </Typography>
        <Grid container spacing={4} justifyContent="flex-start">
          {statsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card style={{ backgroundColor: stat.bgColor, height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" component="div" align="center">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {stat.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default St;
