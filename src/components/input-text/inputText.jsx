import './inputText.css'
import PropTypes from 'prop-types';

InputText.propTypes = {
      id : PropTypes.string,
    type : PropTypes.string,
    text : PropTypes.string,
    onChange: PropTypes.func,
}
export default function InputText({id,type,text,onChange}){

    return(
        <div className="single-input">
            <input type={type} className="input" id={id} required onChange={onChange}/>
            <label htmlFor={id}>{text}</label>
        </div>
    )
}