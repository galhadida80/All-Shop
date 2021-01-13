import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import color from "../config/color";

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
    
    } from "../components/forms";
import Screen from "../components/Screen";
import CatogeryPickerItem from "../components/CatogeryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images : Yup.array().min(1,"Please select at least one images "), //require min 1 image in filed
});

const categories = [
    { label: "Furniture", value: 1 ,backgroundColor: 'red', icon: 'apps'},
    { label: "Clothing", value: 2 ,backgroundColor: 'green', icon: 'email' },
    { label: "Cameras", value: 3 ,backgroundColor: 'blue', icon: 'lock'},
    ];

    function ListingEditScreen() {
        const location = useLocation();
        
      
        return (
        <Screen>
        <AppForm style={styles.container}
        
        initialValues={{
            title: "",
            price: "",
            description: "",
            category: "",
            images: [] ,
            }}
            onSubmit={(values) => console.log(location)}
            validationSchema={validationSchema}
            >
            <FormImagePicker name="images"/>
            <AppFormField maxLength={255} name="title" placeholder="Title"/>

            <AppFormField
                keyboardType="numeric" maxLength={8}
                name="price" placeholder="Price"
                width={120}
                />

            <AppFormPicker
                items={categories}
               numberOfColumns={3}
                PickerItemComponent={CatogeryPickerItem}
                name="category"
                placeholder="Category"
                />

            <AppFormField maxLength={255} multiline
                name="description" 
                placeholder="Description"
                />
                <SubmitButton title="Post" />
                </AppForm>
                </Screen>
        );
    }

    export default ListingEditScreen;

    const styles = StyleSheet.create({
        container: {
            backgroundColor: color.light,
            borderRadius: 25,
            flexDirection: "row",
            width: "100%",
            padding: 15,
            marginVertical: 10
            }
        })
         