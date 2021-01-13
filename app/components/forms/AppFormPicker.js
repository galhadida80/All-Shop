import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";



function AppFormPicker({ items, name,numberOfColumns=1,
    PickerItemComponent, placeholder }) {
        
const { errors, setFieldValue, touched, values } = useFormikContext();

return (
    <> 
        <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        placeholder={placeholder}
        
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
    );
}

export default AppFormPicker;
