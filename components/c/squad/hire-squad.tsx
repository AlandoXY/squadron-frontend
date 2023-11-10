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

export default function HireSquad({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} width={400}>
      <div style={{padding: "20px 0"}}>
        <Box flexDirection="column" justifyContent="center">
          <Image src="/icons/hire.png" alt="Unsaved Change" width={64} height={64} />
          <Typography color="#101828" fontSize={18} fontWeight={600} style={{marginBottom: 5, marginTop: 15}}>Hiring squad</Typography>
          <Typography color="#475467" style={{textAlign: "center"}}>Once your start hiring a squad, you won’t be able to see the rest of squads suggested or squads that applied to the project</Typography>
        </Box>
      </div>
      <Box>
        <Button color="white" style={{border: '1px solid #D2D6DB', flex: 1}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#101828" fontColor="white" style={{marginLeft: 10, flex: 1}} onClick={() => handleSubmit()}>Accept</Button>
      </Box>
    </Modal>
  )
}
