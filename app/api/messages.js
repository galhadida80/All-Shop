import client from "./client";

const ENDPOINT = "/messages";

const send = (message, listingId) =>
  client.post(ENDPOINT, { message, listingId });

export default {
  send,
};
