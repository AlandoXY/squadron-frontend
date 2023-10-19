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
import ProgressBar from "@/components/progress-bar";
import InputToggle from "@/components/input-toggle";
import ApplyResult from "@/components/project-view/apply-result";

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
  //padding: 0 20px;
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

export default function ApplyAsSquad() {
  const [applyResultOpen, setApplyResultOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [check, setCheck] = useState(-1)
  const [selectedUser, setSelectedUser] = useState(false)
  const router = useRouter()

  return (
    <Container>
      <Header onlyLogo />
      <Box fullWidth style={{backgroundColor: "white", padding: 20}}>
        <Box vertical fullWidth style={{maxWidth: 1000, margin: "0 auto"}}>
          <Typography color="#384250" fontWeight={600}>Step 0{step}/03</Typography>
          <Typography color="#4D5761" style={{margin: "5px 0 10px"}}>Select your role</Typography>
          <ProgressBar value={20 * step} color="#A0D909" height={8} bgColor="#E5E7EB" />
        </Box>
      </Box>
      <Content>
        <ContentMain>
          {
             step === 1 && (
              <Card>
                <Box vertical style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
                  <Typography color="#111927" fontSize={20} fontWeight={600}>Select your role</Typography>
                  <Typography color="#4D5761" fontSize={14} style={{marginTop: 5}}>Before you add the rest of the team, select your role and fill up your details</Typography>
                </Box>
                <Box alignItem="stretch" fullWidth>
                  <Box fullWidth vertical>
                    <Typography color="#4D5761" fontSize={12} fontWeight={500} style={{marginBottom: 20}}>Position</Typography>
                    <Box fullWidth style={{borderTop: "1px solid #E5E7EB"}}>
                      <InputToggle
                        checked={check === 0}
                        onChange={e => setCheck(0)}
                        noBorder
                        right={
                          <div>
                            <Typography fontWeight={500}>Front-End Engineer</Typography>
                            <Row>
                              <Box style={{marginRight: 10}}>
                                <Image src="/icons/price.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                                <Typography>30$-50$ /h</Typography>
                              </Box>
                              <Box style={{marginRight: 10}}>
                                <Image src="/icons/clock.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                                <Typography>20-25h /week</Typography>
                              </Box>
                              <Box style={{marginRight: 10}}>
                                <Image src="/icons/location.png" alt="Price" width={11} height={14} style={{marginRight: 5}} />
                                <Typography>Amsterdam, NL</Typography>
                              </Box>
                              <Box>
                                <Image src="/icons/calendar.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                                <Typography>20/12/23</Typography>
                              </Box>
                            </Row>
                          </div>
                        } />
                    </Box>
                    <Box fullWidth style={{borderTop: "1px solid #E5E7EB"}}>
                      <InputToggle
                        checked={check === 1}
                        onChange={e => setCheck(1)}
                        noBorder
                        right={
                          <div>
                            <Typography fontWeight={500}>Front-End Engineer</Typography>
                            <Row>
                              <Box style={{marginRight: 10}}>
                                <Image src="/icons/price.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                                <Typography>30$-50$ /h</Typography>
                              </Box>
                              <Box style={{marginRight: 10}}>
                                <Image src="/icons/clock.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                                <Typography>20-25h /week</Typography>
                              </Box>
                              <Box style={{marginRight: 10}}>
                                <Image src="/icons/location.png" alt="Price" width={11} height={14} style={{marginRight: 5}} />
                                <Typography>Amsterdam, NL</Typography>
                              </Box>
                              <Box>
                                <Image src="/icons/calendar.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                                <Typography>20/12/23</Typography>
                              </Box>
                            </Row>
                          </div>
                        } />
                    </Box>
                    <Box fullWidth style={{borderTop: "1px solid #E5E7EB"}}>
                      <InputToggle
                        checked={check === 2}
                        onChange={e => setCheck(2)}
                        noBorder
                        right={
                          <div>
                            <Typography fontWeight={500}>Front-End Engineer</Typography>
                            <Row>
                              <Box style={{marginRight: 10}}>
                                <Image src="/icons/price.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                                <Typography>30$-50$ /h</Typography>
                              </Box>
                              <Box style={{marginRight: 10}}>
                                <Image src="/icons/clock.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                                <Typography>20-25h /week</Typography>
                              </Box>
                              <Box style={{marginRight: 10}}>
                                <Image src="/icons/location.png" alt="Price" width={11} height={14} style={{marginRight: 5}} />
                                <Typography>Amsterdam, NL</Typography>
                              </Box>
                              <Box>
                                <Image src="/icons/calendar.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                                <Typography>20/12/23</Typography>
                              </Box>
                            </Row>
                          </div>
                        } />
                    </Box>
                  </Box>
                </Box>
              </Card>
            )
          }
          {
            step === 2 && (
              <>
                <Card>
                  <Box vertical style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
                    <Typography color="#111927" fontSize={20} fontWeight={600}>Add members</Typography>
                  </Box>
                  <Box vertical alignItem="stretch" fullWidth>
                    <Box fullWidth style={{backgroundColor: "#F3F4F6", borderRadius: 4, padding: 10}}>
                      <Image src="/icons/info.png" alt="Info" width={20} height={20} style={{marginRight: 10}} />
                      <Typography color="#4D5761">Your team submission will only be sent to the client after all squadmates have accepted their invitations to this project.</Typography>
                    </Box>
                    <Box fullWidth vertical style={{marginTop: 30}}>
                      <Typography color="#4D5761" fontSize={12} fontWeight={500} style={{marginBottom: 20}}>Position</Typography>
                      <Box fullWidth style={{borderTop: "1px solid #E5E7EB", padding: "20px 0", backgroundColor: "#E5E7EB"}}>
                        <div>
                          <Typography fontWeight={500}>Front-End Engineer</Typography>
                          <Row>
                            <Box style={{marginRight: 10}}>
                              <Image src="/icons/price.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                              <Typography>30$-50$ /h</Typography>
                            </Box>
                            <Box style={{marginRight: 10}}>
                              <Image src="/icons/clock.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                              <Typography>20-25h /week</Typography>
                            </Box>
                            <Box style={{marginRight: 10}}>
                              <Image src="/icons/location.png" alt="Price" width={11} height={14} style={{marginRight: 5}} />
                              <Typography>Amsterdam, NL</Typography>
                            </Box>
                            <Box>
                              <Image src="/icons/calendar.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                              <Typography>20/12/23</Typography>
                            </Box>
                          </Row>
                        </div>
                        <Box style={{marginLeft: 40}}>
                          <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 10}} />
                          <Box vertical>
                            <Typography color="#111927" fontSize={14} fontWeight={500}>Antonio Hidalgo</Typography>
                            <Typography color="#4D5761" fontSize={14}>UX Designer</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box fullWidth style={{borderTop: "1px solid #E5E7EB", padding: "20px 0"}}>
                        <div>
                          <Typography fontWeight={500}>Front-End Engineer</Typography>
                          <Row>
                            <Box style={{marginRight: 10}}>
                              <Image src="/icons/price.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                              <Typography>30$-50$ /h</Typography>
                            </Box>
                            <Box style={{marginRight: 10}}>
                              <Image src="/icons/clock.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                              <Typography>20-25h /week</Typography>
                            </Box>
                            <Box style={{marginRight: 10}}>
                              <Image src="/icons/location.png" alt="Price" width={11} height={14} style={{marginRight: 5}} />
                              <Typography>Amsterdam, NL</Typography>
                            </Box>
                            <Box>
                              <Image src="/icons/calendar.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                              <Typography>20/12/23</Typography>
                            </Box>
                          </Row>
                        </div>
                        <Box style={{marginLeft: 40}}>
                          {
                            selectedUser ? (
                              <>
                                <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 10}} />
                                <Box vertical>
                                  <Typography color="#111927" fontSize={14} fontWeight={500}>Antonio Hidalgo</Typography>
                                  <Typography color="#4D5761" fontSize={14}>UX Designer</Typography>
                                </Box>
                              </>
                            ) : (
                              <Dropdown
                                onChange={() => setSelectedUser(true)}
                                prevIcon="/icons/search-lg.png"
                                placeholder="Search user"
                                inputWidth="265px"
                                showSuffixIcon
                                options={[{ label: "A", value: "A", icon: '/icons/avatar.png' }, { label: "B", value: "B", icon: '/icons/avatar.png' }, { label: "C", value: "C", icon: '/icons/avatar.png' }]} />
                            )
                          }
                        </Box>
                      </Box>
                      <Box fullWidth style={{borderTop: "1px solid #E5E7EB", padding: "20px 0"}}>
                        <div>
                          <Typography fontWeight={500}>Front-End Engineer</Typography>
                          <Row>
                            <Box style={{marginRight: 10}}>
                              <Image src="/icons/price.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                              <Typography>30$-50$ /h</Typography>
                            </Box>
                            <Box style={{marginRight: 10}}>
                              <Image src="/icons/clock.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                              <Typography>20-25h /week</Typography>
                            </Box>
                            <Box style={{marginRight: 10}}>
                              <Image src="/icons/location.png" alt="Price" width={11} height={14} style={{marginRight: 5}} />
                              <Typography>Amsterdam, NL</Typography>
                            </Box>
                            <Box>
                              <Image src="/icons/calendar.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
                              <Typography>20/12/23</Typography>
                            </Box>
                          </Row>
                        </div>
                        <Box style={{marginLeft: 40}}>
                          {
                            selectedUser ? (
                              <>
                                <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 10}} />
                                <Box vertical>
                                  <Typography color="#111927" fontSize={14} fontWeight={500}>Antonio Hidalgo</Typography>
                                  <Typography color="#4D5761" fontSize={14}>UX Designer</Typography>
                                </Box>
                              </>
                            ) : (
                              <Dropdown
                                onChange={() => setSelectedUser(true)}
                                prevIcon="/icons/search-lg.png"
                                placeholder="Search user"
                                inputWidth="265px"
                                showSuffixIcon
                                options={[{ label: "A", value: "A", icon: '/icons/avatar.png' }, { label: "B", value: "B", icon: '/icons/avatar.png' }, { label: "C", value: "C", icon: '/icons/avatar.png' }]} />
                            )
                          }
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>
                <Card>
                  <Box vertical style={{borderBottom: "1px solid #EAECF0", paddingBottom: 20, marginBottom: 20}}>
                    <Typography color="#111927" fontSize={20} fontWeight={600}>Cover letter</Typography>
                  </Box>
                  <Box vertical alignItem="stretch" fullWidth>
                    <Typography color="#111927" fontWeight={500} style={{marginBottom: 10}}>You can submit a team motivation message</Typography>
                    <Textarea width="100%"></Textarea>
                  </Box>
                </Card>
              </>
            )
          }
        </ContentMain>
      </Content>
      <Footer>
        <Button color="white" fontColor="#384250" width="114px" height="40px">Cancel</Button>
        <Box>
          <Button color="white" fontColor="#384250" width="114px" height="40px" style={{border: "1px solid #D2D6DB", marginRight: 50}}>Save as draft</Button>
          <Button color="#4B48EC" fontColor="white" width="114px" height="40px" onClick={() => {
            if (step === 1) {
              setStep(step + 1)
            } else {
              setApplyResultOpen(true)
            }
          }} disabled={check === -1}>{step === 1 ? 'Next' : 'Submit'}</Button>
        </Box>
      </Footer>
      <ApplyResult open={applyResultOpen} setOpen={setApplyResultOpen} />
    </Container>
  )
}
