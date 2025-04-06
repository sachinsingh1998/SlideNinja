import { Button} from "@mui/material";

const DeleteSlide = ({id, slides, setSlides, setErrorMessage }) => {

  const deleteSlide = () => {
    //alert(`Have to add ${JSON.stringify(slides)}`);
    const newSlides = slides.filter((item, idx) => idx !== id);
    if (newSlides.length === 0){
      setErrorMessage("Delete Presentation instead");
      return;
    }
    setSlides(newSlides);
  }

  return(
    
    <>
      <Button onClick={deleteSlide}>Delete Slide</Button>
    </>
  );
};

export default DeleteSlide;