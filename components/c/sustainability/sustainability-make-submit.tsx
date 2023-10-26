import Typography from "@/components/typography";
import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Image from "next/image";
import Label from "@/components/label";
import styled from "styled-components";
import Button from "@/components/button";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #F9FAFB;
  box-shadow: 0 1px 2px 0 #1018280F;
  width: 100%;
  border-radius: 12px;
  background-color: white;
  overflow: hidden;
`

export default function SustainabilityMakeSubmit({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width="auto" style={{padding: 0}}>
      <Box style={{padding: "30px 0", margin: "20px 0"}}>
        <Box fullWidth vertical style={{width: 311, margin: "0 30px"}}>
          <Typography color="#111927" fontSize={24} fontWeight={500}>Order status</Typography>
          <Typography color="#4D5761" style={{margin: "10px 0 15px"}}>ACME9992342342</Typography>
          <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", width: 90, fontWeight: 500, justifyContent: "center"}}>Paid</Label>
          <Card style={{padding: 20, margin: "25px 0 0", width: "100%"}}>
            <Typography color="#111927" fontSize={14} fontWeight={500} style={{marginBottom: 5}}>Purchased by</Typography>
            <Typography color="#4D5761" style={{marginBottom: 15}}>Stir</Typography>
            <Typography color="#111927" fontSize={14} fontWeight={500} style={{marginBottom: 5}}>Placed on</Typography>
            <Typography color="#4D5761" style={{marginBottom: 15}}>01 Feb, 2023</Typography>
            <Typography color="#111927" fontSize={14} fontWeight={500} style={{marginBottom: 5}}>Total paid</Typography>
            <Typography color="#4D5761">$298.86</Typography>
          </Card>
          <Card style={{padding: 20, margin: "25px 0 0", width: "100%"}}>
            <Typography color="#111927" fontSize={14} fontWeight={500} style={{marginBottom: 5}}>Product</Typography>
            <Typography color="#4D5761" style={{marginBottom: 15}}>Restoring Luangwa Community Forests</Typography>
          </Card>
          <Box style={{margin: "25px 0"}}>
            <Box flexDirection="column" justifyContent="center" style={{marginRight: 15}}>
              <Box style={{width: 16, height: 16, backgroundColor: "#0B0F00", borderRadius: "50%"}}></Box>
              <Box style={{width: 12, height: 20, backgroundColor: "#D0FC4A"}}></Box>
              <Box style={{width: 16, height: 16, backgroundColor: "#0B0F00", borderRadius: "50%"}}></Box>
              <Box style={{width: 12, height: 20, backgroundColor: "#D0FC4A"}}></Box>
              <Box style={{width: 16, height: 16, backgroundColor: "#0B0F00", borderRadius: "50%"}}></Box>
              <Box style={{width: 12, height: 20, backgroundColor: "#D0FC4A"}}></Box>
              <Box style={{width: 16, height: 16, backgroundColor: "#0B0F00", borderRadius: "50%"}}></Box>
            </Box>
            <Box vertical>
              <Typography color="#4D5761" style={{marginBottom: 15}}>Proof of fulfiment submitted</Typography>
              <Typography color="#4D5761" style={{marginBottom: 15}}>Eligible to fulfill</Typography>
              <Typography color="#4D5761" style={{marginBottom: 15}}>Allocated</Typography>
              <Typography color="#4D5761">Created</Typography>
            </Box>
          </Box>
          <Box>
            <Button color="#4B48EC" fontColor="white">Download certificate</Button>
          </Box>
        </Box>
        <Box vertical style={{backgroundColor: "#0B0F00", borderRadius: "32px 0 0 32px", width: 915, height: 762, padding: "120px 0 120px 150px"}}>
          <Typography color="#D0FC4A" fontSize={72} fontWeight={600}>Certificate of Carbon Removal</Typography>
          <Typography color="#FFFFFF" fontSize={18} style={{marginTop: 10}}>Issued to Stir on Feb 01, 2023</Typography>
          <Typography color="#FFFFFF" fontSize={18} style={{marginTop: 70}}>This certificate is proof that</Typography>
          <Typography color="#FFFFFF" fontSize={48} fontWeight={500}>16 tonnes of CO2</Typography>
          <Typography color="#FFFFFF" fontSize={18}>were removed from the atmosphere thanks to your contribution</Typography>
          <Typography color="#FFFFFF" fontSize={18} style={{marginTop: 70}}>ORDER#</Typography>
          <Typography color="#FFFFFF" fontSize={24} fontWeight={500}>ACME9992342342</Typography>
        </Box>
      </Box>
    </Modal>
  )
}
