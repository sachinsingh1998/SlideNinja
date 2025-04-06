import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PresentationCard = ({ pid, title, thumbnail, description, numSlides }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/edit/${pid}`);
  }
  
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', aspectRatio: '2 / 1', minWidth: 100 }} onClick = {handleClick}>
      <Box sx={{ flex: 1, position: 'relative', backgroundColor: '#f5f5f5' }}>
        {thumbnail ? (
          <CardMedia component="img" image={thumbnail} alt={title} sx={{ height: '100%', objectFit: 'cover' }} />
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#bbb' }}>
            <Typography variant="body2" color="text.secondary">No Thumbnail</Typography>
          </Box>
        )}
      </Box>
      <CardContent sx={{ padding: 2 }}>
        <Typography variant="h6" component="h3" noWrap>{title}</Typography>
        <Typography variant="body2" color="text.secondary" noWrap>{description || 'No Description'}</Typography>
        <Typography variant="body2" color="text.secondary">{numSlides} slides</Typography>
      </CardContent>
    </Card>
  );
};

export default PresentationCard;
