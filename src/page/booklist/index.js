import React, { useEffect, useState } from "react";
import "./index.style.css";
import { BasicModal, Card, Navbar, TextInput } from "../../component";
import { BiPlusMedical } from "react-icons/bi";
// import { useUserStore } from "../../state/userStore/index";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
function Booklist() {
  const [booklist, signKey, setBooklist, setDelete, editBook] = useUserStore(
    (state) => [
      state.booklist,
      state.signKey,
      state.setBooklist,
      state.setDelete,
      state.editBook,
    ]
  );

  useEffect(() => {
    setBooklist(signKey);
  }, [signKey]);

  const [open, setOpen] = React.useState({
    status: "",
    openModal: false,
    id: "",
  });
  const handleClose = () => setOpen({ ...open, openModal: false });
  const handleSubmit = () => {
    editBook(open);
    handleClose();
  };
  return (
    <>
      <Navbar />
      <div className="books">
        <div className="bookslist">
          <div className="booklist_header">
            <span>You’ve got</span>
            <span className="book_count"> 7 book </span>
          </div>
          <div className="booklist_search">
            <TextInput
              type={"text"}
              placeholder={"Enter your name..."}
              className="book_search"
            />
            <BasicModal
              icons={<BiPlusMedical />}
              type={"Create a book"}
              placeholder={"Enter your isbn />"}
            />
          </div>
        </div>
        <div className="book_card">
          <h2>Your task today</h2>
          {!booklist?.data?.length && <h3>Ma'lumot yuq</h3>}
          <div className="card_list">
            {booklist?.data?.map((i) => (
              <Card
                data={i}
                author={i.book.author}
                title={i.book.title}
                published={i.book.published}
                pages={i.book.pages}
                setDelete={() => setDelete(i.book.id)}
                setOpenModal={() =>
                  setOpen({ ...open, id: i.book.id, openModal: true })
                }
              />
            ))}
          </div>
        </div>
      </div>
      <Modal open={open.openModal} onClose={handleClose}>
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
            <label>Status</label>
            <br />
            <TextInput
              onChange={(e) => setOpen({ ...open, status: e.target.value })}
              type="isbn"
              placeholder="Enter your status..."
            />
          </div>

          <div className="close_submit">
            <button className="editbtn" onClick={handleClose}>
              close
            </button>
            <button className="editbtn" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Booklist;
