import React, { useState } from "react";
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
import UploadScreen from "./UploadScreen";
import { pushPost } from "../components/Firebase/firebase";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one images "), //require min 1 image in filed
});

const categories = [
  { label: "Furniture", value: 1, icon: "sofa", color: "#2bcbba" },
  { label: "Clothing", value: 2, icon: "shoe-heel", color: "#FF4081" },
  {
    label: "Books",
    value: 3,
    icon: "book-open-page-variant",
    color: "#fc5c65",
  },
  { label: "Electronics", value: 4, icon: "monitor-speaker", color: "#fed330" },
  { label: "Home & Kitchen", value: 5, icon: "home-city", color: "#45aaf2" },
  { label: "Decorative", value: 6, icon: "format-paint", color: "#26de81" },
  { label: "Cars", value: 7, icon: "car-sports", color: "#4b7bec" },
  { label: "Sports", value: 8, icon: "soccer", color: "#fd9644" },
  { label: "Other", value: 9, icon: "blur", color: "#7f8c8d" },
];

function ListingEditScreen() {
  const location = useLocation();

  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const gal = await pushPost({ ...listing, location });
    if (!gal) {
      setUploadVisible(false);
      return alert("Could not save the listing.");
    } else {
      setUploadVisible(true);
      resetForm();
      return alert("Succsess");
    }
  };

  return (
    <Screen>
      {/* <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      /> */}
      <AppForm
        style={styles.imagepicker}
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: "",
          images: [],
        }}
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />

        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          PickerItemComponent={CatogeryPickerItem}
          name="category"
          placeholder="Category"
        />

        <AppFormField
          maxLength={255}
          multiline
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
  imagepicker: {
    backgroundColor: color.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
});
