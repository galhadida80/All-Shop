import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Keyboard, Alert } from "react-native";
import * as Yup from "yup";
import { Notifications } from "expo";

import { AppFormField, SubmitButton, AppForm } from "../../components/forms";

// const propTypes = {
//   listingId: PropTypes.number.isRequired,
// };

// const defaultProps = {};

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label("Message"),
});

const ContactForm = ({ listing }) => {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    // const result = await messagesApi.send(message, listing.id);

    // if (!result.ok) {
    //   console.log("Error sending message", result);
    //   console.log(listing.id);
    //   return Alert.alert(
    //     "Error",
    //     "Could not send the message. Please try again."
    //   );
    // }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message has been sent to the seller.",
    });
  };

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          message: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="message"
          autoCapitalize="none"
          placeholder="Message"
        />
        <SubmitButton style={styles.submitButton} title="Contact Seller" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  submitButton: {
    textTransform: "uppercase",
  },
});

// ContactForm.propTypes = propTypes;
// ContactForm.defaultProps = defaultProps;

export default ContactForm;
