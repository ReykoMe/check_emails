import axios, { AxiosPromise } from "axios";

const HubspotClient = axios.create({
  baseURL: "https://api.hubapi.com",
});

//add hapikey to all hubspot request
HubspotClient.interceptors.request.use((config) => {
  return { ...config, params: { ...config.params, hapikey: "demo" } };
});

export const getUserByEmail = (email: string): AxiosPromise => {
  return HubspotClient({
    method: "get",
    url: `/contacts/v1/contact/email/${email}/profile`,
  });
};
