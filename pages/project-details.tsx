import React, {useEffect, useState} from "react";
import Image from "next/image";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";
import Box from "@/components/box";
import Tabs from "@/components/tabs";
import Tab from "@/components/tab";
import Button from "@/components/button";
import styled from "styled-components";
import Link from "@/components/link";
import VideoPlayer from "@/components/video-player";

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

export default function ProjectDetails() {
  const [tab, setTab] = useState("Project Details");

  return (
    <HomeContainer>
      <Header>
        <Box>
          <IconButton width={40} height={40} fontSize="20px" icon="/icons/logo.png">squadron</IconButton>
        </Box>
      </Header>
      <Box vertical justifyContent="center">
        <Section1Top>
          <Image src="/icons/ellipse.png" width={60} height={60} alt="Ellipse" style={{marginRight: 30}} />
          <div>
            <Typography color="white">Stir</Typography>
            <Typography color="white" fontSize="22px" style={{margin: "10px 0"}}>MVP for Serverless E-commerce Return Portal</Typography>
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
            <Tab value="Team pulse">Team pulse</Tab>
          </Tabs>
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
              <Card style={{width: "100%"}}>
               <Box style={{padding: 24}}>
                 <Image src="/icons/avatar.png" alt="Avatar" width={56} height={56} style={{marginRight: 10}} />
                 <Box vertical>
                   <Typography color="#111927" fontSize={20} fontWeight={500}>UX Designer</Typography>
                   <Typography color="#4D5761">#4D5761</Typography>
                 </Box>
                 <Box style={{backgroundColor: "#ECFDF3", borderRadius: 16, padding: "2px 10px", marginLeft: 20}}>
                   <Box style={{width: 5, height: 5, backgroundColor: "#027A48", borderRadius: "50%", marginRight: 5}}></Box>
                   <Typography color="#027A48" fontWeight={500}>live</Typography>
                 </Box>
               </Box>
              </Card>
              <Card style={{width: "100%"}}>
                <Box style={{padding: 24}}>
                  <Image src="/icons/avatar.png" alt="Avatar" width={56} height={56} style={{marginRight: 10}} />
                  <Box vertical>
                    <Typography color="#111927" fontSize={20} fontWeight={500}>UX Designer</Typography>
                    <Typography color="#4D5761">#4D5761</Typography>
                  </Box>
                  <Box style={{backgroundColor: "#ECFDF3", borderRadius: 16, padding: "2px 10px", marginLeft: 20}}>
                    <Box style={{width: 5, height: 5, backgroundColor: "#027A48", borderRadius: "50%", marginRight: 5}}></Box>
                    <Typography color="#027A48" fontWeight={500}>live</Typography>
                  </Box>
                </Box>
              </Card>
              <Card style={{width: "100%"}}>
                <Box style={{padding: 24}}>
                  <Image src="/icons/avatar.png" alt="Avatar" width={56} height={56} style={{marginRight: 10}} />
                  <Box vertical>
                    <Typography color="#111927" fontSize={20} fontWeight={500}>UX Designer</Typography>
                    <Typography color="#4D5761">#4D5761</Typography>
                  </Box>
                  <Box style={{backgroundColor: "#ECFDF3", borderRadius: 16, padding: "2px 10px", marginLeft: 20}}>
                    <Box style={{width: 5, height: 5, backgroundColor: "#027A48", borderRadius: "50%", marginRight: 5}}></Box>
                    <Typography color="#027A48" fontWeight={500}>live</Typography>
                  </Box>
                </Box>
              </Card>
              <Card style={{width: "100%"}}>
                <Box style={{padding: 24}}>
                  <Image src="/icons/avatar.png" alt="Avatar" width={56} height={56} style={{marginRight: 10}} />
                  <Box vertical>
                    <Typography color="#111927" fontSize={20} fontWeight={500}>UX Designer</Typography>
                    <Typography color="#4D5761">#4D5761</Typography>
                  </Box>
                  <Box style={{backgroundColor: "#ECFDF3", borderRadius: 16, padding: "2px 10px", marginLeft: 20}}>
                    <Box style={{width: 5, height: 5, backgroundColor: "#027A48", borderRadius: "50%", marginRight: 5}}></Box>
                    <Typography color="#027A48" fontWeight={500}>live</Typography>
                  </Box>
                </Box>
              </Card>
              <Card style={{width: "100%"}}>
                <Box style={{padding: 24}}>
                  <Image src="/icons/avatar.png" alt="Avatar" width={56} height={56} style={{marginRight: 10}} />
                  <Box vertical>
                    <Typography color="#111927" fontSize={20} fontWeight={500}>UX Designer</Typography>
                    <Typography color="#4D5761">#4D5761</Typography>
                  </Box>
                  <Box style={{backgroundColor: "#ECFDF3", borderRadius: 16, padding: "2px 10px", marginLeft: 20}}>
                    <Box style={{width: 5, height: 5, backgroundColor: "#027A48", borderRadius: "50%", marginRight: 5}}></Box>
                    <Typography color="#027A48" fontWeight={500}>live</Typography>
                  </Box>
                </Box>
              </Card>
              <Card style={{width: "100%"}}>
                <Box style={{padding: 24}}>
                  <Image src="/icons/avatar.png" alt="Avatar" width={56} height={56} style={{marginRight: 10}} />
                  <Box vertical>
                    <Typography color="#111927" fontSize={20} fontWeight={500}>UX Designer</Typography>
                    <Typography color="#4D5761">#4D5761</Typography>
                  </Box>
                  <Box style={{backgroundColor: "#ECFDF3", borderRadius: 16, padding: "2px 10px", marginLeft: 20}}>
                    <Box style={{width: 5, height: 5, backgroundColor: "#027A48", borderRadius: "50%", marginRight: 5}}></Box>
                    <Typography color="#027A48" fontWeight={500}>live</Typography>
                  </Box>
                </Box>
              </Card>
              <Card style={{width: "100%"}}>
                <Box style={{padding: 24}}>
                  <Image src="/icons/avatar.png" alt="Avatar" width={56} height={56} style={{marginRight: 10}} />
                  <Box vertical>
                    <Typography color="#111927" fontSize={20} fontWeight={500}>UX Designer</Typography>
                    <Typography color="#4D5761">#4D5761</Typography>
                  </Box>
                  <Box style={{backgroundColor: "#ECFDF3", borderRadius: 16, padding: "2px 10px", marginLeft: 20}}>
                    <Box style={{width: 5, height: 5, backgroundColor: "#027A48", borderRadius: "50%", marginRight: 5}}></Box>
                    <Typography color="#027A48" fontWeight={500}>live</Typography>
                  </Box>
                </Box>
              </Card>
              <Card style={{width: "100%"}}>
                <Box style={{padding: 24}}>
                  <Image src="/icons/avatar.png" alt="Avatar" width={56} height={56} style={{marginRight: 10}} />
                  <Box vertical>
                    <Typography color="#111927" fontSize={20} fontWeight={500}>UX Designer</Typography>
                    <Typography color="#4D5761">#4D5761</Typography>
                  </Box>
                  <Box style={{backgroundColor: "#ECFDF3", borderRadius: 16, padding: "2px 10px", marginLeft: 20}}>
                    <Box style={{width: 5, height: 5, backgroundColor: "#027A48", borderRadius: "50%", marginRight: 5}}></Box>
                    <Typography color="#027A48" fontWeight={500}>live</Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </HomeContainer>
  )
}
