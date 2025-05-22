import styles from './SearchBar.module.scss';
import type { ChangeEvent, RefObject } from 'react';

type SearchBarProps = {
  inputRef: RefObject<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function SearchBar({
  inputRef,
  onChange,
  placeholder,
}: SearchBarProps) {
  return (
    <div className={styles.searchBarContainer}>
      <img src='/Search.svg' alt='search' className={styles.searchIcon} />
      <input
        ref={inputRef}
        type='text'
        className={styles.searchInput}
        placeholder={placeholder || 'Search'}
        onChange={onChange}
      />
    </div>
  );
}
