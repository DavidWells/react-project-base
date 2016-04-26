import React, {PropTypes} from 'react'
import { container } from './Hero.css'

const Hero = ({activeProduct, changeProduct}) => {
  return (
    <div className={container}>
      <h2>{activeProduct} dude</h2>
      <button onClick={changeProduct}>Set</button>
    </div>
  )
}

Hero.propTypes = {
  activeProduct: PropTypes.string.isRequired,
  changeProduct: PropTypes.func,
}

export default Hero
