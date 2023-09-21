import styled from "styled-components";
import IconButton from "@/components/icon-button";
import React, {useState} from "react";
import Button from "@/components/button";
import Box from "@/components/box";
import Typography from "@/components/typography";
import Image from "next/image";
import {useRouter} from "next/navigation";
import { userAgent } from "next/server";

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

export default function JoinSuccess() {
  const router = useRouter()
  return (
    <HomeContainer>
      <Header>
        <Box>
          <IconButton width={40} height={40} fontSize="20px" icon="/icons/logo.png">squadron</IconButton>
        </Box>
      </Header>
      <Box flexDirection="column" justifyContent="center" style={{minHeight: 'calc(100vh - 80px)', margin: "-100px auto", width: 550}}>
        <Image src="/icons/love.png" alt="Email" width={64} height={64} />
        <Typography color="#111927" fontWeight={600} fontSize="38px" style={{margin: "22px 0 20px"}}>Thank you for joining us</Typography>
        <Typography color="#4D5761" style={{marginBottom: 50, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci massa mauris justo, urna et feugiat sagittis et. Aliquet amet suspendisse tellus ultrices hac id imperdiet. Pellentesque sit sit suspendisse at. Mauris duis pharetra dictum aenean ac sed amet.</Typography>
        <Box>
          <Button onClick={() => router.push('profile-setup')} color="#4B48EC" fontColor="white" width="384px" height="44px">Build my profile now</Button>
        </Box>
        <Box style={{marginTop: 50}}>
          <Typography color="#4B48EC" fontWeight={600}>Skip</Typography>
        </Box>
      </Box>
    </HomeContainer>
  );
}
