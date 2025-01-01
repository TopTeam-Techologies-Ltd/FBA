"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EnrollForm from "./EnrollForm";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #ffccaa",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh", // Set maximum height
  overflowY: "auto", // Make it scrollable if content exceeds maxHeight
  borderRadius: "8px", // Optional: Add rounded corners for better UI
};

export default function ScholarshipModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: "#027839",
          color: "#fff",
          paddingY: ".7rem",
          paddingX: "4rem",
          border: "1px solid #FFD700",
        }}
      >
        Apply for scholarship
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EnrollForm setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
}
