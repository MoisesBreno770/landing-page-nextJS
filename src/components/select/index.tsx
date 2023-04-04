import { SelectProps } from '@/interfaces';
import Styles from './select.module.scss';

export const Select = ({ placeholder, required, options, onChange, onBlur, name, id, value }: SelectProps) => {

    return (
        <select value={value} name={name} id={id} className={Styles.select} onChange={onChange} onBlur={onBlur} required={required}>
        <option value="">{placeholder}</option>
        {options?.map((option: any, index: any) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
}