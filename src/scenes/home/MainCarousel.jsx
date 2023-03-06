import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { useMediaQuery } from "@mui/material";

// IMPORT ALL IMAGES FROM ASSETS FOLDER
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    const importedImage = r(item);
    acc[item.replace("./", "")] = importedImage;
    return acc;
  }, {});

const imagesImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

console.log(imagesImports);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={true}
      showStatus={false}
      autoPlay={true}
      emulateTouch={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "black",
            margin: "0px 10px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "black",
            margin: "0px 10px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(imagesImports).map((texture, index) => (
        <div key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            className="w-full h-[700px] object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
