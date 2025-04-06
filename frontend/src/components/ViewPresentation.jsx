import { Box, Grid } from "@mui/material";
import PresentationCard from "./PresentationCard";

export default function ViewPresentation( { store, setStore} ) {

  return (
    <>
    {store != null && store.presentation  ? (
      <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {store.presentation.map((indPresentation) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={indPresentation.id}>
            <PresentationCard 
              pid={indPresentation.id}
              title = {indPresentation.title}
              numSlides = {indPresentation.slides.length}
              thumbnail =  {indPresentation.thumbnail}
              description = {indPresentation.description}
            
            />
          </Grid>
        ))}
      </Grid>
    </Box>
      
    
    ) : (
      'No Slides currently'
    )}
    </>
  )
}