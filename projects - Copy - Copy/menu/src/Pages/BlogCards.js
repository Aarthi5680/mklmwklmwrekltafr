import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

const BlogCards = () => {
  // Example blog data (replace with your actual blog data)
  const blogPosts = [
    {
      id: 1,
      title: 'Sample Blog Post 1',
      author: 'John Doe',
      image: 'https://img.freepik.com/free-photo/medium-shot-happy-family-nature_23-2148996570.jpg',
      content:
        'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.',
    },
    {
      id: 2,
      title: 'Sample Blog Post 2',
      author: 'Jane Smith',
      image: 'https://www.shutterstock.com/shutterstock/photos/2172069263/display_1500/stock-photo-bunch-of-cheerful-joyful-cute-little-children-playing-together-and-having-fun-group-portrait-of-2172069263.jpg',
      content:
        'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.',
    },
    {
      id: 3,
      title: 'Sample Blog Post 3',
      author: 'Michael Brown',
      image: 'https://media.istockphoto.com/id/1544263985/photo/adorable-black-girl-with-curly-hair-smiling-while-eating-breakfast-in-a-bright-kitchen.webp?b=1&s=170667a&w=0&k=20&c=nxdPF-Pu8gBtM2HzNen4KcxoA_XXOVvahnWRN3y7ESI=',
      content:
        'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.',
    },
    {
      id: 4,
      title: 'Sample Blog Post 4',
      author: 'Emily Johnson',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s',
      content:
        'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.',
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box mb={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Latest News
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', gap: '16px' }}>
        {blogPosts.map((post) => (
          <Card key={post.id} sx={{ minWidth: 300, maxWidth: 400, flex: '0 0 auto' }}>
            <CardMedia
              component="img"
              image={post.image}
              alt={post.title}
              sx={{ height: 200, objectFit: 'cover' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.author}
              </Typography>
              <Typography variant="body2" mt={2}>
                {post.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default BlogCards;
