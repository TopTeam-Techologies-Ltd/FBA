"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import IconButton from "@mui/material";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "80vh", // Set maximum height
  overflowY: "auto",
};

export default function PromotionModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-4">
            <div className="h-[300px] w-[310px] md:h-[500px] md:w-[500px] ">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/patnership.jpeg')",
                }}
              ></div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
