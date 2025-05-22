import styles from './PhoneField.module.scss';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import type { ReactNode } from 'react';
import type { Value } from 'react-phone-number-input';

export interface PhoneFieldProps {
  label?: ReactNode;
  value: string;
  onChange: (value: Value) => void;
  placeholder?: string;
}

function PhoneField({
  label,
  value,
  onChange,
  placeholder = '',
}: PhoneFieldProps) {
  return (
    <div className={styles.phoneField}>
      {label && <label className={styles.label}>{label}</label>}
      <PhoneInput
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        defaultCountry='SA'
        international
        countryCallingCodeEditable={false}
      />
    </div>
  );
}

export default PhoneField;
