import { useState, useCallback } from "react";
import { uploadFileToFireBase } from "../Firebase/upload";
import { FB } from "../Firebase/firebase";

export const getPercentage = (ratio) => Math.round(ratio * 100);

export const useUpload = () => {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();
  const state = {
    progress,
    uploading,
    downloadURL,
    success,
    error,
  };
  return [state];
};

export const monitorUpload = (data, onUploadProgress, onUpload) => {
  // console.log("useUpload().progress" + useUpload().progress);
  // statesetUploading(true);
  // setSuccess(false);
  // setProgress(0);
  // setError(null);
  // console.log("progress" + state.progress);
  uploadFileToFireBase(data);
  // uploadTask.task.on(
  //   "state_changed",
  //   function (snapshot) {
  //     onUploadProgress(
  //       getPercentage(snapshot.bytesTransferred / snapshot.totalBytes)
  //     );

  //     if (snapshot.state === FB.storage.TaskState.SUCCESS) {
  //       // setDownloadURL(await snapshot.ref.getDownloadURL());
  //       // setSuccess(true);
  //       onUpload(false);
  //     }
  //   },
  //   (error) => {
  //     // setError(error);
  //   }
  // );
};
