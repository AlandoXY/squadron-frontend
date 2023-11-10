import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "@/components/header";
import Box from "@/components/box";
import Image from "next/image";
import Typography from "@/components/typography";
import {B} from "msw/lib/glossary-de6278a9";
import Button from "@/components/button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f9fafb;
`

const ContentMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 50px;
  background: linear-gradient(to right, #6f2fe5, #4cb0cd);
  min-height: calc(100vh - 80px);
`

export default function ClaimPerk() {
  return (
    <Container>
      <Header />
      <Content>
        <ContentMain>
          <Box vertical>
            <Typography color="white" fontSize={72} fontWeight={600} style={{width: 500, marginBottom: 50}}>Lorem ipsum dolor sit amet consectetur.</Typography>
            <Button color="#01C0CD" fontColor="#000000" width="280px" height="44px" style={{fontWeight: 600}}>Claim perk</Button>
          </Box>
          <Image src="/images/claim-perk.png" alt="Claim Perk" width={808} height={546} />
        </ContentMain>
      </Content>
    </Container>
  )
}
