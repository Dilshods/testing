import React, { useState } from "react";
import "./index.style.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "../button";
import TextInput from "../input";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useUserStore } from "../../state/userStore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const BasicModal = ({ type, icons, label }) => {
  const [addbook, signKey, setAddBook] = useUserStore((state) => [
    state.addbook,
    state.signKey,
    state.setAddBook,
  ]);
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    setAddBook(title);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        type={type}
        icons={icons}
        className="modal_btn"
        onClick={handleOpen}
      />

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="close-btn">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create a book
            </Typography>

            <AiOutlineCloseCircle
              className="close_icon"
              onClick={handleClose}
            />
          </div>

          <div className="modal_input">
            <label>{label}</label>
            <br />
            <TextInput
              onChange={(e) => setTitle(e.target.value)}
              type="isbn"
              placeholder="Enter your isbn"
            />
            {/* <br />
            <label>Author</label>
            <br />
            <TextInput
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Enter your author"
            />
            <br />
            <label>Cover</label>
            <br />
            <TextInput
              onChange={(e) => setCover(e.target.value)}
              type="text"
              placeholder="Enter your cover"
            />
            <br />
            <label>Published</label>
            <br />
            <TextInput
              onChange={(e) => setPublish(e.target.value)}
              type="text"
              placeholder="Enter your published"
            />
            <br />
            <label>Pages</label>
            <br />
            <TextInput
              onChange={(e) => setPage(e.target.value)}
              type="text"
              placeholder="Enter your pages"
            />
            <br /> */}
          </div>
          <div className="close_submit">
            <button className="addbtn" onClick={handleClose}>
              close
            </button>
            <button className="addbtn" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
