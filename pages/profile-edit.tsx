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
  const [skills, setSkills] = useState([])
  const [languageEditOpen, setLanguageEditOpen] = useState(false)
  const [aboutMeOpen, setAboutMeOpen] = useState(false)
  const [socialMediaOpen, setSocialMediaOpen] = useState(false)
  const [skillsOpen, setSkillsOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const [experienceOpen, setExperienceOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deleteProjectOpen, setDeleteProjectOpen] = useState(false)
  const [editProjectOpen, setEditProjectOpen] = useState(false)
  const [viewProjectOpen, setViewProjectOpen] = useState(false)

  useEffect(() => {
    fetch("https://my.backend/skills")
      .then(res => res.json())
      .then(res => {
        setSkills(res)
      })
  }, [])

  return (
    <Container>
      <Aside>
        <AsideTop>
          <Image src="/icons/logo.png" width={30} height={30} alt="Logo" />
          <Typography>squadron</Typography>
        </AsideTop>
        <Box fullWidth style={{padding: "10px 20px 30px 20px;"}}>
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
              <Image src="/icons/avatar-3.png" width={100} height={100} alt="Ellipse" style={{marginRight: 30}} />
              <div>
                <Typography color="white">Motion Designer</Typography>
                <Typography color="white" fontSize="22px" style={{margin: "10px 0"}}>Jack Green</Typography>
                <Typography color="white" fontSize="12px">London, UK</Typography>
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
                    <Typography color="#111927" fontSize="18px" fontWeight={500}>Experience</Typography>
                    <IconButton icon="/icons/edit.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}}>Edit</IconButton>
                  </Box>
                  <Box flexDirection="column" alignItem="flex-start" style={{marginTop: 10}}>
                    <Typography color="#475467" fontSize="14px">2 years</Typography>
                  </Box>
                </Box>
                <Box flexDirection="column" alignItem="flex-start" style={{marginBottom: 20}}>
                  <Box fullWidth justifyContent="space-between">
                    <Typography color="#111927" fontSize="18px" fontWeight={500}>Languages</Typography>
                    <IconButton icon="/icons/edit.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} onClick={() => setLanguageEditOpen(true)}>Edit</IconButton>
                  </Box>
                  <Box flexDirection="column" alignItem="flex-start" style={{marginTop: 10}}>
                    <Box>
                      <Typography color="#344054" fontSize="14px" fontWeight={500} style={{marginRight: 10}}>English: </Typography>
                      <Typography color="#475467" fontSize="14px">Advanced</Typography>
                    </Box>
                    <Box style={{marginTop: 10}}>
                      <Typography color="#344054" fontSize="14px" fontWeight={500} style={{marginRight: 10}}>French: </Typography>
                      <Typography color="#475467" fontSize="14px">Intermediate</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box flexDirection="column" alignItem="flex-start" style={{marginBottom: 20}}>
                  <Box fullWidth justifyContent="space-between">
                    <Typography color="#111927" fontSize="18px" fontWeight={500}>Social Links</Typography>
                    <IconButton icon="/icons/edit.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} onClick={() => setSocialMediaOpen(true)}>Edit</IconButton>
                  </Box>
                  <Box style={{marginTop: 10}}>
                    <IconButton icon="/icons/link-in.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
                    <IconButton icon="/icons/at.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
                    <IconButton icon="/icons/twitter.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
                  </Box>
                </Box>
              </Section1ContentLeft>
              <Section1ContentRight>
                <Box justifyContent="space-between" style={{marginBottom: 20}}>
                  <Typography component="h2" fontWeight={600} fontSize="18px">About</Typography>
                  <IconButton icon="/icons/edit.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600, padding: 0}} onClick={() => setAboutMeOpen(true)}>Edit</IconButton>
                </Box>
                <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                <Typography fontSize="14px" color="#4D5761" style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                <Box justifyContent="space-between" style={{marginBottom: 20}}>
                  <Typography component="h2" fontWeight={600} fontSize="18px">Skills</Typography>
                  <IconButton icon="/icons/edit.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600, padding: 0}} onClick={() => setSkillsOpen(true)}>Edit</IconButton>
                </Box>
                <Box style={{gap: 10, flexWrap: 'wrap'}}>
                  <Label icon="/icons/star.png">Skill name</Label>
                  <Label icon="/icons/star.png">Skill name</Label>
                  <Label icon="/icons/star.png">Skill name</Label>
                  <Label>Skill name</Label>
                  <Label>Skill name</Label>
                  <Label>Skill name</Label>
                  <Label>Skill name</Label>
                  <Label>Skill name</Label>
                  <Label>Skill name</Label>
                  <Label>Skill name</Label>
                  <Label>Skill name</Label>
                  <Label>Skill name</Label>
                </Box>
                <Box justifyContent="space-between" style={{margin: "20px 0"}}>
                  <Typography component="h2" fontWeight={600} fontSize="18px">Tools</Typography>
                  <IconButton icon="/icons/edit.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600, padding: 0}} onClick={() => setToolsOpen(true)}>Edit</IconButton>
                </Box>
                <Box style={{gap: 10}}>
                  <Label icon="/icons/ps.png">Label</Label>
                  <Label icon="/icons/ps.png">Label</Label>
                  <Label icon="/icons/ps.png">Label</Label>
                  <Label icon="/icons/ps.png">Label</Label>
                  <Label icon="/icons/ps.png">Label</Label>
                  <Label icon="/icons/ps.png">Label</Label>
                </Box>
              </Section1ContentRight>
            </Section1Content>
          </Card>
          <Card>
            <Row style={{padding: "16px 24px", gap: 15, borderBottom: "1px solid #E5E7EB", justifyContent: "space-between"}}>
              <Typography fontSize="20px" color="#111927" fontWeight={600}>Experience</Typography>
              <Button color="#4B48EC" fontColor="#ffffff" onClick={() => setExperienceOpen(true)}>Add more</Button>
            </Row>
            <Box alignItem="flex-start" style={{padding: 20}}>
              <Box vertical style={{width: 500}}>
                <Typography color="#111927" fontWeight={500}>Senior UX Designer</Typography>
                <Typography fontSize="14px" color="#4D5761">UI Animation</Typography>
              </Box>
              <Box alignItem="flex-start">
                <Image src="/icons/google.png" alt="Google" width={48} height={48} />
                <Box vertical style={{margin: "0 30px"}}>
                  <Typography color="#111927" fontSize="18px">Google</Typography>
                  <Typography color="#4D5761" fontSize="14px" style={{margin: "10px 0 20px"}}>2022 - Present</Typography>
                  <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                  <Typography color="#4D5761" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                </Box>
              </Box>
              <Box>
                <Typography color="#1B18E4" fontSize="14px" fontWeight={600} onClick={() => setExperienceOpen(true)}>Edit</Typography>
                <IconButton icon="/icons/close.png" width={16} height={16} style={{padding: 0, marginLeft: 10}} onClick={() => setDeleteOpen(true)} />
              </Box>
            </Box>
            <Box alignItem="flex-start" style={{padding: 20}}>
              <Box vertical style={{width: 500}}>
                <Typography color="#111927" fontWeight={500}>Senior UX Designer</Typography>
                <Typography fontSize="14px" color="#4D5761">UI Animation</Typography>
              </Box>
              <Box alignItem="flex-start">
                <Image src="/icons/google.png" alt="Google" width={48} height={48} />
                <Box vertical style={{margin: "0 30px"}}>
                  <Typography color="#111927" fontSize="18px">Google</Typography>
                  <Typography color="#4D5761" fontSize="14px" style={{margin: "10px 0 20px"}}>2022 - Present</Typography>
                  <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                  <Typography color="#4D5761" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                </Box>
              </Box>
              <Box>
                <Typography color="#1B18E4" fontSize="14px" fontWeight={600} onClick={() => setExperienceOpen(true)}>Edit</Typography>
                <IconButton icon="/icons/close.png" width={16} height={16} style={{padding: 0, marginLeft: 10}} onClick={() => setDeleteOpen(true)} />
              </Box>
            </Box>
            <Box alignItem="flex-start" style={{padding: 20}}>
              <Box vertical style={{width: 500}}>
                <Typography color="#111927" fontWeight={500}>Senior UX Designer</Typography>
                <Typography fontSize="14px" color="#4D5761">UI Animation</Typography>
              </Box>
              <Box alignItem="flex-start">
                <Image src="/icons/google.png" alt="Google" width={48} height={48} />
                <Box vertical style={{margin: "0 30px"}}>
                  <Typography color="#111927" fontSize="18px">Google</Typography>
                  <Typography color="#4D5761" fontSize="14px" style={{margin: "10px 0 20px"}}>2022 - Present</Typography>
                  <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                  <Typography color="#4D5761" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. </Typography>
                </Box>
              </Box>
              <Box>
                <Typography color="#1B18E4" fontSize="14px" fontWeight={600} onClick={() => setExperienceOpen(true)}>Edit</Typography>
                <IconButton icon="/icons/close.png" width={16} height={16} style={{padding: 0, marginLeft: 10}} onClick={() => setDeleteOpen(true)} />
              </Box>
            </Box>
          </Card>
          <Box style={{marginBottom: 30}}>
            <Typography color="#111927" fontSize="20px" fontWeight={600}>Worked in</Typography>
          </Box>
          <Box style={{overflowX: 'auto', gap: 30}}>
            <Card onClick={() => setViewProjectOpen(true)}>
              <Box vertical style={{position: 'relative', backgroundColor: 'black', padding: 20, borderRadius: "12px 12px 0 0"}}>
                <Typography color="white" fontSize="20px" fontWeight={600}>iOS strategy</Typography>
                <Typography color="white" fontSize="14px" style={{opacity: 0.8, marginTop: 15}}>2022</Typography>
                <Popover
                  style={{position: 'absolute', right: 15, top: 0, marginLeft: 10}}
                  renderContent={() => (
                  <Box vertical style={{width: 220}}>
                    <IconButton icon="/icons/edit.png" width={14} height={14} fontSize="14px" fullWidth style={{justifyContent: 'flex-start'}} onClick={() => setEditProjectOpen(true)}>Edit project</IconButton>
                    <IconButton icon="/icons/delete.png" width={14} height={14} fontSize="14px" fullWidth style={{justifyContent: 'flex-start', marginTop: 10}} onClick={() => setDeleteProjectOpen(true)}>Delete</IconButton>
                  </Box>
                )}>
                  <IconButton icon="/icons/more.png" width={14} height={3.5} style={{padding: 0}} />
                </Popover>
              </Box>
              <Box style={{padding: 20}}>
                <Typography color="#4D5761" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda</Typography>
              </Box>
              <Box flexDirection="column" alignItem="flex-end" style={{margin: 10, textAlign: 'left'}}>
                <Typography color="#363636" fontSize="14px" fontWeight={600} style={{margin: "0 88px 15px 0"}}>Squad</Typography>
                <Box>
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                </Box>
              </Box>
            </Card>
            <Card onClick={() => setViewProjectOpen(true)}>
              <Box vertical style={{position: 'relative', backgroundColor: 'black', padding: 20, borderRadius: "12px 12px 0 0"}}>
                <Typography color="white" fontSize="20px" fontWeight={600}>iOS strategy</Typography>
                <Typography color="white" fontSize="14px" style={{opacity: 0.8, marginTop: 15}}>2022</Typography>
                <Popover
                  style={{position: 'absolute', right: 15, top: 0, marginLeft: 10}}
                  renderContent={() => (
                    <Box vertical style={{width: 220}}>
                      <IconButton icon="/icons/edit.png" width={14} height={14} fontSize="14px" fullWidth style={{justifyContent: 'flex-start'}} onClick={() => setEditProjectOpen(true)}>Edit project</IconButton>
                      <IconButton icon="/icons/delete.png" width={14} height={14} fontSize="14px" fullWidth style={{justifyContent: 'flex-start', marginTop: 10}} onClick={() => setDeleteProjectOpen(true)}>Delete</IconButton>
                    </Box>
                  )}>
                  <IconButton icon="/icons/more.png" width={14} height={3.5} style={{padding: 0}} />
                </Popover>
              </Box>
              <Box style={{padding: 20}}>
                <Typography color="#4D5761" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda</Typography>
              </Box>
              <Box flexDirection="column" alignItem="flex-end" style={{margin: 10, textAlign: 'left'}}>
                <Typography color="#363636" fontSize="14px" fontWeight={600} style={{margin: "0 88px 15px 0"}}>Squad</Typography>
                <Box>
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                </Box>
              </Box>
            </Card>
            <Card onClick={() => setViewProjectOpen(true)}>
              <Box vertical style={{position: 'relative', backgroundColor: 'black', padding: 20, borderRadius: "12px 12px 0 0"}}>
                <Typography color="white" fontSize="20px" fontWeight={600}>iOS strategy</Typography>
                <Typography color="white" fontSize="14px" style={{opacity: 0.8, marginTop: 15}}>2022</Typography>
                <Popover
                  style={{position: 'absolute', right: 15, top: 0, marginLeft: 10}}
                  renderContent={() => (
                    <Box vertical style={{width: 220}}>
                      <IconButton icon="/icons/edit.png" width={14} height={14} fontSize="14px" fullWidth style={{justifyContent: 'flex-start'}} onClick={() => setEditProjectOpen(true)}>Edit project</IconButton>
                      <IconButton icon="/icons/delete.png" width={14} height={14} fontSize="14px" fullWidth style={{justifyContent: 'flex-start', marginTop: 10}} onClick={() => setDeleteProjectOpen(true)}>Delete</IconButton>
                    </Box>
                  )}>
                  <IconButton icon="/icons/more.png" width={14} height={3.5} style={{padding: 0}} />
                </Popover>
              </Box>
              <Box style={{padding: 20}}>
                <Typography color="#4D5761" fontSize="14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda</Typography>
              </Box>
              <Box flexDirection="column" alignItem="flex-end" style={{margin: 10, textAlign: 'left'}}>
                <Typography color="#363636" fontSize="14px" fontWeight={600} style={{margin: "0 88px 15px 0"}}>Squad</Typography>
                <Box>
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                  <Image src="/icons/avatar-1.png" alt="Avatar" width={32} height={32} />
                </Box>
              </Box>
            </Card>
          </Box>
        </ContentMain>
      </Content>
      <LanguageEdit open={languageEditOpen} setOpen={setLanguageEditOpen} />
      <AboutMe open={aboutMeOpen} setOpen={setAboutMeOpen} />
      <SocialMedia open={socialMediaOpen} setOpen={setSocialMediaOpen} />
      <Skills open={skillsOpen} setOpen={setSkillsOpen} />
      <Tools open={toolsOpen} setOpen={setToolsOpen} />
      <AddOrEditExperience open={experienceOpen} setOpen={setExperienceOpen} />
      <Delete open={deleteOpen} setOpen={setDeleteOpen} />
      <DeleteProject open={deleteProjectOpen} setOpen={setDeleteProjectOpen} />
      <EditProject open={editProjectOpen} setOpen={setEditProjectOpen} />
      <ViewProject open={viewProjectOpen} setOpen={setViewProjectOpen} />
    </Container>
  )
}
