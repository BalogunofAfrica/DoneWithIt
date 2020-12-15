import React from 'react';
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

function AppFormField({ name, width, ...otherProps }) {
    const { setFieldTouched, errors, touched, handleChange } = useFormikContext();
    return (
        <>
            <AppTextInput 
                onBlur={()=> setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...otherProps}
            />  
             <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}
 
export default AppFormField;