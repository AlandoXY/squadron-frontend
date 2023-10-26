import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";
import Button from "@/components/button";
import Link from "@/components/link";
import Box from "@/components/box";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from "react-chartjs-2";
import {DashboardHeaderC} from "@/components/dashboard-header-c";
import {useRouter} from "next/navigation";
import {AsideBarC} from "@/components/aside-bar-c";

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  display: flex;
  min-height: 100vh;
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
  padding: 0 20px;
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
  overflow: hidden;
`

export default function HomeScreen() {
  const router = useRouter()

  return (
    <Container>
      <AsideBarC />
      <Content>
        <DashboardHeaderC />
        <ContentMain>
          <Box justifyContent="space-between" style={{marginTop: 30, padding: "15px 0", borderBottom: "1px solid #E5E7EB"}}>
            <Typography color="#111927" fontSize={30} fontWeight={600}>Hi, Stir 👋</Typography>
            <IconButton icon="/icons/plus-white.png" width={20} height={20} color="#4B48EC" fontColor="white">Create project</IconButton>
          </Box>
          <Box justifyContent="space-between" style={{marginTop: 30, padding: "15px 0"}}>
            <Box>
              <Box style={{width: 16, height: 16, borderRadius: "50%", backgroundColor: "#FDB022", marginRight: 20}}></Box>
              <Typography color="#111927" fontSize={24} fontWeight={500}>Squads in Formation</Typography>
            </Box>
            <Box>
              <IconButton
                color="white"
                fontColor="#344054"
                style={{border: "1px solid #D0D5DD", marginRight: 20}}
                icon="/icons/arrow-left.png"
                width={20}
                height={20} />
              <IconButton
                color="white"
                fontColor="#344054"
                style={{border: "1px solid #D0D5DD"}}
                icon="/icons/arrow-right-1.png"
                width={20}
                height={20} />
            </Box>
          </Box>
          <Card>
            <Box style={{margin: 30, padding: "10px 16px", borderRadius: 8, backgroundColor: "#F3F4F6"}}>
              <Typography color="#4D5761" fontSize={14}>You don’t have any projects in formation at the moment</Typography>
              <Typography color="#1B18E4" fontWeight={600} fontSize={14} style={{marginLeft: 15}}>Create project</Typography>
            </Box>
          </Card>
          <Box style={{gap: 20}}>
            <Card style={{flex: 1}}>
              <Box style={{backgroundColor: "#0B0F00", padding: 20}}>
                <Typography color="white" fontSize={18} fontWeight={500}>Name of the project</Typography>
              </Box>
              <Box style={{padding: 20}}>
                <Box flexDirection="column" justifyContent="center">
                  <Box style={{width: 16, height: 16, borderRadius: "50%", backgroundColor: "#FDB022"}}>
                    <Image src="/icons/check-white.png" alt="Check" width={16} height={16} />
                  </Box>
                  <Box style={{width: 1, height: 32, backgroundColor: "#FDB022"}}></Box>
                  <Box style={{width: 16, height: 16, borderRadius: "50%", backgroundColor: "#FDB022"}}>
                    <Image src="/icons/check-white.png" alt="Check" width={16} height={16} />
                  </Box>
                  <Box style={{width: 1, height: 32, backgroundColor: "#FDB022"}}></Box>
                  <Box style={{width: 16, height: 16, borderRadius: "50%", backgroundColor: "#FFFAEB", border: "2px solid #FDB022"}}></Box>
                  <Box style={{width: 1, height: 32, backgroundColor: "#D2D6DB"}}></Box>
                  <Box style={{width: 16, height: 16, borderRadius: "50%", backgroundColor: "#D2D6DB", marginBottom: 10}}></Box>
                </Box>
                <Box vertical style={{flex: 1, marginLeft: 10}}>
                  <Box justifyContent="space-between" fullWidth style={{backgroundColor: "#FEF0C7", marginBottom: 10, padding: "8px 16px", borderRadius: 8}}>
                    <Typography color="#4D5761">Project Details</Typography>
                    <Image src="/icons/chevron-right.png" alt="chevron right" width={24} height={24} />
                  </Box>
                  <Box fullWidth style={{backgroundColor: "#FEF0C7", marginBottom: 10, padding: "8px 16px", borderRadius: 8}}>
                    <Typography color="#4D5761">Collecting Applicants</Typography>
                  </Box>
                  <Box justifyContent="space-between" fullWidth style={{backgroundColor: "#FEF0C7", marginBottom: 10, padding: "8px 16px", borderRadius: 8}}>
                    <Typography color="#4D5761">Reviewing Applications</Typography>
                    <Image src="/icons/chevron-right.png" alt="chevron right" width={24} height={24} />
                  </Box>
                  <Box fullWidth style={{backgroundColor: "#F3F4F6", marginBottom: 10, padding: "8px 16px", borderRadius: 8}}>
                    <Typography color="#4D5761">Hiring</Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card style={{flex: 1}}>
              <Box style={{backgroundColor: "#0B0F00", padding: 20}}>
                <Typography color="white" fontSize={18} fontWeight={500}>Name of the project</Typography>
              </Box>
              <Box style={{padding: 20}}>
                <Box flexDirection="column" justifyContent="center">
                  <Box style={{width: 16, height: 16, borderRadius: "50%", backgroundColor: "#FFFAEB", border: "2px solid #FDB022"}}></Box>
                  <Box style={{width: 1, height: 32, backgroundColor: "#D2D6DB"}}></Box>
                  <Box style={{width: 16, height: 16, borderRadius: "50%", backgroundColor: "#D2D6DB"}}></Box>
                  <Box style={{width: 1, height: 32, backgroundColor: "#D2D6DB"}}></Box>
                  <Box style={{width: 16, height: 16, borderRadius: "50%", backgroundColor: "#D2D6DB"}}></Box>
                  <Box style={{width: 1, height: 32, backgroundColor: "#D2D6DB"}}></Box>
                  <Box style={{width: 16, height: 16, borderRadius: "50%", backgroundColor: "#D2D6DB", marginBottom: 10}}></Box>
                </Box>
                <Box vertical style={{flex: 1, marginLeft: 10}}>
                  <Box justifyContent="space-between" fullWidth style={{backgroundColor: "#FEF0C7", marginBottom: 10, padding: "8px 16px", borderRadius: 8}}>
                    <Typography color="#4D5761">Project Details</Typography>
                    <Image src="/icons/chevron-right.png" alt="chevron right" width={24} height={24} />
                  </Box>
                  <Box fullWidth style={{backgroundColor: "#F3F4F6", marginBottom: 10, padding: "8px 16px", borderRadius: 8}}>
                    <Typography color="#4D5761">Collecting Applicants</Typography>
                  </Box>
                  <Box justifyContent="space-between" fullWidth style={{backgroundColor: "#F3F4F6", marginBottom: 10, padding: "8px 16px", borderRadius: 8}}>
                    <Typography color="#4D5761">Reviewing Applications</Typography>
                  </Box>
                  <Box fullWidth style={{backgroundColor: "#F3F4F6", marginBottom: 10, padding: "8px 16px", borderRadius: 8}}>
                    <Typography color="#4D5761">Hiring</Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
          <Box justifyContent="space-between" style={{marginTop: 30, padding: "15px 0"}}>
            <Box>
              <Box style={{width: 16, height: 16, borderRadius: "50%", backgroundColor: "#32D583", marginRight: 20}}></Box>
              <Typography color="#111927" fontSize={24} fontWeight={500}>Live Squads</Typography>
            </Box>
          </Box>
          <Box style={{gap: 20}}>
            <Card style={{flex: 1}} onClick={() => router.push('/c/live-squad')}>
              <Box alignItem="flex-start" justifyContent="space-between" style={{position: 'relative', backgroundColor: 'black', padding: 20, borderRadius: "12px 12px 0 0"}}>
                <Box vertical>
                  <Typography color="white" fontSize="20px" fontWeight={600}>MVP for Serverless E-commerce Return Portal</Typography>
                  <Typography color="#D0FC4A" fontWeight={500} style={{opacity: 0.8, marginTop: 15}}>4 members</Typography>
                </Box>
                <Button color="#D92D20" fontColor="white">Invoice due</Button>
              </Box>
              <Box vertical style={{padding: 20}}>
                <Typography color="#6C737F" fontSize={14} fontWeight={500}>Feb 01 - 07</Typography>
                <Box fullWidth alignItem="stretch" style={{marginTop: 15, gap: 8}}>
                  <Box style={{flex: 1, boxShadow: '0 1px 2px #1018281A', padding: 20, borderRadius: 8}}>
                    <Box style={{width: 110, height: 110, marginRight: 20}}>
                      <Doughnut
                        options={{
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                        }}
                        data={{
                          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                          datasets: [
                            {
                              label: '# of Votes',
                              data: [12],
                              backgroundColor: [
                                'rgba(75, 192, 192, 0.2)',
                              ],
                              borderColor: [
                                'rgba(75, 192, 192, 0.2)',
                              ],
                              borderWidth: 1,
                            },
                          ],
                        }} />
                    </Box>
                    <Box vertical>
                      <Typography color="#6C737F" fontSize={14} fontWeight={500}>Current balance</Typography>
                      <Typography color="#111927" fontSize={36} fontWeight={600}>$1680</Typography>
                      <Box style={{backgroundColor: "#ECFDF3", padding: "2px 8px", borderRadius: 16, fontSize: 12, color: "#027A48", fontWeight: 500, marginTop: 20, marginLeft: 65}}>3.7%</Box>
                    </Box>
                  </Box>
                  <Box flexDirection="column" justifyContent="center" style={{width: 122, boxShadow: '0 1px 2px #1018281A', padding: 20, borderRadius: 8}}>
                    <Image src="/icons/small.png" alt="Small" width={40} height={40} />
                    <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>4.9</Box>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card style={{flex: 1}} onClick={() => router.push('/c/live-squad')}>
              <Box alignItem="flex-start" justifyContent="space-between" style={{position: 'relative', backgroundColor: 'black', padding: 20, borderRadius: "12px 12px 0 0"}}>
                <Box vertical>
                  <Typography color="white" fontSize="20px" fontWeight={600}>MVP for Serverless E-commerce Return Portal</Typography>
                  <Typography color="#D0FC4A" fontWeight={500} style={{opacity: 0.8, marginTop: 15}}>4 members</Typography>
                </Box>
                <Button color="#D92D20" fontColor="white">Invoice due</Button>
              </Box>
              <Box vertical style={{padding: 20}}>
                <Typography color="#6C737F" fontSize={14} fontWeight={500}>Feb 01 - 07</Typography>
                <Box fullWidth alignItem="stretch" style={{marginTop: 15, gap: 8}}>
                  <Box style={{flex: 1, boxShadow: '0 1px 2px #1018281A', padding: 20, borderRadius: 8}}>
                    <Box style={{width: 110, height: 110, marginRight: 20}}>
                      <Doughnut
                        options={{
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                        }}
                        data={{
                          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                          datasets: [
                            {
                              label: '# of Votes',
                              data: [12],
                              backgroundColor: [
                                'rgba(75, 192, 192, 0.2)',
                              ],
                              borderColor: [
                                'rgba(75, 192, 192, 0.2)',
                              ],
                              borderWidth: 1,
                            },
                          ],
                        }} />
                    </Box>
                    <Box vertical>
                      <Typography color="#6C737F" fontSize={14} fontWeight={500}>Current balance</Typography>
                      <Typography color="#111927" fontSize={36} fontWeight={600}>$1680</Typography>
                      <Box style={{backgroundColor: "#ECFDF3", padding: "2px 8px", borderRadius: 16, fontSize: 12, color: "#027A48", fontWeight: 500, marginTop: 20, marginLeft: 65}}>3.7%</Box>
                    </Box>
                  </Box>
                  <Box flexDirection="column" justifyContent="center" style={{width: 122, boxShadow: '0 1px 2px #1018281A', padding: 20, borderRadius: 8}}>
                    <Image src="/icons/small.png" alt="Small" width={40} height={40} />
                    <Box style={{padding: "0 16px", backgroundColor: "#039855", borderRadius: "16px", color: "white", fontSize: 24, marginTop: 10}}>4.9</Box>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>
          <Box vertical style={{padding: "15px 0"}}>
            <Typography color="#111927" fontSize={24} fontWeight={500} style={{marginBottom: 10}}>Template Library</Typography>
            <Typography color="#384250">Learn how market leading businesses have used Squadron to achieve their missions and customise your own squad in just a few clicks.</Typography>
          </Box>
          <Box vertical style={{gap: 20}}>
            <Box fullWidth style={{gap: 20}}>
              <Box style={{flex: 1, background: "url('/images/template-01.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
              <Box style={{flex: 1, background: "url('/images/template-02.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
              <Box style={{flex: 1, background: "url('/images/template-03.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
            </Box>
            <Box fullWidth style={{gap: 20}}>
              <Box style={{flex: 1, background: "url('/images/template-04.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
              <Box style={{flex: 1, background: "url('/images/template-05.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
              <Box style={{flex: 1, background: "url('/images/template-06.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
            </Box>
          </Box>
          <Box style={{margin: "30px 0 50px", gap: 30}}>
            <Box vertical style={{flex: 1, backgroundColor: "black", padding: "24px 40px", borderRadius: 12}}>
              <Typography color="#DAFB6A" fontSize={24} fontWeight={600}>Wallet</Typography>
              <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{marginTop: 60}}>
                <Box vertical>
                  <Box style={{marginBottom: 10}}>
                    <Image src="/icons/logo-green.png" alt="Logo" width={48} height={48} style={{marginRight: 22}} />
                    <Typography color="#FFFFFF" fontSize={30} fontWeight={500}>540</Typography>
                  </Box>
                  <Typography color="#FFFFFF" fontSize={14}>points available</Typography>
                </Box>
                <Box vertical>
                  <Typography color="#FFFFFF" fontSize={30} fontWeight={500}>0</Typography>
                  <Typography color="#FFFFFF" fontSize={14}>in escrow</Typography>
                  <Typography color="#FFFFFF" fontSize={30} fontWeight={500} style={{marginTop: 15}}>210</Typography>
                  <Typography color="#FFFFFF" fontSize={14}>via referrals</Typography>
                </Box>
              </Box>
            </Box>
            <Box vertical style={{flex: 1, backgroundColor: "#D0FC4A", padding: "24px 40px", borderRadius: 12}}>
              <Typography color="#111818" fontSize={24} fontWeight={600}>Sustainability</Typography>
              <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{marginTop: 60}}>
                <Box vertical>
                  <Box style={{marginBottom: 10}}>
                    <Image src="/icons/logo-black.png" alt="Logo" width={48} height={48} style={{marginRight: 22}} />
                    <Typography color="#111818" fontSize={30} fontWeight={500}>373.3</Typography>
                  </Box>
                  <Typography color="#111818" fontSize={14} style={{width: 220}}>tonnes of CO2e removed from the atmosphere</Typography>
                </Box>
                <Box vertical>
                  <Typography color="#111818" fontSize={30} fontWeight={500}>186.7</Typography>
                  <Typography color="#111818" fontSize={14}>annual emissions</Typography>
                  <Typography color="#111818" fontSize={30} fontWeight={500} style={{marginTop: 15}}>7</Typography>
                  <Typography color="#111818" fontSize={14}>actions taken</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Card>
            <Row style={{padding: "16px 24px", gap: 15, borderBottom: "1px solid #E5E7EB", justifyContent: "space-between"}}>
              <Typography fontSize="20px" color="#111927" fontWeight={600}>Stories, tips and tools to inspire your best work.</Typography>
              <Link color="#4B48EC" style={{fontWeight: 600}}>View all</Link>
            </Row>
            <Box vertical style={{padding: "16px 24px"}}>
              <Box style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                <Box vertical>
                  <Typography fontSize="14px" color="#4B48EC" fontWeight={500} style={{marginBottom: 10}}>Featured</Typography>
                  <Typography fontSize="16px" color="#111927" fontWeight={500} style={{marginBottom: 10}}>Hire Smarter, Not Harder: How Cloud-Based Squads Can Help You Thrive In A Volatile Market</Typography>
                  <Typography fontSize="14px" color="#4D5761" fontWeight={500} style={{marginBottom: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.</Typography>
                  <Button color="#4B48EC" fontColor="white">Read more</Button>
                </Box>
                <Box>
                  <Image src="/images/story.png" alt="Story" width={312} height={160} />
                </Box>
              </Box>
              <Box style={{gap: 20}}>
                <Box alignItem="flex-start">
                  <Image src="/images/dashboard-01.png" alt="Dashboard" width={192} height={147} style={{marginRight: 15}} />
                  <Box vertical>
                    <Typography color="#111927" fontWeight={500}>Why We Were Destined To Power the Innovator Economy</Typography>
                    <Typography color="#4D5761" fontSize={14} style={{margin: "10px 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium adsasd</Typography>
                    <Button color="white" fontColor="#404040" style={{border: "1px solid #D4D4D4"}}>Read more</Button>
                  </Box>
                </Box>
                <Box alignItem="flex-start">
                  <Image src="/images/dashboard-02.png" alt="Dashboard" width={192} height={147} style={{marginRight: 15}} />
                  <Box vertical>
                    <Typography color="#111927" fontWeight={500}>Just Laid Off? Here's How To Bounce Back Stronger Than Ever</Typography>
                    <Typography color="#4D5761" fontSize={14} style={{margin: "10px 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium adsasd</Typography>
                    <Button color="white" fontColor="#404040" style={{border: "1px solid #D4D4D4"}}>Read more</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </ContentMain>
      </Content>
    </Container>
  )
}
