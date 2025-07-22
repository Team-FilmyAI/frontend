import React from 'react';
import { getFieldVisibility } from '../../../assets/config/formConfig';
import { Award } from 'lucide-react';
import { Upload, FileText, Image } from 'lucide-react';
import './form-styles.css';

interface MediaFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

export const MediaForm: React.FC<MediaFormProps> = ({ data, updateData, userRole }) => {
  const handleChange = (field: string, value: string) => {
    updateData('media', { [field]: value });
  };

  const handleFileUpload = (field: string, files: FileList | null) => {
    if (files && files[0]) {
      // In a real app, you'd upload to a server
      const fileName = files[0].name;
      handleChange(field, fileName);
    }
  };

  const isFieldVisible = (field: string) => getFieldVisibility(userRole, 'MediaForm', field);

  return (
    <div className="form-section">
      <h2 className="form-heading">
        <Award className="award-color" size={20} /> Section 4 - Media Uploads
      </h2>

      <div className="form-grid">
        {isFieldVisible('resume') && (
          <div>
            <label className="app-form-label">Resume/CV (PDF only, 5MB limit)*</label>
            <div className="file-upload-box">
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
              <p className="file-upload-note"></p>
              {data.media?.resume && (
                <p className="file-upload-success">
                  <FileText className="inline-icon" />
                  {data.media.resume}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Designer Portfolio Fields */}
        {userRole === 'designer' && (
          <>
            <div>
              <label className="app-form-label">Portfolio URL *</label>
              <input
                type="url"
                value={data.media?.portfolio || ''}
                onChange={(e) => handleChange('portfolio', e.target.value)}
                className="form-input"
                placeholder="https://yourportfolio.com"
              />
            </div>

            <div>
              <label className="app-form-label">Design Samples *</label>
              <div className="file-upload-box">
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
                <p className="file-upload-note">Images only, multiple files allowed</p>
              </div>
            </div>
          </>
        )}

        {isFieldVisible('headshots') && (
          <div>
            <label className="app-form-label">Headshots (JPG, PNG, JPEG - Max 5 images)*</label>
            <div className="file-upload-box">
              <input
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={(e) => handleFileUpload('headshots', e.target.files)}
                className="hidden"
                id="cover-letter-upload"
              />
              <label htmlFor="cover-letter-upload" className="file-upload-label">
                Upload Headshots
              </label>
              <p className="file-upload-note"></p>
              {data.media?.coverLetter && (
                <p className="file-upload-success">
                  <FileText className="inline-icon" />
                  {data.media.coverLetter}
                </p>
              )}
            </div>
          </div>
        )}

        {isFieldVisible('demoReel') && (
          <div>
            <label className="app-form-label">
              Upload Video (MP4, MOV, AVI, WebM - 100MB limit)
            </label>
            <div className="file-upload-box">
              <input
                type="file"
                multiple
                onChange={(e) => handleFileUpload('additionalDocs', e.target.files)}
                className="hidden"
                id="additional-upload"
              />
              <label htmlFor="additional-upload" className="file-upload-label">
                Upload Demo Reel
              </label>
              <p className="file-upload-note"></p>
            </div>
          </div>
        )}

        {isFieldVisible('url') && (
          <div className="new-row form-grid-half">
            <label className="app-form-label">Provide URL</label>
            <input
              type="url"
              value={data.basicInfo?.linkedin || ''}
              onChange={(e) => handleChange('url', e.target.value)}
              className="form-input"
              placeholder="https://www.youtube.com/watch?v=..."
            />
          </div>
        )}
      </div>
    </div>
  );
};
