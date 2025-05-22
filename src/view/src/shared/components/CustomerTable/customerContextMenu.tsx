import classNames from 'classnames';
import styles from './customerContextMenu.module.scss';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

export default function CustomerContextMenu() {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setMenuIsOpen(false));

  return (
    <div ref={menuRef}>
      <img
        src='/dots.svg'
        className={styles.dotsIcon}
        onClick={() => setMenuIsOpen(!isMenuOpen)}
      />
      <div className={styles.menuWrapper}>
        <ul
          className={classNames(styles.menu, { [styles.opened]: isMenuOpen })}
        >
          <li>Edit</li>
          <li>Delete</li>
          <li>View</li>
        </ul>
      </div>
    </div>
  );
}
