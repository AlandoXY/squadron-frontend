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

export default function BookInterviewRequest({ open, setOpen }) {
  return (
    <Modal open={open} width={400}>
      <div style={{padding: "20px 0"}}>
        <Box flexDirection="column" justifyContent="center">
          <Image src="/icons/telephone.png" alt="Unsaved Change" width={48} height={48} />
          <Typography color="#101828" fontSize={18} fontWeight={600} style={{marginBottom: 5, marginTop: 15}}>Request an interview with Patricia</Typography>
          <Typography color="#475467" style={{textAlign: "center"}}>Your applicant will receive an email blablablablabalbalbab</Typography>
        </Box>
        <Box style={{border: "1px solid #D2D6DB", borderRadius: 8, padding: "12px 14px", margin: "20px 0"}}>
          <Typography color="#6C737F">
            Hi Patricia! <br/><br/>
            Thanks for applying to this role.
            I’d love to schedule a call with you. Please let me know a few times that work for you.<br/><br/>
            Thanks!
          </Typography>
        </Box>
      </div>
      <Box>
        <Button color="white" style={{border: '1px solid #D2D6DB', flex: 1}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#101828" fontColor="white" style={{marginLeft: 10, flex: 1}} onClick={() => setOpen(false)}>Send interview request</Button>
      </Box>
    </Modal>
  )
}
