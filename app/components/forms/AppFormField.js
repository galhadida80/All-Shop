import React from 'react';
import AppTextInput from '../AppTextInput';

import { useFormikContext  } from 'formik';
import ErrorMessage from './ErrorMessage';




function AppFormField({name,width,...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched}=useFormikContext();
    return (
        <>
           <AppTextInput 
                        onChangeText={handleChange(name)}
                        onBlur={() => setFieldTouched(name)}
                        width={width}
                        {...otherProps}
               />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>

        </>
    );
}

export default AppFormField;
