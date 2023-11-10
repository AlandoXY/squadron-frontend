import Typography from "@/components/typography";
import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Image from "next/image";
import Label from "@/components/label";
import styled from "styled-components";
import Button from "@/components/button";
import Textarea from "@/components/textarea";
import {useRouter} from "next/navigation";

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

export default function EditProjectConfirm({ open, setOpen }) {

  const router = useRouter()

  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400}>
      <div style={{padding: "20px 0", margin: "20px 0", borderBottom: '1px solid #e1e1e1'}}>
        <Box flexDirection="column" justifyContent="center">
          <Image src="/icons/info-group.png" alt="Info" width={48} height={48} />
          <Typography color="#101828" fontSize={18} fontWeight={600} style={{marginBottom: 5, marginTop: 15}}>Edit project</Typography>
          <Typography color="#475467" style={{textAlign: "center"}}>We have already started collecting applicants. You shouldn’t blablablabal</Typography>
        </Box>
      </div>
      <Box>
        <Button color="white" style={{border: '1px solid #D2D6DB', flex: 1}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#111927" fontColor="white" style={{marginLeft: 10, flex: 1}} onClick={() => router.push('/c/project-setup')}>Confirm</Button>
      </Box>
    </Modal>
  )
}
