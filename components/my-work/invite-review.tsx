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

export default function InviteReview({ open, setOpen }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width="auto">
      <Typography fontSize="18px" fontWeight={600} color="#111927">Invitations sent</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Blablablabalbabl</Typography>
      <div style={{width: 1120, padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1'}}>
        <Box style={{backgroundColor: '#F9FAFB', padding: 20}}>
          <Image src="/icons/figma.png" alt="Avatar" width={56} height={56} style={{marginRight: 10}} />
          <Box vertical>
            <Typography color="#4D5761" fontSize={14}>Company</Typography>
            <Typography color="#111927" fontWeight={600}>Name of the project</Typography>
          </Box>
        </Box>
        <Table>
          <thead>
          <TableRow>
            <TableCol>Invited</TableCol>
            <TableCol>Invited to role</TableCol>
            <TableCol>Status</TableCol>
            <TableCol>Status</TableCol>
          </TableRow>
          </thead>
          <tbody>
          <TableRow>
            <TableCol style={{fontWeight: 600}}>
              <Box>
                <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />Maria long name
              </Box>
            </TableCol>
            <TableCol>
              <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label>
            </TableCol>
            <TableCol>
              <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontSize: 12, fontWeight: 500}}>Active</Label>
            </TableCol>
            <TableCol>
              <Label color="white" fontColor="#B42318" style={{border: "none", fontSize: 12, fontWeight: 600}}>Cancel invitation</Label>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol style={{fontWeight: 600}}>
              <Box>
                <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />Maria long name
              </Box>
            </TableCol>
            <TableCol>
              <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label>
            </TableCol>
            <TableCol>
              <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontSize: 12, fontWeight: 500}}>Active</Label>
            </TableCol>
            <TableCol>
              <Label color="white" fontColor="#B42318" style={{border: "none", fontSize: 12, fontWeight: 600}}>Cancel invitation</Label>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol style={{fontWeight: 600}}>
              <Box>
                <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />Maria long name
              </Box>
            </TableCol>
            <TableCol>
              <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label>
            </TableCol>
            <TableCol>
              <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontSize: 12, fontWeight: 500}}>Active</Label>
            </TableCol>
            <TableCol>
              <Label color="white" fontColor="#B42318" style={{border: "none", fontSize: 12, fontWeight: 600}}>Cancel invitation</Label>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol style={{fontWeight: 600}}>
              <Box>
                <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />Maria long name
              </Box>
            </TableCol>
            <TableCol>
              <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label>
            </TableCol>
            <TableCol>
              <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontSize: 12, fontWeight: 500}}>Active</Label>
            </TableCol>
            <TableCol>
              <Label color="white" fontColor="#B42318" style={{border: "none", fontSize: 12, fontWeight: 600}}>Cancel invitation</Label>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol style={{fontWeight: 600}}>
              <Box>
                <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />Maria long name
              </Box>
            </TableCol>
            <TableCol>
              <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label>
            </TableCol>
            <TableCol>
              <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontSize: 12, fontWeight: 500}}>Active</Label>
            </TableCol>
            <TableCol>
              <Label color="white" fontColor="#B42318" style={{border: "none", fontSize: 12, fontWeight: 600}}>Cancel invitation</Label>
            </TableCol>
          </TableRow>
          <TableRow>
            <TableCol style={{fontWeight: 600}}>
              <Box>
                <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />Maria long name
              </Box>
            </TableCol>
            <TableCol>
              <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label>
            </TableCol>
            <TableCol>
              <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontSize: 12, fontWeight: 500}}>Active</Label>
            </TableCol>
            <TableCol>
              <Label color="white" fontColor="#B42318" style={{border: "none", fontSize: 12, fontWeight: 600}}>Cancel invitation</Label>
            </TableCol>
          </TableRow>
          </tbody>
        </Table>
      </div>
    </Modal>
  )
}
