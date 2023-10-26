import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "@/components/header";
import Tab from "@/components/tab";
import Tabs from "@/components/tabs";
import Box from "@/components/box";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Image from "next/image";
import Link from "@/components/link";
import SquadPulseRating from "@/components/c/home/squad-pulse-rating";
import SquadPulseRatingSubmit from "@/components/c/home/squad-pulse-rating-submit";

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
  background-color: white;
`

const ContentMain = styled.div`
  width: 100%;
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
`

export default function LiveSquad() {
  const [tab, setTab] = useState("Squad Pulse");
  const [squadPulseRatingOpen, setSquadPulseRatingOpen] = useState(false);
  const [squadPulseRatingSubmitOpen, setSquadPulseRatingSubmitOpen] = useState(false);

  return (
    <Container>
      <Header onlyLogo />
      <Content>
        <ContentMain>
          <Box style={{borderBottom: "1px solid #E5E7EB"}}>
            <Box fullWidth style={{padding: "16px 112px 0"}}>
              <Tabs style={{width: 780}} value={tab} onChange={value => setTab(value)}>
                <Tab style={{flex: 1}} value="Project Details">Project Details</Tab>
                <Tab style={{flex: 1}} value="Time tracking">Time tracking</Tab>
                <Tab style={{flex: 1}} value="Invoices">Invoices</Tab>
                <Tab style={{flex: 1}} value="Contracts">Contracts</Tab>
                <Tab style={{flex: 1}} value="Squad Pulse">Squad Pulse</Tab>
              </Tabs>
            </Box>
          </Box>
          <Box fullWidth style={{padding: "25px 112px 0"}}>
            <Box fullWidth justifyContent="space-between">
              <Box vertical>
                <Typography color="#111927" fontSize={24} fontWeight={500}>Team’s feedback</Typography>
                <Typography color="#4D5761">Average team score based on individual feedback from your team members</Typography>
              </Box>
              <Box>
                <Button color="#4B48EC" fontColor="white" onClick={() => setSquadPulseRatingOpen(true)}>Submit feedback</Button>
              </Box>
            </Box>
          </Box>
          <Box fullWidth style={{padding: "25px 112px"}}>
            <Card style={{padding: 20, width: 300}}>
              <Box flexDirection="column" justifyContent="center">
                <Typography color="#4D5761" fontSize={16} style={{marginBottom: 15}}>7 May - 14 May, 2022</Typography>
                <Image src="/icons/small.png" alt="Small" width={40} height={40} />
                <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>5.0</Box>
              </Box>
            </Card>
          </Box>
          <Box fullWidth style={{padding: "0 112px"}}>
            <Box fullWidth justifyContent="space-between">
              <Box vertical>
                <Typography color="#111927" fontSize={18} fontWeight={500} style={{marginBottom: 5}}>Previous feedback</Typography>
                <Typography color="#4D5761">Feedback from previous weeks</Typography>
              </Box>
              <Box>
                <Link>See all</Link>
              </Box>
            </Box>
          </Box>
          <Box fullWidth style={{padding: "25px 112px", gap: 10}}>
            <Card style={{padding: 20, width: 300}}>
              <Box flexDirection="column" justifyContent="center">
                <Typography color="#4D5761" fontSize={16} style={{marginBottom: 15}}>7 May - 14 May, 2022</Typography>
                <Image src="/icons/small.png" alt="Small" width={40} height={40} />
                <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>5.0</Box>
              </Box>
            </Card>
            <Card style={{padding: 20, width: 300}}>
              <Box flexDirection="column" justifyContent="center">
                <Typography color="#4D5761" fontSize={16} style={{marginBottom: 15}}>7 May - 14 May, 2022</Typography>
                <Image src="/icons/small-1.png" alt="Small" width={40} height={40} />
                <Box style={{padding: "0 16px", backgroundColor: "#F79009", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>3.8</Box>
              </Box>
            </Card>
            <Card style={{padding: 20, width: 300}}>
              <Box flexDirection="column" justifyContent="center">
                <Typography color="#4D5761" fontSize={16} style={{marginBottom: 15}}>7 May - 14 May, 2022</Typography>
                <Image src="/icons/small.png" alt="Small" width={40} height={40} />
                <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>4.8</Box>
              </Box>
            </Card>
            <Card style={{padding: 20, width: 300}}>
              <Box flexDirection="column" justifyContent="center">
                <Typography color="#4D5761" fontSize={16} style={{marginBottom: 15}}>7 May - 14 May, 2022</Typography>
                <Image src="/icons/small-2.png" alt="Small" width={40} height={40} />
                <Box style={{padding: "0 16px", backgroundColor: "#D92D20", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>2.3</Box>
              </Box>
            </Card>
          </Box>
          <Box fullWidth style={{padding: "25px 112px 0"}}>
            <Box fullWidth justifyContent="space-between">
              <Box vertical>
                <Typography color="#111927" fontSize={24} fontWeight={500}>Individual feedback</Typography>
                <Typography color="#4D5761">Score from each member of your squad for this week</Typography>
              </Box>
            </Box>
          </Box>
          <Box fullWidth style={{padding: "25px 112px", gap: 10}}>
            <Card style={{padding: 20, width: 300}}>
              <Box>
                <Box fullWidth vertical style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                  <Image src="/icons/avatar.png" alt="Avatar" width={64} height={64} />
                  <Typography color="#111927" fontSize={20} fontWeight={500} style={{margin: "10px 0 6px"}}>Product Manager</Typography>
                  <Typography color="#6C737F" fontSize={14}>Patricia Montero</Typography>
                </Box>
              </Box>
              <Box vertical>
                <Typography color="#4D5761" fontSize={16} style={{marginBottom: 10}}>7 May - 14 May, 2022</Typography>
                <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>5</Box>
              </Box>
            </Card>
            <Card style={{padding: 20, width: 300}}>
              <Box>
                <Box fullWidth vertical style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={64} height={64} />
                  <Typography color="#111927" fontSize={20} fontWeight={500} style={{margin: "10px 0 6px"}}>Product Manager</Typography>
                  <Typography color="#6C737F" fontSize={14}>Patricia Montero</Typography>
                </Box>
              </Box>
              <Box vertical>
                <Typography color="#4D5761" fontSize={16} style={{marginBottom: 10}}>7 May - 14 May, 2022</Typography>
                <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>4</Box>
              </Box>
            </Card>
            <Card style={{padding: 20, width: 300}}>
              <Box>
                <Box fullWidth vertical style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                  <Image src="/icons/avatar-2.png" alt="Avatar" width={64} height={64} />
                  <Typography color="#111927" fontSize={20} fontWeight={500} style={{margin: "10px 0 6px"}}>Product Manager</Typography>
                  <Typography color="#6C737F" fontSize={14}>Patricia Montero</Typography>
                </Box>
              </Box>
              <Box vertical>
                <Typography color="#4D5761" fontSize={16} style={{marginBottom: 10}}>7 May - 14 May, 2022</Typography>
                <Box style={{padding: "0 16px", backgroundColor: "#F79009", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>3</Box>
              </Box>
            </Card>
            <Card style={{padding: 20, width: 300}}>
              <Box>
                <Box fullWidth vertical style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                  <Image src="/icons/avatar-3.png" alt="Avatar" width={64} height={64} />
                  <Typography color="#111927" fontSize={20} fontWeight={500} style={{margin: "10px 0 6px"}}>Product Manager</Typography>
                  <Typography color="#6C737F" fontSize={14}>Patricia Montero</Typography>
                </Box>
              </Box>
              <Box vertical>
                <Typography color="#4D5761" fontSize={16} style={{marginBottom: 10}}>7 May - 14 May, 2022</Typography>
                <Box style={{padding: "0 16px", backgroundColor: "#F79009", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>3</Box>
              </Box>
            </Card>
          </Box>
        </ContentMain>
      </Content>
      <SquadPulseRating open={squadPulseRatingOpen} setOpen={setSquadPulseRatingOpen} handleSubmit={() => {
        setSquadPulseRatingOpen(false);
        setSquadPulseRatingSubmitOpen(true);
      }} />
      <SquadPulseRatingSubmit open={squadPulseRatingSubmitOpen} setOpen={setSquadPulseRatingSubmitOpen} />
    </Container>
  )
}
