import PropTypes from 'prop-types';
import './button.css'

Button.propTypes = {
  text : PropTypes.string,
}

export default function Button({text}){

    return(
        <button >{text}</button>
    )
}