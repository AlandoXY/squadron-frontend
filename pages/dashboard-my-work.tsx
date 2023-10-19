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
import {useRouter, useSearchParams} from "next/navigation"
import {host} from "@/mocks/handlers";
import ButtonGroup from "@/components/button-group";
import Badge from "@/components/badge";
import Popover from "@/components/popover";
import {B} from "msw/lib/glossary-de6278a9";
import InviteReview from "@/components/my-work/invite-review";
import OfferDetail from "@/components/my-work/offer-detail";
import OfferView from "@/components/my-work/offer-view";
import ContactSigned from "@/components/my-work/contact-signed";

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
  //background-color: white;
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

export default function DashboardMyWork() {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState(searchParams.get('tab') || "saved jobs");
  const [completeProfileOpen, setCompleteProfileOpen] = useState(false);
  const [dontMatchOpen, setDontMatchOpen] = useState(false);
  const [saveJobs, setSaveJobs] = useState([])
  const [invitesTab, setInvitesTab] = useState(true)
  const [applicationTab, setApplicationTab] = useState(true)
  const [inviteReviewOpen, setInviteReviewOpen] = useState(false)
  const [offerDetailOpen, setOfferDetailOpen] = useState(false)
  const [offerViewOpen, setOfferViewOpen] = useState(false)
  const [contactSignedOpen, setContactSignedOpen] = useState(false)
  const [projectTab, setProjectTab] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetch(`${host}/work/saveJobs`)
      .then(res => res.json())
      .then(res => {
        setSaveJobs(res)
      })
  }, [])

  return (
    <Container>
      <AsideBar />
      <Content>
        <ContentMain>
          <Box vertical style={{margin: "30px 0"}}>
            <Typography color="#111927" fontWeight={600} fontSize={30}>My work</Typography>
          </Box>
          <Tabs value={tab} onChange={value => setTab(value)}>
            <Tab style={{flex: 1}} value="saved jobs">Saved jobs<Badge style={{marginLeft: 10}}>0</Badge></Tab>
            <Tab style={{flex: 1}} value="invites">Invites<Badge style={{marginLeft: 10}}>0</Badge></Tab>
            <Tab style={{flex: 1}} value="applications">Applications<Badge style={{marginLeft: 10}}>0</Badge></Tab>
            <Tab style={{flex: 1}} value="offers">Offers<Badge style={{marginLeft: 10}}>0</Badge></Tab>
            <Tab style={{flex: 1}} value="projects">Projects</Tab>
            <Tab style={{flex: 1}} value="documents">Documents</Tab>
          </Tabs>
          <Box justifyContent="flex-end" style={{margin: "20px 0"}}>
            <Typography color="#4D5761" fontWeight={500} style={{marginRight: 10}}>Sorted by</Typography>
            <Dropdown
              placeholder="Date"
              options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
              inputWidth="40px" />
          </Box>
          <Card>
            {
              tab === 'saved jobs' && (
                saveJobs.length > 0 ? <Table>
                  <thead>
                  <TableRow>
                    <TableCol>Company</TableCol>
                    <TableCol>Project</TableCol>
                    <TableCol>Roles</TableCol>
                    <TableCol></TableCol>
                  </TableRow>
                  </thead>
                  <tbody>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Box>
                        <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                      </Box>
                    </TableCol>
                    <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                    <TableCol><Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label></TableCol>
                    <TableCol>
                      <Box>
                        <IconButton icon="/icons/share.png" width={20} height={20} />
                        <IconButton icon="/icons/heart.png" width={20} height={20} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Box>
                        <Image src="/icons/stripe.png" alt="Stripe" width={40} height={40} style={{marginRight: 15}} />Stripe
                      </Box>
                    </TableCol>
                    <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                    <TableCol><Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label></TableCol>
                    <TableCol>
                      <Box>
                        <IconButton icon="/icons/share.png" width={20} height={20} />
                        <IconButton icon="/icons/heart.png" width={20} height={20} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Box>
                        <Image src="/icons/figma.png" alt="Figma" width={40} height={40} style={{marginRight: 15}} />Figma
                      </Box>
                    </TableCol>
                    <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                    <TableCol><Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label></TableCol>
                    <TableCol>
                      <Box>
                        <IconButton icon="/icons/share.png" width={20} height={20} />
                        <IconButton icon="/icons/heart.png" width={20} height={20} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Box>
                        <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                      </Box>
                    </TableCol>
                    <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                    <TableCol><Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label></TableCol>
                    <TableCol>
                      <Box>
                        <IconButton icon="/icons/share.png" width={20} height={20} />
                        <IconButton icon="/icons/heart.png" width={20} height={20} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Box>
                        <Image src="/icons/stripe.png" alt="Stripe" width={40} height={40} style={{marginRight: 15}} />Stripe
                      </Box>
                    </TableCol>
                    <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                    <TableCol><Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label></TableCol>
                    <TableCol>
                      <Box>
                        <IconButton icon="/icons/share.png" width={20} height={20} />
                        <IconButton icon="/icons/heart.png" width={20} height={20} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Box>
                        <Image src="/icons/figma.png" alt="Figma" width={40} height={40} style={{marginRight: 15}} />Figma
                      </Box>
                    </TableCol>
                    <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                    <TableCol><Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label></TableCol>
                    <TableCol>
                      <Box>
                        <IconButton icon="/icons/share.png" width={20} height={20} />
                        <IconButton icon="/icons/heart.png" width={20} height={20} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  </tbody>
                </Table> : <EmptyList name="No saved jos" showButton />
              )
            }
            {
              tab === 'offers' && (
                <>
                  {
                    saveJobs.length > 0 ? <Table>
                      <thead>
                      <TableRow>
                        <TableCol>Company</TableCol>
                        <TableCol>Project</TableCol>
                        <TableCol>Role</TableCol>
                        <TableCol>Budget</TableCol>
                        <TableCol></TableCol>
                      </TableRow>
                      </thead>
                      <tbody>
                      <TableRow>
                        <TableCol style={{fontWeight: 600}}>
                          <Box>
                            <Image src="/icons/nautilus.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Nautilus
                          </Box>
                        </TableCol>
                        <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                        <TableCol><Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Front-End Engineer</Label></TableCol>
                        <TableCol>
                          <Typography color="#027A48" fontSize={14}>$80 /h</Typography>
                        </TableCol>
                        <TableCol>
                          <Box>
                            <Button color="#4B48EC" fontColor="white">View offer</Button>
                          </Box>
                        </TableCol>
                      </TableRow>
                      </tbody>
                    </Table> : <EmptyList name="No offers yet" />
                  }
                </>
              )
            }
          </Card>
        </ContentMain>
      </Content>
    </Container>
  )
}

function EmptyList({ name, showButton }) {
  return (
    <Box flexDirection="column" style={{alignItem: "center", padding: 20}}>
      <Image src="/images/empty-applications.png" alt="Empty Applications" width={150} height={128} />
      <Typography color="#111927" fontWeight={600} style={{marginTop: 10}}>{name}</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{margin: "10px 0 30px"}}>You haven’t applied any role yet.{showButton ? ' Start searching for projects' : ''}</Typography>
      {
        showButton && <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>Search projects</Button>
      }
    </Box>
  )
}
