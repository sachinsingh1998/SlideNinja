import { Box, Select, MenuItem } from '@mui/material';
import {  useState } from 'react';

const FontSelect = ({ slides, setSlides , slideId }) => {

  const [globalFontFamily, setGlobalFontFamily] = useState(slides[slideId].fontFamily);
  
 
  const handleFontChange = (event) => {
    setGlobalFontFamily(event.target.value);
    let newSlides = [...slides];
    //console.log(`Now ${event.target.value} ${globalFontFamily}`);
    newSlides[slideId].fontFamily = event.target.value;
    setSlides(newSlides);
    
  }

  return(
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
      
      <Select
        value={globalFontFamily}
        onChange={handleFontChange}
        size="small"
        sx={{
          fontSize: '0.875rem',
          padding: '4px 8px',
          minWidth: '120px',
        }}
      >
        <MenuItem value="Arial">Arial</MenuItem>
        <MenuItem value="Times New Roman">Times New Roman</MenuItem>
        <MenuItem value="Courier New">Courier New</MenuItem>
        <MenuItem value="cursive">Cursive</MenuItem>
      </Select>
    </Box>  
  
  );

};
export default FontSelect;