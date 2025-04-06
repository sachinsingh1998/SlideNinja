import React from 'react';
import { Box, Typography } from '@mui/material';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import a Prism CSS theme
import 'prismjs/components/prism-c'; 
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';

const IndElement = ({ element, elementId }) => {
  return (
    <Box
      key={elementId}
      className="slide-element"
      sx={{
        position: 'absolute',
        width: `${element.width}%`,  // Relative to parent
        height: `${element.height}%`, // Relative to parent
        top: `${element.y}%`,  // Relative positioning within the parent container
        left: `${element.x}%`,  // Relative positioning within the parent container
        //border: '1px solid lightgrey',
        padding: '8px',
        //boxSizing: 'border-box',
        backgroundColor: '#fff',
        zIndex: elementId + 1, // Adjust zIndex based on the order of elements
        overflow: 'hidden',
        
      }}
    >
      {element.type === 'text' && (
        <Typography
          variant="body1"
          sx={{
            fontSize: `${element.fontSize || 1}em`,  // Font size based on the element
            color: element.textColor || '#000',  // Text color if defined
          }}
        >
          {element.content}
        </Typography>
      )}
      {element.type === 'image' && (
        <img
        src={element.url}
        alt={element.alt || 'Image'}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures the image covers the box dimensions without distortion
        }}
      />
      )}

      {element.type === 'video' && (
        <iframe
        src={`${element.url}${element.autoplay ? '?autoplay=1' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      )}

      {element.type === 'code' && (
        <pre
        className={`language-${element.language}`}
        style={{
          fontFamily: 'inherit', // Keep font-family consistent
          whiteSpace: 'pre-wrap', // Preserve whitespace and wrap lines
        }}
      >
        <code dangerouslySetInnerHTML={{ __html: Prism.highlight(element.code, Prism.languages[element.language], element.language) }} />
      </pre>

      )}

    </Box>
  );
};

export default IndElement;
