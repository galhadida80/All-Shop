import FormData from "form-data";
import { pushPost } from "../components/Firebase/firebase";

const ENDPOINT = "/listings";

const getListings = () => {
  client.get(ENDPOINT);
};

export default {
  getListings,
};

// images.forEach((image, index) => {
//   data.append("images", {
//     name: `image-${index}-${Math.random() * 100}`,
//     type: "image/jpeg",
//     uri: image,
//   });
// });

// if (location) {
//   data.append("location", JSON.stringify(location));
// }
