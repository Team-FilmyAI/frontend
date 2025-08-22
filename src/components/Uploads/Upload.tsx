import React, { useRef, useState } from 'react';
import '../../components/Uploads/Upload.css'; // adjust if your path differs
import { Upload as UploadIcon } from 'lucide-react';

interface UploadProps {
  onFileSelect: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  /** Main line inside the dropzone */
  title?: string;
  /** Small hint text under the title */
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
        {/* Upload icon */}
        
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

        {/* Hidden native input */}
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

//. ***The following section below which is marked as ignore is to be used when calling upload button you can edit as u see fit ***

// import Upload from '../../components/Uploads/Upload'; use this in import section

// inside main const add the below line

// const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

//inside the return add wherever u need it

{/* Upload Poster Image Section */} 
              // <div className="card1 upload-card">
              //   <h3 className="section-title">
              //     Upload Poster Image
              //   </h3>
              //   <Upload
              //     onFileSelect={(files) => {
              //       setUploadedFiles(files);
              //       console.log('Uploaded files:', files);
              //     }}
              //     accept="image/png,image/jpeg"
              //     multiple={false}
              //     title="Click to upload poster image"

              //the line is used when u need the upload button on the same line as Upload Title
              // the default is it comes above Upload Title

              //     // iconPosition="inline" 
              //   />

              // </div>