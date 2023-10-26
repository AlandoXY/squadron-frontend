import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Input from "@/components/input";
import Image from "next/image";
import Textarea from "@/components/textarea";
import IconButton from "@/components/icon-button";

export default function ShareProject({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400}>
      <Box>
        <Box style={{marginRight: 15}}>
          <IconButton icon="/icons/share.png" width={24} height={24} style={{border: "1px solid #D2D6DB"}} />
        </Box>
        <Box vertical>
          <Typography fontSize="18px" fontWeight={600} color="#111927">Share</Typography>
          <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Share this project</Typography>
        </Box>
      </Box>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1'}}>
        <Box vertical>
          <Typography fontSize="14px" fontWeight={500} color="#384250">Share link</Typography>
          <Box fullWidth style={{marginTop: 10}}>
            <Input placeholder="Share link" fullWidth />
            <IconButton icon="/icons/copy.png" width={20} height={ 20} />
          </Box>
          <Box style={{marginTop: 30, gap: 10}}>
            <IconButton icon="/icons/google.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}}>LinkedIn</IconButton>
            <IconButton icon="/icons/facebook.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}}>LinkedIn</IconButton>
            <IconButton icon="/icons/email-gray.png" width={20} height={16.25} style={{border: "1px solid #D2D6DB"}}>LinkedIn</IconButton>
          </Box>
        </Box>
      </div>
    </Modal>
  )
}
