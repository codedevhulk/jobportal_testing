import Slider from 'react-slick';


const images = [
    'https://fastly.picsum.photos/id/315/800/400.jpg?hmac=dhvjLE5YSP02iaAMqN1tfJP7JqBTRJyYiEGlUsUlLWg',
    'https://fastly.picsum.photos/id/732/800/401.jpg?hmac=l7ymtTG5k0a8xl1T6YIp6cTzUZy-U5ZgRzp-ohvO9P4',
    'https://picsum.photos/800/402',
    'https://picsum.photos/800/403',
    'https://picsum.photos/800/404'
  ];
  const SliderCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <Slider {...settings}>
        {images.map(image => (
          <div key={image}>
            <img src={image} alt="carousel-item" />
          </div>
        ))}
      </Slider>
    );
  };
    

export default SliderCarousel;