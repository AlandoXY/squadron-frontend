import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Typography from "@/components/typography";
import Header from "@/components/header";
import Box from "@/components/box";
import Image from "next/image";
import Link from "@/components/link";
import Label from "@/components/label";
import Dropdown from "@/components/dropdown";
import Textarea from "@/components/textarea";
import Input from "@/components/input";
import FileUpload from "@/components/file-upload";
import Button from "@/components/button";
import ApplicationCancel from "@/components/project-view/application-cancel";
import {useRouter} from "next/navigation";

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
  background-color: #f9fafb;
  padding: 50px 100px;
`

const ContentMain = styled.div`
  width: 100%;
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
`

const Footer =  styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
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
  padding: 20px;
  margin-bottom: 50px;
`

export default function ApplicationApply() {
  const [applicationCancelOpen, setApplicationCancelOpen] = useState(false)
  const router = useRouter()

  return (
    <Container>
      <Header onlyLogo />
      <Content>
        <ContentMain>
          <Row style={{marginBottom: 30}}>
            <Typography color="#111927" fontSize={24} fontWeight={500}>Apply to this role</Typography>
          </Row>
          <Card>
            <Box style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
              <Typography color="#111927" fontSize={20} fontWeight={600}>Role Details</Typography>
            </Box>
            <Box alignItem="stretch" fullWidth>
              <Box vertical fullWidth style={{flex: 1, backgroundColor: "#F9FAFB", borderRadius: 8, padding: 16}}>
                <Box fullWidth style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
                  <Image src="/icons/ellipse.png" width={56} height={56} alt="Ellipse" style={{marginRight: 10}} />
                  <div>
                    <Typography color="#111927" fontSize={18} fontWeight={500}>Google</Typography>
                    <Typography color="#4D5761" style={{marginTop: 5}}>MVP for Serverless E-commerce Return Portal</Typography>
                  </div>
                </Box>
                <Box vertical fullWidth style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
                  <Box fullWidth justifyContent="space-between">
                    <Typography color="#111927" fontWeight={500}>Role required</Typography>
                    <Typography color="#4D5761">Product Manager</Typography>
                  </Box>
                  <Box fullWidth justifyContent="space-between" style={{marginTop: 20}}>
                    <Typography color="#111927" fontWeight={500}>Start date</Typography>
                    <Typography color="#4D5761">Feb 1, 2023</Typography>
                  </Box>
                </Box>
                <Box vertical fullWidth style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
                  <Box fullWidth justifyContent="space-between">
                    <Box>
                      <Image src="/icons/money.png" alt="Money" width={16} height={16} style={{marginRight: 10}} />
                      <Typography color="#111927" fontWeight={500}>Client’s budget</Typography>
                    </Box>
                    <Typography color="#4D5761">$80-$90 /h</Typography>
                  </Box>
                </Box>
                <Box vertical fullWidth style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
                  <Box fullWidth justifyContent="space-between">
                    <Box>
                      <Image src="/icons/clock.png" alt="Money" width={16} height={16} style={{marginRight: 10}} />
                      <Typography color="#111927" fontWeight={500}>Hours</Typography>
                    </Box>
                    <Typography color="#4D5761">40 h/week</Typography>
                  </Box>
                </Box>
                <Box vertical fullWidth style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
                  <Box fullWidth justifyContent="space-between">
                    <Box>
                      <Image src="/icons/location.png" alt="Money" width={13} height={16} style={{marginRight: 10}} />
                      <Typography color="#111927" fontWeight={500}>Location</Typography>
                    </Box>
                    <Link>See locations</Link>
                  </Box>
                </Box>
              </Box>
              <Box vertical style={{flex: 1, borderLeft: "1px solid #EAECF0", marginLeft: 50, paddingLeft: 50}}>
                <Typography color="#111927" fontWeight={500} style={{marginBottom: 30}}>Role Description</Typography>
                <Typography color="#4D5761" fontSize={14} style={{marginBottom: 30}}>Growth PM to work cross-functionally to improve app experience. The role will focus on tasks like building improved onboarding funnels, optimising conversions, A/B testing data, etc.</Typography>
                <Typography color="#111927" fontWeight={500} fontSize={14}>Required skills</Typography>
                <Box style={{margin: "10px 0 20px", gap: 15}}>
                  <Label>Product Analytics</Label>
                  <Label>Roadmapping</Label>
                  <Label>Team Leadership</Label>
                </Box>
                <Typography color="#111927" fontWeight={500} fontSize={14}>Recommended skills</Typography>
                <Box style={{margin: "10px 0 20px", gap: 15}}>
                  <Label>Agile</Label>
                </Box>
                <Typography color="#111927" fontWeight={500} fontSize={14}>Tools</Typography>
                <Box style={{margin: "10px 0 20px", gap: 15}}>
                  <Label icon="/icons/jira.png">Jira</Label>
                  <Label icon="/icons/figma.png">Figma</Label>
                  <Label icon="/icons/miro.png">Miro</Label>
                </Box>
              </Box>
            </Box>
          </Card>
          <Card>
            <Box style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
              <Typography color="#111927" fontSize={20} fontWeight={600}>Confirm your details</Typography>
            </Box>
            <Box flexDirection="column" alignItem="flex-start" fullWidth>
              <Box fullWidth justifyContent="space-between" style={{margin: "30px 0 10px", borderBottom: "1px solid #E5E7EB", paddingBottom: 30}}>
                <Box vertical>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Hourly rate</Typography>
                  <Typography color="#4D5761" fontSize="14px">Write a short introduction.</Typography>
                </Box>
                <Box>
                  <Input width={70} />
                  <Typography color="#4D5761" style={{marginLeft: 10}}>$/h</Typography>
                </Box>
              </Box>
              <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{margin: "30px 0 10px", borderBottom: "1px solid #E5E7EB", paddingBottom: 30}}>
                <Box vertical>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Availability</Typography>
                  <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 20}}>Write a short introduction.</Typography>
                </Box>
                <Box vertical style={{gap: 10, margin: "10px 0 10px"}}>
                  <Dropdown fullWidth placeholder="Select your availability" options={[{ label: "fill", value: "fill" }, { label: "fill", value: "fill" }, { label: "fill", value: "fill" }]} />
                  <Box vertical style={{marginTop: 20}}>
                    <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Minimum hours to commit a week</Typography>
                    <Box fullWidth justifyContent="flex-end">
                      <Input width={70} />
                      <Typography color="#4D5761" style={{marginLeft: 10}}>hours</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{margin: "30px 0 10px", borderBottom: "1px solid #E5E7EB", paddingBottom: 30}}>
                <Box vertical>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Working hours</Typography>
                  <Box style={{border: "1px solid #D2D6DB", padding: "4px 10px", borderRadius: 6}}>
                    <Typography color="#384250" fontSize={14} fontWeight={500}>My timezone: GMT +10</Typography>
                  </Box>
                </Box>
                <Box style={{gap: 10, margin: "10px 0 10px"}}>
                  <Box vertical>
                    <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>From</Typography>
                    <Dropdown inputWidth="100px" placeholder="From" options={[{ label: "fill", value: "fill" }, { label: "fill", value: "fill" }, { label: "fill", value: "fill" }]} />
                  </Box>
                  <Box vertical>
                    <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>To</Typography>
                    <Dropdown inputWidth="100px" placeholder="To" options={[{ label: "fill", value: "fill" }, { label: "fill", value: "fill" }, { label: "fill", value: "fill" }]} />
                  </Box>
                </Box>
              </Box>
              <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{margin: "30px 0 10px", borderBottom: "1px solid #E5E7EB", paddingBottom: 30}}>
                <Box vertical>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Additional notes (optional)</Typography>
                  <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>Write a short introduction.</Typography>
                </Box>
                <Box style={{gap: 10, margin: "10px 0 10px"}}>
                  <Textarea width="500px" resize={false}></Textarea>
                </Box>
              </Box>
            </Box>
          </Card>
          <Card>
            <Box style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
              <Typography color="#111927" fontSize={20} fontWeight={600}>Answer this questions</Typography>
            </Box>
            <Box flexDirection="column" alignItem="flex-start" fullWidth>
              <Box fullWidth flexDirection="column" justifyContent="flex-start" alignItem="flex-start" style={{margin: "30px 0 10px", borderBottom: "1px solid #E5E7EB", paddingBottom: 30}}>
                <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Why are you a great fit for this role?</Typography>
                <Box fullWidth style={{gap: 10, margin: "10px 0 10px"}}>
                  <Textarea width="100%" resize={false}></Textarea>
                </Box>
              </Box>
              <Box fullWidth flexDirection="column" justifyContent="flex-start" alignItem="flex-start" style={{margin: "30px 0 10px", borderBottom: "1px solid #E5E7EB", paddingBottom: 30}}>
                <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>What excites you about this mission? </Typography>
                <Box fullWidth style={{gap: 10, margin: "10px 0 10px"}}>
                  <Textarea width="100%" resize={false}></Textarea>
                </Box>
              </Box>
              <Box fullWidth flexDirection="column" justifyContent="flex-start" alignItem="flex-start" style={{margin: "30px 0 10px", borderBottom: "1px solid #E5E7EB", paddingBottom: 30}}>
                <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Tell us about your experience with XYZ</Typography>
                <Box fullWidth style={{gap: 10, margin: "10px 0 10px"}}>
                  <Textarea width="100%" resize={false}></Textarea>
                </Box>
              </Box>
            </Box>
          </Card>
          <Card>
            <Box style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
              <Typography color="#111927" fontSize={20} fontWeight={600}>Would you like to attach any documents?</Typography>
            </Box>
            <Box flexDirection="column" alignItem="flex-start" fullWidth>
              <FileUpload />
            </Box>
          </Card>
        </ContentMain>
      </Content>
      <Footer>
        <Button color="white" fontColor="#384250" width="114px" height="40px" onClick={() => setApplicationCancelOpen(true)}>Cancel</Button>
        <Box>
          <Button color="white" fontColor="#384250" width="114px" height="40px" style={{border: "1px solid #D2D6DB", marginRight: 50}} onClick={() => router.push('/project-view')}>Save as draft</Button>
          <Button color="#4B48EC" fontColor="white" width="114px" height="40px" onClick={() => router.push('/application-send-success')}>Apply</Button>
        </Box>
      </Footer>
      <ApplicationCancel open={applicationCancelOpen} setOpen={setApplicationCancelOpen} />
    </Container>
  )
}
