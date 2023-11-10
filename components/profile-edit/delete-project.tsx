import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Dropdown from "@/components/dropdown";
import IconButton from "@/components/icon-button";
import Input from "@/components/input";
import Label from "@/components/label";
import Image from "next/image";

export default function DeleteProject({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width="auto">
      <Image src="/icons/delete-round.png" alt="Delete" width={48} height={48} style={{marginBottom: 10}} />
      <Typography fontSize="18px" fontWeight={600} color="#111927">Delete project</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5, width: 320}}>Are you sure you want to delete this project? This action cannot be undone.</Typography>
      <Box style={{marginTop: 25}}>
        <Button color="white" style={{border: '1px solid #D2D6DB', flex: 1}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#D92D20" fontColor="white" style={{marginLeft: 10, flex: 1}}>Delete</Button>
      </Box>
    </Modal>
  )
}
