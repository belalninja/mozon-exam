import cx from 'classnames';
import styles from './SideNav.module.scss';
import { useState } from 'react';

export default function SideNav() {
  const [isNavOpen, setNavIsOpen] = useState(true);

  return (
    <aside className={cx(styles.nav, { [styles.navClosed]: !isNavOpen })}>
      <img
        src='/arrow.svg'
        className={cx(styles.arrowNav, {
          [styles.arrowNavClosed]: !isNavOpen,
        })}
        onClick={() => setNavIsOpen(!isNavOpen)}
      />
      <nav>
        <li className={styles.active}>
          <img src='/cart-icon.svg' />
          <p>Customers</p>
        </li>
      </nav>
    </aside>
  );
}
