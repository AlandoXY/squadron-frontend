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

export default function BuildSquadConfirm({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} width={400}>
      <div style={{padding: "20px 0", marginBottom: 20, borderBottom: "1px solid #EAECF0"}}>
        <Box flexDirection="column" justifyContent="center">
          <Image src="/icons/hire-1.png" alt="Unsaved Change" width={64} height={64} />
          <Typography color="#101828" fontSize={18} fontWeight={600} style={{marginBottom: 5, marginTop: 15}}>Build Your Own Squad</Typography>
          <Typography color="#475467" style={{textAlign: "center"}}>Once your start hiring individual applicants, you won’t be able to see squad suggestions.</Typography>
        </Box>
      </div>
      <Box>
        <Button color="white" style={{border: '1px solid #D2D6DB', flex: 1}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#101828" fontColor="white" style={{marginLeft: 10, flex: 1}} onClick={() => handleSubmit()}>Continue</Button>
      </Box>
    </Modal>
  )
}
