import { useRef, useState, type RefObject } from 'react';
import styles from './ListCustomerPage.module.scss';
import { apiHost } from '../shared/api';
import type { Customer } from '../types/prismaTypes';
import Button from '../shared/components/ButtonComponent/Button';
import SearchBar from '../shared/components/SearchBar/SearchBar';
import CustomerTable from '../shared/components/CustomerTable/CustomerTable';
import { Link } from 'react-router';

function ListCustomerPage() {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 0,
      name: 'Belal',
      country: 'Jordan',
      phoneNumber: '+962 700000000',
      companyName: 'Belal',
      taxID: '123456789',
      regisrationID: '123456789',
    },
    {
      id: 0,
      name: 'Ahmad',
      country: 'Egypt',
      phoneNumber: '+962 70000345345',
      companyName: 'Belal',
      taxID: '123456789',
      regisrationID: '123456789',
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSearch() {
    const customerList = await fetch(
      `${apiHost}/customers?search=${inputRef.current?.value}`
    );
    const data = await customerList.json();
    setCustomers(data);
  }

  return (
    <main>
      <div className={styles.topOfPage}>
        <h2>Customers</h2>
        <Link className={styles.navigateToCreatePage} to='/customers/new'>
          <Button>Add New +</Button>
        </Link>
      </div>

      <SearchBar
        inputRef={inputRef as RefObject<HTMLInputElement>}
        onChange={handleSearch}
        placeholder='Search customers...'
      />

      <CustomerTable customers={customers} />
    </main>
  );
}

export default ListCustomerPage;
