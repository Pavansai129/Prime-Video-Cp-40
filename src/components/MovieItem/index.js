import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
// Write your code here

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div>
            <button
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <ReactPlayer url={videoUrl} controls />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
