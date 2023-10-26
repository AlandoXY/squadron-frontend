import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Input from "@/components/input";

export default function ReferSquadmate({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width="auto">
      <Typography fontSize="18px" fontWeight={600} color="#111927">Role Invitation</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Blablablabla</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box vertical>
          <Box vertical fullWidth>
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>Full name</Typography>
            <Input fullWidth />
          </Box>
          <Box vertical fullWidth style={{marginTop: 15}}>
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>Email</Typography>
            <Input fullWidth prefixIcon="/icons/email-gray.png" prefixIconWidth={16.67} prefixIconHeight={13.33} />
          </Box>
          <Box vertical fullWidth style={{marginTop: 15}}>
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>LinkedIn (optional)</Typography>
            <Input fullWidth prefixIcon="/icons/link.png" prefixIconWidth={16.57} prefixIconHeight={16.56} />
          </Box>
          <Box vertical style={{marginTop: 30}}>
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>Have you delivered a similar project with them previously?</Typography>
            <Box vertical>
              <Box>
                <Input type="radio" name="hear" noBorder width={15} /> Yes
              </Box>
              <Box>
                <Input type="radio" name="hear" noBorder width={15} /> No
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
      <Box style={{width: 400}}>
        <Button color="white" style={{flex: 1, border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#4B48EC" fontColor="white" style={{flex: 1, marginLeft: 10}} onClick={() => handleSubmit()}>Send invitation</Button>
      </Box>
    </Modal>
  )
}
