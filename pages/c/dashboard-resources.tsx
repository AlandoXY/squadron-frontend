import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";
import Box from "@/components/box";
import Input from "@/components/input";

import {AsideBar} from "@/components/aside-bar";
import {DashboardHeader} from "@/components/dashboard-header";
import {useRouter} from "next/navigation";
import {AsideBarC} from "@/components/aside-bar-c";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  width: 312px;
  border-right: 1px solid #E5E7EB;
  align-items: flex-start;
`

const AsideTop = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 20px 10px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f9fafb;
  //padding: 0 20px;
`

const ContentMain = styled.div`
  width: 100%;
  //padding: 0 20px;
  background-color: white;
`

export default function DashboardResourcesC() {

  const router = useRouter();

  return (
    <Container>
      <AsideBarC />
      <Content>
        <DashboardHeader />
        <ContentMain>
          <Box vertical style={{backgroundColor: "black", padding: 30}}>
            <Typography color="white" fontSize={30} fontWeight={600}>Resources</Typography>
            <Typography color="white" style={{margin: "10px 0 30px"}}>Find a solution for any topic</Typography>
            <Input placeholder="Search any topic" prefixIcon="/icons/search-lg.png" width={400} style={{height: 15}} />
          </Box>
          <Box style={{flexWrap: 'wrap', gap: 30, padding: "40px 40px 10px"}}>
            <Box flexDirection="column" alignItem="center" style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 8, padding: 16, backgroundColor: "#F9FAFB"}} onClick={() => router.push('/c/dashboard-resources-section')}>
              <Image src="/icons/logo.png" alt="Logo" width={48} height={48} />
              <Typography color="#111927" fontSize={24} fontWeight={500}>Section 01</Typography>
            </Box>
            <Box flexDirection="column" alignItem="center" style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 8, padding: 16, backgroundColor: "#F9FAFB"}} onClick={() => router.push('/c/dashboard-resources-section')}>
              <Image src="/icons/logo.png" alt="Logo" width={48} height={48} />
              <Typography color="#111927" fontSize={24} fontWeight={500}>Section 01</Typography>
            </Box>
            <Box flexDirection="column" alignItem="center" style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 8, padding: 16, backgroundColor: "#F9FAFB"}} onClick={() => router.push('/c/dashboard-resources-section')}>
              <Image src="/icons/logo.png" alt="Logo" width={48} height={48} />
              <Typography color="#111927" fontSize={24} fontWeight={500}>Section 01</Typography>
            </Box>
            <Box flexDirection="column" alignItem="center" style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 8, padding: 16, backgroundColor: "#F9FAFB"}} onClick={() => router.push('/c/dashboard-resources-section')}>
              <Image src="/icons/logo.png" alt="Logo" width={48} height={48} />
              <Typography color="#111927" fontSize={24} fontWeight={500}>Section 01</Typography>
            </Box>
          </Box>
          <Box style={{flexWrap: 'wrap', gap: 30, padding: "10px 40px 40px"}}>
            <Box flexDirection="column" alignItem="center" style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 8, padding: 16, backgroundColor: "#F9FAFB"}} onClick={() => router.push('/c/dashboard-resources-section')}>
              <Image src="/icons/logo.png" alt="Logo" width={48} height={48} />
              <Typography color="#111927" fontSize={24} fontWeight={500}>Section 01</Typography>
            </Box>
            <Box flexDirection="column" alignItem="center" style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 8, padding: 16, backgroundColor: "#F9FAFB"}} onClick={() => router.push('/c/dashboard-resources-section')}>
              <Image src="/icons/logo.png" alt="Logo" width={48} height={48} />
              <Typography color="#111927" fontSize={24} fontWeight={500}>Section 01</Typography>
            </Box>
            <Box flexDirection="column" alignItem="center" style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 8, padding: 16, backgroundColor: "#F9FAFB"}} onClick={() => router.push('/c/dashboard-resources-section')}>
              <Image src="/icons/logo.png" alt="Logo" width={48} height={48} />
              <Typography color="#111927" fontSize={24} fontWeight={500}>Section 01</Typography>
            </Box>
            <Box flexDirection="column" alignItem="center" style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 8, padding: 16, backgroundColor: "#F9FAFB"}} onClick={() => router.push('/c/dashboard-resources-section')}>
              <Image src="/icons/logo.png" alt="Logo" width={48} height={48} />
              <Typography color="#111927" fontSize={24} fontWeight={500}>Section 01</Typography>
            </Box>
          </Box>
          <Box vertical style={{padding: 30, borderTop: "1px solid #E5E7EB", marginTop: 30}}>
            <Typography color="#111927" fontSize={24} fontWeight={500} style={{textAlign: 'center', width: '100%'}}>FAQ</Typography>
            <Box vertical fullWidth style={{marginBottom: 10}}>
              <Box fullWidth justifyContent="space-between">
                <Typography color="#111927" fontSize={18} fontWeight={500}>Question</Typography>
                <IconButton icon="/icons/minus-circle.png" width={25} height={25} />
              </Box>
              <Typography color="#4D5761">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</Typography>
            </Box>
            <Box vertical fullWidth style={{marginBottom: 10}}>
              <Box fullWidth justifyContent="space-between">
                <Typography color="#111927" fontSize={18} fontWeight={500}>Question</Typography>
                <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
              </Box>
            </Box>
            <Box vertical fullWidth style={{marginBottom: 10}}>
              <Box fullWidth justifyContent="space-between">
                <Typography color="#111927" fontSize={18} fontWeight={500}>Question</Typography>
                <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
              </Box>
            </Box>
            <Box vertical fullWidth style={{marginBottom: 10}}>
              <Box fullWidth justifyContent="space-between">
                <Typography color="#111927" fontSize={18} fontWeight={500}>Question</Typography>
                <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
              </Box>
            </Box>
            <Box vertical fullWidth style={{marginBottom: 10}}>
              <Box fullWidth justifyContent="space-between">
                <Typography color="#111927" fontSize={18} fontWeight={500}>Question</Typography>
                <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
              </Box>
            </Box>
            <Box vertical fullWidth style={{marginBottom: 10}}>
              <Box fullWidth justifyContent="space-between">
                <Typography color="#111927" fontSize={18} fontWeight={500}>Question</Typography>
                <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
              </Box>
            </Box>
          </Box>
        </ContentMain>
      </Content>
    </Container>
  )
}
