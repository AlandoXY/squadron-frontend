import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Input from "@/components/input";
import IconButton from "@/components/icon-button";
import Textarea from "@/components/textarea";

export default function SocialMedia({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={430}>
      <Typography fontSize="18px" fontWeight={600} color="#111927" style={{marginTop: 5}}>Social Media</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Intro of this screen</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box vertical>
          <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>LinkedIn</Typography>
          <Input prefixIcon="/icons/link.png" suffixIcon="/icons/check.png" fullWidth />
          <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>Personal website</Typography>
          <Input prefixIcon="/icons/link.png" fullWidth />
          <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>GitHub (optional)</Typography>
          <Input prefixIcon="/icons/link.png" fullWidth />
          <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>Dribbble (optional)</Typography>
          <Input prefixIcon="/icons/link.png" fullWidth />
          <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>Behance</Typography>
          <Input prefixIcon="/icons/link.png" fullWidth />
          <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>StackOverflow</Typography>
          <Input prefixIcon="/icons/link.png" fullWidth />
          <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>Twitter</Typography>
          <Input prefixIcon="/icons/link.png" fullWidth />
        </Box>
      </div>
      <Box fullWidth justifyContent="flex-end" style={{marginTop: 30}}>
        <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Cancel application</Button>
        <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}} onClick={() => setOpen(false)}>Update and continue</Button>
      </Box>
    </Modal>
  )
}
