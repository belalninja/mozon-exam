import { Link } from 'react-router';
import styles from './TopOfPage.module.scss';
import Button from '../ButtonComponent/Button';

type TopOfPageProps = {
  title: string;
  showAddButton?: boolean;
};

export default function TopOfPage({
  title,
  showAddButton = true,
}: TopOfPageProps) {
  return (
    <div className={styles.topOfPage}>
      <h2>{title}</h2>
      {showAddButton && (
        <Link className={styles.navigateToCreatePage} to='/customers/new'>
          <Button>Add New +</Button>
        </Link>
      )}
    </div>
  );
}
