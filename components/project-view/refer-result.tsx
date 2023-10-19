import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Input from "@/components/input";
import Image from "next/image";

export default function ReferResult({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400}>
      <Box flexDirection="column" justifyContent="center" alignItem="center">
        <Image src="/icons/send.png" alt="Send" width={38.46} height={38.46} style={{margin: "20px 0 10px"}}/>
        <Typography color="#111927" fontSize={18} fontWeight={600} style={{marginBottom: 10}}>Invitation Sent</Typography>
        <Typography color="#4D5761" fontSize={14} style={{textAlign: "center"}}>Once your invitee has accepted this invitation, they will be fast tracked through our vetting process.</Typography>
      </Box>
    </Modal>
  )
}
