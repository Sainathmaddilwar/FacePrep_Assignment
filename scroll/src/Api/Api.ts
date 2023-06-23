import axios from "axios";
interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
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
