import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Typography from "@/components/typography";
import NavbarItem from "@/components/navbar-item";
import IconButton from "@/components/icon-button";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Link from "@/components/link";
import Label from "@/components/label";
import Box from "@/components/box";
import Input from "@/components/input";
import Table from "@/components/table";
import TableRow from "@/components/table-row";
import TableCol from "@/components/table-col";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Dropdown from "@/components/dropdown";
import Tabs from "@/components/tabs";
import Tab from "@/components/tab";
import {AsideBar} from "@/components/aside-bar";

ChartJS.register(ArcElement, Tooltip, Legend);

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
  background-color: #ffffff;
  //padding: 0 20px;
`

const ContentMain = styled.div`
  width: 100%;
  padding: 0 20px;
  //background-color: white;
  margin-bottom: 100px;
`

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #E5E7EB;
  padding: 15px 20px;
  background-color: white;
`

const Row = styled.div`
  display: flex;
  align-items: center;
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

export default function DashboardSettings() {
  const [tab, setTab] = useState("Account");

  return (
    <Container>
      <AsideBar />
      <Content>
        <ContentMain>
          <Box vertical style={{margin: "30px 0"}}>
            <Typography color="#111927" fontWeight={600} fontSize={30}>Settings</Typography>
          </Box>
          <Tabs value={tab} onChange={value => setTab(value)}>
            <Tab style={{flex: 1}} value="Account">Account</Tab>
            <Tab style={{flex: 1}} value="Privacy and security">Privacy and security</Tab>
            <Tab style={{flex: 1}} value="Payments">Payments</Tab>
            <Tab style={{flex: 1}} value="Notifications">Notifications</Tab>
            <Tab style={{flex: 1}} value="Agency settings">Agency settings</Tab>
          </Tabs>
          <Box justifyContent="space-between" style={{margin: "20px 0"}}>
            <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginRight: 10}}>Account info</Typography>
            <Box>
              <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}}>Cancel</Button>
              <Button color="#4B48EC" fontColor="white">Save</Button>
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{padding: "20px 0", borderBottom: "1px solid #E5E7EB"}}>
            <Box>
              <Typography color="#384250" fontWeight={500} fontSize="14px">Name</Typography>
            </Box>
            <Box>
              <Box vertical>
                <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>First name</Typography>
                <Input />
              </Box>
              <Box vertical style={{marginLeft: 20}}>
                <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Last name</Typography>
                <Input />
              </Box>
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{padding: "20px 0", borderBottom: "1px solid #E5E7EB"}}>
            <Box>
              <Typography color="#384250" fontWeight={500} fontSize="14px">Email address</Typography>
            </Box>
            <Box>
              <Box vertical>
                <Input width={413} prefixIcon="/icons/email-gray.png" prefixIconHeight={16.25} />
              </Box>
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{padding: "20px 0", borderBottom: "1px solid #E5E7EB"}}>
            <Box>
              <Typography color="#384250" fontWeight={500} fontSize="14px">Mobile Number</Typography>
            </Box>
            <Box>
              <Box vertical>
                <Input width={440} />
              </Box>
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{padding: "20px 0", borderBottom: "1px solid #E5E7EB"}}>
            <Box vertical>
              <Typography color="#384250" fontWeight={500} fontSize="14px">Applications</Typography>
              <Typography color="#4D5761" fontSize="14px" style={{width: 250}}>Add an optional link to your job applications, directing clients to your preferred calendar scheduling tool (i.e. mixmax, calendly, etc). This makes it easy for clients to schedule interviews with you.</Typography>
            </Box>
            <Box>
              <Box vertical>
                <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Calendly link</Typography>
                <Input width={440} />
              </Box>
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{padding: "20px 0", borderBottom: "1px solid #E5E7EB"}}>
            <Box vertical>
              <Typography color="#384250" fontWeight={500} fontSize="14px">Location</Typography>
              <Typography color="#4D5761" fontSize="14px" style={{width: 250}}>This will be used everywhere except for billing/invoicing. It'll help us provide better search/job matching experience.</Typography>
            </Box>
            <Box>
              <Box vertical>
                <Dropdown
                  placeholder="Location"
                  options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
                  inputWidth="416px" />
              </Box>
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{padding: "20px 0", borderBottom: "1px solid #E5E7EB"}}>
            <Box vertical>
              <Typography color="#384250" fontWeight={500} fontSize="14px">Billing Address</Typography>
            </Box>
            <Box vertical>
              <Box>
                <Box vertical>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Country</Typography>
                  <Dropdown
                    placeholder="Location"
                    options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
                    inputWidth="175px" />
                </Box>
                <Box vertical style={{marginLeft: 20}}>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>State/Province</Typography>
                  <Input />
                </Box>
              </Box>
              <Box style={{marginTop: 15}}>
                <Box vertical>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Address line 1</Typography>
                  <Input width={440} />
                </Box>
              </Box>
              <Box style={{marginTop: 15}}>
                <Box vertical>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Address line 2</Typography>
                  <Input width={440} />
                </Box>
              </Box>
              <Box style={{marginTop: 15}}>
                <Box vertical>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>City</Typography>
                  <Input />
                </Box>
                <Box vertical style={{marginLeft: 20}}>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>ZIP/Postal code</Typography>
                  <Input />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{padding: "20px 0", borderBottom: "1px solid #E5E7EB"}}>
            <Box vertical>
              <Typography color="#384250" fontWeight={500} fontSize="14px">Languages</Typography>
              <Typography color="#4D5761" fontSize="14px" style={{width: 250}}>BLABLBLALB</Typography>
            </Box>
            <Box vertical>
              <Box>
                <Box vertical>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Language</Typography>
                  <Dropdown
                    placeholder="Language"
                    options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
                    inputWidth="100px" />
                </Box>
                <Box vertical style={{marginLeft: 20}}>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Level</Typography>
                  <Dropdown
                    placeholder="Level"
                    options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
                    inputWidth="100px" />
                </Box>
                <Box vertical style={{margin: "0 110px 0 10px"}}>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>&nbsp;</Typography>
                  <IconButton icon="/icons/delete.png" width={20} height={20} />
                </Box>
              </Box>
              <Box style={{marginTop: 15}}>
                <Box vertical>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Language</Typography>
                  <Dropdown
                    placeholder="Language"
                    options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
                    inputWidth="100px" />
                </Box>
                <Box vertical style={{marginLeft: 20}}>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Level</Typography>
                  <Dropdown
                    placeholder="Level"
                    options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
                    inputWidth="100px" />
                </Box>
                <Box vertical style={{margin: "0 110px 0 10px"}}>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>&nbsp;</Typography>
                  <IconButton icon="/icons/delete.png" width={20} height={20} />
                </Box>
              </Box>
              <Box style={{marginTop: 15}}>
                <IconButton icon="/icons/plus.png" width={20} height={20} fontColor="#1B18E4">
                  <Typography color="#1B18E4" fontWeight={600} fontSize="14px">Add another</Typography>
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{padding: "20px 0"}}>
            <Box>
              <Typography color="#384250" fontWeight={500} fontSize="14px">Referral Link</Typography>
            </Box>
            <Box>
              <Box vertical>
                <Input width={440} />
              </Box>
            </Box>
          </Box>
        </ContentMain>
      </Content>
    </Container>
  )
}
