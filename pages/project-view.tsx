import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Typography from "@/components/typography";
import NavbarItem from "@/components/navbar-item";
import IconButton from "@/components/icon-button";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Link from "@/components/link";
import VideoPlayer from "@/components/video-player";
import Label from "@/components/label";
import Explanation from "@/components/explanation";
import ReferSquadmate from "@/components/project-view/refer-squadmate";
import ReferResult from "@/components/project-view/refer-result";
import AskQuestion from "@/components/project-view/ask-question";
import Message from "@/components/message";
import HideProject from "@/components/project-view/hide-project";
import {AsideBar} from "@/components/aside-bar";
import CompleteProfile from "@/components/project-view/complete-profile";
import SocialMedia from "@/components/project-view/social-media";
import RequirementsDontMatch from "@/components/project-view/requirements-dont-match";
import {router} from "next/client";
import {useRouter} from "next/router";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-right: 1px solid #E5E7EB;
  align-items: flex-start;
`

const AsideTop = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 50px;
  padding: 20px 10px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f9fafb;
  padding: 50px 20px;
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

const Section1Top = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  background-color: #0B0F00;
  width: 100%;
  padding: 20px 30px;
  border-radius: 12px 12px 0 0;
`

const Section1TopRight = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
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

export default function ProjectView() {
  const [skills, setSkills] = useState([])
  const [referOpen, setReferOpen] = useState(false)
  const [referResultOpen, setReferResultOpen] = useState(false)
  const [askQuestionOpen, setAskQuestionOpen] = useState(false)
  const [completeProfileOpen, setCompleteProfileOpen] = useState(false)
  const [dontMatchOpen, setDontMatchOpen] = useState(false)
  const [openMessage, setOpenMessage] = useState(false);

  const router = useRouter()

  useEffect(() => {
    fetch("https://my.backend/skills")
      .then(res => res.json())
      .then(res => {
        setSkills(res)
      })
  }, [])

  return (
    <Container>
      <AsideBar />
      <Content>
        <Row style={{marginBottom: 30}}>
          <Typography color="#1B18E4">&lt; Back to projects</Typography>
        </Row>
        <Card>
          <Section1Top>
            <Image src="/icons/ellipse.png" width={60} height={60} alt="Ellipse" style={{marginRight: 30}} />
            <div>
              <Typography color="white">Stir</Typography>
              <Typography color="white" fontSize="22px" style={{margin: "10px 0"}}>MVP for Serverless E-commerce Return Portal</Typography>
              <Typography color="white" fontSize="12px">Posted: 3 September, 2022</Typography>
            </div>
            <Section1TopRight>
              <IconButton icon="/icons/share-07.png" width={20} height={20} />
              <IconButton icon="/icons/star-01.png" width={20} height={20} />
              <Button fontColor="Apply as squad" color="#D0FC4A" onClick={() => setCompleteProfileOpen(true)}>Apply as squad</Button>
            </Section1TopRight>
          </Section1Top>
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
              <Button color="#4B48EC" fontColor="white" fullWidth onClick={() => setAskQuestionOpen(true)}>Ask a question</Button>
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
        </Card>
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
                <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}} onClick={() => setReferOpen(true)}>Refer</Button>
                <Button color="#4B48EC" fontColor="#ffffff" onClick={() => setCompleteProfileOpen(true)}>Apply</Button>
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
              {
                skills.map(skill => <Label key={skill} borderColor="#027A48" fontColor="#027A48">{skill}</Label>)
              }
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
                <Button color="#4B48EC" fontColor="#ffffff" onClick={() => setDontMatchOpen(true)}>Apply</Button>
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
            <Label color="#FEF3F2" fontColor="#B42318" style={{border: "none", fontWeight: 500}}>Position filled</Label>
          </Row>
          <div style={{padding: "16px 24px"}}>
            <Row style={{justifyContent: "space-between", width: "100%"}}>
              <Row>
                <Image src="/icons/avatar-2.png" width={50} height={50} alt="Google" style={{marginRight: 10}} />
                <Typography fontSize="20px" color="#111927" fontWeight={500}>Role (position)</Typography>
              </Row>
              <Row>
                <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}}>Refer</Button>
                <Button color="#4B48EC" fontColor="#ffffff" onClick={() => router.push('/apply-as-squad')}>Apply</Button>
              </Row>
            </Row>
            <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
              <Typography color="#475467" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. </Typography>
            </Row>
            <Row style={{marginTop: 15}}>
              <Typography fontWeight={500} color="#4D5761">See less</Typography>
              <Image src="/icons/up-arrow.png" width={12} height={6} alt="Up-Arrow" style={{marginLeft: 15}} />
            </Row>
          </div>
        </Card>
        <Card>
          <Section1Top style={{borderRadius: 12}}>
            <div>
              <Typography color="white" fontSize="24px">Have the perfect squad for this project?</Typography>
              <Typography color="rgba(255, 255, 255, 0.8)" style={{margin: "10px 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ut aliquam metus, a id vel. </Typography>
              <Button color="#D0FC4A" fontColor="#384250" style={{width: "150px", height: "40px", marginTop: 20}}>Apply as a Squad</Button>
            </div>
          </Section1Top>
        </Card>
      </Content>
      <ReferSquadmate open={referOpen} setOpen={setReferOpen} handleSubmit={() => {
        setReferOpen(false)
        setReferResultOpen(true)
      }} />
      <ReferResult open={referResultOpen} setOpen={setReferResultOpen} />
      <AskQuestion open={askQuestionOpen} setOpen={setAskQuestionOpen} handleSubmit={() => {
        setAskQuestionOpen(false)
        setOpenMessage(true)
      }} />
      <CompleteProfile open={completeProfileOpen} setOpen={setCompleteProfileOpen} />
      <RequirementsDontMatch open={dontMatchOpen} setOpen={setDontMatchOpen} />
      <SocialMedia open={false} setOpen={() => {}} />
      <Message open={openMessage} onClose={() => setOpenMessage(false)} color="#724fcc" fontColor="white">Your question has been sent. You will receive a response in your email</Message>
    </Container>
  )
}
