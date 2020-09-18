import axios from "axios";

export const getUsers = async () => {
  const res = await axios.get("http://10.0.2.2:4000/user");
  try {
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const createUser = async (userInfo) => {
  try {
    await axios.post("http://10.0.2.2:4000/user", userInfo);
  } catch (error) {
    throw error;
  }
};
