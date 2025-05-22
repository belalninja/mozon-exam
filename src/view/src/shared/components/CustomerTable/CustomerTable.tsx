import styles from './CustomerTable.module.scss';
import type { Customer } from '../../../types/prismaTypes';
import CustomerContextMenu from './customerContextMenu';

interface CustomerTableProps {
  customers: Customer[];
}

export default function CustomerTable({ customers }: CustomerTableProps) {
  return (
    <table className={styles.customerTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {!customers.length && (
          <tr>
            <td colSpan={3}>No customers found</td>
          </tr>
        )}

        {!!customers.length &&
          customers.map((customer) => (
            <tr key={customer.id} className={styles.customerRow}>
              <td className={styles.customerName}>{customer.name}</td>
              <td>{customer.country}</td>
              <td>{customer.phoneNumber}</td>
              <CustomerContextMenu />
            </tr>
          ))}
      </tbody>
    </table>
  );
}
