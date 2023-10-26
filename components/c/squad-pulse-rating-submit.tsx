import Typography from "@/components/typography";
import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Image from "next/image";
import Input from "@/components/input";
import Button from "@/components/button";
import Textarea from "@/components/textarea";

export default function SquadPulseRatingSubmit({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400}>
      <Box flexDirection="column" justifyContent="center" style={{padding: "20px 0", margin: "20px 0"}}>
        <Image src="/icons/check-1.png" alt="Check" width={80} height={80} style={{marginBottom: 20}} />
        <Typography color="#101828" fontWeight={600} fontSize={18}>Squad pulse submitted</Typography>
      </Box>
    </Modal>
  )
}
