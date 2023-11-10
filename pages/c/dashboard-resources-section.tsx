import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Typography from "@/components/typography";
import Box from "@/components/box";
import Input from "@/components/input";
import {DashboardHeader} from "@/components/dashboard-header";
import {useRouter} from "next/navigation";
import {AsideBarC} from "@/components/aside-bar-c";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
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
  //padding: 40px;
  background-color: white;
`

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

export default function DashboardResourcesSection() {

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
          <Box vertical style={{padding: 30}}>
            <Box style={{marginBottom: 40}}>
              <Typography color="#4D5761" fontSize={14} fontWeight={500}>Resources</Typography>
              <Typography color="#D2D6DB" fontSize={14} style={{margin: "0 12px"}}>/</Typography>
              <Typography color="#1B18E4" fontSize={14} fontWeight={600}>Section 01</Typography>
            </Box>
            <Typography color="#111927" fontSize={24} fontWeight={500} style={{marginBottom: 30}}>Section 01</Typography>
            <Box fullWidth style={{gap: 20, marginBottom: 20}}>
              <Card style={{flex: 1, padding: 16}} onClick={() => router.push('/c/dashboard-resources-section-detail')}>
                <Typography color="#111927" fontSize={18} fontWeight={500}>Section 01</Typography>
                <Box vertical style={{marginTop: 15, gap: 10}}>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                </Box>
              </Card>
              <Card style={{flex: 1, padding: 16}} onClick={() => router.push('/c/dashboard-resources-section-detail')}>
                <Typography color="#111927" fontSize={18} fontWeight={500}>Section 01</Typography>
                <Box vertical style={{marginTop: 15, gap: 10}}>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                </Box>
              </Card>
              <Card style={{flex: 1, padding: 16}} onClick={() => router.push('/c/dashboard-resources-section-detail')}>
                <Typography color="#111927" fontSize={18} fontWeight={500}>Section 01</Typography>
                <Box vertical style={{marginTop: 15, gap: 10}}>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                </Box>
              </Card>
            </Box>
            <Box fullWidth style={{gap: 20, marginBottom: 20}}>
              <Card style={{flex: 1, padding: 16}} onClick={() => router.push('/c/dashboard-resources-section-detail')}>
                <Typography color="#111927" fontSize={18} fontWeight={500}>Section 01</Typography>
                <Box vertical style={{marginTop: 15, gap: 10}}>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                </Box>
              </Card>
              <Card style={{flex: 1, padding: 16}} onClick={() => router.push('/c/dashboard-resources-section-detail')}>
                <Typography color="#111927" fontSize={18} fontWeight={500}>Section 01</Typography>
                <Box vertical style={{marginTop: 15, gap: 10}}>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                </Box>
              </Card>
              <Card style={{flex: 1, padding: 16}} onClick={() => router.push('/c/dashboard-resources-section-detail')}>
                <Typography color="#111927" fontSize={18} fontWeight={500}>Section 01</Typography>
                <Box vertical style={{marginTop: 15, gap: 10}}>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                </Box>
              </Card>
            </Box>
            <Box fullWidth style={{gap: 20, marginBottom: 20}}>
              <Card style={{flex: 1, padding: 16}} onClick={() => router.push('/c/dashboard-resources-section-detail')}>
                <Typography color="#111927" fontSize={18} fontWeight={500}>Section 01</Typography>
                <Box vertical style={{marginTop: 15, gap: 10}}>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                </Box>
              </Card>
              <Card style={{flex: 1, padding: 16}} onClick={() => router.push('/c/dashboard-resources-section-detail')}>
                <Typography color="#111927" fontSize={18} fontWeight={500}>Section 01</Typography>
                <Box vertical style={{marginTop: 15, gap: 10}}>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                </Box>
              </Card>
              <Card style={{flex: 1, padding: 16}} onClick={() => router.push('/c/dashboard-resources-section-detail')}>
                <Typography color="#111927" fontSize={18} fontWeight={500}>Section 01</Typography>
                <Box vertical style={{marginTop: 15, gap: 10}}>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                  <Typography color="#4D5761">Article  or question 01</Typography>
                </Box>
              </Card>
            </Box>
          </Box>
        </ContentMain>
      </Content>
    </Container>
  )
}
