import * as React from "react";
import "./index.style.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BoxCard({
  setOpenModal,
  title,
  author,
  published,
  setDelete,
  pages,
  key,
}) {
  return (
    <Card sx={{ maxWidth: 400 }} key={key}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent sx={{ height: 89, width: 333 }}>
        <Typography gutterBottom variant="h5" component="div">
          {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          Eben Upton:{published}-year
        </Typography>
        <Typography
          sx={{
            bgcolor: "#EFE6FD",
            color: "#9654F4",
            maxWidth: "200",
            borderRadius: "8px",
            padding: "0px 10px ",
          }}
          variant="body2"
        >
          {pages}:pages
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ bgcolor: "#d50000", color: "#fff" }}
          onClick={setDelete}
          startIcon={<RiDeleteBinLine />}
        />
        <Button
          sx={{ color: "#fff", bgcolor: "#6200ee" }}
          onClick={setOpenModal}
          startIcon={<AiOutlineEdit />}
        />
      </CardActions>
    </Card>
  );
}
