import PropTypes from 'prop-types';
import './button.css'

Button.propTypes = {
  text : PropTypes.string,
  onClick: PropTypes.object,
  submit : PropTypes.string
}

export default function Button({text,onClick,submit}){

    return(
        <button type={submit} onClick={onClick}>{text}</button>
    )
}