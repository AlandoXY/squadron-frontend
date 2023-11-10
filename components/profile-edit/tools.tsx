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

export default function Tools({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width="auto">
      <Typography fontSize="18px" fontWeight={600} color="#111927">Tools</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Blablablabla</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box vertical>
          <Typography color="#384250" fontSize="14px" fontWeight={500}>Tools</Typography>
          <Box style={{flexWrap: 'wrap', border: '1px solid #D2D6DB', borderRadius: 8, padding: "12px 14px", marginTop: 20, width: 700, gap: 10}}>
            <Label icon="/icons/ps.png">Skill name <Image src="/icons/close-gray.png" alt="Close" width={6} height={6} style={{marginLeft: 10}} /></Label>
            <Label icon="/icons/ps.png">Skill name <Image src="/icons/close-gray.png" alt="Close" width={6} height={6} style={{marginLeft: 10}} /></Label>
            <Label icon="/icons/ps.png">Skill name <Image src="/icons/close-gray.png" alt="Close" width={6} height={6} style={{marginLeft: 10}} /></Label>
            <Label icon="/icons/ps.png">Skill name <Image src="/icons/close-gray.png" alt="Close" width={6} height={6} style={{marginLeft: 10}} /></Label>
            <Label icon="/icons/ps.png">Skill name <Image src="/icons/close-gray.png" alt="Close" width={6} height={6} style={{marginLeft: 10}} /></Label>
          </Box>
        </Box>
      </div>
      <div style={{textAlign: "right"}}>
        <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}}>Update</Button>
      </div>
    </Modal>
  )
}
