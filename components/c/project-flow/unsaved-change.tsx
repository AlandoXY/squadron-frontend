import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Button from "@/components/button";
import Image from "next/image";
import Typography from "@/components/typography";

export default function UnsavedChange({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400}>
      <div style={{padding: "20px 0", margin: "20px 0"}}>
        <Box flexDirection="column" justifyContent="center">
          <Image src="/icons/unsaved-change.png" alt="Unsaved Change" width={48} height={48} />
          <Typography color="#101828" fontSize={18} fontWeight={600} style={{marginBottom: 5, marginTop: 15}}>Unsaved changes</Typography>
          <Typography color="#475467" style={{textAlign: "center"}}>If you close this screen your changes won’t be saved</Typography>
        </Box>
      </div>
      <Box>
        <Button color="white" style={{border: '1px solid #D2D6DB', flex: 1}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10, flex: 1}} onClick={() => handleSubmit()}>Confirm</Button>
      </Box>
    </Modal>
  )
}
