import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Textarea from "@/components/textarea";
import Box from "@/components/box";
import Image from "next/image";
import TableRow from "@/components/table-row";
import TableCol from "@/components/table-col";
import Label from "@/components/label";
import Table from "@/components/table";
import {useRouter} from "next/navigation";

export default function ContactSigned({ open, setOpen }) {

  const router = useRouter()

  return (
    <Modal open={open} handleClose={() => setOpen(false)} width={400}>
      <Box flexDirection="column" justifyContent="center" style={{padding: "20px 0", margin: "20px 0 0"}}>
        <Image src="/icons/party-popper.png" alt="Party popper" width={80} height={80} />
        <Box flexDirection="column" justifyContent="center" style={{margin: "20px 0"}}>
          <Typography color="#101828" fontWeight={600} fontSize={18} style={{marginBottom: 10}}>Contract signed</Typography>
          <Typography color="#475467" fontSize={14}>Blablablablabla</Typography>
        </Box>
        <Box fullWidth style={{marginTop: 0, paddingTop: 20, borderTop: "1px solid #EAECF0"}}>
          <Button fullWidth color="#111927" fontColor="#ffffff" onClick={() => router.push('/project-details')}>Let’s go!</Button>
        </Box>
      </Box>
    </Modal>
  )
}
