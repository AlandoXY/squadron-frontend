import React, {useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Typography from "@/components/typography";
import NavbarItem from "@/components/navbar-item";
import IconButton from "@/components/icon-button";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Link from "@/components/link";
import VideoPlayer from "@/components/video-player";
import Label from "@/components/label";
import Explanation from "@/components/explanation";
import Box from "@/components/box";
import Input from "@/components/input";
import {useRouter} from "next/navigation";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  background-color: #0B0F00;
  padding: 70px 10%;
  box-sizing: border-box;
`

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 150px 10%;
`

export default function Signup() {
  const router = useRouter()

  return (
    <Container>
      <LeftContainer>
        <IconButton width={32} height={32} fontSize="22px" fontColor="white" icon="/icons/logo-white.png">squadron</IconButton>
        <Box flexDirection="column" alignItem="flex-start" style={{marginTop: 75}}>
          <VideoPlayer url={"/videos/video.mp4"} width="100%" height="auto" />
          <Box flexDirection="column" style={{marginTop: 60}}>
            <Typography color="white" style={{marginBottom: 20}}>Lorem ipsum dolor sit</Typography>
            <Typography color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non scelerisque in augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non scelerisque in augue.</Typography>
          </Box>
        </Box>
      </LeftContainer>
      <RightContainer>
        <Typography color="#111927" fontSize="36px" fontWeight={600} style={{marginBottom: 20}}>Sign up</Typography>
        <Typography color="#6C737F">Start your 30-day free trial.</Typography>
        <Box style={{margin: "30px 0"}}>
          <IconButton onClick={() => router.push('email-verification')} width={24} height={24} style={{flex: 1, border: "1px solid #D2D6DB", marginRight: 10}} icon="/icons/google-only.png" />
          <IconButton width={24} height={24} style={{flex: 1, border: "1px solid #D2D6DB"}} icon="/icons/in.png" />
        </Box>
        <Box style={{marginBottom: 30}}>
          <Box style={{flex: 1, borderTop: "1px solid #E5E7EB"}} />
          <Typography style={{margin: "0 10px"}} color="#4D5761" fontSize="14px">or use your email</Typography>
          <Box style={{flex: 1, borderTop: "1px solid #E5E7EB"}} />
        </Box>
        <Box flexDirection="column" alignItem="flex-start">
          <Box style={{width: '100%', marginBottom: 20}}>
            <Box flexDirection="column" alignItem="flex-start" style={{flex: 1, marginRight: 15}}>
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>Name*</Typography>
              <Input placeholder="Enter your name" fullWidth />
            </Box>
            <Box flexDirection="column" alignItem="flex-start" style={{flex: 1}}>
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>Last name*</Typography>
              <Input placeholder="Enter your last name" fullWidth />
            </Box>
          </Box>
          <Box style={{width: '100%', marginBottom: 20}}>
            <Box flexDirection="column" alignItem="flex-start" style={{flex: 1}}>
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>Email*</Typography>
              <Input placeholder="Enter your email" fullWidth />
            </Box>
          </Box>
          <Box style={{width: '100%', marginBottom: 20}}>
            <Box flexDirection="column" alignItem="flex-start" style={{flex: 1}}>
              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>Password*</Typography>
              <Input placeholder="Create a password" fullWidth />
              <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Must be at least 8 characters.</Typography>
            </Box>
          </Box>
          <Box style={{width: '100%', marginBottom: 30}}>
            <Button color="#4B48EC" fontColor="white" fullWidth style={{height: 40}} onClick={() => router.push('/location-type')}>Create an Account</Button>
          </Box>
          <Box style={{width: '100%'}} justifyContent="center">
            <Typography color="#4D5761" fontSize="14px">Already have an account?</Typography>
            <Typography color="#1B18E4" fontSize="14px" fontWeight={600}>Log in</Typography>
          </Box>
        </Box>
      </RightContainer>
    </Container>
  )
}
