import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) =>  {

  const goToYouTube = () => {
    window.open("https://www.youtube.com/@" + props.youtube, "_blank")
  }

  const goToTwitter = () => {
    window.open("https://www.twitter.com/" + props.twitter, "_blank")
  }

  const goToInstagram = () => {
    window.open("https://www.instagram.com/" + props.instagram, "_blank")
  }

  return (
      
    <div className="Card" style={{ backgroundImage: `url(${props.image})`}}>

      <article>

        <div className="card-header-name">
          <h3>{props.name}</h3>

          {props.youtube !== null ? (
            <span className="fa-brands fa-youtube" onClick={goToYouTube}></span>
          ) : "" }

          {props.twitter !== null ? (
            <span className="fa-brands fa-twitter" onClick={goToTwitter}></span>
          ) : "" }

          {props.instagram !== null ? (
            <span className="fa-brands fa-instagram" onClick={goToInstagram}></span>
          ) : "" }
        </div>

        <div className="card-header-edit">
          <Link to={'/' + props.id}><i className="fa-solid fa-circle-info"></i></Link>
          <Link to={'/edit/' + props.id}><i className="fa-solid fa-pen"></i></Link>
        </div>

        <div className="card-description">
          <p>{props.description}</p>
        </div>

        
        
      </article>
 
    </div>

  )
}

export default Card