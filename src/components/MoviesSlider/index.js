import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'
// Write your code here
const MovieSlider = props => {
  const {each} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {each.map(eachMovie => (
        <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
      ))}
    </Slider>
  )
}

export default MovieSlider
