import styles from './DropdownField.module.scss';
import Select from 'react-select';
import type { ReactNode } from 'react';
import type { SingleValue } from 'react-select';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownFieldProps {
  label?: ReactNode;
  value: DropdownOption | null;
  onChange: (option: SingleValue<DropdownOption>) => void;
  options: DropdownOption[];
  placeholder?: string;
}

function DropdownField({
  label,
  value,
  onChange,
  options,
  placeholder = '',
}: DropdownFieldProps) {
  return (
    <div className={styles.dropdownField}>
      {label && <label className={styles.label}>{label}</label>}
      <Select
        className={styles.select}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isClearable
      />
    </div>
  );
}

export default DropdownField;
