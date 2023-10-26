import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Input from "@/components/input";
import IconButton from "@/components/icon-button";
import Textarea from "@/components/textarea";
import Label from "@/components/label";
import Image from "next/image";
import {useRouter} from "next/router";

export default function RequirementsDontMatch({ open, setOpen, handleSubmit }) {
  const [skillOpen, setSkillOpen] = useState(false)
  const [toolOpen, setToolOpen] = useState(false)
  const [locationOpen, setLocationOpen] = useState(false)
  const [update, setUpdate] = useState(false)
  const router = useRouter()

  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={400}>
      <Typography fontSize="18px" fontWeight={600} color="#111927" style={{marginTop: 5}}>Blablabla missing</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Some of the mandatory requirements don’t match your profile</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box vertical>
          <Box onClick={() => setSkillOpen(true)} fullWidth justifyContent="space-between" style={{borderBottom: '1px solid #e1e1e1', paddingBottom: 15, marginBottom: 15}}>
            <Box vertical>
              <Typography fontWeight={500} color="#111927">Skills required</Typography>
              {!update && <Typography fontSize={14} color="#B42318">3 skills missing</Typography>}
            </Box>
            <Box>
              {
                update ? <IconButton icon="/icons/check-circle.png" width={20} height={20} /> : <Button color="white" fontColor="#1B18E4" style={{fontWeight: 600}}>Update</Button>
              }
            </Box>
          </Box>
          <Box onClick={() => setToolOpen(true)} fullWidth justifyContent="space-between" style={{borderBottom: '1px solid #e1e1e1', paddingBottom: 15, marginBottom: 15}}>
            <Box vertical>
              <Typography fontWeight={500} color="#111927">Tools required</Typography>
              {!update && <Typography fontSize={14} color="#B42318">2 tools missing</Typography>}
            </Box>
            <Box>
              {
                update ? <IconButton icon="/icons/check-circle.png" width={20} height={20} /> : <Button color="white" fontColor="#1B18E4" style={{fontWeight: 600}}>Update</Button>
              }
            </Box>
          </Box>
          <Box onClick={() => setLocationOpen(true)} fullWidth justifyContent="space-between">
            <Box vertical>
              <Typography fontWeight={500} color="#111927">Location</Typography>
              {!update && <Typography fontSize={14} color="#B42318">The location is restricted to one country</Typography>}
            </Box>
            <Box>
              {
                update ? <IconButton icon="/icons/check-circle.png" width={20} height={20} /> : <Button color="white" fontColor="#1B18E4" style={{fontWeight: 600}}>Update</Button>
              }
            </Box>
          </Box>
        </Box>
      </div>
      <Box fullWidth justifyContent="flex-end" style={{marginTop: 30}}>
        <Button color="white" style={{flex: 1, border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#4B48EC" fontColor="white" style={{flex: 1, marginLeft: 10}} onClick={() => router.push('/application-apply')}>Next</Button>
      </Box>
      <Modal open={skillOpen} closeButton handleClose={() => setSkillOpen(false)} width={500}>
        <Typography fontSize="18px" fontWeight={600} color="#111927">Required Skills missing</Typography>
        <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Copy about mandatory skills missing</Typography>
        <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
          <Box fullWidth style={{gap: 10}}>
            <Label>Label</Label>
            <Label>UX Design</Label>
            <Label>Skill</Label>
          </Box>
        </div>
        <Box fullWidth justifyContent="space-between">
          <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setSkillOpen(false)}>I don’t have these skills</Button>
          <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}} onClick={() => {
            setSkillOpen(false)
            setUpdate(true)
          }}>Add skills</Button>
        </Box>
      </Modal>
      <Modal open={toolOpen} closeButton handleClose={() => setToolOpen(false)} width={500}>
        <Typography fontSize="18px" fontWeight={600} color="#111927">Required Tools missing</Typography>
        <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Copy about mandatory tools missing</Typography>
        <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
          <Box fullWidth style={{gap: 10}}>
            <Label icon="/icons/ps.png">Label</Label>
            <Label icon="/icons/ps.png">UX Design</Label>
            <Label icon="/icons/ps.png">Skill</Label>
          </Box>
        </div>
        <Box fullWidth justifyContent="space-between">
          <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setToolOpen(false)}>I don’t have these tools</Button>
          <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}} onClick={() => {
            setToolOpen(false)
            setUpdate(true)
          }}>Add tools</Button>
        </Box>
      </Modal>
      <Modal open={locationOpen} closeButton handleClose={() => setLocationOpen(false)} width={500}>
        <Typography fontSize="18px" fontWeight={600} color="#111927">Title about location mistmatch</Typography>
        <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Copy about mandatory tools missing</Typography>
        <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
          <Box fullWidth style={{gap: 10}}>
            <Image src="/icons/spain.png" alt="Spain" width={48} height={48} />
            <Box vertical>
              <Typography fontWeight={500} color="#111927">Barcelona</Typography>
              <Typography fontSize={14} color="#4D5761">Spain</Typography>
            </Box>
          </Box>
        </div>
        <Box fullWidth justifyContent="space-between">
          <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setLocationOpen(false)}>I don’t live here</Button>
          <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}} onClick={() => {
            setLocationOpen(false)
            setUpdate(true)
          }}>Update my location</Button>
        </Box>
      </Modal>
    </Modal>
  )
}
