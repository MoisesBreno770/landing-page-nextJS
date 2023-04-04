import { ButtonProps } from '../../interfaces';
import Styles from './button.module.scss';

export const Button = ( {title, kind, onClick, type = 'submit'} : ButtonProps) => {
    const getColor = () => {
        if (kind === 'secundary') return Styles.secundary;
        if (kind === 'full') return Styles.full;
        return Styles.primary;
    }
    return (
        <button type={type} className={`${Styles.button} ${getColor()}`}  onClick={onClick}>{title}</button>
    )
}