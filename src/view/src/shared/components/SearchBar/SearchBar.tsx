import type { Customer } from '../../../types/prismaTypes';
import { apiHost } from '../../apiHost';
import styles from './SearchBar.module.scss';
import { useRef } from 'react';

export default function SearchBar({
  setCustomers,
}: {
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSearch() {
    const customerList = await fetch(
      `${apiHost}/customers?search=${inputRef.current?.value}`
    );
    const data = await customerList.json();
    setCustomers(data);
  }

  return (
    <div className={styles.searchBarContainer}>
      <img src='/Search.svg' alt='search' className={styles.searchIcon} />
      <input
        ref={inputRef}
        type='text'
        className={styles.searchInput}
        placeholder='Search'
        onChange={handleSearch}
      />
    </div>
  );
}
