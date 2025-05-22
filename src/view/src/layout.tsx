import styles from './layout.module.scss';
import { Outlet } from 'react-router';
import SideNav from './shared/components/SideNav/SideNav';

export default function GeneralLayout() {
  return (
    <div className={styles.main}>
      <SideNav />
      <section>
        <header>
          <h1 className={styles.topTitle}>Mozon</h1>

          <img
            src='/profile-picture.jpg'
            alt='profile picture'
            className={styles.profilePicture}
          />
        </header>

        <Outlet />
      </section>
    </div>
  );
}
