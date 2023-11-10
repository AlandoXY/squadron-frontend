import React, {useEffect, useState} from "react";
import Image from "next/image";
import Typography from "@/components/typography";
import NavbarItem from "@/components/navbar-item";
import IconButton from "@/components/icon-button";
import Navbar from "@/components/navbar";
import Label from "@/components/label";
import Box from "@/components/box";
import Table from "@/components/table";
import TableRow from "@/components/table-row";
import TableCol from "@/components/table-col";
import Dropdown from "@/components/dropdown";
import Tabs from "@/components/tabs";
import Tab from "@/components/tab";
import Button from "@/components/button";
import styled from "styled-components";
import Link from "@/components/link";
import VideoPlayer from "@/components/video-player";
import {B} from "msw/lib/glossary-de6278a9";
import Explanation from "@/components/explanation";
import EditProjectConfirm from "@/components/c/edit-project-confirm";
import {useRouter, useSearchParams} from "next/navigation";
import SendOffer from "@/components/c/squad/send-offer";
import MissionLaunched from "@/components/c/squad/mission-launched";
import ProjectStarted from "@/components/c/home/project-started";
import ViewInvoice from "@/components/c/project-detail/view-invoice";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 100px;
  border: 1px solid #F3F4F6;
  color: #4D5761;
`;

const Section1Top = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  background-color: #0B0F00;
  width: 100%;
  padding: 20px 30px;
`

const Section1Content = styled.div`
  display: flex;
  padding: 20px;
`

const Section1ContentLeft = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: #F9FAFB;
  margin-right: 50px;
`

const Section1ContentRight = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  border-left: 1px solid #EAECF0;
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
  margin-bottom: 20px;
`

export default function ProjectDetailsC() {
  const searchParams = useSearchParams()
  const [tab, setTab] = useState(searchParams.get('tab') || "Project Details");
  const [editProjectConfirmOpen, setEditProjectConfirmOpen] = useState(false);
  const [missionLaunchedOpen, setMissionLaunchedOpen] = useState(false);
  const [offerSent, setOfferSent] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);
  const [offerLive, setOfferLive] = useState(false);
  const [sendOfferOpen, setSendOfferOpen] = useState(false);
  const [squadTab, setSquadTab] = useState(0);
  const [projectStartedOpen, setProjectStartedOpen] = useState(false)
  const [viewInvoiceOpen, setViewInvoiceOpen] = useState(false)
  const [start, setStart] = useState(false)
  const router = useRouter();

  const status = offerLive ? 'live' : offerAccepted ? 'accepted' : offerSent ? 'sent' : 'unsent';

  useEffect(() => {
    if (searchParams.get('start')) {
      setStart(true);
    }
  }, [searchParams])

  return (
    <HomeContainer>
      <Header>
        <Box>
          <IconButton width={40} height={40} fontSize="20px" icon="/icons/logo.png">squadron</IconButton>
        </Box>
      </Header>
      <Box vertical justifyContent="center">
        <Section1Top>
          <Image src="/icons/google.png" width={60} height={60} alt="Ellipse" style={{marginRight: 30}} />
          <div>
            <Typography color="white">Google</Typography>
            <Typography color="white" fontSize="22px" style={{margin: "10px 0"}}>SurveySwap</Typography>
            <Typography color="white" fontSize="12px">Posted: 3 September, 2022</Typography>
          </div>
        </Section1Top>
        <Box fullWidth style={{marginTop: 20}}>
          <Tabs value={tab} onChange={value => setTab(value)} style={{width: "100%"}}>
            <Tab value="Project Details">Project Details</Tab>
            <Tab value="Squad">Squad</Tab>
            <Tab value="Time tracking">Time tracking</Tab>
            <Tab value="Invoices">Invoices</Tab>
            <Tab value="Contracts">Contracts</Tab>
            <Tab value="Squad Pulse">Squad Pulse</Tab>
          </Tabs>
        </Box>
        {
          tab === "Project Details" && (
            <>
              {
                start && (
                  <Box fullWidth justifyContent="flex-end" style={{margin: "20px 0 0", padding: "0 50px"}}>
                    <Box justifyContent="space-between" fullWidth style={{border: "1px solid #9DA4AE", padding: 24, borderRadius: 16, backgroundColor: "#EDFBB8"}}>
                      <Box>
                        <Image src="/icons/check-circle-1.png" alt="Check" width={56} height={56} />
                        <Box vertical style={{marginLeft: 20}}>
                          <Typography color="#111927" fontWeight={500} style={{marginBottom: 10}}>Your team is ready</Typography>
                          <Typography color="#4D5761" fontWeight={500}>Start your project blablabla</Typography>
                        </Box>
                      </Box>
                      <Button color="#4B48EC" fontColor="white" onClick={() => setProjectStartedOpen(true)}>Start project</Button>
                    </Box>
                  </Box>
                )
              }
              <Box fullWidth justifyContent="flex-end" style={{margin: "20px 0", padding: "0 50px"}}>
                <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}}>Share</Button>
                <Button color="#4B48EC" fontColor="white" onClick={() => setEditProjectConfirmOpen(true)}>Edit project</Button>
              </Box>
              <Box fullWidth vertical style={{padding: "0 50px"}}>
                <Section1Content>
                  <Section1ContentLeft>
                    <Row>
                      <Image src="/icons/ellipse.png" width={50} height={50} alt="Ellipse" style={{marginRight: 10}} />
                      <div>
                        <Typography fontSize="16px" fontWeight={600}>Google</Typography>
                        <Link to="https://www.google.com" fontSize="12px" style={{padding: 0}}>www.google.com</Link>
                      </div>
                    </Row>
                    <Row style={{margin: "20px 0"}}>
                      <Row>
                        <Image src="/icons/building-07.png" width={14} height={14} alt="Building" style={{marginRight: 5}} />
                        <Typography fontSize="12px" color="#4D5761">Computer Software</Typography>
                      </Row>
                      <Row style={{marginLeft: 7}}>
                        <Image src="/icons/location.png" width={11} height={14} alt="Building" style={{marginRight: 5}} />
                        <Typography fontSize="12px" color="#4D5761">Amsterdam, NL</Typography>
                      </Row>
                    </Row>
                    <Typography fontSize="12px" color="#4D5761">We created Stir to meet your unique needs as a creator, and to help you enhance and grow your business. Stir takes all the innovative ways you make money — like YouTube and Shopify and Patreon and Twitch and Instagram and Facebook and Brand Deals and Anchor — and puts them all in one place.</Typography>
                    <Link to="https://www.google.com" style={{margin: "10px 0"}}>View company profile</Link>
                    <div style={{borderTop: "1px solid #EAECF0", borderBottom: "1px solid #EAECF0", padding: "20px 0"}}>
                      <Row style={{justifyContent: "space-between"}}>
                        <Typography fontWeight={600}>Timeline estimate</Typography>
                        <Typography>November 20, 2022</Typography>
                      </Row>
                      <Row style={{justifyContent: "space-between", marginTop: 20}}>
                        <Typography fontWeight={600}>Start date</Typography>
                        <Typography>November 20, 2022</Typography>
                      </Row>
                    </div>
                    <Row style={{margin: "30px 0"}}>
                      <Image src="/icons/avatar-1.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                      <div>
                        <Typography color="#4D5761">Jack Green</Typography>
                        <Typography fontWeight={600}>Project consultant</Typography>
                      </div>
                    </Row>
                    <Button color="#4B48EC" fontColor="white" fullWidth>Ask a question</Button>
                  </Section1ContentLeft>
                  <Section1ContentRight>
                    <Typography component="h2" fontWeight={600} fontSize="18px" style={{marginBottom: 20}}>Project outline</Typography>
                    <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 15}}>We are helping e-commerce to be more profitable and sustainable by processing, analysing and reselling returns and overstock through our software and logistics platform.</Typography>
                    <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 30}}>We need a passionate team to build the beta version of our SaaS Customer Returns Portal and a multi-tenant web application that helps e-commerce companies to save their returned items from destruction.</Typography>
                    <Typography component="h2" fontWeight={600} fontSize="18px" style={{marginBottom: 20}}>Key deliverables</Typography>
                    <ul style={{paddingLeft: 20, margin: "0 0 30px 0", color: "#4D5761", fontSize: 14}}>
                      <li>Product design of new platform features</li>
                      <li>Back end architecture and documentation for new development</li>
                      <li>Front end engineering to bring the platform to life</li>
                    </ul>
                    <VideoPlayer url={"/videos/video.mp4"} width="456px" height="255px" />
                  </Section1ContentRight>
                </Section1Content>
                <Box fullWidth vertical style={{margin: "50px 20px"}}>
                  <Typography color="#111927" fontSize={24} fontWeight={500}>Roles</Typography>
                  <Box fullWidth vertical style={{marginTop: 20}}>
                    <Card>
                      <Row style={{padding: "16px 24px", gap: 15, borderBottom: "1px solid #E5E7EB"}}>
                        <Explanation title="Lead role" desc="Explanation about what the lead role">
                          <Label icon="/icons/info-white.png" color="#0B0F00" fontColor="white" style={{border: "none", fontWeight: 500}}>Lead role</Label>
                        </Explanation>
                        <Label icon="/icons/dot.png" color="#ECFDF3" iconSize={5} fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Open Role</Label>
                        <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Accepting applications</Label>
                      </Row>
                      <div style={{padding: "16px 24px"}}>
                        <Row style={{justifyContent: "space-between", width: "100%"}}>
                          <Row>
                            <Image src="/icons/google.png" width={50} height={50} alt="Google" style={{marginRight: 10}} />
                            <Typography fontSize="20px" color="#111927" fontWeight={500}>Full stack</Typography>
                          </Row>
                          <Row>
                            <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}}>Refer</Button>
                          </Row>
                        </Row>
                        <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
                          <Typography color="#475467" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. </Typography>
                        </Row>
                        <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>$30-$50 /h</Typography>
                          </Row>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>20-25h /week</Typography>
                          </Row>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>Amsterdam, NL</Typography>
                          </Row>
                          <Row>
                            <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>13 AUG</Typography>
                          </Row>
                        </Row>
                        <Typography fontWeight={500} fontSize="14px" style={{margin: "20px 0"}}>Required skills</Typography>
                        <Row style={{gap: 20, marginBottom: 20}}>
                          <Label borderColor="#027A48" fontColor="#027A48">Label</Label>
                          <Label borderColor="#027A48" fontColor="#027A48">Label</Label>
                          <Label borderColor="#027A48" fontColor="#027A48">Label</Label>
                        </Row>
                        <Typography fontWeight={500} fontSize="14px" style={{margin: "20px 0"}}>Recommended skills</Typography>
                        <Row style={{gap: 20, marginBottom: 20}}>
                          <Label>Label</Label>
                          <Label>Label</Label>
                          <Label>Label</Label>
                        </Row>
                        <Typography fontWeight={500} fontSize="14px" style={{margin: "20px 0"}}>Tools</Typography>
                        <Row style={{gap: 20, marginBottom: 20}}>
                          <Label icon="/icons/ps.png">Label</Label>
                          <Label icon="/icons/ps.png">Label</Label>
                          <Label icon="/icons/ps.png">Label</Label>
                        </Row>
                      </div>
                    </Card>
                    <Card>
                      <Row style={{padding: "16px 24px", gap: 15, borderBottom: "1px solid #E5E7EB"}}>
                        <Explanation title="Reviewing builders" desc="The company is still accepting applications but are in the process of reviewing talent so the success rate may be lower." maxWidth="400px">
                          <Label icon="/icons/info-white.png" color="#EFF8FF" fontColor="#175CD3" style={{border: "none", fontWeight: 500}}>Reviewing Builders</Label>
                        </Explanation>
                      </Row>
                      <div style={{padding: "16px 24px"}}>
                        <Row style={{justifyContent: "space-between", width: "100%"}}>
                          <Row>
                            <Image src="/icons/google.png" width={50} height={50} alt="Google" style={{marginRight: 10}} />
                            <Typography fontSize="20px" color="#111927" fontWeight={500}>Role (position)</Typography>
                          </Row>
                          <Row>
                            <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}}>Refer</Button>
                          </Row>
                        </Row>
                        <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
                          <Typography color="#475467" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. </Typography>
                        </Row>
                        <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>$30-$50 /h</Typography>
                          </Row>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>20-25h /week</Typography>
                          </Row>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>Amsterdam, NL</Typography>
                          </Row>
                          <Row>
                            <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>13 AUG</Typography>
                          </Row>
                        </Row>
                        <Row style={{marginTop: 15}}>
                          <Typography fontWeight={500} color="#4D5761">See less</Typography>
                          <Image src="/icons/up-arrow.png" width={12} height={6} alt="Up-Arrow" style={{marginLeft: 15}} />
                        </Row>
                      </div>
                    </Card>
                    <Card>
                      <Row style={{padding: "16px 24px", gap: 15, borderBottom: "1px solid #E5E7EB"}}>
                        <Explanation title="Reviewing builders" desc="The company is still accepting applications but are in the process of reviewing talent so the success rate may be lower." maxWidth="400px">
                          <Label icon="/icons/info-white.png" color="#EFF8FF" fontColor="#175CD3" style={{border: "none", fontWeight: 500}}>Reviewing Builders</Label>
                        </Explanation>
                      </Row>
                      <div style={{padding: "16px 24px"}}>
                        <Row style={{justifyContent: "space-between", width: "100%"}}>
                          <Row>
                            <Image src="/icons/google.png" width={50} height={50} alt="Google" style={{marginRight: 10}} />
                            <Typography fontSize="20px" color="#111927" fontWeight={500}>Role (position)</Typography>
                          </Row>
                          <Row>
                            <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}}>Refer</Button>
                          </Row>
                        </Row>
                        <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
                          <Typography color="#475467" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. </Typography>
                        </Row>
                        <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>$30-$50 /h</Typography>
                          </Row>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>20-25h /week</Typography>
                          </Row>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>Amsterdam, NL</Typography>
                          </Row>
                          <Row>
                            <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>13 AUG</Typography>
                          </Row>
                        </Row>
                        <Row style={{marginTop: 15}}>
                          <Typography fontWeight={500} color="#4D5761">See less</Typography>
                          <Image src="/icons/up-arrow.png" width={12} height={6} alt="Up-Arrow" style={{marginLeft: 15}} />
                        </Row>
                      </div>
                    </Card>
                    <Card>
                      <Row style={{padding: "16px 24px", gap: 15, borderBottom: "1px solid #E5E7EB"}}>
                        <Explanation title="Reviewing builders" desc="The company is still accepting applications but are in the process of reviewing talent so the success rate may be lower." maxWidth="400px">
                          <Label icon="/icons/info-white.png" color="#EFF8FF" fontColor="#175CD3" style={{border: "none", fontWeight: 500}}>Reviewing Builders</Label>
                        </Explanation>
                      </Row>
                      <div style={{padding: "16px 24px"}}>
                        <Row style={{justifyContent: "space-between", width: "100%"}}>
                          <Row>
                            <Image src="/icons/google.png" width={50} height={50} alt="Google" style={{marginRight: 10}} />
                            <Typography fontSize="20px" color="#111927" fontWeight={500}>Role (position)</Typography>
                          </Row>
                          <Row>
                            <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}}>Refer</Button>
                          </Row>
                        </Row>
                        <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
                          <Typography color="#475467" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. </Typography>
                        </Row>
                        <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>$30-$50 /h</Typography>
                          </Row>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>20-25h /week</Typography>
                          </Row>
                          <Row style={{marginRight: 15}}>
                            <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>Amsterdam, NL</Typography>
                          </Row>
                          <Row>
                            <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                            <Typography>13 AUG</Typography>
                          </Row>
                        </Row>
                        <Row style={{marginTop: 15}}>
                          <Typography fontWeight={500} color="#4D5761">See less</Typography>
                          <Image src="/icons/up-arrow.png" width={12} height={6} alt="Up-Arrow" style={{marginLeft: 15}} />
                        </Row>
                      </div>
                    </Card>
                  </Box>
                </Box>
              </Box>
            </>
          )
        }
        {
          tab === "Squad" && (
            <Box fullWidth vertical style={{padding: "0 50px", margin: "40px 0"}}>
              {
                offerAccepted ? (
                  <Box justifyContent="space-between" fullWidth style={{border: "1px solid #9DA4AE", padding: 24, borderRadius: 16, backgroundColor: "#EDFBB8"}}>
                    <Box>
                      <Image src="/icons/check-circle-1.png" alt="Check" width={56} height={56} />
                      <Box vertical style={{marginLeft: 20}}>
                        <Typography color="#111927" fontWeight={500} style={{marginBottom: 10}}>Your Squad is Ready</Typography>
                        <Typography color="#4D5761" fontWeight={500}>Kick off your mission.</Typography>
                      </Box>
                    </Box>
                    <Button color="#4B48EC" fontColor="white" onClick={() => setMissionLaunchedOpen(true)}>Launch Mission</Button>
                  </Box>
                ) : (
                  <Box justifyContent="space-between" fullWidth style={{border: "1px solid #D2D6DB", padding: 24, borderRadius: 16, backgroundColor: "#F9FAFB"}}>
                    <Box vertical>
                      <Typography color="#111927" fontWeight={500} style={{marginBottom: 10}}>We are collecting the best talent for your team</Typography>
                      <Typography color="#4D5761" fontWeight={500}>We’ll let you know when it’s ready to review</Typography>
                    </Box>
                    <Button color="#4B48EC" fontColor="white" onClick={() => router.push('/c/squads-applications')}>Review applicants</Button>
                  </Box>
                )
              }
              <Box style={{marginTop: 20}}>
                <Button color={squadTab === 0 ? "#FAFAFE" : "white"} fontColor={squadTab === 0 ? "#413999" : "6C737F"} onClick={() => setSquadTab(0)}>My Squad</Button>
                <Button color={squadTab === 1 ? "#FAFAFE" : "white"} fontColor={squadTab === 1 ? "#413999" : "6C737F"} onClick={() => setSquadTab(1)}>Offers rejected</Button>
              </Box>
              <Box vertical fullWidth style={{border: "1px solid #D2D6DB", padding: 24, borderRadius: 16, marginTop: 20}}>
                {
                  squadTab === 0 ? (
                    <>
                      <Box fullWidth justifyContent="space-between">
                        <Box>
                          <Image src="/icons/people-group-1.png" alt="People Group" width={56} height={56} />
                          <Box vertical style={{marginLeft: 15}}>
                            <Typography color="#111927" fontWeight={600} fontSize={20}>My Squad</Typography>
                            <Typography color="#4D5761" fontSize={14}>SurveySwap</Typography>
                          </Box>
                        </Box>
                        <Box>
                          <IconButton icon="/icons/plus.png" width={16} height={16} color="white" fontColor="#384250" fontSize="14px" style={{border: "1px solid #D2D6DB"}} onClick={() => router.push("/c/add-team-role?status=" + status)}>Add role</IconButton>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginLeft: 10}} onClick={() => router.push("/c/add-team-role?status=" + status)}>Manage squad</Button>
                        </Box>
                      </Box>
                      <Box style={{margin: "50px 0", gap: 80, flexWrap: 'wrap'}}>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/avatar.png" alt="Use" width={112} height={112} />
                          </Box>
                          {
                            offerLive ? <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label> : offerAccepted ? <Label color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Offer accepted</Label> : offerSent ? <Label color="#B54708" fontColor="white" style={{border: "none", marginTop: 10}}>Offer sent</Label> : <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Send Offer</Label>
                          }
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>UX Designer</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>Patricia Montero</Typography>
                          {
                            offerSent ? <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={!offerAccepted}>Message</Button> : <Button color="#4B48EC" fontColor="white" onClick={() => setSendOfferOpen(true)}>Send offer</Button>
                          }
                        </Box>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/avatar-1.png" alt="Use" width={112} height={112} />
                          </Box>
                          {
                            offerLive ? <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label> : offerAccepted ? <Label color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Offer accepted</Label> : offerSent ? <Label color="#B54708" fontColor="white" style={{border: "none", marginTop: 10}}>Offer sent</Label> : <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Send Offer</Label>
                          }
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>UX Designer</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>Patricia Montero</Typography>
                          {
                            offerSent ? <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={!offerAccepted}>Message</Button> : <Button color="#4B48EC" fontColor="white" onClick={() => setSendOfferOpen(true)}>Send offer</Button>
                          }
                        </Box>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/avatar-2.png" alt="Use" width={112} height={112} />
                          </Box>
                          {
                            offerLive ? <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label> : offerAccepted ? <Label color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Offer accepted</Label> : offerSent ? <Label color="#B54708" fontColor="white" style={{border: "none", marginTop: 10}}>Offer sent</Label> : <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Send Offer</Label>
                          }
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>Product Designer</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>Patricia Montero</Typography>
                          {
                            offerSent ? <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={!offerAccepted}>Message</Button> : <Button color="#4B48EC" fontColor="white" onClick={() => setSendOfferOpen(true)}>Send offer</Button>
                          }
                        </Box>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/avatar-3.png" alt="Use" width={112} height={112} />
                          </Box>
                          {
                            offerLive ? <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label> : offerAccepted ? <Label color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Offer accepted</Label> : offerSent ? <Label color="#B54708" fontColor="white" style={{border: "none", marginTop: 10}}>Offer sent</Label> : <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Send Offer</Label>
                          }
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>UX Researcher</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>Patricia Montero</Typography>
                          {
                            offerSent ? <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={!offerAccepted}>Message</Button> : <Button color="#4B48EC" fontColor="white" onClick={() => setSendOfferOpen(true)}>Send offer</Button>
                          }
                        </Box>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/avatar.png" alt="Use" width={112} height={112} />
                          </Box>
                          {
                            offerLive ? <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label> : offerAccepted ? <Label color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Offer accepted</Label> : offerSent ? <Label color="#B54708" fontColor="white" style={{border: "none", marginTop: 10}}>Offer sent</Label> : <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Send Offer</Label>
                          }
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>Front-End Engineer</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>Patricia Montero</Typography>
                          {
                            offerSent ? <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={!offerAccepted}>Message</Button> : <Button color="#4B48EC" fontColor="white" onClick={() => setSendOfferOpen(true)}>Send offer</Button>
                          }
                        </Box>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/avatar-1.png" alt="Use" width={112} height={112} />
                          </Box>
                          {
                            offerLive ? <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label> : offerAccepted ? <Label color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Offer accepted</Label> : offerSent ? <Label color="#B54708" fontColor="white" style={{border: "none", marginTop: 10}}>Offer sent</Label> : <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Send Offer</Label>
                          }
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>Full-Stack Engineer</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>Patricia Montero</Typography>
                          {
                            offerSent ? <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={!offerAccepted}>Message</Button> : <Button color="#4B48EC" fontColor="white" onClick={() => setSendOfferOpen(true)}>Send offer</Button>
                          }
                        </Box>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/avatar-2.png" alt="Use" width={112} height={112} />
                          </Box>
                          {
                            offerLive ? <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label> : offerAccepted ? <Label color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Offer accepted</Label> : offerSent ? <Label color="#B54708" fontColor="white" style={{border: "none", marginTop: 10}}>Offer sent</Label> : <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Send Offer</Label>
                          }
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>DevOps Engineer</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>Patricia Montero</Typography>
                          {
                            offerSent ? <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={!offerAccepted}>Message</Button> : <Button color="#4B48EC" fontColor="white" onClick={() => setSendOfferOpen(true)}>Send offer</Button>
                          }
                        </Box>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/avatar-3.png" alt="Use" width={112} height={112} />
                          </Box>
                          {
                            offerLive ? <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label> : offerAccepted ? <Label color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Offer accepted</Label> : offerSent ? <Label color="#B54708" fontColor="white" style={{border: "none", marginTop: 10}}>Offer sent</Label> : <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Send Offer</Label>
                          }
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>UX Designer</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>Patricia Montero</Typography>
                          {
                            offerSent ? <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={!offerAccepted}>Message</Button> : <Button color="#4B48EC" fontColor="white" onClick={() => setSendOfferOpen(true)}>Send offer</Button>
                          }
                        </Box>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/avatar.png" alt="Use" width={112} height={112} />
                          </Box>
                          {
                            offerLive ? <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label> : offerAccepted ? <Label color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Offer accepted</Label> : offerSent ? <Label color="#B54708" fontColor="white" style={{border: "none", marginTop: 10}}>Offer sent</Label> : <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Send Offer</Label>
                          }
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>UX Designer</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>Patricia Montero</Typography>
                          {
                            offerSent ? <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={!offerAccepted}>Message</Button> : <Button color="#4B48EC" fontColor="white" onClick={() => setSendOfferOpen(true)}>Send offer</Button>
                          }
                        </Box>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/avatar-1.png" alt="Use" width={112} height={112} />
                          </Box>
                          {
                            offerLive ? <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label> : offerAccepted ? <Label color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Offer accepted</Label> : offerSent ? <Label color="#B54708" fontColor="white" style={{border: "none", marginTop: 10}}>Offer sent</Label> : <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Send Offer</Label>
                          }
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>UX Designer</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>Patricia Montero</Typography>
                          {
                            offerSent ? <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={!offerAccepted}>Message</Button> : <Button color="#4B48EC" fontColor="white" onClick={() => setSendOfferOpen(true)}>Send offer</Button>
                          }
                        </Box>
                        <Box flexDirection="column" justifyContent="center">
                          <Box flexDirection="column" justifyContent="center" alignItem="center" style={{width: 112, height: 112, borderRadius: "50%", backgroundColor: "#E5E7EB"}}>
                            <Image src="/icons/user-2.png" alt="Use" width={64} height={64} />
                          </Box>
                          <Label color="#F2F4F7" fontColor="#344054" style={{border: "none", marginTop: 10}}>Unfilled</Label>
                          <Typography color="#111927" fontWeight={500} style={{margin: "10px 0 5px"}}>DevOps Engineer</Typography>
                          <Typography color="#6C737F" fontSize={14} style={{marginBottom: 15}}>No talent assigned</Typography>
                          <Button color="#4B48EC" fontColor="white" onClick={() => router.push('/c/application-for-role')}>Find talent</Button>
                        </Box>
                      </Box>
                    </>
                  ) :
                  (
                    <Table>
                      <thead>
                      <TableRow>
                        <TableCol>Squad</TableCol>
                        <TableCol>Position</TableCol>
                        <TableCol>State</TableCol>
                      </TableRow>
                      </thead>
                      <tbody>
                      <TableRow>
                        <TableCol>
                          <Box>
                            <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />
                            <Box vertical>
                              <Typography color="#111927" fontSize={14} fontWeight={500}>Maria long name</Typography>
                              <Typography color="#1B18E4" fontSize={14}>View profile</Typography>
                            </Box>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>DevOps Engineer</Typography>
                        </TableCol>
                        <TableCol>
                          <Label color="#FEF3F2" fontColor="#B42318" style={{border: "none"}}>Rejected</Label>
                        </TableCol>
                      </TableRow>
                      </tbody>
                    </Table>
                  )
                }
              </Box>
            </Box>
          )
        }
        {
          tab === "Invoices" && (
            <Box fullWidth vertical style={{padding: "0 50px", margin: "40px 0"}}>
              <Box style={{gap: 10, marginBottom: 20}}>
                <Dropdown
                  options={[{ label: "This week", value: "This week" }, { label: "This year", value: "This year" }]}
                  prevIcon="/icons/calendar.png"
                  placeholder="Filter by date"
                  inputWidth="100px" />
                <Dropdown
                  options={[{ label: "All invoices", value: "All invoices" }]}
                  placeholder="Status"
                  inputWidth="100px" />
              </Box>
              <Card>
                <Table>
                  <thead>
                  <TableRow>
                    <TableCol>Date issued</TableCol>
                    <TableCol>No</TableCol>
                    <TableCol>Amount due</TableCol>
                    <TableCol>Amount paid</TableCol>
                    <TableCol>Status</TableCol>
                    <TableCol>Paid on</TableCol>
                    <TableCol></TableCol>
                  </TableRow>
                  </thead>
                  <tbody>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>#07</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Paid</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>#06</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Label color="#F3F4F6" fontColor="#384250" style={{border: "none", fontWeight: 500}}>Pending</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>--</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>#05</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Label color="#FEF3F2" fontColor="#B42318" style={{border: "none", fontWeight: 500}}>Past due</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>--</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="#4B48EC" fontColor="white" style={{marginRight: 10}} onClick={() => router.push("/c/my-squad")}>Pay invoice</Button>
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>#04</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Paid</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>#03</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Paid</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>#02</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Paid</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>#01</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>$4535</Typography>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Paid</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  </tbody>
                </Table>
              </Card>
            </Box>
          )
        }
        {
          tab === "Contracts" && (
            <Box fullWidth vertical style={{padding: "0 50px", margin: "40px 0"}}>
              <Typography color="#111927" fontWeight={500} fontSize={18} style={{marginBottom: 25}}>Service agreement</Typography>
              <Card>
                <Table>
                  <thead>
                  <TableRow>
                    <TableCol>Created on</TableCol>
                    <TableCol>Signatory</TableCol>
                    <TableCol>Status</TableCol>
                    <TableCol>Signed at</TableCol>
                    <TableCol></TableCol>
                  </TableRow>
                  </thead>
                  <tbody>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>Squadron</Typography>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Signed</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>25 Dec, 2023 at 11:12 AM</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  </tbody>
                </Table>
              </Card>
              <Typography color="#111927" fontWeight={500} fontSize={18} style={{marginBottom: 25, marginTop: 40}}>Contracts</Typography>
              <Card>
                <Table>
                  <thead>
                  <TableRow>
                    <TableCol>Created on</TableCol>
                    <TableCol>Signatory</TableCol>
                    <TableCol>Status</TableCol>
                    <TableCol>Signed at</TableCol>
                    <TableCol></TableCol>
                  </TableRow>
                  </thead>
                  <tbody>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} style={{marginRight: 10}} />
                        <Typography color="#4D5761" fontSize={14}>Olivia Rhye</Typography>
                      </Box>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Signed</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>25 Dec, 2023 at 11:12 AM</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} style={{marginRight: 10}} />
                        <Typography color="#4D5761" fontSize={14}>Olivia Rhye</Typography>
                      </Box>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Signed</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>25 Dec, 2023 at 11:12 AM</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} style={{marginRight: 10}} />
                        <Typography color="#4D5761" fontSize={14}>Olivia Rhye</Typography>
                      </Box>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Signed</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>25 Dec, 2023 at 11:12 AM</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} style={{marginRight: 10}} />
                        <Typography color="#4D5761" fontSize={14}>Olivia Rhye</Typography>
                      </Box>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Signed</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>25 Dec, 2023 at 11:12 AM</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} style={{marginRight: 10}} />
                        <Typography color="#4D5761" fontSize={14}>Olivia Rhye</Typography>
                      </Box>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Signed</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>25 Dec, 2023 at 11:12 AM</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} style={{marginRight: 10}} />
                        <Typography color="#4D5761" fontSize={14}>Olivia Rhye</Typography>
                      </Box>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Signed</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>25 Dec, 2023 at 11:12 AM</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  <TableRow>
                    <TableCol style={{fontWeight: 600}}>
                      <Typography color="#4D5761" fontSize={14}>31/11/2022</Typography>
                    </TableCol>
                    <TableCol>
                      <Box>
                        <Image src="/icons/avatar.png" alt="Avatar" width={32} height={32} style={{marginRight: 10}} />
                        <Typography color="#4D5761" fontSize={14}>Olivia Rhye</Typography>
                      </Box>
                    </TableCol>
                    <TableCol>
                      <Label color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>Signed</Label>
                    </TableCol>
                    <TableCol>
                      <Typography color="#4D5761" fontSize={14}>25 Dec, 2023 at 11:12 AM</Typography>
                    </TableCol>
                    <TableCol>
                      <Box justifyContent="flex-end">
                        <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}} onClick={() => setViewInvoiceOpen(true)}>View</Button>
                        <IconButton icon="/icons/download.png" width={15} height={15} color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} />
                      </Box>
                    </TableCol>
                  </TableRow>
                  </tbody>
                </Table>
              </Card>
            </Box>
          )
        }
        {
          tab === "Squad Pulse" && (
            <Box fullWidth vertical style={{margin: "40px 0"}}>
              <Box fullWidth style={{padding: "25px 112px 0"}}>
                <Box fullWidth justifyContent="space-between">
                  <Box vertical>
                    <Typography color="#111927" fontSize={24} fontWeight={500}>Team’s feedback</Typography>
                    <Typography color="#4D5761">Average team score based on individual feedback from your team members</Typography>
                  </Box>
                  <Box>
                    <Button color="#4B48EC" fontColor="white">Submit feedback</Button>
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
                    <Link stlye={{fontWeight: 600}}>See all</Link>
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
                    <Box justifyContent="space-between" alignItem="flex-start" fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                      <Box vertical>
                        <Image src="/icons/avatar.png" alt="Avatar" width={64} height={64} />
                        <Typography color="#111927" fontSize={20} fontWeight={500} style={{margin: "10px 0 6px"}}>Product Manager</Typography>
                        <Typography color="#6C737F" fontSize={14}>Patricia Montero</Typography>
                      </Box>
                      <IconButton icon="/icons/dots-vertical.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}}/>
                    </Box>
                  </Box>
                  <Box vertical>
                    <Typography color="#4D5761" fontSize={16} style={{marginBottom: 10}}>7 May - 14 May, 2022</Typography>
                    <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>5</Box>
                  </Box>
                </Card>
                <Card style={{padding: 20, width: 300}}>
                  <Box>
                    <Box justifyContent="space-between" alignItem="flex-start" fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                      <Box vertical>
                        <Image src="/icons/avatar-1.png" alt="Avatar" width={64} height={64} />
                        <Typography color="#111927" fontSize={20} fontWeight={500} style={{margin: "10px 0 6px"}}>Product Manager</Typography>
                        <Typography color="#6C737F" fontSize={14}>Patricia Montero</Typography>
                      </Box>
                      <IconButton icon="/icons/dots-vertical.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}}/>
                    </Box>
                  </Box>
                  <Box vertical>
                    <Typography color="#4D5761" fontSize={16} style={{marginBottom: 10}}>7 May - 14 May, 2022</Typography>
                    <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>4</Box>
                  </Box>
                </Card>
                <Card style={{padding: 20, width: 300}}>
                  <Box>
                    <Box justifyContent="space-between" alignItem="flex-start" fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                      <Box vertical>
                        <Image src="/icons/avatar-2.png" alt="Avatar" width={64} height={64} />
                        <Typography color="#111927" fontSize={20} fontWeight={500} style={{margin: "10px 0 6px"}}>Product Manager</Typography>
                        <Typography color="#6C737F" fontSize={14}>Patricia Montero</Typography>
                      </Box>
                      <IconButton icon="/icons/dots-vertical.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}}/>
                    </Box>
                  </Box>
                  <Box vertical>
                    <Typography color="#4D5761" fontSize={16} style={{marginBottom: 10}}>7 May - 14 May, 2022</Typography>
                    <Box style={{padding: "0 16px", backgroundColor: "#F79009", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>3</Box>
                  </Box>
                </Card>
                <Card style={{padding: 20, width: 300}}>
                  <Box>
                    <Box justifyContent="space-between" alignItem="flex-start" fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                      <Box vertical>
                        <Image src="/icons/avatar-3.png" alt="Avatar" width={64} height={64} />
                        <Typography color="#111927" fontSize={20} fontWeight={500} style={{margin: "10px 0 6px"}}>Product Manager</Typography>
                        <Typography color="#6C737F" fontSize={14}>Patricia Montero</Typography>
                      </Box>
                      <IconButton icon="/icons/dots-vertical.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}}/>
                    </Box>
                  </Box>
                  <Box vertical>
                    <Typography color="#4D5761" fontSize={16} style={{marginBottom: 10}}>7 May - 14 May, 2022</Typography>
                    <Box style={{padding: "0 16px", backgroundColor: "#F79009", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>3</Box>
                  </Box>
                </Card>
              </Box>
            </Box>
          )
        }
      </Box>
      <EditProjectConfirm open={editProjectConfirmOpen} setOpen={setEditProjectConfirmOpen} />
      <MissionLaunched open={missionLaunchedOpen} setOpen={setMissionLaunchedOpen} handleSubmit={() => {
        setMissionLaunchedOpen(false);
        setOfferLive(true);
      }} />
      <SendOffer open={sendOfferOpen} setOpen={setSendOfferOpen} handleSubmit={() => {
        setSendOfferOpen(false);
        setOfferSent(true);
        setTimeout(() => {
          setOfferAccepted(true);
        }, 3000)
      }} />
      <ProjectStarted open={projectStartedOpen} setOpen={setProjectStartedOpen} handleSubmit={() => {
        setProjectStartedOpen(false);
        setStart(false);
      }} />
      <ViewInvoice open={viewInvoiceOpen} setOpen={setViewInvoiceOpen} />
    </HomeContainer>
  )
}
