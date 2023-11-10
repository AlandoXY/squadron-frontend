import React, {useEffect, useState} from "react";
import Image from "next/image";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";
import Label from "@/components/label";
import Box from "@/components/box";
import Table from "@/components/table";
import TableRow from "@/components/table-row";
import TableCol from "@/components/table-col";
import Button from "@/components/button";
import styled from "styled-components";
import {useRouter} from "next/navigation";
import Explanation from "@/components/explanation";
import HireSquad from "@/components/c/squad/hire-squad";
import Popover from "@/components/popover";
import HireSquadFeedback from "@/components/c/squad/hire-squad-feedback";
import BuildSquadConfirm from "@/components/c/squad/build-squad-confirm";

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
  padding: 30px 30px;
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
  //overflow: hidden;
`

const Section1TopRight = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
`

export default function SquadsApplications() {
  const [hireSquad, setHireSquad] = useState(false);
  const [hireSquadFeedback, setHireSquadFeedback] = useState(false);
  const [buildSquadConfirmOpen, setBuildSquadConfirmOpen] = useState(false);
  const router = useRouter();

  const viewApplication = () => {
    router.push('/c/view-application-extended');
  }

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
            <Typography color="white" fontSize="22px" style={{marginTop: 5}}>MVP for Serverless E-commerce Return Portal</Typography>
          </div>
          <Section1TopRight>
            <Button fontColor="Apply as squad" color="#D0FC4A" onClick={() => setBuildSquadConfirmOpen(true)}>Build your own squad</Button>
          </Section1TopRight>
        </Section1Top>
        <Box fullWidth vertical style={{padding: "0 50px"}}>
          <Box fullWidth vertical style={{margin: "50px 20px"}}>
            <Typography color="#111927" fontSize={30} fontWeight={600} style={{marginBottom: 5}}>Suggested Squads</Typography>
            <Typography color="#4D5761">Squads that Squadron has tailored for you based on your preferences.</Typography>
            <Box fullWidth vertical style={{marginTop: 20}}>
              <Card>
                <Row style={{padding: "16px 24px", gap: 15, borderBottom: "1px solid #E5E7EB"}}>
                  <Explanation title="Interviewing" desc="You are interviewing one or more than one talent in this squad" maxWidth="400px">
                    <Label icon="/icons/info-white.png" iconSize={12} color="#4B48EC" fontColor="white" style={{border: "none", fontWeight: 500}}>Interviewing</Label>
                  </Explanation>
                  <Label icon="/icons/check-2.png" color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>90% Great match</Label>
                </Row>
                <div style={{padding: "16px 24px"}}>
                  <Row style={{justifyContent: "space-between", width: "100%"}}>
                    <Row>
                      <Image src="/icons/people-group-2.png" width={50} height={50} alt="Google" style={{marginRight: 10}} />
                      <Typography fontSize="20px" color="#111927" fontWeight={500}>Suggested Squad #1</Typography>
                    </Row>
                    <Row>
                      <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}} onClick={() => router.push('/c/individual-squad-application')}>Meet squad</Button>
                      <Popover
                        top={42}
                        align="right"
                        renderContent={() => (
                          <Box vertical style={{width: 200, boxShadow: "0 4px 6px -2px #10182814"}}>
                            <Box fullWidth alignItem="flex-start" style={{padding: "12px 16px"}} onClick={() => setHireSquad(true)}>
                              <Typography color="#101828" fontWeight={500}>Not interested</Typography>
                            </Box>
                            <Box fullWidth alignItem="flex-start" style={{padding: "12px 16px"}} onClick={() => setHireSquadFeedback(true)}>
                              <Typography color="#101828" fontWeight={500}>Send feedback/reject</Typography>
                            </Box>
                          </Box>
                        )}>
                        <Button color="#4B48EC" fontColor="white" style={{border: "1px solid #D2D6DB", marginRight: 20}}>Hire Squad</Button>
                      </Popover>
                      <IconButton icon="/icons/dots-vertical.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}} />
                    </Row>
                  </Row>
                  <Box fullWidth style={{marginTop: 20}}>
                    <Table>
                      <thead>
                      <TableRow>
                        <TableCol>Squad</TableCol>
                        <TableCol>Position</TableCol>
                        <TableCol></TableCol>
                      </TableRow>
                      </thead>
                      <tbody>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      </tbody>
                    </Table>
                  </Box>
                  <Row style={{marginTop: 15}}>
                    <Typography fontWeight={500} color="#4D5761">See more</Typography>
                    <Image src="/icons/down-arrow.png" width={12} height={6} alt="Down-Arrow" style={{marginLeft: 15}} />
                  </Row>
                </div>
              </Card>
              <Card>
                <Row style={{padding: "16px 24px", gap: 15, borderBottom: "1px solid #E5E7EB"}}>
                  <Label icon="/icons/check-2.png" color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>90% Great match</Label>
                </Row>
                <div style={{padding: "16px 24px"}}>
                  <Row style={{justifyContent: "space-between", width: "100%"}}>
                    <Row>
                      <Image src="/icons/people-group-2.png" width={50} height={50} alt="Google" style={{marginRight: 10}} />
                      <Typography fontSize="20px" color="#111927" fontWeight={500}>Suggested Squad #1</Typography>
                    </Row>
                    <Row>
                      <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}} onClick={() => router.push('/c/individual-squad-application')}>Meet squad</Button>
                      <Button color="#4B48EC" fontColor="white" style={{border: "1px solid #D2D6DB", marginRight: 20}} onClick={() => setHireSquad(true)}>Hire Squad</Button>
                      <IconButton icon="/icons/dots-vertical.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}} />
                    </Row>
                  </Row>
                  <Box fullWidth style={{marginTop: 20}}>
                    <Table>
                      <thead>
                      <TableRow>
                        <TableCol>Squad</TableCol>
                        <TableCol>Position</TableCol>
                        <TableCol></TableCol>
                      </TableRow>
                      </thead>
                      <tbody>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      </tbody>
                    </Table>
                  </Box>
                  <Row style={{marginTop: 15}}>
                    <Typography fontWeight={500} color="#4D5761">See more</Typography>
                    <Image src="/icons/down-arrow.png" width={12} height={6} alt="Down-Arrow" style={{marginLeft: 15}} />
                  </Row>
                </div>
              </Card>
            </Box>
            <Typography color="#111927" fontSize={30} fontWeight={600} style={{marginBottom: 5}}>Pre-Formed Squads</Typography>
            <Typography color="#4D5761">Squads that have worked together previously.</Typography>
            <Box fullWidth vertical style={{marginTop: 20}}>
              <Card>
                <Row style={{padding: "16px 24px", gap: 15, borderBottom: "1px solid #E5E7EB"}}>
                  <Label icon="/icons/check-2.png" color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>90% Great match</Label>
                </Row>
                <div style={{padding: "16px 24px"}}>
                  <Row style={{justifyContent: "space-between", width: "100%"}}>
                    <Row>
                      <Image src="/icons/people-group-2.png" width={50} height={50} alt="Google" style={{marginRight: 10}} />
                      <Typography fontSize="20px" color="#111927" fontWeight={500}>Suggested Squad #1</Typography>
                    </Row>
                    <Row>
                      <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}} onClick={() => router.push('/c/individual-squad-application')}>Meet squad</Button>
                      <Button color="#4B48EC" fontColor="white" style={{border: "1px solid #D2D6DB", marginRight: 20}} onClick={() => setHireSquad(true)}>Hire Squad</Button>
                      <IconButton icon="/icons/dots-vertical.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}} />
                    </Row>
                  </Row>
                  <Box fullWidth style={{marginTop: 20}}>
                    <Table>
                      <thead>
                      <TableRow>
                        <TableCol>Squad</TableCol>
                        <TableCol>Position</TableCol>
                        <TableCol></TableCol>
                      </TableRow>
                      </thead>
                      <tbody>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      </tbody>
                    </Table>
                  </Box>
                  <Row style={{marginTop: 15}}>
                    <Typography fontWeight={500} color="#4D5761">See more</Typography>
                    <Image src="/icons/down-arrow.png" width={12} height={6} alt="Down-Arrow" style={{marginLeft: 15}} />
                  </Row>
                </div>
              </Card>
              <Card>
                <Row style={{padding: "16px 24px", gap: 15, borderBottom: "1px solid #E5E7EB"}}>
                  <Label icon="/icons/check-2.png" color="#ECFDF3" fontColor="#027A48" style={{border: "none", fontWeight: 500}}>90% Great match</Label>
                </Row>
                <div style={{padding: "16px 24px"}}>
                  <Row style={{justifyContent: "space-between", width: "100%"}}>
                    <Row>
                      <Image src="/icons/people-group-2.png" width={50} height={50} alt="Google" style={{marginRight: 10}} />
                      <Typography fontSize="20px" color="#111927" fontWeight={500}>Suggested Squad #1</Typography>
                    </Row>
                    <Row>
                      <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 20}} onClick={() => router.push('/c/individual-squad-application')}>Meet squad</Button>
                      <Button color="#4B48EC" fontColor="white" style={{border: "1px solid #D2D6DB", marginRight: 20}} onClick={() => setHireSquad(true)}>Hire Squad</Button>
                      <IconButton icon="/icons/dots-vertical.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}} />
                    </Row>
                  </Row>
                  <Box fullWidth style={{marginTop: 20}}>
                    <Table>
                      <thead>
                      <TableRow>
                        <TableCol>Squad</TableCol>
                        <TableCol>Position</TableCol>
                        <TableCol></TableCol>
                      </TableRow>
                      </thead>
                      <tbody>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      <TableRow>
                        <TableCol>
                          <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                            <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                            <div>
                              <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                              <Typography color="#6C5FFF" fontSize={14}>View profile</Typography>
                            </div>
                          </Box>
                        </TableCol>
                        <TableCol>
                          <Typography color="#111927" fontWeight={500}>Product Manager</Typography>
                          <Row style={{marginTop: 6}}>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>$80-$90 /h</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>40 h/week</Typography>
                            </Row>
                            <Row style={{marginRight: 15}}>
                              <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>See locations</Typography>
                            </Row>
                            <Row>
                              <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
                              <Typography>Feb 1, 2023</Typography>
                            </Row>
                          </Row>
                        </TableCol>
                        <TableCol>
                          <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} onClick={() => viewApplication()}>View Application</Button>
                        </TableCol>
                      </TableRow>
                      </tbody>
                    </Table>
                  </Box>
                  <Row style={{marginTop: 15}}>
                    <Typography fontWeight={500} color="#4D5761">See more</Typography>
                    <Image src="/icons/down-arrow.png" width={12} height={6} alt="Down-Arrow" style={{marginLeft: 15}} />
                  </Row>
                </div>
              </Card>
            </Box>
            <Card>
              <Box vertical style={{backgroundColor: "black", padding: 24}}>
                <Typography color="white" fontWeight={600} fontSize={24} style={{marginBottom: 10}}>Build Your Own Squad</Typography>
                <Typography color="white" style={{marginBottom: 20}}>View all applicants and put together a custom Squad from scratch.</Typography>
                <Button color="#D0FC4A" fontColor="#384250" onClick={() => setBuildSquadConfirmOpen(true)}>Start Building</Button>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
      <HireSquad open={hireSquad} setOpen={setHireSquad} handleSubmit={() => router.push("/c/project-details?tab=Squad")} />
      <HireSquadFeedback open={hireSquadFeedback} setOpen={setHireSquadFeedback} handleSubmit={() => setHireSquadFeedback(false)} />
      <BuildSquadConfirm open={buildSquadConfirmOpen} setOpen={setBuildSquadConfirmOpen} handleSubmit={() => router.push('/c/project-details?tab=Squad')} />
    </HomeContainer>
  )
}
