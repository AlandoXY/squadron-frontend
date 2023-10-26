import Typography from "@/components/typography";
import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Image from "next/image";
import Input from "@/components/input";
import Button from "@/components/button";
import Textarea from "@/components/textarea";

export default function SquadPulseRating({ open, setOpen, handleSubmit }) {
  const [text, setText] = useState('');

  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={480}>
      <Typography fontSize="18px" fontWeight={600} color="#111927">Squad pulse rating</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>The squad pulse gives your the opportunity to rate your team every two weeks, to help us flag any rising issues, get ahead of resourcing needs, and recognize squad members for good performance. </Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box vertical>
          <Typography color="#384250" fontSize={14} fontWeight={500}>How would you rate your squad these past 2 weeks?</Typography>
          <Box fullWidth style={{margin: "10px 0", opacity: 0.5}}>
            <Box style={{padding: "0 16px", backgroundColor: "#D92D20", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10, marginRight: 20}}>1.0</Box>
            <Box style={{padding: "0 16px", backgroundColor: "#F79009", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10, marginRight: 20}}>2.0</Box>
            <Box style={{padding: "0 16px", backgroundColor: "#F79009", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10, marginRight: 20}}>3.0</Box>
            <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10, marginRight: 20}}>4.0</Box>
            <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>5.0</Box>
          </Box>
        </Box>
        <Typography color="#384250" fontSize={14} fontWeight={500} style={{margin: "10px 0"}}>What would you like your squad to do differently to improve your experience?</Typography>
        <Textarea style={{width: "100%", height: 100}} placeholder="Enter a description..." onChange={(e) => setText(e.target.value)}>{text}</Textarea>
      </div>
      <Box>
        <Button color="white" style={{border: '1px solid #D2D6DB', flex: 1}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#111927" fontColor="white" style={{marginLeft: 10, flex: 1}} disabled={text.length === 0} onClick={() => handleSubmit()}>Submit</Button>
      </Box>
    </Modal>
  )
}
