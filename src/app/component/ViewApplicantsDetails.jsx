import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};

export default function ViewApplicantsDetails({
  enrollment,
  handleClose,
  open,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Applicant Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <strong>Full Name:</strong> {enrollment.fullName}
            </div>
            <div>
              <strong>Category:</strong>{" "}
              {enrollment.category === "half fundde"
                ? "half funded"
                : enrollment.category}
            </div>
            <div>
              <strong>Course:</strong> {enrollment.course}
            </div>
            <div>
              <strong>State:</strong> {enrollment.state}
            </div>
            <br />
            <br />
            <div className="text-justify">
              <strong>Comment:</strong> <br /> {enrollment.comment}
            </div>
            <br />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
