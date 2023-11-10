import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Dropdown from "@/components/dropdown";
import IconButton from "@/components/icon-button";
import Input from "@/components/input";
import Label from "@/components/label";
import Image from "next/image";
import Textarea from "@/components/textarea";
import styled from "styled-components";

const Section1Top = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  background-color: #0B0F00;
  width: 100%;
  padding: 20px 30px;
  border-radius: 12px 12px 0 0;
`

const Section1TopRight = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
`

const Section1Content = styled.div`
  display: flex;
  padding: 20px;
`

const Section1ContentLeft = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  margin-right: 50px;
`

const Section1ContentRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  border-left: 1px solid #EAECF0;
`

export default function ViewProject({ open, setOpen }) {
  return (
    <Modal open={open} handleClose={() => setOpen(false)} width={1000} style={{padding: 0}}>
      <Section1Top>
        <div>
          <Typography color="white" fontSize="30px" fontWeight={500} style={{marginBottom: 15}}>Project Name</Typography>
          <Typography color="white">2020 - 2020</Typography>
        </div>
        <Section1TopRight>
          <IconButton icon="/icons/share-07.png" width={20} height={20} />
        </Section1TopRight>
      </Section1Top>
      <Section1Content>
        <Section1ContentLeft>
          <Box flexDirection="column" alignItem="flex-start" style={{marginBottom: 20}}>
            <Box fullWidth justifyContent="space-between">
              <Typography color="#111927" fontSize="18px" fontWeight={500}>My Role</Typography>
            </Box>
            <Box flexDirection="column" alignItem="flex-start" style={{marginTop: 10}}>
              <Typography color="#475467" fontSize="14px">UX Designer</Typography>
            </Box>
          </Box>
          <Box flexDirection="column" alignItem="flex-start" style={{marginBottom: 20}}>
            <Box fullWidth justifyContent="space-between">
              <Typography color="#111927" fontSize="18px" fontWeight={500}>Links to the project</Typography>
            </Box>
            <Box style={{marginTop: 10}}>
              <IconButton icon="/icons/link-in.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
              <IconButton icon="/icons/at.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
              <IconButton icon="/icons/twitter.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
            </Box>
          </Box>
        </Section1ContentLeft>
        <Section1ContentRight>
          <Box justifyContent="space-between" style={{marginBottom: 20}}>
            <Typography component="h2" fontWeight={600} fontSize="18px">Description</Typography>
          </Box>
          <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
          <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
          <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>

          <Box justifyContent="space-between" style={{margin: "20px 0"}}>
            <Typography component="h2" fontWeight={600} fontSize="18px">Squad members</Typography>
          </Box>
          <Box style={{gap: 15}}>
            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
          </Box>
        </Section1ContentRight>
      </Section1Content>
    </Modal>
  )
}
