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
import Textarea from "@/components/textarea";

export default function HireSquadFeedback({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} width={400}>
      <div style={{padding: "20px 0"}}>
        <Box flexDirection="column" justifyContent="center">
          <Image src="/icons/eye-off-1.png" alt="Unsaved Change" width={44} height={44} />
          <Typography color="#101828" fontSize={18} fontWeight={600} style={{marginBottom: 5, marginTop: 15}}>Hide this squad</Typography>
          <Typography color="#475467" style={{textAlign: "center"}}>Please, let as not why you don’t want to see this squad. This will help us to give you better options</Typography>
        </Box>
        <Box vertical style={{margin: "20px 0"}}>
          <Typography color="#384250" fontSize={14} fontWeight={500} style={{marginBottom: 10}}>Why do you want to hide this squad?</Typography>
          <Textarea placeholder="Enter a description..." width={360}></Textarea>
        </Box>
      </div>
      <Box>
        <Button color="white" style={{border: '1px solid #D2D6DB', flex: 1}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#101828" fontColor="white" style={{marginLeft: 10, flex: 1}} onClick={() => handleSubmit()}>Send feedback an hide</Button>
      </Box>
    </Modal>
  )
}
