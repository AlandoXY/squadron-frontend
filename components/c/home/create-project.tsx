import Typography from "@/components/typography";
import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Image from "next/image";
import Input from "@/components/input";
import Button from "@/components/button";
import Textarea from "@/components/textarea";
import styled from "styled-components";
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

export default function CreateProject({ open, setOpen }) {

  const [selectedPreset, setSelectedPreset] = useState("")
  const router = useRouter()

  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={680}>
      <Typography fontSize="18px" fontWeight={600} color="#111927">Squad Presets</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Select a preset to see recommended roles appear, or build your custom squad from scratch. Don’t worry, you can always add or remove roles in the next step.</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box vertical style={{gap: 15}}>
          <Box fullWidth style={{gap: 15}}>
            <Card style={{padding: 8, flexDirection: "column", justifyContent: "center", alignItems: "center", border: selectedPreset === "1" ? "2px solid #0B0F00" : "2px solid transparent"}} onClick={() => setSelectedPreset("1")}>
              <Input type="radio" name="presets" noBorder width="auto" height="auto" value="1" checked={selectedPreset === "1"} onChange={(e) => setSelectedPreset(e.target.value)} />
              <Image src="/icons/customize.png" alt="Customize" width={32} height={32} style={{margin: "5px 0 10px"}} />
              <Typography color="#111927" fontWeight={500} fontSize={14}>Custom</Typography>
            </Card>
            <Card style={{padding: 8, flexDirection: "column", justifyContent: "center", alignItems: "center", border: selectedPreset === "2" ? "2px solid #0B0F00" : "2px solid transparent"}} onClick={() => setSelectedPreset("2")}>
              <Input type="radio" name="presets" noBorder width="auto" height="auto" value="2" checked={selectedPreset === "2"} onChange={(e) => setSelectedPreset(e.target.value)} />
              <Image src="/icons/world-wide-web.png" alt="Customize" width={32} height={32} style={{margin: "5px 0 10px"}} />
              <Typography color="#111927" fontWeight={500} fontSize={14}>Web Platform</Typography>
            </Card>
            <Card style={{padding: 8, flexDirection: "column", justifyContent: "center", alignItems: "center", border: selectedPreset === "3" ? "2px solid #0B0F00" : "2px solid transparent"}} onClick={() => setSelectedPreset("3")}>
              <Input type="radio" name="presets" noBorder width="auto" height="auto" value="3" checked={selectedPreset === "3"} onChange={(e) => setSelectedPreset(e.target.value)} />
              <Image src="/icons/mobile-phone.png" alt="Customize" width={32} height={32} style={{margin: "5px 0 10px"}} />
              <Typography color="#111927" fontWeight={500} fontSize={14}>Mobile App</Typography>
            </Card>
          </Box>
          <Box fullWidth style={{gap: 15}}>
            <Card style={{padding: 8, flexDirection: "column", justifyContent: "center", alignItems: "center", border: selectedPreset === "4" ? "2px solid #0B0F00" : "2px solid transparent"}} onClick={() => setSelectedPreset("4")}>
              <Input type="radio" name="presets" noBorder width="auto" height="auto" value="4" checked={selectedPreset === "4"} onChange={(e) => setSelectedPreset(e.target.value)} />
              <Image src="/icons/noise.png" alt="Customize" width={32} height={32} style={{margin: "5px 0 10px"}} />
              <Typography color="#111927" fontWeight={500} fontSize={14}>Marketing Website</Typography>
            </Card>
            <Card style={{padding: 8, flexDirection: "column", justifyContent: "center", alignItems: "center", border: selectedPreset === "5" ? "2px solid #0B0F00" : "2px solid transparent"}} onClick={() => setSelectedPreset("5")}>
              <Input type="radio" name="presets" noBorder width="auto" height="auto" value="5" checked={selectedPreset === "5"} onChange={(e) => setSelectedPreset(e.target.value)} />
              <Image src="/icons/statistics.png" alt="Customize" width={32} height={32} style={{margin: "5px 0 10px"}} />
              <Typography color="#111927" fontWeight={500} fontSize={14}>Growth</Typography>
            </Card>
            <Card style={{padding: 8, flexDirection: "column", justifyContent: "center", alignItems: "center", border: selectedPreset === "6" ? "2px solid #0B0F00" : "2px solid transparent"}} onClick={() => setSelectedPreset("6")}>
              <Input type="radio" name="presets" noBorder width="auto" height="auto" value="6" checked={selectedPreset === "6"} onChange={(e) => setSelectedPreset(e.target.value)} />
              <Image src="/icons/data-management.png" alt="Customize" width={32} height={32} style={{margin: "5px 0 10px"}} />
              <Typography color="#111927" fontWeight={500} fontSize={14}>Data</Typography>
            </Card>
          </Box>
        </Box>
      </div>
      <Box justifyContent="flex-end">
        <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}} disabled={!selectedPreset} onClick={() => router.push('/c/project-setup')}>Next</Button>
      </Box>
    </Modal>
  )
}
