import styles from './FileDropField.module.scss';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import type { ReactNode } from 'react';
import type { DropzoneOptions } from 'react-dropzone';
import classNames from 'classnames';
import Button from '../ButtonComponent/Button';

export interface FileDropFieldProps {
  label?: ReactNode;
  onDrop: (files: File[]) => void;
  accept?: DropzoneOptions['accept'];
  multiple?: boolean;
}

function FileDropField({
  label,
  onDrop,
  multiple = false,
}: FileDropFieldProps) {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    multiple,
  });

  const rootProps = getRootProps({
    className: styles.dropzone + (isDragActive ? ' ' + styles.active : ''),
  });

  return (
    <div className={styles.fileDropField}>
      {label && <label className={styles.label}>{label}</label>}
      <div {...rootProps}>
        <input
          className={classNames(styles.dropzone, {
            [styles.active]: isDragActive,
          })}
          {...getInputProps()}
        />
        {isDragActive ? (
          <span>Drop the files here ...</span>
        ) : (
          <span>Drag & drop file here, or click to select</span>
        )}
      </div>
      <Button type='button' variant='disabled' disabled={true}>
        Upload
      </Button>
    </div>
  );
}

export default FileDropField;
