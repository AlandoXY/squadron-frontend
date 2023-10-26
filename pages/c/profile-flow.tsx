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
import {host} from "@/mocks/handlers";
import Pagination from "@/components/pagination";

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
  padding: 0 20px;
`

const ContentHeader = styled.div`
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
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  margin-right: 50px;
`

const Section1ContentRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  border-left: 1px solid #EAECF0;
`

export default function ProfileEdit() {
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${host}/projects`)
      .then(res => res.json())
      .then((res) => {
        setProjects(res);
        setFilterProjects(res);
      })
  }, [])

  return (
    <Container>
      <Aside>
        <AsideTop>
          <Image src="/icons/logo.png" width={30} height={30} alt="Logo" />
          <Typography>squadron</Typography>
        </AsideTop>
        <Box fullWidth style={{padding: "10px 20px 30px 20px"}}>
          <Box flexDirection="column" alignItem="flex-start" style={{backgroundColor: '#F9FAFB', borderRadius: 8, padding: "20px 16px"}}>
            <Typography color="#101828" fontWeight={600} fontSize="14px" style={{marginBottom: 5}}>70% of profile complete</Typography>
            <Typography color="#475467" fontSize="14px" style={{marginBottom: 15}}>Lorem ipsum dolor sit amet, consectetur di set adipiscing elit morbi morbi dui pretium.</Typography>
            <ProgressBar value={20} color="#A0D909" height={8} bgColor="#E5E7EB" />
            <Button color="#111927" fontColor="white" fullWidth style={{marginTop: 20}}>Complete profile</Button>
          </Box>
        </Box>
        <Navbar>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/dashboard.png">Dashboard</IconButton>
          </NavbarItem>
          <NavbarItem active>
            <IconButton width={20} height={20} icon="/icons/projects.png">Projects</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/wallet.png">Wallet</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/sustainability.png">Sustainability</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/resource.png">Resources</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/perks.png">Perks</IconButton>
          </NavbarItem>
        </Navbar>
      </Aside>
      <Content>
        <ContentHeader>
          <Typography color="#111927" fontWeight={500} fontSize="18px">My Profile</Typography>
        </ContentHeader>
        <ContentMain>
          <Row style={{margin: "30px 0"}}>
            <Typography color="#1B18E4">&lt; Back</Typography>
          </Row>
          <Card>
            <Section1Top>
              <Image src="/icons/avatar-4.png" width={100} height={100} alt="Ellipse" style={{marginRight: 30}} />
              <div>
                <Box>
                  <Typography color="white" fontSize="22px" style={{margin: "10px 0"}}>Codebridge</Typography>
                  <Image src="/icons/verification.png" alt="Verification" width={24} height={24} style={{marginLeft: 5}} />
                </Box>
                <Box>
                  <Image src="/icons/location-light.png" alt="Location" width={18.75} height={18.75} style={{marginRight: 5}} />
                  <Typography color="white" fontSize="12px">London, UK</Typography>
                </Box>
              </div>
              <Section1TopRight>
                <IconButton icon="/icons/share-07.png" width={20} height={20} />
                <Button fontColor="Apply as squad" color="#D0FC4A">Edit Cover</Button>
              </Section1TopRight>
            </Section1Top>
            <Section1Content>
              <Section1ContentLeft>
                <Box flexDirection="column" alignItem="flex-start" style={{marginBottom: 20}}>
                  <Box fullWidth justifyContent="space-between">
                    <Typography color="#111927" fontSize="18px" fontWeight={500}>Social Links</Typography>
                    <IconButton icon="/icons/edit.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} >Edit</IconButton>
                  </Box>
                  <Box style={{marginTop: 10}}>
                    <IconButton icon="/icons/link-in.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
                    <IconButton icon="/icons/at.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
                    <IconButton icon="/icons/twitter.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
                  </Box>
                </Box>
                <Box flexDirection="column" alignItem="flex-start" style={{margin: "20px 0"}}>
                  <Box fullWidth style={{backgroundColor: "#F9FAFB", borderRadius: 8, marginBottom: 10, padding: 10}}>
                    <Image src="/icons/check-green.png" alt="Check" width={16} height={16} />
                    <Typography color="#4D5761" fontSize="24px" fontWeight={600} style={{margin: "0 10px"}}>04</Typography>
                    <Box vertical>
                      <Typography color="#6C737F" fontSize={14} fontWeight={600}>projects completed</Typography>
                      <Link>see projects</Link>
                    </Box>
                  </Box>
                  <Box fullWidth style={{backgroundColor: "#F9FAFB", borderRadius: 8, padding: 10}}>
                    <Image src="/icons/people-group.png" alt="Check" width={16} height={16} />
                    <Typography color="#4D5761" fontSize="24px" fontWeight={600} style={{margin: "0 10px"}}>30</Typography>
                    <Box vertical>
                      <Typography color="#6C737F" fontSize={14} fontWeight={600}>hired</Typography>
                    </Box>
                  </Box>
                </Box>
              </Section1ContentLeft>
              <Section1ContentRight>
                <Box justifyContent="space-between" style={{marginBottom: 20}}>
                  <Typography component="h2" fontWeight={600} fontSize="18px">About</Typography>
                  <IconButton icon="/icons/edit.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600, padding: 0}} >Edit</IconButton>
                </Box>
                <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
              </Section1ContentRight>
            </Section1Content>
          </Card>
          <Box vertical fullWidth>
            {
              filterProjects.slice((page - 1) * 10, page * 10).map(project => (
                <Box key={project.id} fullWidth>
                  <Card>
                    <Box justifyContent="space-between" style={{padding: 20, borderBottom: "1px solid #F3F4F6"}}>
                      <Box>
                        <Image src="/icons/lightning.png" alt="Lighting" width={24} height={24} style={{marginRight: 20}} />
                        <Box style={{gap: 15}}>
                          {
                            project.labels.map((label, index) => <Label key={index} color="#F3F4F6" borderColor="#F3F4F6">{label}</Label>)
                          }
                        </Box>
                      </Box>
                      <Box style={{gap: 15}}>
                        <IconButton icon="/icons/share.png" width={24} height={24} onClick={() => {}} />
                        <Button color="white" fontColor="#384250" style={{fontWeight: 600, border: "1px solid #D2D6DB"}}>View</Button>
                      </Box>
                    </Box>
                    <Box vertical style={{padding: 20}}>
                      <Box>
                        <Box style={{border: "10px solid #E5E7EB", borderRadius: "50%", marginRight: 10}}>
                          <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} />
                        </Box>
                        <Box vertical>
                          <Typography color="#4D5761" fontSize="14px">{project.company}</Typography>
                          <Typography color="#111927" fontWeight={600} style={{marginTop: 5}}>{project.subtitle}</Typography>
                        </Box>
                      </Box>
                      <Box style={{marginTop: 15}}>
                        <Typography color="#4D5761" fontSize="14px">{project.description} <Link>See more</Link></Typography>
                      </Box>
                      <Box fullWidth justifyContent="space-between" style={{marginTop: 20}}>
                        <Box vertical>
                          <Typography color="#111927" fontSize={14} fontWeight={600}>Open roles (6)</Typography>
                          <Box style={{marginTop: 15, gap: 10}}>
                            {
                              project.roles.map((role, index) => <Label key={index} icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">{role}</Label>)
                            }
                          </Box>
                        </Box>
                        <Box vertical>
                          <Typography color="#111927" fontSize={14} fontWeight={600}>Squadmates</Typography>
                          <Box style={{marginTop: 15}}>
                            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                            <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
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
              ))
            }
          </Box>
          <Box justifyContent="center" fullWidth style={{margin: "20px 0 80px"}}>
            <Pagination page={page} totalSize={filterProjects.length} onChange={(p) => setPage(p)} />
          </Box>
        </ContentMain>
      </Content>
    </Container>
  )
}
