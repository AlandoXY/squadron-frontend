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
import CompleteProfile from "@/components/project-view/complete-profile";
import RequirementsDontMatch from "@/components/project-view/requirements-dont-match";
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
              tab === 'invites' && (
                <>
                  <Box style={{padding: "15px 20px", borderBottom: '1px solid #E5E7EB'}}>
                    <ButtonGroup onChange={firstActive => setInvitesTab(firstActive)}>
                      <Button>Received invites<Badge style={{marginLeft: 10}}>0</Badge></Button>
                      <Button>Sent invites<Badge style={{marginLeft: 10}}>0</Badge></Button>
                    </ButtonGroup>
                  </Box>
                  {
                    saveJobs.length > 0 ? (
                      invitesTab ? <Table>
                        <thead>
                        <TableRow>
                          <TableCol>Project by</TableCol>
                          <TableCol>Invited to project</TableCol>
                          <TableCol>Invited to role</TableCol>
                          <TableCol>Invited by</TableCol>
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
                              <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                              <Typography color="#4D5761" fontSize={14} style={{marginLeft: 10}}>Olivia Rhye</Typography>
                            </Box>
                          </TableCol>
                          <TableCol>
                            <Box>
                              <Button color="white" fontColor="#4D5761">Ignore</Button>
                              <Button color="#4B48EC" fontColor="white" onClick={() => router.push('/application-apply')}>View</Button>
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
                              <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                              <Typography color="#4D5761" fontSize={14} style={{marginLeft: 10}}>Olivia Rhye</Typography>
                            </Box>
                          </TableCol>
                          <TableCol>
                            <Box>
                              <Button color="white" fontColor="#4D5761">Ignore</Button>
                              <Button color="#4B48EC" fontColor="white" onClick={() => setCompleteProfileOpen(true)}>View</Button>
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
                              <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                              <Typography color="#4D5761" fontSize={14} style={{marginLeft: 10}}>Olivia Rhye</Typography>
                            </Box>
                          </TableCol>
                          <TableCol>
                            <Box>
                              <Button color="white" fontColor="#4D5761">Ignore</Button>
                              <Button color="#4B48EC" fontColor="white" onClick={() => setDontMatchOpen(true)}>View</Button>
                            </Box>
                          </TableCol>
                        </TableRow>
                        </tbody>
                      </Table> : <Table>
                        <thead>
                        <TableRow>
                          <TableCol>Project by</TableCol>
                          <TableCol>Invited to (project)</TableCol>
                          <TableCol style={{width: "60%", textAlign: "right"}}></TableCol>
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
                          <TableCol style={{width: "60%", textAlign: "right"}}>
                            <Button onClick={() => setInviteReviewOpen(true)} color="white" fontColor="#4D5761" style={{border: "none", fontWeight: 600}}>Ses invites<Image src="/icons/down-arrow.png" alt="Down arrow" width={15} height={8.44} style={{marginLeft: 12}} /></Button>
                          </TableCol>
                        </TableRow>
                        <TableRow>
                          <TableCol style={{fontWeight: 600}}>
                            <Box>
                              <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                            </Box>
                          </TableCol>
                          <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                          <TableCol style={{width: "60%", textAlign: "right"}}>
                            <Button onClick={() => setInviteReviewOpen(true)} color="white" fontColor="#4D5761" style={{border: "none", fontWeight: 600}}>Ses invites<Image src="/icons/down-arrow.png" alt="Down arrow" width={15} height={8.44} style={{marginLeft: 12}} /></Button>
                          </TableCol>
                        </TableRow>
                        <TableRow>
                          <TableCol style={{fontWeight: 600}}>
                            <Box>
                              <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                            </Box>
                          </TableCol>
                          <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                          <TableCol style={{width: "60%", textAlign: "right"}}>
                            <Button onClick={() => setInviteReviewOpen(true)} color="white" fontColor="#4D5761" style={{border: "none", fontWeight: 600}}>Ses invites<Image src="/icons/down-arrow.png" alt="Down arrow" width={15} height={8.44} style={{marginLeft: 12}} /></Button>
                          </TableCol>
                        </TableRow>
                        <TableRow>
                          <TableCol style={{fontWeight: 600}}>
                            <Box>
                              <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                            </Box>
                          </TableCol>
                          <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                          <TableCol style={{width: "60%", textAlign: "right"}}>
                            <Button onClick={() => setInviteReviewOpen(true)} color="white" fontColor="#4D5761" style={{border: "none", fontWeight: 600}}>Ses invites<Image src="/icons/down-arrow.png" alt="Down arrow" width={15} height={8.44} style={{marginLeft: 12}} /></Button>
                          </TableCol>
                        </TableRow>
                        <TableRow>
                          <TableCol style={{fontWeight: 600}}>
                            <Box>
                              <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                            </Box>
                          </TableCol>
                          <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                          <TableCol style={{width: "60%", textAlign: "right"}}>
                            <Button onClick={() => setInviteReviewOpen(true)} color="white" fontColor="#4D5761" style={{border: "none", fontWeight: 600}}>Ses invites<Image src="/icons/down-arrow.png" alt="Down arrow" width={15} height={8.44} style={{marginLeft: 12}} /></Button>
                          </TableCol>
                        </TableRow>
                        <TableRow>
                          <TableCol style={{fontWeight: 600}}>
                            <Box>
                              <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                            </Box>
                          </TableCol>
                          <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                          <TableCol style={{width: "60%", textAlign: "right"}}>
                            <Button onClick={() => setInviteReviewOpen(true)} color="white" fontColor="#4D5761" style={{border: "none", fontWeight: 600}}>Ses invites<Image src="/icons/down-arrow.png" alt="Down arrow" width={15} height={8.44} style={{marginLeft: 12}} /></Button>
                          </TableCol>
                        </TableRow>
                        <TableRow>
                          <TableCol style={{fontWeight: 600}}>
                            <Box>
                              <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                            </Box>
                          </TableCol>
                          <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                          <TableCol style={{width: "60%", textAlign: "right"}}>
                            <Button onClick={() => setInviteReviewOpen(true)} color="white" fontColor="#4D5761" style={{border: "none", fontWeight: 600}}>Ses invites<Image src="/icons/down-arrow.png" alt="Down arrow" width={15} height={8.44} style={{marginLeft: 12}} /></Button>
                          </TableCol>
                        </TableRow>
                        <TableRow>
                          <TableCol style={{fontWeight: 600}}>
                            <Box>
                              <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                            </Box>
                          </TableCol>
                          <TableCol style={{fontWeight: 600, color: "#1B18E4"}}>SurveySwap</TableCol>
                          <TableCol style={{width: "60%", textAlign: "right"}}>
                            <Button onClick={() => setInviteReviewOpen(true)} color="white" fontColor="#4D5761" style={{border: "none", fontWeight: 600}}>Ses invites<Image src="/icons/down-arrow.png" alt="Down arrow" width={15} height={8.44} style={{marginLeft: 12}} /></Button>
                          </TableCol>
                        </TableRow>
                        </tbody>
                      </Table>
                    ) : <EmptyList name="No invitations yet" />
                  }
                </>

              )
            }
            {
              tab === 'applications' && (
                <>
                  <Box style={{padding: "15px 20px", borderBottom: '1px solid #E5E7EB'}}>
                    <ButtonGroup onChange={firstActive => setApplicationTab(firstActive)}>
                      <Button>Draft applications<Badge style={{marginLeft: 10}}>0</Badge></Button>
                      <Button>Submitted applications<Badge style={{marginLeft: 10}}>0</Badge></Button>
                    </ButtonGroup>
                  </Box>
                  {
                    saveJobs.length > 0 ? (
                        applicationTab ? <Table>
                          <thead>
                          <TableRow>
                            <TableCol>Project by</TableCol>
                            <TableCol>Invited to project</TableCol>
                            <TableCol>Invited to role</TableCol>
                            <TableCol>Invited by</TableCol>
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
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Typography color="#4D5761" fontSize={14} style={{marginLeft: 10}}>Olivia Rhye</Typography>
                              </Box>
                            </TableCol>
                            <TableCol>
                              <Box>
                                <Button color="white" fontColor="#B42318">Delete</Button>
                                <Button color="#4B48EC" fontColor="white" onClick={() => {}}>Complete</Button>
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
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Typography color="#4D5761" fontSize={14} style={{marginLeft: 10}}>Olivia Rhye</Typography>
                              </Box>
                            </TableCol>
                            <TableCol>
                              <Box>
                                <Button color="white" fontColor="#B42318">Delete</Button>
                                <Button color="#4B48EC" fontColor="white" onClick={() => {}}>Complete</Button>
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
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Typography color="#4D5761" fontSize={14} style={{marginLeft: 10}}>Olivia Rhye</Typography>
                              </Box>
                            </TableCol>
                            <TableCol>
                              <Box>
                                <Button color="white" fontColor="#B42318">Delete</Button>
                                <Button color="#4B48EC" fontColor="white" onClick={() => {}}>Complete</Button>
                              </Box>
                            </TableCol>
                          </TableRow>
                          </tbody>
                        </Table> : <Table>
                          <thead>
                          <TableRow>
                            <TableCol>Company</TableCol>
                            <TableCol>Project</TableCol>
                            <TableCol>Role</TableCol>
                            <TableCol>Status</TableCol>
                            <TableCol>Application Date</TableCol>
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
                            <TableCol><Label color="#ECFDF3" fontColor="#027A48" style={{border: 'none'}}><span style={{width: 6, height: 6, borderRadius: 5, backgroundColor: '#12B76A', marginRight: 5}}></span>Hired</Label></TableCol>
                            <TableCol><Typography color="#4D5761" fontSize={14}>27 SEP 22</Typography></TableCol>
                            <TableCol>
                              <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View application</Button>
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
                            <TableCol><Label color="#FFFAEB" fontColor="#B54708" style={{border: 'none'}}><span style={{width: 6, height: 6, borderRadius: 5, backgroundColor: '#F79009', marginRight: 5}}></span>In Review</Label></TableCol>
                            <TableCol><Typography color="#4D5761" fontSize={14}>27 SEP 22</Typography></TableCol>
                            <TableCol>
                              <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View application</Button>
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
                            <TableCol><Label color="#FEF3F2" fontColor="#B42318" style={{border: 'none'}}><span style={{width: 6, height: 6, borderRadius: 5, backgroundColor: '#F04438', marginRight: 5}}></span>Rejected</Label></TableCol>
                            <TableCol><Typography color="#4D5761" fontSize={14}>27 SEP 22</Typography></TableCol>
                            <TableCol>
                              <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View application</Button>
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
                            <TableCol><Label color="#FEF3F2" fontColor="#B42318" style={{border: 'none'}}><span style={{width: 6, height: 6, borderRadius: 5, backgroundColor: '#F04438', marginRight: 5}}></span>Rejected</Label></TableCol>
                            <TableCol><Typography color="#4D5761" fontSize={14}>27 SEP 22</Typography></TableCol>
                            <TableCol>
                              <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View application</Button>
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
                            <TableCol><Label color="#FEF3F2" fontColor="#B42318" style={{border: 'none'}}><span style={{width: 6, height: 6, borderRadius: 5, backgroundColor: '#F04438', marginRight: 5}}></span>Rejected</Label></TableCol>
                            <TableCol><Typography color="#4D5761" fontSize={14}>27 SEP 22</Typography></TableCol>
                            <TableCol>
                              <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View application</Button>
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
                            <TableCol><Label color="#FEF3F2" fontColor="#B42318" style={{border: 'none'}}><span style={{width: 6, height: 6, borderRadius: 5, backgroundColor: '#F04438', marginRight: 5}}></span>Rejected</Label></TableCol>
                            <TableCol><Typography color="#4D5761" fontSize={14}>27 SEP 22</Typography></TableCol>
                            <TableCol>
                              <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View application</Button>
                            </TableCol>
                          </TableRow>
                          </tbody>
                        </Table>
                      ) :
                      <EmptyList name="No applications" showButton />
                  }
                </>

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
                            <Button color="#4B48EC" fontColor="white" onClick={() => setOfferDetailOpen(true)}>View offer</Button>
                          </Box>
                        </TableCol>
                      </TableRow>
                      </tbody>
                    </Table> : <EmptyList name="No offers yet" />
                  }
                </>
              )
            }
            {
              tab === 'projects' && (
                <>
                  <Box style={{padding: "15px 20px", borderBottom: '1px solid #E5E7EB'}}>
                    <ButtonGroup onChange={firstActive => setProjectTab(firstActive)}>
                      <Button>Active projects<Badge style={{marginLeft: 10}}>0</Badge></Button>
                      <Button>History<Badge style={{marginLeft: 10}}>0</Badge></Button>
                    </ButtonGroup>
                  </Box>
                  {
                    saveJobs.length > 0 ? (
                        projectTab ? <Table>
                          <thead>
                          <TableRow>
                            <TableCol>Transaction</TableCol>
                            <TableCol>Project</TableCol>
                            <TableCol>Role</TableCol>
                            <TableCol>Team mates</TableCol>
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
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
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
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
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
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                              </Box>
                            </TableCol>
                          </TableRow>
                          </tbody>
                        </Table> : <Table>
                          <thead>
                          <TableRow>
                            <TableCol>Transaction</TableCol>
                            <TableCol>Project</TableCol>
                            <TableCol>Role</TableCol>
                            <TableCol>Team mates</TableCol>
                            <TableCol>Status</TableCol>
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
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                              </Box>
                            </TableCol>
                            <TableCol>
                              <Label color="#ECFDF3" fontColor="#027A48" style={{border: 'none'}}><span style={{width: 6, height: 6, borderRadius: 5, backgroundColor: '#12B76A', marginRight: 5}}></span>Complete</Label>
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
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                              </Box>
                            </TableCol>
                            <TableCol>
                              <Label color="#ECFDF3" fontColor="#027A48" style={{border: 'none'}}><span style={{width: 6, height: 6, borderRadius: 5, backgroundColor: '#12B76A', marginRight: 5}}></span>Complete</Label>
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
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                                <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} />
                              </Box>
                            </TableCol>
                            <TableCol>
                              <Label color="#ECFDF3" fontColor="#027A48" style={{border: 'none'}}><span style={{width: 6, height: 6, borderRadius: 5, backgroundColor: '#12B76A', marginRight: 5}}></span>Complete</Label>
                            </TableCol>
                          </TableRow>
                          </tbody>
                        </Table>
                      ) :
                    <EmptyList name="No active projects" showButton />
                  }
                </>

              )
            }
            {
              tab === 'documents' && (
                saveJobs.length > 0 ? <Table>
                  <thead>
                  <TableRow>
                    <TableCol>No</TableCol>
                    <TableCol>Date</TableCol>
                    <TableCol>Client</TableCol>
                    <TableCol>Project</TableCol>
                    <TableCol></TableCol>
                  </TableRow>
                  </thead>
                  <tbody>
                  <TableRow>
                    <TableCol>
                     202211
                    </TableCol>
                    <TableCol>31/11/2022</TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                      </Box>
                    </TableCol>
                    <TableCol>SurveySwap</TableCol>
                    <TableCol>
                      <Box>
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View</Button>
                        <Popover
                          top={42}
                          align="right"
                          renderContent={() => (
                            <Box vertical style={{width: 240}}>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>View</Box>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>Download</Box>
                              <Box fullWidth style={{padding: 10, color: '#D92D20'}}>Delete</Box>
                            </Box>
                          )}>
                          <IconButton icon="/icons/more-dark.png" width={14} height={4} style={{border: "1px solid #D2D6DB", fontWeight: 600, height: 34, width: 40, marginLeft: 10}} />
                        </Popover>
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol>
                      202211
                    </TableCol>
                    <TableCol>31/11/2022</TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                      </Box>
                    </TableCol>
                    <TableCol>SurveySwap</TableCol>
                    <TableCol>
                      <Box>
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View</Button>
                        <Popover
                          top={42}
                          align="right"
                          renderContent={() => (
                            <Box vertical style={{width: 240}}>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>View</Box>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>Download</Box>
                              <Box fullWidth style={{padding: 10, color: '#D92D20'}}>Delete</Box>
                            </Box>
                          )}>
                          <IconButton icon="/icons/more-dark.png" width={14} height={4} style={{border: "1px solid #D2D6DB", fontWeight: 600, height: 34, width: 40, marginLeft: 10}} />
                        </Popover>
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol>
                      202211
                    </TableCol>
                    <TableCol>31/11/2022</TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                      </Box>
                    </TableCol>
                    <TableCol>SurveySwap</TableCol>
                    <TableCol>
                      <Box>
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View</Button>
                        <Popover
                          top={42}
                          align="right"
                          renderContent={() => (
                            <Box vertical style={{width: 240}}>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>View</Box>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>Download</Box>
                              <Box fullWidth style={{padding: 10, color: '#D92D20'}}>Delete</Box>
                            </Box>
                          )}>
                          <IconButton icon="/icons/more-dark.png" width={14} height={4} style={{border: "1px solid #D2D6DB", fontWeight: 600, height: 34, width: 40, marginLeft: 10}} />
                        </Popover>
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol>
                      202211
                    </TableCol>
                    <TableCol>31/11/2022</TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                      </Box>
                    </TableCol>
                    <TableCol>SurveySwap</TableCol>
                    <TableCol>
                      <Box>
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View</Button>
                        <Popover
                          top={42}
                          align="right"
                          renderContent={() => (
                            <Box vertical style={{width: 240}}>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>View</Box>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>Download</Box>
                              <Box fullWidth style={{padding: 10, color: '#D92D20'}}>Delete</Box>
                            </Box>
                          )}>
                          <IconButton icon="/icons/more-dark.png" width={14} height={4} style={{border: "1px solid #D2D6DB", fontWeight: 600, height: 34, width: 40, marginLeft: 10}} />
                        </Popover>
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol>
                      202211
                    </TableCol>
                    <TableCol>31/11/2022</TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                      </Box>
                    </TableCol>
                    <TableCol>SurveySwap</TableCol>
                    <TableCol>
                      <Box>
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View</Button>
                        <Popover
                          top={42}
                          align="right"
                          renderContent={() => (
                            <Box vertical style={{width: 240}}>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>View</Box>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>Download</Box>
                              <Box fullWidth style={{padding: 10, color: '#D92D20'}}>Delete</Box>
                            </Box>
                          )}>
                          <IconButton icon="/icons/more-dark.png" width={14} height={4} style={{border: "1px solid #D2D6DB", fontWeight: 600, height: 34, width: 40, marginLeft: 10}} />
                        </Popover>
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol>
                      202211
                    </TableCol>
                    <TableCol>31/11/2022</TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/spotify.png" alt="Spotify" width={40} height={40} style={{marginRight: 15}} />Spotify
                      </Box>
                    </TableCol>
                    <TableCol>SurveySwap</TableCol>
                    <TableCol>
                      <Box>
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", fontWeight: 600}}>View</Button>
                        <Popover
                          top={42}
                          align="right"
                          renderContent={() => (
                            <Box vertical style={{width: 240}}>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>View</Box>
                              <Box fullWidth style={{padding: 10, color: '#384250'}}>Download</Box>
                              <Box fullWidth style={{padding: 10, color: '#D92D20'}}>Delete</Box>
                            </Box>
                          )}>
                          <IconButton icon="/icons/more-dark.png" width={14} height={4} style={{border: "1px solid #D2D6DB", fontWeight: 600, height: 34, width: 40, marginLeft: 10}} />
                        </Popover>
                      </Box>
                    </TableCol>
                  </TableRow>
                  </tbody>
                </Table> : (
                  <>
                    <Box style={{padding: "15px 20px", borderBottom: '1px solid #E5E7EB'}}>
                      <ButtonGroup >
                        <Button>Invoices<Badge style={{marginLeft: 10}}>0</Badge></Button>
                        <Button>Agreements<Badge style={{marginLeft: 10}}>0</Badge></Button>
                      </ButtonGroup>
                    </Box>
                    {
                      <EmptyList name="No invoices yet" />
                    }
                  </>
                )
              )
            }
          </Card>
        </ContentMain>
      </Content>
      <CompleteProfile open={completeProfileOpen} setOpen={setCompleteProfileOpen}></CompleteProfile>
      <RequirementsDontMatch open={dontMatchOpen} setOpen={setDontMatchOpen}></RequirementsDontMatch>
      <InviteReview open={inviteReviewOpen} setOpen={setInviteReviewOpen}></InviteReview>
      <OfferDetail open={offerDetailOpen} setOpen={setOfferDetailOpen} handleSubmit={() => {
        setOfferDetailOpen(false)
        setOfferViewOpen(true)
      }}></OfferDetail>
      <OfferView open={offerViewOpen} setOpen={setOfferViewOpen} handleSubmit={() => {
        setOfferViewOpen(false)
        setContactSignedOpen(true)
      }}></OfferView>
      <ContactSigned open={contactSignedOpen} setOpen={setContactSignedOpen}></ContactSigned>
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
