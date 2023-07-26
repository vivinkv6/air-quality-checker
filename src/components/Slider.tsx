import Carousel from 'react-bootstrap/Carousel';
import { sliderData } from '../content/slider';

function CarouselFadeExample() {
  return (
    <Carousel fade>
        {sliderData.map((value)=>{
            return(
                <Carousel.Item key={value.id}>
                <img src={value.url} style={{width:'100%',minHeight:'300px'}} alt="" />
               </Carousel.Item>
            )
        })}
     
    </Carousel>
  );
}

export default CarouselFadeExample;