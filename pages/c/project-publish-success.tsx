import styled from "styled-components";
import IconButton from "@/components/icon-button";
import React, {useState} from "react";
import Button from "@/components/button";
import Box from "@/components/box";
import Typography from "@/components/typography";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Input from "@/components/input";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 100px;
  border: 1px solid #F3F4F6;
  color: #4D5761;
`;

export default function ProjectPublishSuccess() {

  const router = useRouter();

  return (
    <HomeContainer>
      <Header>
        <Box>
          <IconButton width={40} height={40} fontSize="20px" icon="/icons/logo.png">squadron</IconButton>
        </Box>
      </Header>
      <Box flexDirection="column" justifyContent="center" style={{minHeight: 'calc(100vh - 160px)', margin: "0 auto", width: 550}}>
        <Image src="/icons/love.png" alt="Email" width={64} height={64} />
        <Typography color="#111927" fontWeight={600} fontSize="38px" style={{margin: "22px 0 20px"}}>Your project is now live!</Typography>
        <Typography color="#4D5761" style={{marginBottom: 50, textAlign: 'center'}}>Talent will now be able to view and apply to your mission. It will take up to 72 hours for your first squads to be suggested.</Typography>
        <Box>
          <Typography color="#4D5761" fontWeight={500}>Start sharing it! </Typography>
        </Box>
        <Box style={{marginTop: 50}}>
          <Input placeholder="www.squadronexamplelink.com" width={300} containerRest={{style: {borderRadius: "6px 0 0 6px"}}} />
          <Button color="white" height="2.85rem" style={{borderWidth: 1, borderRadius: "0 8px 8px 0", borderColor: "#D2D6DB", borderStyle: "solid", borderLeft: 0}}>Copy</Button>
        </Box>
        <Button color="#4B48EC" fontColor="white" width="384px" height="40px" style={{margin: "50px 0 30px"}} onClick={() => router.push('/c/project-details')}>See project</Button>
        <Button color="white" fontColor="#384250" width="384px" height="40px" style={{border: "1px solid #D2D6DB"}} onClick={() => router.push('/c/home')}>Home</Button>
      </Box>
    </HomeContainer>
  );
}

