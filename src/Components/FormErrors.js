import React from 'react';

export const FormErrors = ({ formErrors }) => (
  <div className="formErrors color_text">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <span key={i}>{formErrors[fieldName]}</span>
        );
      }
      return '';
    })}
  </div>
);
