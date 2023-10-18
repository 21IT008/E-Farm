import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import gadgetSale from '../../../assets/images/Banners/bg_6.jpg';
import kitchenSale from '../../../assets/images/Banners/bg_5.jpg';
import poco from '../../../assets/images/Banners/bg_4.jpg';
import realme from '../../../assets/images/Banners/bg_3.jpg';
import fashionSale from '../../../assets/images/Banners/bg_2.jpg';
import oppo from '../../../assets/images/Banners/bg_1.jpg';

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  )
}

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}

const Banner = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const banners = [gadgetSale, kitchenSale, poco, fashionSale, realme, oppo];

  return (
    <>
      <section className=" banner_1 w-full rounded-sm shadow relative overflow-hidden">
      
        <Slider {...settings}>
          {banners.map((el, i) => (
            <img draggable="false" className="banner_2 w-full object-cover" src={el} alt="banner" key={i} />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
