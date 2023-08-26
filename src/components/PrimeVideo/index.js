import MoviesSlider from '../MoviesSlider'
import './index.css'
// Write your code here
const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  return (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="cover-pic"
      />
      <div className="sliders-container">
        <h1>Action Movies</h1>
        <MoviesSlider each={actionMovies} />

        <h1>Comedy Movies</h1>
        <MoviesSlider each={comedyMovies} />
      </div>
    </>
  )
}

export default PrimeVideo
