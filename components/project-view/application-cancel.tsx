import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Input from "@/components/input";
import Image from "next/image";

export default function ApplicationCancel({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400}>
      <Box flexDirection="column" justifyContent="center" alignItem="center">
        <Image src="/icons/warning.png" alt="Send" width={48} height={48} style={{margin: "20px 0 10px"}}/>
        <Typography color="#111927" fontSize={18} fontWeight={600} style={{marginBottom: 10}}>Cancel application</Typography>
        <Typography color="#4D5761" fontSize={14} style={{textAlign: "center"}}>You will lose all the date entered. Do you want to save as a draft instead?</Typography>
      </Box>
      <Box fullWidth style={{marginTop: 30}}>
        <Button color="white" style={{flex: 1, border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Cancel application</Button>
        <Button color="#4B48EC" fontColor="white" style={{flex: 1, marginLeft: 10}} onClick={() => setOpen(false)}>Save as a draft</Button>
      </Box>
    </Modal>
  )
}
