import './inputText.css'
import PropTypes from 'prop-types';

InputText.propTypes = {
      id : PropTypes.string,
    type : PropTypes.string,
    text : PropTypes.string,
    onChange: PropTypes.func,
    placeHolder: PropTypes.func,
    required: PropTypes.bool,
}
export default function InputText({id,type,text,onChange,placeHolder,required}){

    return(
        <div className="single-input">
            <input type={type} className="input" id={id} required={required} onChange={onChange} placeholder={placeHolder}/>
            <label htmlFor={id}>{text}</label>
        </div>
    )
}