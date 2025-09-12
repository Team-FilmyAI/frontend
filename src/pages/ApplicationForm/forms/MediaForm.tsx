import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { getFieldVisibility } from '../../../assets/config/formConfig';
import { Award, FileText } from 'lucide-react';
import './form-styles.css';
import Label from '../../../components/Label/Label';

interface MediaFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const MediaForm = forwardRef(({ data, updateData, userRole }: MediaFormProps, ref) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    updateData('media', { [field]: value });
  };

  const handleFileUpload = (field: string, files: FileList | null) => {
    if (files && files[0]) {
      const fileName = files[0].name;
      handleChange(field, fileName);
    }
  };

  const isFieldVisible = (field: string) => getFieldVisibility(userRole, 'MediaForm', field);

  useImperativeHandle(ref, () => ({
    validateForm: () => {
      const newErrors: Record<string, string> = {};
      const requiredFields = [
        'resume',
        'portfolio',
        'designSamples',
        'headshots',
        'demoReel',
        'url',
      ];

      requiredFields.forEach((field) => {
        if (isFieldVisible(field)) {
          const val = data.media?.[field];
          if (!val || (Array.isArray(val) && val.length === 0)) {
            newErrors[field] = 'Field cannot be blank';
          }
        }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
  }));

  return (
    <div className="form-section">
      <h2 className="form-heading">
        <Award className="award-color" size={20} /> Section 4 - Media Uploads
      </h2>

      <div className="form-grid">
        {isFieldVisible('resume') && (
          <div>
            <Label
              text="Resume/CV (PDF only, 5MB limit)*"
              className="app-form-label"
              fontSize="0.875rem"
              color="var(--form-text)"
            />
            <div className={`file-upload-box ${errors.resume ? 'input-error' : ''}`}>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileUpload('resume', e.target.files)}
                className="hidden"
                id="resume-upload"
              />
              <label htmlFor="resume-upload" className="file-upload-label">
                Click to upload resume
              </label>
              {errors.resume && <p className="error-text">{errors.resume}</p>}
              {data.media?.resume && (
                <p className="file-upload-success">
                  <FileText className="inline-icon" />
                  {data.media.resume}
                </p>
              )}
            </div>
          </div>
        )}

        {isFieldVisible('headshots') && (
          <div>
            <Label
              text="Headshots (JPG, PNG, JPEG - Max 5 images)*"
              className="app-form-label"
              fontSize="0.875rem"
              color="var(--form-text)"
            />
            <div className={`file-upload-box ${errors.headshots ? 'input-error' : ''}`}>
              <input
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={(e) => handleFileUpload('headshots', e.target.files)}
                className="hidden"
                id="headshots-upload"
              />
              <label htmlFor="headshots-upload" className="file-upload-label">
                Upload Headshots
              </label>
              {errors.headshots && <p className="error-text">{errors.headshots}</p>}
              {data.media?.headshots && (
                <p className="file-upload-success">
                  <FileText className="inline-icon" />
                  {data.media.headshots}
                </p>
              )}
            </div>
          </div>
        )}

        {isFieldVisible('demoReel') && (
          <div>
            <Label
              text="Upload Video (MP4, MOV, AVI, WebM - 100MB limit)*"
              className="app-form-label"
              fontSize="0.875rem"
              color="var(--form-text)"
            />
            <div className={`file-upload-box ${errors.demoReel ? 'input-error' : ''}`}>
              <input
                type="file"
                multiple
                accept=".mp4, .mov, .avi, .webm"
                onChange={(e) => handleFileUpload('demoReel', e.target.files)}
                className="hidden"
                id="demoReel-upload"
              />
              <label htmlFor="demoReel-upload" className="file-upload-label">
                Upload Demo Reel
              </label>
              {errors.demoReel && <p className="error-text">{errors.demoReel}</p>}
              {data.media?.demoReel && (
                <p className="file-upload-success">
                  <FileText className="inline-icon" />
                  {data.media.demoReel}
                </p>
              )}
            </div>
          </div>
        )}

        {isFieldVisible('url') && (
          <div className="new-row form-grid-half">
            <Label
              text="Provide URL*"
              className="app-form-label"
              fontSize="0.875rem"
              color="var(--form-text)"
            />
            <input
              type="url"
              value={data.media?.url || ''}
              onChange={(e) => handleChange('url', e.target.value)}
              className={`form-input ${errors.url ? 'input-error' : ''}`}
              placeholder="https://www.youtube.com/watch?v=..."
            />
            {errors.url && <p className="error-text">{errors.url}</p>}
          </div>
        )}
      </div>
    </div>
  );
});
