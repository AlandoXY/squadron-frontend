import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Textarea from "@/components/textarea";

export default function AboutMe({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width="auto">
      <Typography fontSize="18px" fontWeight={600} color="#111927">About me</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Description of this screen</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Typography color="#384250" fontWeight={500} fontSize={14}>About me</Typography>
        <Textarea resize={false} withLimit={false} style={{width: 600, height: 120, marginTop: 10}}></Textarea>
      </div>
      <div style={{textAlign: "right"}}>
        <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}}>Update</Button>
      </div>
    </Modal>
  )
}
