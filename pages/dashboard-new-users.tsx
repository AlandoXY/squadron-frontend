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
import ProgressBar from "@/components/progress-bar";
import Box from "@/components/box";
import LanguageEdit from "@/components/profile-edit/language-edit";
import AboutMe from "@/components/profile-edit/about-me";
import SocialMedia from "@/components/profile-edit/social-media";
import Skills from "@/components/profile-edit/skills";
import Tools from "@/components/profile-edit/tools";
import AddOrEditExperience from "@/components/profile-edit/add-or-edit-experience";
import Delete from "@/components/profile-edit/delete";
import Popover from "@/components/popover";
import DeleteProject from "@/components/profile-edit/delete-project";
import EditProject from "@/components/profile-edit/edit-project";
import ViewProject from "@/components/profile-edit/view-project";
import Input from "@/components/input";
import {AsideBar} from "@/components/aside-bar";

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
  margin-bottom: 50px;
`

export default function DashboardNewUsers() {

  return (
    <Container>
      <AsideBar />
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
          <Row fullWidth style={{margin: "30px 0", justifyContent: "space-between", paddingBottom: 30, borderBottom: "1px solid #E5E7EB"}}>
            <Typography color="#111927" fontSize="30px" fontWeight={600}>Hi, Taylor</Typography>
            <Box>
              <Box style={{border: "1px solid #FEC84B", backgroundColor: "#FFFAEB", padding: "2px 25px", borderRadius: 8}}>
                <Image src="/icons/star-03.png" alt="Star" width={15} height={14} style={{marginRight: 10}} />
                <Box vertical>
                  <Typography color="#B54708" fontSize="14px" fontWeight={600}>5/5</Typography>
                  <Typography color="#B54708" fontSize="14px" fontWeight={600}>View all reviews</Typography>
                </Box>
              </Box>
              <Box style={{border: "1px solid #D2D6DB", backgroundColor: "#FFFFFF", padding: "11px 25px", borderRadius: 8, marginLeft: 15}}>
                <Image src="/icons/share.png" alt="Star" width={20} height={20} style={{marginRight: 10}} />
                <Box vertical>
                  <Typography color="#384250" fontSize="14px" fontWeight={600}>Refer Talent</Typography>
                </Box>
              </Box>
            </Box>
          </Row>
          <Box vertical style={{marginTop: 40}}>
            <Box style={{marginBottom: 30}}>
              <Typography color="#111927" fontSize="24px" fontWeight={500}>My applications</Typography>
            </Box>
            <Card>
              <Box flexDirection="column" style={{alignItem: "center", padding: 20}}>
                <Image src="/images/empty-applications.png" alt="Empty Applications" width={150} height={128} />
                <Typography color="#111927" fontWeight={600} style={{marginTop: 10}}>No applications</Typography>
                <Typography color="#4D5761" fontSize="14px" style={{margin: "10px 0 30px"}}>You haven’t applied any role yet. Start searching for projects</Typography>
                <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}}>Search projects</Button>
              </Box>
            </Card>
          </Box>
          <Box vertical style={{marginTop: 40}}>
            <Box style={{marginBottom: 30}}>
              <Typography color="#111927" fontSize="24px" fontWeight={500}>Newest matches</Typography>
            </Box>
            <Box fullWidth style={{overflowX: "auto", gap: 30}}>
              <Box>
                <Card style={{width: 615}}>
                  <Box justifyContent="space-between" style={{padding: 20, borderBottom: "1px solid #F3F4F6"}}>
                    <Box style={{gap: 15}}>
                      <Label color="#F3F4F6" borderColor="#F3F4F6">Label</Label>
                      <Label color="#F3F4F6" borderColor="#F3F4F6">Label</Label>
                      <Label color="#F3F4F6" borderColor="#F3F4F6">Label</Label>
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
                        <Typography color="#4D5761" fontSize="14px">Company</Typography>
                        <Typography color="#111927" fontWeight={600} style={{marginTop: 5}}>Name of the project</Typography>
                      </Box>
                    </Box>
                    <Box style={{marginTop: 15}}>
                      <Typography color="#4D5761" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, na ... <Link>See more</Link></Typography>
                    </Box>
                    <Box fullWidth justifyContent="space-between" style={{marginTop: 20}}>
                      <Box vertical>
                        <Typography color="#111927" fontSize={14} fontWeight={600}>Open roles (6)</Typography>
                        <Box style={{marginTop: 15, gap: 10}}>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Name position</Label>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Name position</Label>
                          <Box style={{backgroundColor: "#E0F2FE", borderRadius: "50%", color: "#4D5761", fontSize: 14, fontWeight: 500, padding: 5}}>+3</Box>
                        </Box>
                      </Box>
                      <Box vertical>
                        <Typography color="#111927" fontSize={14} fontWeight={600}>Squadmates</Typography>
                        <Box style={{marginTop: 15, gap: 10}}>
                          <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
                          <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
                          <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
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
              <Box>
                <Card style={{width: 615}}>
                  <Box justifyContent="space-between" style={{padding: 20, borderBottom: "1px solid #F3F4F6"}}>
                    <Box style={{gap: 15}}>
                      <Label color="#F3F4F6" borderColor="#F3F4F6">Label</Label>
                      <Label color="#F3F4F6" borderColor="#F3F4F6">Label</Label>
                      <Label color="#F3F4F6" borderColor="#F3F4F6">Label</Label>
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
                        <Typography color="#4D5761" fontSize="14px">Company</Typography>
                        <Typography color="#111927" fontWeight={600} style={{marginTop: 5}}>Name of the project</Typography>
                      </Box>
                    </Box>
                    <Box style={{marginTop: 15}}>
                      <Typography color="#4D5761" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, na ... <Link>See more</Link></Typography>
                    </Box>
                    <Box fullWidth justifyContent="space-between" style={{marginTop: 20}}>
                      <Box vertical>
                        <Typography color="#111927" fontSize={14} fontWeight={600}>Open roles (6)</Typography>
                        <Box style={{marginTop: 15, gap: 10}}>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Name position</Label>
                          <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Name position</Label>
                          <Box style={{backgroundColor: "#E0F2FE", borderRadius: "50%", color: "#4D5761", fontSize: 14, fontWeight: 500, padding: 5}}>+3</Box>
                        </Box>
                      </Box>
                      <Box vertical>
                        <Typography color="#111927" fontSize={14} fontWeight={600}>Squadmates</Typography>
                        <Box style={{marginTop: 15, gap: 10}}>
                          <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
                          <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
                          <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
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
          <Box style={{marginTop: 30, gap: 30}}>
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
          <Box style={{marginTop: 80, gap: 30}}>
            <Card style={{flex: 4}}>
              <Box vertical style={{padding: 20}}>
                <Typography color="#111927" fontWeight={600} fontSize={18}>Refer a friend</Typography>
                <Typography color="#4D5761" fontSize={14} style={{margin: "10px 0 15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.</Typography>
                <Box fullWidth style={{border: "1px solid #D2D6DB", borderRadius: 8, margin: "10px 0 30px"}}>
                  <Box style={{flex: 1, backgroundColor: "#F9FAFB", padding: 10, borderRadius: "8px 0 0 8px"}}>
                    <Typography color="#6C737F" fontSize={16}>www.squadronexamplelink.com</Typography>
                  </Box>
                  <Box style={{borderLeft: "1px solid #D2D6DB", padding: "0 5px"}}>
                    <IconButton icon="/icons/copy.png" width={20} height={20} />
                  </Box>
                </Box>
                <Box style={{gap: 40}}>
                  <Image src="/icons/link-in.png" alt="Link In" width={32} height={32} />
                  <Image src="/icons/at.png" alt="AT" width={32} height={32} />
                  <Image src="/icons/twitter.png" alt="Twitter" width={32} height={32} />
                </Box>
              </Box>
            </Card>
            <Card style={{flex: 6}}>
              <Box vertical style={{padding: 20}}>
                <Typography color="#111927" fontWeight={600} fontSize={18}>Join Community</Typography>
                <Typography color="#4D5761" fontSize={14} style={{margin: "10px 0 15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.</Typography>
                <Box fullWidth style={{padding: "20px 0 30px", marginTop: 10, borderTop: "1px solid #EAECF0"}}>
                  <Box style={{marginRight: 15}}>
                    <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
                    <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
                    <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
                  </Box>
                  <Typography color="#4D5761" fontSize={14}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Typography>
                </Box>
                <Button color="#4B48EC" fontColor="white">Join Community</Button>
              </Box>
            </Card>
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
