import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import NavbarItem from "@/components/navbar-item";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Image from "next/image";
import Typography from "@/components/typography";
import Input from "@/components/input";
import IconButton from "@/components/icon-button";

export default function AddAdmin({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={600}>
      <Typography fontSize="18px" fontWeight={600} color="#111927">Invite admin(s)</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>blablablablabalbal</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box style={{gap: 20}}>
          <Box style={{flex: 1}} vertical>
            <Typography color="#384250" fontWeight={500} fontSize={14} style={{marginBottom: 8}}>Name</Typography>
            <Input fullWidth />
          </Box>
          <Box style={{flex: 1}} vertical>
            <Typography color="#384250" fontWeight={500} fontSize={14} style={{marginBottom: 8}}>Email address</Typography>
            <Input fullWidth prefixIcon="/icons/email-gray.png" prefixIconWidth={20} prefixIconHeight={16.25} />
          </Box>
        </Box>
        <Box style={{gap: 20, marginTop: 15}}>
          <Box style={{flex: 1}} vertical>
            <Typography color="#384250" fontWeight={500} fontSize={14} style={{marginBottom: 8}}>Name</Typography>
            <Input fullWidth />
          </Box>
          <Box style={{flex: 1}} vertical>
            <Typography color="#384250" fontWeight={500} fontSize={14} style={{marginBottom: 8}}>Email address</Typography>
            <Input fullWidth prefixIcon="/icons/email-gray.png" prefixIconWidth={20} prefixIconHeight={16.25} />
          </Box>
        </Box>
        <Box style={{marginTop: 20}}>
          <IconButton icon="/icons/plus-purple.png" width={20} height={20} fontSize="14px" fontColor="#1B18E4" style={{fontWeight: 600}}>Add another</IconButton>
        </Box>
      </div>
      <Box>
        <Button color="white" style={{border: '1px solid #D2D6DB', flex: 1}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#111927" fontColor="white" style={{marginLeft: 10, flex: 1}} onClick={() => handleSubmit()}>Send invites</Button>
      </Box>
    </Modal>
  )
}
