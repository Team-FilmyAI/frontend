import React, { useRef, useState } from 'react';
import '../../components/Uploads/Upload.css'; 
import { Upload as UploadIcon } from 'lucide-react';

interface UploadProps {
  onFileSelect: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  
  title?: string;
  
  hint?: string;
  iconPosition?: 'above' | 'inline';
}

const Upload: React.FC<UploadProps> = ({
  onFileSelect,
  accept = 'image/png,image/jpeg',
  multiple = false,
  title = 'Click to upload poster image',
  hint = 'PNG, JPG, JPEG (Max 5MB)',
  iconPosition = 'above',
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const openPicker = () => inputRef.current?.click();

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    onFileSelect(Array.from(files));
  };

  return (
    <div className="upload-wrapper">
      <div
        className={`upload-dropzone ${isDragging ? 'dragging' : ''}`}
        role="button"
        tabIndex={0}
        onClick={openPicker}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openPicker()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
      >
        
        
        {iconPosition === 'inline' ? (
          <div className="upload-inline">
            <UploadIcon className="upload-icon" size={24} strokeWidth={1.6} />
            <span className="upload-title">{title}</span>
          </div>
        ) : (
          <>
            <UploadIcon className="upload-icon" size={36} strokeWidth={1.6} />
            <div className="upload-title">{title}</div>
          </>
        )}

        <div className="upload-hint">{hint}</div>

        
        <input
          ref={inputRef}
          className="upload-input"
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>
    </div>
  );
};

export default Upload;

