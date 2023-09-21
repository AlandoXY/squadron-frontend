import styled from "styled-components";
import IconButton from "@/components/icon-button";
import React, {useState} from "react";
import Button from "@/components/button";
import Box from "@/components/box";
import Typography from "@/components/typography";
import Image from "next/image";
import {useRouter} from "next/navigation";

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

export default function EmailVerification() {
  return (
    <HomeContainer>
      <Header>
        <Box>
          <IconButton width={40} height={40} fontSize="20px" icon="/icons/logo.png">squadron</IconButton>
        </Box>
      </Header>
      <Box flexDirection="column" justifyContent="center" style={{minHeight: 'calc(100vh - 80px)', margin: "-100px auto", width: 550}}>
        <Image src="/icons/email.png" alt="Email" width={64} height={64} />
        <Typography color="#111927" fontWeight={600} fontSize="38px" style={{margin: "22px 0 20px"}}>Check your email</Typography>
        <Typography color="#4D5761" style={{marginBottom: 50, textAlign: 'center'}}>A verification link has been sent to your email.  Please click the link and verify your account to proceed to next step.</Typography>
        <Box>
          <Typography color="#4D5761" style={{marginRight: 5}}>If you have not recieved the email in 60s, please</Typography>
          <Typography color="#4B48EC" fontWeight={600}>click here</Typography>
        </Box>
      </Box>
    </HomeContainer>
  );
}
