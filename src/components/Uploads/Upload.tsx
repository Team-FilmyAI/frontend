// shared/ui/Upload.tsx
import React from 'react';
import '../Upload/Upload.css';

interface UploadProps {
  onFileSelect: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  label?: string;
}

const Upload: React.FC<UploadProps> = ({
  onFileSelect,
  accept = '*',
  multiple = false,
  label = 'Upload File',
}) => {
  return (
    <div className="upload-wrapper">
      <label className="upload-label">
        {label}
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) =>
            e.target.files && onFileSelect(Array.from(e.target.files))
          }
        />
      </label>
    </div>
  );
};

export default Upload;
