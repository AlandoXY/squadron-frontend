import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import NavbarItem from "@/components/navbar-item";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Image from "next/image";
import Typography from "@/components/typography";
import Input from "@/components/input";

export default function UploadVideo({ open, setOpen, handleSubmit }) {
  const [active, setActive] = useState(0);

  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={650} style={{padding: 0}}>
      <Box style={{height: 487}}>
        <Box alignItem="flex-start" style={{backgroundColor: "#F3F4F6", height: "100%", padding: "20px 10px"}}>
          <Navbar>
            <NavbarItem active={active === 0} activeColor="#E5E7EB">
              <Button fullWidth color="inherit" onClick={() => setActive(0)}>Upload video</Button>
            </NavbarItem>
            <NavbarItem active={active === 1} activeColor="#E5E7EB">
              <Button fullWidth color="inherit" onClick={() => setActive(1)}>Record video</Button>
            </NavbarItem>
            <NavbarItem active={active === 2} activeColor="#E5E7EB">
              <Button fullWidth color="inherit" onClick={() => setActive(2)}>Video URL</Button>
            </NavbarItem>
          </Navbar>
        </Box>
        <Box justifyContent="center" style={{flex: 1}}>
          {
            active === 0 && (
              <Box flexDirection="column" justifyContent="center" style={{border: "1px solid #E5E7EB", borderRadius: 12, padding: "16px 24px", width: "75%"}} onClick={() => handleSubmit()}>
                <Box justifyContent="center" style={{width: 40, height: 40, backgroundColor: "#D0FC4A", borderRadius: "50%"}}>
                  <Image src="/icons/plus-purple.png" alt="Plus" width={18} height={18} />
                </Box>
                <Box style={{margin: "10px 0"}}>
                  <Typography color="#1B18E4" fontWeight={600} fontSize={14} style={{marginRight: 5}}>Click to upload</Typography>
                  <Typography color="#4D5761" fontSize={14}>or drag and drop</Typography>
                </Box>
                <Typography color="#4D5761" fontSize={12}>format requirements</Typography>
              </Box>
            )
          }
          {
            active === 1 && (
              <Box flexDirection="column" justifyContent="center" style={{width: "75%"}}>
                <Image src="/images/video-record.png" alt="Video Record" width="328" height={226} />
                <Box justifyContent="flex-end" style={{marginTop: 20, width: 328}}>
                  <Button color="#4B48EC" fontColor="white" onClick={() => handleSubmit()}>Record</Button>
                </Box>
              </Box>
            )
          }
          {
            active === 2 && (
              <Box flexDirection="column" alignItem="flex-start" style={{width: "75%"}}>
                <Typography color="#384250" fontWeight={500} fontSize={14} style={{marginBottom: 10}}>Video URL</Typography>
                <Input placeholder="olivia@untitledui.com" fullWidth />
                <Box fullWidth justifyContent="flex-end" style={{marginTop: 15}}>
                  <Button color="#4B48EC" fontColor="white" onClick={() => handleSubmit()}>Submit</Button>
                </Box>
              </Box>
            )
          }
        </Box>
      </Box>
    </Modal>
  )
}
