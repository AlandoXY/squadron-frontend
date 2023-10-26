import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Box from "@/components/box";
import Dropdown from "@/components/dropdown";
import {AsideBar} from "@/components/aside-bar";
import {DashboardHeader} from "@/components/dashboard-header";

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
  padding: 0 20px;
  //background-color: white;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #F9FAFB;
  box-shadow: 0 1px 2px 0 #1018280F;
  width: 100%;
  border-radius: 12px;
  background-color: white;
  margin-bottom: 50px;
`

export default function DashboardPerks() {

  return (
    <Container>
      <AsideBar />
      <Content>
        <DashboardHeader />
        <ContentMain>
          <Box vertical style={{margin: "30px 0"}}>
            <Typography color="#111927" fontWeight={600} fontSize={30}>Perks</Typography>
            <Typography color="#384250" style={{marginTop: 10}}>Exclusive perks for the Squadron community. </Typography>
          </Box>
          <Card>
            <Box style={{padding: 20, borderBottom: "1px solid #E5E7EB"}}>
              <Typography color="#111927" fontWeight={500} fontSize={18}>50 Partner Rewards</Typography>
            </Box>
            <Box style={{padding: 20, marginBottom: 20}}>
              <Box flexDirection="column" alignItem="flex-start" style={{width: '325px'}}>
                <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Category</Typography>
                <Dropdown
                  options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
                  prevIcon="/icons/search-lg.png"
                  placeholder="Filter by category"
                  disableInput={false}
                  showSuffixIcon={false}
                  fullWidth />
              </Box>
              <Box flexDirection="column" alignItem="flex-start" style={{width: '325px', marginLeft: 20}}>
                <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Location</Typography>
                <Dropdown
                  options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
                  prevIcon="/icons/search-lg.png"
                  placeholder="Filter by region"
                  disableInput={false}
                  showSuffixIcon={false}
                  fullWidth />
              </Box>
            </Box>
            <Box style={{padding: 20, gap: 10}}>
              <Box vertical style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 16, padding: 24}}>
                <Box>
                  <Image src="/icons/aws.png" alt="AWS" width={56} height={56} style={{marginRight: 10}} />
                  <Typography color="#111927" fontSize={24} fontWeight={500}>AWS</Typography>
                </Box>
                <Typography color="#384250" style={{margin: "10px 0 15px"}}>Reliable, scalable, and inexpensive cloud computing services.</Typography>
                <Button color="#4B48EC" fontColor="white">Claim perk</Button>
              </Box>
              <Box vertical style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 16, padding: 24}}>
                <Box>
                  <Image src="/icons/canva.png" alt="AWS" width={56} height={56} style={{marginRight: 10}} />
                  <Typography color="#111927" fontSize={24} fontWeight={500}>Canva</Typography>
                </Box>
                <Typography color="#384250" style={{margin: "10px 0 15px"}}>Create beautiful designs with your team with drag-and-drop features.</Typography>
                <Button color="#4B48EC" fontColor="white">Claim perk</Button>
              </Box>
              <Box vertical style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 16, padding: 24}}>
                <Box>
                  <Image src="/icons/linktree.png" alt="AWS" width={56} height={56} style={{marginRight: 10}} />
                  <Typography color="#111927" fontSize={24} fontWeight={500}>Linktree</Typography>
                </Box>
                <Typography color="#384250" style={{margin: "10px 0 15px"}}>Manage and update all your social channel campaigns in one single platform.</Typography>
                <Button color="#4B48EC" fontColor="white">Claim perk</Button>
              </Box>
            </Box>
            <Box style={{padding: 20, gap: 10}}>
              <Box vertical style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 16, padding: 24}}>
                <Box>
                  <Image src="/icons/miro.png" alt="AWS" width={56} height={56} style={{marginRight: 10}} />
                  <Typography color="#111927" fontSize={24} fontWeight={500}>Miro</Typography>
                </Box>
                <Typography color="#384250" style={{margin: "10px 0 15px"}}>An infinite canvas that can be tailored to any project.</Typography>
                <Button color="#4B48EC" fontColor="white">Claim perk</Button>
              </Box>
              <Box vertical style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 16, padding: 24}}>
                <Box>
                  <Image src="/icons/notion.png" alt="AWS" width={56} height={56} style={{marginRight: 10}} />
                  <Typography color="#111927" fontSize={24} fontWeight={500}>Notion</Typography>
                </Box>
                <Typography color="#384250" style={{margin: "10px 0 15px"}}>The knowledge hub where productivity and collaboration meet.</Typography>
                <Button color="#4B48EC" fontColor="white">Claim perk</Button>
              </Box>
              <Box vertical style={{flex: 1, border: "1px solid #E5E7EB", borderRadius: 16, padding: 24}}>
                <Box>
                  <Image src="/icons/weWork.png" alt="AWS" width={56} height={56} style={{marginRight: 10}} />
                  <Typography color="#111927" fontSize={24} fontWeight={500}>WeWork</Typography>
                </Box>
                <Typography color="#384250" style={{margin: "10px 0 15px"}}>Flexible workspaces where and as you need them.</Typography>
                <Button color="#4B48EC" fontColor="white">Claim perk</Button>
              </Box>
            </Box>
          </Card>
        </ContentMain>
      </Content>
    </Container>
  )
}
