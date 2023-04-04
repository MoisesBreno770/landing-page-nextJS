import Styles from './input.module.scss';

export const Input = ({type, value, placeholder, pattern, required, onBlur, name, id, onChange}: InputProps) => {
    return (
        <input type={type} value={value} id={id} name={name} onChange={onChange} placeholder={placeholder} pattern={pattern} required={required} className={Styles.input} onBlur={onBlur} />
    );
}

const pattern = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$";