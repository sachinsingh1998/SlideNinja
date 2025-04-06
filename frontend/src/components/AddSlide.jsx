import { Button} from "@mui/material";

const AddSlide = ({id, slides, setSlides }) => {

  const createSlide = () => {
    //alert(`Have to add ${JSON.stringify(slides)}`);
    let newSlides = [...slides];
    newSlides.push(
      {
        
        elements:[],
        fontFamily:"cursive",
        background: {
        
          type: "solid", // "solid", "gradient", or "image"
          solid: {
            color: "#800000",
          },
          gradient: {
            startColor: "#ffffff",
            endColor: "#000000",
            direction: "to right",
          },
          image: {
            url: null
          }
        }
      }
    )
    setSlides(newSlides);
  }

  return(
    
    <>
      <Button onClick={createSlide}>Add Slide</Button>
    </>
  );
};

export default AddSlide;