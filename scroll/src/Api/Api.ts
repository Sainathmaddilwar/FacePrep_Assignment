import axios from "axios";

export const fetchProfiles = async (page: Number) => {
  try {
    const response = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=10`
    );
    const data = await response.data;
    return data;
  } catch (e: any) {
    console.log(e);
    alert(e.message);
  }
};
