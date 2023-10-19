import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Input from "@/components/input";
import Image from "next/image";

export default function ApplyResult({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400} style={{minHeight: 120}}>
      <Box flexDirection="column" alignItem="flex-start">
        <Typography color="#111927" fontSize={18} fontWeight={600} style={{marginBottom: 10}}>Submit application</Typography>
        <Typography color="#4D5761" fontSize={14}>The team submission will be submitted once the squadmates have accepted their invitation & filled in their application.</Typography>
      </Box>
    </Modal>
  )
}
