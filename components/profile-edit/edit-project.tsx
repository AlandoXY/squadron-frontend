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
import Textarea from "@/components/textarea";

export default function EditProject({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width="auto">
      <Typography fontSize="18px" fontWeight={600} color="#111927">Edit Project</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Add details. Step 01/02</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box vertical>
          <Box vertical fullWidth>
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>Project name</Typography>
            <Input fullWidth />
          </Box>
          <Box vertical fullWidth style={{marginTop: 15}}>
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>My Role</Typography>
            <Input fullWidth />
          </Box>
          <Box style={{marginTop: 15}}>
            <Box vertical style={{marginRight: 15}}>
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>From</Typography>
              <Dropdown
                placeholder="Year"
                inputWidth="265px"
                options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]} />
            </Box>
            <Box vertical>
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>&nbsp;</Typography>
              <Dropdown
                placeholder="Year"
                inputWidth="265px"
                options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]} />
            </Box>
          </Box>
          <Box style={{marginTop: 10}}>
            <input type="checkbox" />
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginLeft: 10}}>Live project</Typography>
          </Box>
          <Box vertical fullWidth style={{marginTop: 15}}>
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>Add squad member(s)</Typography>
            <Input fullWidth prefixIcon="/icons/search-lg.png" />
          </Box>
          <Box vertical fullWidth style={{marginTop: 15}}>
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>Description*</Typography>
            <Textarea withLimit={false} height={95} width="100%" placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."></Textarea>
          </Box>
          <Box vertical fullWidth style={{marginTop: 15}}>
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>Project URL</Typography>
            <Input fullWidth prefixIcon="/icons/link.png" />
          </Box>
        </Box>
      </div>
      <div style={{textAlign: "right"}}>
        <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}} onClick={() => handleSubmit()}>Update project</Button>
      </div>
    </Modal>
  )
}
