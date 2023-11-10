import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Button from "@/components/button";
import Image from "next/image";
import Typography from "@/components/typography";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../app/global.css';
import IconButton from "@/components/icon-button";
import Input from "@/components/input";

export default function ProjectStarted({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} width={400}>
      <div style={{padding: "20px 0"}}>
        <Box flexDirection="column" justifyContent="center">
          <Image src="/icons/party-popper.png" alt="Unsaved Change" width={80} height={80} />
          <Typography color="#101828" fontSize={18} fontWeight={600} style={{marginBottom: 5, marginTop: 15}}>Project started</Typography>
          <Typography color="#475467" style={{textAlign: "center"}}>We recommend to start booking a call with each one of your team to blablablablaal</Typography>
        </Box>
      </div>
      <Box style={{marginTop: 20}}>
        <Button color="#111927" fontColor="white" fullWidth onClick={() => handleSubmit()}>Let’s go!</Button>
      </Box>
    </Modal>
  )
}
