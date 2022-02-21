import * as hubspot from "../clients/hubspot/hubspot.client";

export const getInfoByEmail = async (email: string): Promise<string> => {
  const { data } = await hubspot.getUserByEmail(email);
  return data;
};
