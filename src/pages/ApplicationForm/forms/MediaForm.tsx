import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { getFieldVisibility } from '../../../assets/config/formConfig';
import { Award, FileText } from 'lucide-react';
import './form-styles.css';

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
            <label className="app-form-label">Resume/CV (PDF only, 5MB limit)*</label>
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

        {userRole === 'designer' && (
          <>
            <div>
              <label className="app-form-label">Portfolio URL *</label>
              <input
                type="url"
                value={data.media?.portfolio || ''}
                onChange={(e) => handleChange('portfolio', e.target.value)}
                className={`form-input ${errors.portfolio ? 'input-error' : ''}`}
                placeholder="https://yourportfolio.com"
              />
              {errors.portfolio && <p className="error-text">{errors.portfolio}</p>}
            </div>

            <div>
              <label className="app-form-label">Design Samples *</label>
              <div className={`file-upload-box ${errors.designSamples ? 'input-error' : ''}`}>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleFileUpload('designSamples', e.target.files)}
                  className="hidden"
                  id="design-upload"
                />
                <label htmlFor="design-upload" className="file-upload-label">
                  Upload design samples
                </label>
                {errors.designSamples && <p className="error-text">{errors.designSamples}</p>}
              </div>
            </div>
          </>
        )}

        {isFieldVisible('headshots') && (
          <div>
            <label className="app-form-label">Headshots (JPG, PNG, JPEG - Max 5 images)*</label>
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
            <label className="app-form-label">
              Upload Video (MP4, MOV, AVI, WebM - 100MB limit)*
            </label>
            <div className={`file-upload-box ${errors.demoReel ? 'input-error' : ''}`}>
              <input
                type="file"
                multiple
                onChange={(e) => handleFileUpload('demoReel', e.target.files)}
                className="hidden"
                id="demoReel-upload"
              />
              <label htmlFor="demoReel-upload" className="file-upload-label">
                Upload Demo Reel
              </label>
              {errors.demoReel && <p className="error-text">{errors.demoReel}</p>}
            </div>
          </div>
        )}

        {isFieldVisible('url') && (
          <div className="new-row form-grid-half">
            <label className="app-form-label">Provide URL*</label>
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
