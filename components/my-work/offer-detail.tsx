import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Textarea from "@/components/textarea";
import Box from "@/components/box";
import Image from "next/image";
import Link from "@/components/link";

export default function OfferDetail({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width="auto" style={{padding: 0}}>
      <Box style={{width: 500, padding: 24, backgroundColor: '#111818'}}>
        <Image src="/icons/nautilus.png" alt="Avatar" width={56} height={56} style={{marginRight: 10, borderRadius: '50%'}} />
        <Box vertical>
          <Typography color="#ffffff">Google</Typography>
          <Typography color="#ffffff" fontSize={20} fontWeight={500}>SurveySwap</Typography>
        </Box>
      </Box>
      <Box vertical style={{padding: 15, borderBottom: "1px solid #E5E7EB"}}>
        <Box style={{marginBottom: 15}}>
          <Box style={{width: 112}}>
            <Typography color="#111927" fontSize={14} fontWeight={500}>Role</Typography>
          </Box>
          <Box>
            <Typography color="#4D5761" fontSize={14}>Product Manager</Typography>
          </Box>
        </Box>
        <Box style={{marginBottom: 15}}>
          <Box style={{width: 112}}>
            <Typography color="#111927" fontSize={14} fontWeight={500}>Project</Typography>
          </Box>
          <Box>
            <Typography color="#4D5761" fontSize={14}>SurveySwap</Typography>
          </Box>
        </Box>
        <Box style={{marginBottom: 15}}>
          <Box style={{width: 112}}>
            <Typography color="#111927" fontSize={14} fontWeight={500}>Company</Typography>
          </Box>
          <Box>
            <Typography color="#4D5761" fontSize={14}>Nautilus</Typography>
          </Box>
        </Box>
        <Box style={{marginBottom: 15}}>
          <Box style={{width: 112}}>
            <Typography color="#111927" fontSize={14} fontWeight={500}>Start date</Typography>
          </Box>
          <Box>
            <Typography color="#4D5761" fontSize={14}>25 December 2022</Typography>
          </Box>
        </Box>
        <Box style={{marginBottom: 15}}>
          <Box style={{width: 112}}>
            <Typography color="#111927" fontSize={14} fontWeight={500}>Hours per week</Typography>
          </Box>
          <Box>
            <Typography color="#4D5761" fontSize={14}>40</Typography>
          </Box>
        </Box>
        <Box>
          <Box style={{width: 112}}>
            <Typography color="#111927" fontSize={14} fontWeight={500}>Rate</Typography>
          </Box>
          <Box>
            <Typography color="#4D5761" fontSize={14}>$80/h</Typography>
          </Box>
        </Box>
        <Box fullWidth justifyContent="flex-end" style={{marginBottom: 15}}>
          <Link>View full offer</Link>
        </Box>
      </Box>
      <Box fullWidth justifyContent="flex-end" style={{padding: 15}}>
        <Button color="#4B48EC" fontColor="white" onClick={() => handleSubmit()}>View agreement</Button>
      </Box>
    </Modal>
  )
}
