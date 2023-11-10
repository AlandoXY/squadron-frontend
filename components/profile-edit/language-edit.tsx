import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Dropdown from "@/components/dropdown";
import IconButton from "@/components/icon-button";

export default function LanguageEdit({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width="auto">
      <Typography fontSize="18px" fontWeight={600} color="#111927">Language</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Intro of this screen</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box style={{marginBottom: 15}}>
          <Box vertical>
            <Typography fontSize="14px" fontWeight={500} color="#384250" style={{marginBottom: 10}}>Language</Typography>
            <Dropdown
              inputWidth="100px"
              options={[{ label: "Spanish", value: "Spanish" }, { label: "English", value: "English" }, { label: "Chinese", value: "Chinese" }]} />
          </Box>
          <Box vertical style={{marginLeft: 15}}>
            <Typography fontSize="14px" fontWeight={500} color="#384250" style={{marginBottom: 10}}>Level</Typography>
            <Dropdown
              inputWidth="100px"
              options={[{ label: "Native", value: "Native" }, { label: "Native", value: "Native" }, { label: "Native", value: "Native" }]} />
          </Box>
          <Box style={{marginLeft: 15}}>
            <IconButton icon="/icons/delete.png" width={20} height={20} style={{marginTop: 25}} />
          </Box>
        </Box>
        <Box style={{marginBottom: 25}}>
          <Box vertical>
            <Typography fontSize="14px" fontWeight={500} color="#384250" style={{marginBottom: 10}}>Language</Typography>
            <Dropdown
              inputWidth="100px"
              options={[{ label: "Spanish", value: "Spanish" }, { label: "English", value: "English" }, { label: "Chinese", value: "Chinese" }]} />
          </Box>
          <Box vertical style={{marginLeft: 15}}>
            <Typography fontSize="14px" fontWeight={500} color="#384250" style={{marginBottom: 10}}>Level</Typography>
            <Dropdown
              inputWidth="100px"
              options={[{ label: "Native", value: "Native" }, { label: "Native", value: "Native" }, { label: "Native", value: "Native" }]} />
          </Box>
          <Box style={{marginLeft: 15}}>
            <IconButton icon="/icons/delete.png" width={20} height={20} style={{marginTop: 25}} />
          </Box>
        </Box>
        <Box>
          <IconButton icon="/icons/plus-purple.png" width={20} height={20} />
          <Typography fontSize="14px" fontWeight={600} color="#1B18E4">Add another</Typography>
        </Box>
      </div>
      <div style={{textAlign: "right"}}>
        <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}}>Update</Button>
      </div>
    </Modal>
  )
}
