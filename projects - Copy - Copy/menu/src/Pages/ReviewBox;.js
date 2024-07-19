import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Rating, Avatar } from '@mui/material';

const ReviewBox = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submittedReviews, setSubmittedReviews] = useState([]);

  // Example user images (replace with actual data as needed)
  const userImages = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/women/3.jpg',
    'https://randomuser.me/api/portraits/men/4.jpg',
  ];

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Create a new review object
    const newReview = {
      id: Date.now(), // Use timestamp as a unique ID (for simplicity)
      rating: rating,
      comment: comment,
      // Add a user image randomly (example)
      userImage: userImages[Math.floor(Math.random() * userImages.length)],
    };

    // Update the list of submitted reviews
    setSubmittedReviews([...submittedReviews, newReview]);

    // Optionally, you can reset state after submission
    setRating(0);
    setComment('');
  };

  const handleDeleteReview = (id) => {
    const updatedReviews = submittedReviews.filter((review) => review.id !== id);
    setSubmittedReviews(updatedReviews);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2, border: '1px solid #ccc', borderRadius: 8 }}>
      <Typography variant="h6" gutterBottom>
        Leave a Review
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Rating
          name="rating"
          value={rating}
          onChange={handleRatingChange}
          size="large"
        />
        <Typography variant="subtitle1" ml={2}>
          {rating !== null && `${rating}`}
        </Typography>
      </Box>
      <TextField
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        placeholder="Write your comment..."
        value={comment}
        onChange={handleCommentChange}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>

      {/* Display submitted reviews */}
      <Box mt={3}>
        <Typography variant="h6" gutterBottom>
          Submitted Reviews
        </Typography>
        {submittedReviews.map((review) => (
          <Box key={review.id} sx={{ bgcolor: '#f0f0f0', borderRadius: 8, p: 2, mb: 2, border: '1px solid #ccc', display: 'flex', alignItems: 'flex-start' }}>
            <Avatar src={review.userImage} sx={{ width: 48, height: 48, marginRight: 2 }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1" gutterBottom>
                Rating: {review.rating}
              </Typography>
              <Typography variant="body1">
                {review.comment}
              </Typography>
              <Button variant="outlined" color="secondary" onClick={() => handleDeleteReview(review.id)} sx={{ mt: 1 }}>
                Delete
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewBox;
