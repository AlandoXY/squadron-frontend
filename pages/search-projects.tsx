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
  background-color: #f9fafb;
  //padding: 0 20px;
`

const ContentMain = styled.div`
  width: 100%;
  padding: 0 20px;
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
  margin-bottom: 30px;
`

export default function SearchProjects() {

  return (
    <Container>
      <Aside>
        <AsideTop>
          <Image src="/icons/logo.png" width={30} height={30} alt="Logo" />
          <Typography>squadron</Typography>
        </AsideTop>
        <Navbar>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/dashboard.png">Dashboard</IconButton>
          </NavbarItem>
          <NavbarItem active>
            <IconButton width={20} height={20} icon="/icons/projects.png">Projects</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/wallet.png">Wallet</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/sustainability.png">Sustainability</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/resource.png">Resources</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/perks.png">Perks</IconButton>
          </NavbarItem>
        </Navbar>
      </Aside>
      <Content>
        <ContentHeader>
          <Input placeholder="Search jobs" prefixIcon="/icons/search-lg.png" width={400} />
          <Box style={{gap: 20}}>
            <IconButton icon="/icons/message-square.png" width={24} height={24} />
            <IconButton icon="/icons/star-02.png" width={24} height={24} />
            <IconButton icon="/icons/bell.png" width={24} height={24} />
            <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
          </Box>
        </ContentHeader>
        <ContentMain>
          <Box vertical fullWidth style={{margin: "30px 0", justifyContent: "space-between"}}>
            <Typography color="#111927" fontSize="24px" fontWeight={500}>Search projects</Typography>
            <Box fullWidth style={{marginTop: 20}}>
              <Input prefixIcon="/icons/search-lg.png" fullWidth />
              <Button color="#4B48EC" fontColor="white" height="45px" style={{marginLeft: 10}}>Search</Button>
            </Box>
            <Box fullWidth style={{marginTop: 20, gap: 15}}>
              <Dropdown

                placeholder="Role"
                options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
                prevIcon="/icons/role.png"
                inputWidth="40px" />
              <Dropdown
                placeholder="Skills"
                options={[{ label: "JavaScript", value: "JavaScript" }, { label: "React", value: "React" }]}
                prevIcon="/icons/tools.png"
                inputWidth="40px" />
              <Dropdown
                placeholder="Rate"
                options={[{ label: "Dollar", value: "Dollar" }, { label: "Franc", value: "Franc" }]}
                prevIcon="/icons/rate.png"
                inputWidth="40px" />
              <Dropdown
                placeholder="Location"
                options={[{ label: "Dollar", value: "Dollar" }, { label: "Franc", value: "Franc" }]}
                prevIcon="/icons/location.png"
                inputWidth="60px" />
              <Dropdown
                placeholder="Commitment"
                options={[{ label: "Dollar", value: "Dollar" }, { label: "Franc", value: "Franc" }]}
                prevIcon="/icons/clock.png"
                inputWidth="85px" />
            </Box>
          </Box>
          <Box vertical style={{marginTop: 40}}>
            <Box fullWidth justifyContent="flex-end" style={{marginBottom: 30}}>
              <Typography color="#4D5761">Sorted by: </Typography>
              <Typography color="#4D5761" fontWeight={600} style={{margin: "0 10px 0 15px"}}>Newest</Typography>
              <Image src="/icons/down-arrow.png" alt="Down Arrow" width={12} height={6.75} />
            </Box>
            <Box vertical fullWidth>
              <Box fullWidth>
                <Card>
                  <Box justifyContent="space-between" style={{padding: 20, borderBottom: "1px solid #F3F4F6"}}>
                    <Box style={{gap: 15}}>
                      <Label color="#F3F4F6" borderColor="#F3F4F6">E-Commerce</Label>
                      <Label color="#F3F4F6" borderColor="#F3F4F6">MVP</Label>
                    </Box>
                    <Box style={{gap: 15}}>
                      <IconButton icon="/icons/share.png" width={24} height={24} />
                      <IconButton icon="/icons/star-02.png" width={24} height={24} />
                      <IconButton icon="/icons/eye-off.png" width={16} height={16} style={{border: "1px solid #D2D6DB"}} />
                      <Button color="white" fontColor="#384250" style={{fontWeight: 600, border: "1px solid #D2D6DB"}}>View</Button>
                    </Box>
                  </Box>
                  <Box vertical style={{padding: 20}}>
                    <Box>
                      <Box style={{border: "10px solid #E5E7EB", borderRadius: "50%", marginRight: 10}}>
                        <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
                      </Box>
                      <Box vertical>
                        <Typography color="#4D5761" fontSize="14px">Stir</Typography>
                        <Typography color="#111927" fontWeight={600} style={{marginTop: 5}}>MVP for Serverless E-commerce Return Portal</Typography>
                      </Box>
                    </Box>
                    <Box style={{marginTop: 15}}>
                      <Typography color="#4D5761" fontSize="14px">We are helping e-commerce to be more profitable and sustainable by processing, analysing and reselling returns and overstock through our software and logistics platform. We need a passionate team to build the beta version of our SaaS Customer Returns <Link>See more</Link></Typography>
                    </Box>
                    <Box fullWidth justifyContent="space-between" style={{marginTop: 20}}>
                      <Box vertical>
                        <Typography color="#111927" fontSize={14} fontWeight={600}>Open roles (6)</Typography>
                        <Box style={{marginTop: 15, gap: 10}}>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Product Manager</Label>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front End Developer</Label>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Back End Developer</Label>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">UX Designer</Label>
                        </Box>
                      </Box>
                    </Box>
                    <Box style={{marginTop: 25}}>
                      <Typography color="#4D5761" fontSize="14px" fontWeight={600} style={{marginRight: 5}}>See more</Typography>
                      <Image src="/icons/down-arrow.png" alt="Down Arrow" width={12} height={6.75} />
                    </Box>
                  </Box>
                </Card>
              </Box>
              <Box fullWidth>
                <Card>
                  <Box justifyContent="space-between" style={{padding: 20, borderBottom: "1px solid #F3F4F6"}}>
                    <Box style={{gap: 15}}>
                      <Label color="#F3F4F6" borderColor="#F3F4F6">E-Commerce</Label>
                      <Label color="#F3F4F6" borderColor="#F3F4F6">MVP</Label>
                    </Box>
                    <Box style={{gap: 15}}>
                      <IconButton icon="/icons/share.png" width={24} height={24} />
                      <IconButton icon="/icons/star-02.png" width={24} height={24} />
                      <IconButton icon="/icons/eye-off.png" width={16} height={16} style={{border: "1px solid #D2D6DB"}} />
                      <Button color="white" fontColor="#384250" style={{fontWeight: 600, border: "1px solid #D2D6DB"}}>View</Button>
                    </Box>
                  </Box>
                  <Box vertical style={{padding: 20}}>
                    <Box>
                      <Box style={{border: "10px solid #E5E7EB", borderRadius: "50%", marginRight: 10}}>
                        <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
                      </Box>
                      <Box vertical>
                        <Typography color="#4D5761" fontSize="14px">Stir</Typography>
                        <Typography color="#111927" fontWeight={600} style={{marginTop: 5}}>MVP for Serverless E-commerce Return Portal</Typography>
                      </Box>
                    </Box>
                    <Box style={{marginTop: 15}}>
                      <Typography color="#4D5761" fontSize="14px">We are helping e-commerce to be more profitable and sustainable by processing, analysing and reselling returns and overstock through our software and logistics platform. We need a passionate team to build the beta version of our SaaS Customer Returns <Link>See more</Link></Typography>
                    </Box>
                    <Box fullWidth justifyContent="space-between" style={{marginTop: 20}}>
                      <Box vertical>
                        <Typography color="#111927" fontSize={14} fontWeight={600}>Open roles (6)</Typography>
                        <Box style={{marginTop: 15, gap: 10}}>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Product Manager</Label>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front End Developer</Label>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Back End Developer</Label>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">UX Designer</Label>
                        </Box>
                      </Box>
                    </Box>
                    <Box style={{marginTop: 25}}>
                      <Typography color="#4D5761" fontSize="14px" fontWeight={600} style={{marginRight: 5}}>See more</Typography>
                      <Image src="/icons/down-arrow.png" alt="Down Arrow" width={12} height={6.75} />
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Box>
        </ContentMain>
      </Content>
    </Container>
  )
}
