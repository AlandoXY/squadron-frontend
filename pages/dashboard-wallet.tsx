import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Typography from "@/components/typography";
import NavbarItem from "@/components/navbar-item";
import IconButton from "@/components/icon-button";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Box from "@/components/box";
import Input from "@/components/input";
import {AsideBar} from "@/components/aside-bar";

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
  padding: 0 20px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #F9FAFB;
  box-shadow: 0 1px 2px 0 #1018280F;
  width: 100%;
  border-radius: 12px;
  background-color: white;
  margin-bottom: 30px;
`

export default function DashboardWallet() {

  return (
    <Container>
      <AsideBar />
      <Content>
        <ContentMain>
          <Box vertical style={{margin: "50px 0"}}>
            <Card>
              <Box vertical style={{padding: 20}}>
                <Typography color="#111927" fontSize={24} fontWeight={500}>Wallet</Typography>
                <Typography color="#4D5761" style={{margin: "10px 0 30px"}}>Earn points for the value you bring to Squadron. These can be redeemed for cash, perks or prizes.</Typography>
                <Button color="#4B48EC" fontColor="white">Learn more</Button>
              </Box>
            </Card>
            <Box alignItem="stretch" fullWidth style={{gap: 25, marginBottom: 30}}>
              <Card style={{flex: 1, marginBottom: 0}}>
                <Box vertical style={{padding: 20}}>
                  <Typography color="#111927" fontWeight={600} fontSize={18}>Refer a friend</Typography>
                  <Typography color="#4D5761" fontSize={14} style={{margin: "10px 0 15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.</Typography>
                  <Box fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 10}}>
                    <Input placeholder="Enter email" fullWidth style={{height: 20}} />
                    <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10, height: 40}}>Refer</Button>
                  </Box>
                  <Box fullWidth style={{border: "1px solid #D2D6DB", borderRadius: 8, margin: "10px 0 30px"}}>
                    <Box style={{flex: 1, backgroundColor: "#F9FAFB", padding: 10, borderRadius: "8px 0 0 8px"}}>
                      <Typography color="#6C737F" fontSize={16}>www.squadronexamplelink.com</Typography>
                    </Box>
                    <Box style={{borderLeft: "1px solid #D2D6DB", padding: "0 5px"}}>
                      <IconButton icon="/icons/copy.png" width={20} height={20} />
                    </Box>
                  </Box>
                  <Box style={{gap: 40}}>
                    <Image src="/icons/link-in.png" alt="Link In" width={32} height={32} />
                    <Image src="/icons/at.png" alt="AT" width={32} height={32} />
                    <Image src="/icons/twitter.png" alt="Twitter" width={32} height={32} />
                  </Box>
                </Box>
              </Card>
              <Box vertical style={{flex: 1, backgroundColor: "black", padding: "24px 40px", borderRadius: 12}}>
                <Typography color="#DAFB6A" fontSize={24} fontWeight={600}>Your records</Typography>
                <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{marginTop: 60}}>
                  <Box vertical>
                    <Box style={{marginBottom: 10}}>
                      <Image src="/icons/logo-green.png" alt="Logo" width={48} height={48} style={{marginRight: 22}} />
                      <Typography color="#FFFFFF" fontSize={60} fontWeight={500}>540</Typography>
                    </Box>
                    <Typography color="#FFFFFF" fontSize={14}>points available</Typography>
                  </Box>
                  <Box vertical>
                    <Typography color="#FFFFFF" fontSize={30} fontWeight={500}>4</Typography>
                    <Typography color="#FFFFFF" fontSize={14}>Builder referrals</Typography>
                    <Typography color="#FFFFFF" fontSize={30} fontWeight={500} style={{marginTop: 15}}>5</Typography>
                    <Typography color="#FFFFFF" fontSize={14}>Company referrals</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Card>
              <Box vertical style={{padding: 20}}>
                <Typography color="#111927" fontSize={24} fontWeight={500}>How it works</Typography>
                <Box fullWidth style={{marginTop: 40, gap: 50}}>
                  <Box justifyContent="center" flexDirection="column" style={{flex: 1, textAlign: 'center'}}>
                    <Image src="/images/wallet-01.png" alt="Sign UP" width={80} height={80} />
                    <Typography color="#111927" fontWeight={500} style={{margin: "10px 0"}}>Invite your network</Typography>
                    <Typography color="#6C737F" fontSize={14}>Refer contacts via email or by using the referral link for your account.</Typography>
                  </Box>
                  <Box justifyContent="center" flexDirection="column" style={{flex: 1, textAlign: 'center'}}>
                    <Image src="/images/wallet-02.png" alt="Sign UP" width={80} height={80} />
                    <Typography color="#111927" fontWeight={500} style={{margin: "10px 0"}}>To be eligible</Typography>
                    <Typography color="#6C737F" fontSize={14}>Your contact must sign up via your link and be approved for a Squadron account. If you are sharing the unique link directly then you must ensure your contact is aware of the referral terms.</Typography>
                  </Box>
                  <Box justifyContent="center" flexDirection="column" style={{flex: 1, textAlign: 'center'}}>
                    <Image src="/images/wallet-02.png" alt="Sign UP" width={80} height={80} />
                    <Typography color="#111927" fontWeight={500} style={{margin: "10px 0"}}>Ways to earn</Typography>
                    <Typography color="#6C737F" fontSize={14}>10x for every hour you build 6x for every hour company referrals build 2x for every hour your builder referrals build</Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>

        </ContentMain>
      </Content>
    </Container>
  )
}
