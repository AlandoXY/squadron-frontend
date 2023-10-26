import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Input from "@/components/input";
import Image from "next/image";
import Textarea from "@/components/textarea";
import IconButton from "@/components/icon-button";

export default function HideProject({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400}>
      <Typography fontSize="18px" fontWeight={600} color="#111927">Hide this project</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>lore ipsum blablablabalbalblore ipsum blablablabalbalb</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1'}}>
        <Box vertical>
          <Box vertical fullWidth>
            <Box style={{marginTop: 10}}>
              <input type="checkbox" />
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginLeft: 10}}>Wrong skill set</Typography>
            </Box>
            <Box style={{marginTop: 10}}>
              <input type="checkbox" />
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginLeft: 10}}>Location mismatch</Typography>
            </Box>
            <Box style={{marginTop: 10}}>
              <input type="checkbox" />
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginLeft: 10}}>Misalignment with company</Typography>
            </Box>
            <Box style={{marginTop: 10}}>
              <input type="checkbox" />
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginLeft: 10}}>Not currently available</Typography>
            </Box>
            <Box style={{marginTop: 10}}>
              <input type="checkbox" />
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginLeft: 10}}>Misalignment with commitment level</Typography>
            </Box>
            <Box style={{marginTop: 10}}>
              <input type="checkbox" />
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginLeft: 10}}>Other</Typography>
            </Box>
          </Box>
        </Box>
      </div>
      <Box fullWidth>
        <Button color="white" style={{flex: 1, border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#4B48EC" fontColor="white" style={{flex: 1, marginLeft: 10}} onClick={() => setOpen(false)}>Send feedback</Button>
      </Box>
    </Modal>
  )
}
