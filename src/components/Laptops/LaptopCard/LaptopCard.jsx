import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import { useContext } from "react";
import { laptopContext } from "../../../context/LaptopContextProvider";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./LaptopCard.css";

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const LaptopCard = ({ lapObj }) => {
  const { deleteLaptop } = useContext(laptopContext);

  const navigate = useNavigate();

  return (
    <Card
      className="card-hover"
      sx={{ width: 250 }}
      onClick={() => navigate(`/details/${lapObj.id}`)}>
      <CardMedia
        component="img"
        height="194"
        image={lapObj.photo1}
        alt={lapObj.brand}
      />
      <CardContent>
        <Typography className="text-hover" variant="body2" color="text.dark">
          {lapObj.brand}
          {<span> </span>}
          {lapObj.model},{<span> </span>}
          {lapObj.color}
          {<br />}
          {lapObj.price} сом
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LaptopCard;
