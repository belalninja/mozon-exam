import { useEffect, type RefObject } from 'react';

export default function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }
      callback();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('click', listener);
    };
  }, [ref, callback]);
}
