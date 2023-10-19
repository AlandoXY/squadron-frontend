import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Input from "@/components/input";
import IconButton from "@/components/icon-button";
import Textarea from "@/components/textarea";
import {useRouter} from "next/router";

export default function CompleteProfile({ open, setOpen, handleSubmit }) {
  const [aboutMeOpen, setAboutMeOpen] = useState(false)
  const [update, setUpdate] = useState(false)

  const router = useRouter()

  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400}>
      <Typography fontWeight={500} color={update ? '#027A48' : '#DC6803'}>{update ? '100% Completed' : '50% Completed'}</Typography>
      <Typography fontSize="18px" fontWeight={600} color="#111927" style={{marginTop: 5}}>Complete your profile</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Fill up the sections below to complete your profile</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box vertical>
          <Box onClick={() => setAboutMeOpen(true)} fullWidth justifyContent="space-between" style={{borderBottom: '1px solid #e1e1e1', paddingBottom: 15, marginBottom: 15}}>
            <Box vertical>
              <Typography fontWeight={500} color="#111927">About me</Typography>
              <Typography fontWeight={500} color="#4D5761">Intro about this (+10%)</Typography>
            </Box>
            <Box>
              {
                update ? <IconButton icon="/icons/check-circle.png" width={16.67} height={16.67} />:
                  <IconButton icon="/icons/arrow-right.png" width={10} height={16.25} onClick={() => setAboutMeOpen(true)} />
              }
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" style={{borderBottom: '1px solid #e1e1e1', paddingBottom: 15, marginBottom: 15}}>
            <Box vertical>
              <Typography fontWeight={500} color="#111927">Skills</Typography>
              <Typography fontWeight={500} color="#4D5761">Intro about this (+10%)</Typography>
            </Box>
            <Box>
              {
                update ? <IconButton icon="/icons/check-circle.png" width={16.67} height={16.67} />:
                  <IconButton icon="/icons/arrow-right.png" width={10} height={16.25} />
              }
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" style={{borderBottom: '1px solid #e1e1e1', paddingBottom: 15, marginBottom: 15}}>
            <Box vertical>
              <Typography fontWeight={500} color="#111927">Section</Typography>
              <Typography fontWeight={500} color="#4D5761">Intro about this (+10%)</Typography>
            </Box>
            <Box>
              {
                update ? <IconButton icon="/icons/check-circle.png" width={16.67} height={16.67} />:
                  <IconButton icon="/icons/arrow-right.png" width={10} height={16.25} />
              }
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" style={{borderBottom: '1px solid #e1e1e1', paddingBottom: 15, marginBottom: 15}}>
            <Box vertical>
              <Typography fontWeight={500} color="#111927">Section</Typography>
              <Typography fontWeight={500} color="#4D5761">Intro about this (+10%)</Typography>
            </Box>
            <Box>
              {
                update ? <IconButton icon="/icons/check-circle.png" width={16.67} height={16.67} />:
                  <IconButton icon="/icons/arrow-right.png" width={10} height={16.25} />
              }
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" style={{borderBottom: '1px solid #e1e1e1', paddingBottom: 15, marginBottom: 15}}>
            <Box vertical>
              <Typography fontWeight={500} color="#111927">Section</Typography>
              <Typography fontWeight={500} color="#4D5761">Intro about this (+10%)</Typography>
            </Box>
            <Box>
              {
                update ? <IconButton icon="/icons/check-circle.png" width={16.67} height={16.67} />:
                  <IconButton icon="/icons/arrow-right.png" width={10} height={16.25} />
              }
            </Box>
          </Box>
          <Box onClick={() => router.push('/apply-as-squad')} fullWidth justifyContent="space-between">
            <Box vertical>
              <Typography fontWeight={500} color="#111927">Section</Typography>
              <Typography fontWeight={500} color="#4D5761">Intro about this (+10%)</Typography>
            </Box>
            <Box>
              {
                update ? <IconButton icon="/icons/check-circle.png" width={16.67} height={16.67} />:
                  <IconButton icon="/icons/arrow-right.png" width={10} height={16.25} />
              }
            </Box>
          </Box>
        </Box>
      </div>
      <Modal open={aboutMeOpen} closeButton handleClose={() => setAboutMeOpen(false)} width={640}>
        <Typography fontSize="18px" fontWeight={600} color="#111927">About me</Typography>
        <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Description of this screen</Typography>
        <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
          <Box fullWidth vertical>
            <Typography fontWeight={500} color="#384250" fontSize={14} style={{marginBottom: 10}}>About me</Typography>
            <Textarea width="100%" height={120} withLimit={false} />
          </Box>
        </div>
        <Box fullWidth justifyContent="flex-end">
          <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setAboutMeOpen(false)}>Cancel</Button>
          <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}} onClick={() => {
            setAboutMeOpen(false)
            setUpdate(true)
          }}>Update</Button>
        </Box>
      </Modal>
    </Modal>
  )
}
