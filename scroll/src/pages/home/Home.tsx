import React, { useEffect, useState } from "react";
import { fetchProfiles } from "../../Api/Api";
import Navbar from "../../components/navbar/Navbar";
import ProfileCard from "../../components/card/ProfileCard";
import Spinner from "../../components/spinner/Spinner";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import style from "./Home.module.css";
interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchProfiles(pageNo).then((data) => {
        setUsers((prev) => [...prev, ...data.results]);
        setPageNo((prev) => prev + 1);
        setIsLoading(false);
      });
      // eslint-disable-next-line
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const isAtBottem = scrollTop + clientHeight >= scrollHeight - 20;
    // if (scrollTop + clientHeight >= scrollHeight)
    if (
      isAtBottem ||
      (window.innerHeight + scrollTop >= document.body.offsetHeight &&
        "ontouchstart" in window)
    ) {
      setIsLoading(true);
      fetchProfiles(pageNo).then((data) => {
        setUsers((prev) => [...prev, ...data.results]);
        setPageNo((prev) => prev + 1);
        setIsLoading(false);
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className={style.profileGrid}>
        <Grid container>
          <Grid item className="product-grid">
            <Box sx={{ mr: "10px", ml: "10px", mt: 2, mb: 2 }}>
              <Grid container spacing={2} justifyContent="center">
                {users.map((ele, idx) => (
                  <Grid item xs={8} sm={6} md={4} lg={3} key={idx}>
                    <ProfileCard user={ele} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div style={{ paddingBottom: "30px" }}> {isLoading && <Spinner />}</div>
    </div>
  );
};

export default Home;
