import classNames from 'classnames';
import styles from './Button.module.scss';

type ButtonProps = {
  children?: React.ReactNode | string;
  onClick?: () => void;
  className?: string;
  type?: HTMLButtonElement['type'];
  variant?: 'primary' | 'secondary' | 'disabled';
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  className,
  type,
  variant = 'primary',
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classNames(styles.button, styles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
