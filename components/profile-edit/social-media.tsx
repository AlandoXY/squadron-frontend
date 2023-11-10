import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Dropdown from "@/components/dropdown";
import IconButton from "@/components/icon-button";
import Input from "@/components/input";

export default function SocialMedia({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width="auto">
      <Typography fontSize="18px" fontWeight={600} color="#111927">Social Media</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Intro of this screen</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box flexDirection="column" justifyContent="space-between" alignItem="flex-start" style={{width: 360, flexWrap: 'wrap', gap: 20}}>
          <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
            <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>LinkedIn</Typography>
            <Input prefixIcon="/icons/link.png" fullWidth />
          </Box>
          <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
            <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Personal website</Typography>
            <Input prefixIcon="/icons/link.png" fullWidth />
          </Box>
          <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
            <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>GitHub (optional)</Typography>
            <Input prefixIcon="/icons/link.png" fullWidth />
          </Box>
          <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
            <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Dribbble (optional)</Typography>
            <Input prefixIcon="/icons/link.png" fullWidth />
          </Box>
          <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
            <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Behance</Typography>
            <Input prefixIcon="/icons/link.png" fullWidth />
          </Box>
          <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
            <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>StackOverflow</Typography>
            <Input prefixIcon="/icons/link.png" fullWidth />
          </Box>
          <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
            <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Twitter</Typography>
            <Input prefixIcon="/icons/link.png" fullWidth />
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
