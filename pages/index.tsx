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

const HeaderMenus = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderMenuItem = styled.div`
  color: #4D5761;
  margin: 20px;
`;

export default function Home() {
  const router = useRouter()

  return (
    <HomeContainer>
      <Header>
        <Box>
          <IconButton width={40} height={40} fontSize="20px" icon="/icons/logo.png">squadron</IconButton>
          <HeaderMenus>
            <HeaderMenuItem>Home</HeaderMenuItem>
            <HeaderMenuItem>Products</HeaderMenuItem>
            <HeaderMenuItem>Resources</HeaderMenuItem>
            <HeaderMenuItem>Pricing</HeaderMenuItem>
          </HeaderMenus>
        </Box>
        <Box>
          <Button style={{marginRight: 10}} color="transparent" onClick={() => router.push('c/location-type')} >Log in</Button>
          <Button color="#111927" fontColor="white" onClick={() => router.push('signup')}>Sign up</Button>
        </Box>
      </Header>
      <Box justifyContent="center" style={{minHeight: 'calc(100vh - 80px)'}}>
        <Box flexDirection="column" alignItem="flex-start" style={{width: 550, marginTop: -100}}>
          <Typography fontWeight={600} fontSize="60px" color="#111927" style={{lineHeight: "72px"}}>Lorem ipsum dolor sit amet.</Typography>
          <Typography color="#4D5761" fontSize="20px" style={{width: 450, margin: "20px 0 50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ultrices facilisis libero.</Typography>
          <Button color="#4B48EC" fontColor="white" style={{width: 198, height: 60, fontSize: 18}}>Find your Squad</Button>
        </Box>
        <Box style={{marginTop: -100}}>
          <Image src="/icons/home.png" alt="Home" width={600} height={550} />
        </Box>
      </Box>
    </HomeContainer>
  );
}
