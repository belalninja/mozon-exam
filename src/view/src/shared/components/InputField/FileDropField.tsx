import styles from './FileDropField.module.scss';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import type { ReactNode } from 'react';
import type { DropzoneOptions } from 'react-dropzone';

export interface FileDropFieldProps {
  label?: ReactNode;
  onDrop: (files: File[]) => void;
  accept?: DropzoneOptions['accept'];
  multiple?: boolean;
}

function FileDropField({
  label,
  onDrop,
  accept,
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
    accept,
    multiple,
  });

  const rootProps = getRootProps({
    className: styles.dropzone + (isDragActive ? ' ' + styles.active : ''),
  });

  return (
    <div className={styles.fileDropField}>
      {label && <label className={styles.label}>{label}</label>}
      <div {...rootProps}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <span>Drop the files here ...</span>
        ) : (
          <span>Drag & drop file here, or click to select</span>
        )}
      </div>
    </div>
  );
}

export default FileDropField;
