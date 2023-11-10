import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Button from "@/components/button";
import Image from "next/image";
import Typography from "@/components/typography";

export default function SendOffer({ open, setOpen, handleSubmit }) {
  const [signContract, setSignContract] = useState(false);

  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400}>
      <Typography fontSize="18px" fontWeight={600} color="#111927">Send offer</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Confirm details of your offer below.</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box style={{backgroundColor: "#F3F4F6", borderRadius: 8, padding: 8}}>
          <Image src="/icons/avatar.png" alt="Avatar" width={48} height={48} style={{marginRight: 10}} />
          <Typography color="#1F2A37" fontWeight={500}>Patricia Montero</Typography>
        </Box>
        <Box fullWidth vertical style={{margin: "20px 0", borderBottom: "1px solid #e1e1e1"}}>
          <Box fullWidth justifyContent="space-between" style={{marginBottom: 20}}>
            <Typography color="#111927" fontWeight={500} fontSize={14}>Role:</Typography>
            <Typography color="#384250" fontSize={14}>Product Manager</Typography>
          </Box>
          <Box fullWidth justifyContent="space-between" style={{marginBottom: 20}}>
            <Typography color="#111927" fontWeight={500} fontSize={14}>Commitment</Typography>
            <Typography color="#384250" fontSize={14}>40h/week</Typography>
          </Box>
          <Box fullWidth justifyContent="space-between" style={{marginBottom: 20}}>
            <Typography color="#111927" fontWeight={500} fontSize={14}>Hourly rate:</Typography>
            <Typography color="#384250" fontSize={14}>$85/h</Typography>
          </Box>
          <Box fullWidth justifyContent="space-between" style={{marginBottom: 20}}>
            <Typography color="#111927" fontWeight={500} fontSize={14}>Project</Typography>
            <Typography color="#384250" fontSize={14}>MVP for Serverless Return Portal</Typography>
          </Box>
          <Box fullWidth justifyContent="space-between" style={{marginBottom: 20}}>
            <Typography color="#111927" fontWeight={500} fontSize={14}>Client:</Typography>
            <Typography color="#384250" fontSize={14}>Stir</Typography>
          </Box>
        </Box>
        <Box style={{marginTop: 10}}>
          <input type="checkbox" checked={signContract} onChange={e => setSignContract(e.target.checked)} />
          <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginLeft: 10}}>Click here to sign the contract</Typography>
        </Box>
      </div>
      <Box vertical>
        <Button fullWidth color="#111927" fontColor="white" onClick={() => handleSubmit()} disabled={!signContract}>Send offer</Button>
        <Button fullWidth color="white" style={{border: '1px solid #D2D6DB', marginTop: 10}} onClick={() => setOpen(false)}>Cancel</Button>
      </Box>
    </Modal>
  )
}
