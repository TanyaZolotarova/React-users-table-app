import React from 'react';

export const FormErrors = ({formErrors}) =>
    <div className='formErrors color_text'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <span className="" key={i}>{formErrors[fieldName]}</span>
                )
            } else {
                return '';
            }
        })}
    </div>