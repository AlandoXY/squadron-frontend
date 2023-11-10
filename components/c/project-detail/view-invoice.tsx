import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Button from "@/components/button";
import Image from "next/image";
import Typography from "@/components/typography";

export default function ViewInvoice({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={600} style={{padding: 0}}>
      <Box style={{backgroundColor: "#0B0F00", padding: 24}}>
        <Typography color="#D0FC4A" fontSize={18} fontWeight={600}>Invoice #01</Typography>
      </Box>
      <div style={{margin: "25px 20px"}}>
        <Box vertical style={{backgroundColor: "#F3F4F6", borderRadius: 8, padding: "8px 16px"}}>
          <Box fullWidth justifyContent="space-between" style={{marginBottom: 10}}>
            <Typography color="#1F2A37" fontWeight={500}>Invoice number</Typography>
            <Typography color="#1F2A37">#01</Typography>
          </Box>
          <Box fullWidth justifyContent="space-between" style={{marginBottom: 10}}>
            <Typography color="#1F2A37" fontWeight={500}>Date of issue</Typography>
            <Typography color="#1F2A37">12/12/23</Typography>
          </Box>
          <Box fullWidth justifyContent="space-between" style={{marginBottom: 10}}>
            <Typography color="#1F2A37" fontWeight={500}>Payment due on</Typography>
            <Typography color="#1F2A37">24/12/23</Typography>
          </Box>
          <Box fullWidth justifyContent="space-between">
            <Typography color="#1F2A37" fontWeight={500}>Summary for period</Typography>
            <Typography color="#1F2A37">1/12/2023 - 31/12/23</Typography>
          </Box>
        </Box>
        <Box style={{marginTop: 20, gap: 20}}>
          <Box vertical style={{flex: 1}}>
            <Typography color="black" fontWeight={500} style={{marginBottom: 10}}>Invoice from:</Typography>
            <Box fullWidth vertical style={{backgroundColor: "#F3F4F6", borderRadius: 8, padding: "8px 16px"}}>
              <Box fullWidth justifyContent="space-between" style={{marginBottom: 10}}>
                <Typography color="#1F2A37">Squadron Holdings Pty Ltd</Typography>
              </Box>
              <Box fullWidth justifyContent="space-between" style={{marginBottom: 10}}>
                <Typography color="#1F2A37">Sydney</Typography>
              </Box>
              <Box fullWidth justifyContent="space-between" style={{marginBottom: 10}}>
                <Typography color="#1F2A37">Australia</Typography>
              </Box>
            </Box>
          </Box>
          <Box vertical style={{flex: 1}}>
            <Typography color="black" fontWeight={500} style={{marginBottom: 10}}>Invoice from:</Typography>
            <Box fullWidth vertical style={{backgroundColor: "#F3F4F6", borderRadius: 8, padding: "8px 16px"}}>
              <Box fullWidth justifyContent="space-between" style={{marginBottom: 10}}>
                <Typography color="#1F2A37">Antonio Hidalgo</Typography>
              </Box>
              <Box fullWidth justifyContent="space-between" style={{marginBottom: 10}}>
                <Typography color="#1F2A37">N1532D, London</Typography>
              </Box>
              <Box fullWidth justifyContent="space-between" style={{marginBottom: 10}}>
                <Typography color="#1F2A37">United Kingdom</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
      <Box justifyContent="flex-end" style={{padding: 20, borderTop: "1px solid #EAECF0"}}>
        <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Close</Button>
        <Button color="#111927" fontColor="white" style={{marginLeft: 10}} onClick={() => setOpen(false)}>Download</Button>
      </Box>
    </Modal>
  )
}
