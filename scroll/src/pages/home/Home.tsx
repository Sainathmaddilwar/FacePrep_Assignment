import React, { useEffect, useState } from "react";
import { fetchProfiles } from "../../Api/Api";
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
const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pageNo, setPageNo] = useState<Number>(1);
  useEffect(() => {
    fetchProfiles(pageNo).then((res) => {
      console.log(res.results);
      setUsers((prev) => [...prev, res.results]);
    });
  }, [pageNo]);

  return <div>Home</div>;
};

export default Home;
