import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { getFieldVisibility } from '../../../assets/config/formConfig';
import { Award } from 'lucide-react';
import './form-styles.css';

import NumberInput from '../../../components/NumberInput/NumberInput';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { areaCodeDropdown } from '../../../assets/data/constants';
import Radio from '../../../components/Radio/Radio';
import { yesOrNo } from '../../../assets/data/constants';
import EmailInput from '../../../components/EmailInput/EmailInput';
import Label from '../../../components/Label/Label';
import TextInput from '../../../components/TextInput/TextInput';

interface BasicInfoFormProps {
  data: any;
  updateData: (section: string, data: Record<string, any>) => void;
  userRole: string;
}

const countryStateCityData = {
  USA: {
    California: ['Los Angeles', 'San Francisco'],
    Texas: ['Houston', 'Dallas'],
  },
  India: {
    Maharashtra: ['Mumbai', 'Pune'],
    Delhi: ['New Delhi'],
  },
};

export const BasicInfoForm = forwardRef<unknown, BasicInfoFormProps>(
  ({ data, updateData, userRole }, ref) => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [selectedCountryCode, setSelectedCountryCode] = useState(
      data.basicInfo?.countryCode || ''
    );
    const [states, setStates] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');

    useEffect(() => {
      const country = data.basicInfo?.country || '';
      const state = data.basicInfo?.state || '';
      setSelectedCountry(country);
      setSelectedState(state);
      setStates(Object.keys(countryStateCityData[country] || {}));
      setCities(countryStateCityData[country]?.[state] || []);
    }, [data.basicInfo]);

    const isFieldVisible = (field: string) => getFieldVisibility(userRole, 'BasicInfoForm', field);

    const validateForm = () => {
      const newErrors: Record<string, string> = {};
      const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'country',
        'state',
        'city',
        'countryCode',
        'phone',
      ];

      requiredFields.forEach((field) => {
        if (!isFieldVisible(field)) return;

        if (field === 'phone') {
          const val = data.basicInfo?.phone || '';
          const countryCodeVal = data.basicInfo?.countryCode || '';
          if (!countryCodeVal) newErrors.countryCode = 'Please select a country code';
          else if (!val) newErrors.phone = 'Enter a 10-digit number';
          else if (!/^\d{10}$/.test(val)) newErrors.phone = 'Enter a 10-digit number';
        } else if (field === 'firstName' || field === 'lastName') {
          const val = data.basicInfo?.[field] || '';
          if (val.length === 0) {
            newErrors[field] = 'Field cannot be blank';
          } else if (val.length > 50) {
            newErrors[field] = 'Must be 50 characters or fewer';
          }
        } else {
          const val = data.basicInfo?.[field];
          if (!val) newErrors[field] = 'Field cannot be blank';
        }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    useImperativeHandle(ref, () => ({
      validateForm,
    }));

    const handleChange = (field: string, value: string) => {
      updateData('basicInfo', { [field]: value });
      // Clear error if any
      setErrors((prev) => {
        if (prev[field]) {
          const copy = { ...prev };
          delete copy[field];
          return copy;
        }
        return prev;
      });

      if (field === 'countryCode') {
        setSelectedCountryCode(value);
      }

      // Handle cascading select resets
      if (field === 'country') {
        setSelectedCountry(value);
        const newStates = Object.keys(countryStateCityData[value] || {});
        setStates(newStates);
        setCities([]);
        updateData('basicInfo', { state: '', city: '' });
        setSelectedState('');
      }
      if (field === 'state') {
        setSelectedState(value);
        const newCities = countryStateCityData[selectedCountry]?.[value] || [];
        setCities(newCities);
        updateData('basicInfo', { city: '' });
      }
    };

    return (
      <div className="form-section">
        <h2 className="form-heading">
          <Award className="award-color" size={20} /> Section 1 - Basic Profile Information
        </h2>

        <div className="form-grid">
          {isFieldVisible('firstName') && (
            <div>
              <Label
                text="First Name*"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <TextInput
                label=""
                placeholder="Enter your first name"
                icon={undefined}
                value={data.basicInfo?.firstName || ''}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className={`form-input ${errors.firstName ? 'input-error' : ''}`}
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>
          )}

          {isFieldVisible('lastName') && (
            <div>
              <Label
                text="Last Name*"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <TextInput
                label=""
                placeholder="Enter your last name"
                icon={undefined}
                value={data.basicInfo?.lastName || ''}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className={`form-input ${errors.lastName ? 'input-error' : ''}`}
              />

              {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>
          )}

          {isFieldVisible('email') && (
            <div>
              <Label
                text="Email Address*"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <EmailInput
                type="email"
                value={data.basicInfo?.email || ''}
                onChange={(val) => handleChange('email', val)}
                placeholder="Enter Email Address"
                customClassName={`form-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
          )}

          {isFieldVisible('phone') && (
            <div>
              <Label
                text="Phone Number*"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <div className="form-grid-2 form-small-input">
                <Dropdown
                  options={areaCodeDropdown.options}
                  value={
                    areaCodeDropdown.options.find((opt) => opt.value === selectedCountryCode) ||
                    null
                  }
                  onChange={(val) => handleChange('countryCode', val?.value || '')}
                  isClearable={false}
                  styles={areaCodeDropdown.styles}
                />

                <NumberInput
                  value={data.basicInfo?.phone || ''}
                  onChange={(val) => handleChange('phone', val)}
                  placeholder="e.g. 1234567890"
                  maxLength={10}
                  className={`form-input ${errors.phone ? 'input-error' : ''}`}
                />
              </div>
              {errors.countryCode && <span className="error-text">{errors.countryCode}</span>}
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
          )}

          <div className="form-grid-3 form-grid-full">
            {isFieldVisible('country') && (
              <div>
                <Label
                  text="Country*"
                  className="app-form-label"
                  fontSize="0.875rem"
                  color="var(--form-text)"
                />
                <select
                  value={selectedCountry}
                  onChange={(e) => handleChange('country', e.target.value)}
                  className={`form-input ${errors.country ? 'input-error' : ''}`}
                >
                  <option value="">Select Country</option>
                  {Object.keys(countryStateCityData).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && <span className="error-text">{errors.country}</span>}
              </div>
            )}

            {isFieldVisible('state') && (
              <div>
                <Label
                  text="State*"
                  className="app-form-label"
                  fontSize="0.875rem"
                  color="var(--form-text)"
                />
                <select
                  value={selectedState}
                  onChange={(e) => handleChange('state', e.target.value)}
                  className={`form-input ${errors.state ? 'input-error' : ''}`}
                  disabled={!states.length}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state && <span className="error-text">{errors.state}</span>}
              </div>
            )}

            {isFieldVisible('city') && (
              <div>
                <Label
                  text="City*"
                  className="app-form-label"
                  fontSize="0.875rem"
                  color="var(--form-text)"
                />
                <select
                  value={data.basicInfo?.city || ''}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className={`form-input ${errors.city ? 'input-error' : ''}`}
                  disabled={!cities.length}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {errors.city && <span className="error-text">{errors.city}</span>}
              </div>
            )}
          </div>

          {isFieldVisible('locationAvailability') && (
            <div>
              <Label
                text="Current Location Availability"
                className="app-form-label"
                fontSize="0.875rem"
                color="var(--form-text)"
              />
              <Radio
                radioInfo={yesOrNo}
                value={data.basicInfo?.locationAvailability}
                onChange={(val) => handleChange('locationAvailability', val)}
                className="custom-radio-style"
              />
              {errors.locationAvailability && (
                <span className="error-text">{errors.locationAvailability}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);
