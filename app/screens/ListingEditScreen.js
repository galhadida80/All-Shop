import React, { useEffect, useState } from "react";
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
import { uploadFileToFireBase } from "../Firebase/upload";
import { useUpload, monitorUpload } from "../hooks/useUpload";

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

const ListingEditScreen = () => {
  const location = useLocation();

  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = (listing, { resetForm }) => {
    // setUploadVisible(true);

    monitorUpload(
      {
        ...listing,
        location,
      },
      (progress) => setProgress(progress),
      (uploading) => setUploading(uploading)
    );
    console.log("progress" + progress);
  };

  return (
    <Screen>
      <UploadScreen
        onDone={() => setUploading(false)}
        progress={progress}
        visible={uploading}
      />
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
};

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
