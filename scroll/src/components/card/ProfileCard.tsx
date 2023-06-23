import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  cell: string;
  picture: {
    large: string;
  };
}

interface CardProps {
  user: User;
}
const ProfileCard: React.FC<CardProps> = ({ user }) => {
  let name = user.name.title + "." + user.name.first + " " + user.name.last;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={user.picture.large}
          alt="profile-picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.cell}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default ProfileCard;
