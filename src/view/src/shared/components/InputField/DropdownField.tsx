import Select from 'react-select';
import { useRef, type ReactNode } from 'react';
import type { SingleValue } from 'react-select';
import styles from './DropdownField.module.scss';
import classNames from 'classnames';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownFieldProps {
  label?: ReactNode;
  value: DropdownOption | null;
  onChange: (option: SingleValue<DropdownOption>) => void;
  options: DropdownOption[];
}

function DropdownField({
  label,
  value,
  onChange,
  options,
}: DropdownFieldProps) {
  const inputRef = useRef(null);

  return (
    <div className={styles.dropdownField}>
      {label && <label className={styles.label}>{label}</label>}
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder=''
        isClearable
        ref={inputRef}
        className={styles.select}
        classNames={{
          input: ({ hasValue }) => classNames({ [styles.hasValue]: hasValue }),
          control: ({ isFocused }) =>
            classNames(styles.dropdownControl, { [styles.focused]: isFocused }),
          menu: () => styles.dropdownMenu,
        }}
      />
    </div>
  );
}

export default DropdownField;
