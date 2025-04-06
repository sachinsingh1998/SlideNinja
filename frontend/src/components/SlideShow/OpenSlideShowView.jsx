import { Button } from "@mui/material";

const OpenSlideShowView = () => {

  
  const openSlideShow = () => {
    
    //alert('aaya');
    const OpenSlidesString = localStorage.getItem('curSlides');
    //alert(OpenSlidesString);
    const curOpenSlides = JSON.parse(OpenSlidesString);
    //alert(curOpenSlides);
    //const curOpenSlides = JSON.parse(OpenSlidesString);
    //alert(`${JSON.stringify(curOpenSlides)} ${localStorage.getItem('curOpenSlides')[0]}`);
    //alert('lawde');
    let index = 0;
    const previewTab = window.open(`/slideshow-preview?slide=${index}`, '_blank');
    previewTab.focus(); // Focus the new tab
  }

  return(
    <>
      <Button onClick={openSlideShow}>Slide Show</Button>
    </>
  );
};

export default OpenSlideShowView