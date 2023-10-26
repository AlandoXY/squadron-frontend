import Input from "@/components/input";
import Box from "@/components/box";
import Popover from "@/components/popover";
import Image from "next/image";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";
import Navbar from "@/components/navbar";
import NavbarItem from "@/components/navbar-item";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useRouter} from "next/navigation";

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #E5E7EB;
  padding: 15px 20px;
  background-color: white;
`

export function DashboardHeaderC() {
  const [searchText, setSearchText] = useState("");

  const router = useRouter()

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === 'Enter') {
        if (searchText) {
          router.push('/dashboard-search-projects?query=' + searchText)
        }
      }
    }

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <ContentHeader>
      <Input placeholder="Search jobs" prefixIcon="/icons/search-lg.png" width={400} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <Box style={{gap: 20}}>
        <Popover
          top={42}
          align="right"
          renderContent={() => (
            <Box vertical style={{width: 400}}>
              <Box fullWidth alignItem="flex-start" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                <Box fullWidth style={{flex: 1}}>
                  <Image src="/icons/application-reject.png" alt="application reject" width={48} height={48} style={{marginRight: 20}} />
                  <Box vertical>
                    <Typography color="#111927" fontWeight={500}>Your application has been rejected</Typography>
                    <Typography color="#0B0F00" style={{marginTop: 8}}>Google - Surveyswap</Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton icon="/icons/close-gray.png" width={10} height={ 10} />
                </Box>
              </Box>
              <Box fullWidth alignItem="flex-start" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                <Box fullWidth style={{flex: 1}}>
                  <Image src="/icons/application-success.png" alt="application reject" width={48} height={48} style={{marginRight: 20}} />
                  <Box vertical>
                    <Typography color="#111927" fontWeight={500}>Your application has been successful</Typography>
                    <Typography color="#0B0F00" style={{marginTop: 8}}>Google - Surveyswap</Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton icon="/icons/close-gray.png" width={10} height={ 10} />
                </Box>
              </Box>
              <Box onClick={() => router.push('/dashboard-my-work?tab=Invites')}  fullWidth alignItem="flex-start" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                <Box fullWidth style={{flex: 1}}>
                  <Image src="/icons/invite-project.png" alt="application reject" width={48} height={48} style={{marginRight: 20}} />
                  <Box vertical>
                    <Typography color="#111927" fontWeight={500}>You have been invited to a project</Typography>
                    <Typography color="#0B0F00" style={{marginTop: 8}}>Google - Surveyswap</Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton icon="/icons/close-gray.png" width={10} height={ 10} />
                </Box>
              </Box>
              <Box fullWidth alignItem="flex-start" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                <Box fullWidth style={{flex: 1}}>
                  <Image src="/icons/invite-interview.png" alt="application reject" width={48} height={48} style={{marginRight: 20}} />
                  <Box vertical>
                    <Typography color="#111927" fontWeight={500}>You have been invited to an interview</Typography>
                    <Typography color="#0B0F00" style={{marginTop: 8}}>Google - Surveyswap</Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton icon="/icons/close-gray.png" width={10} height={ 10} />
                </Box>
              </Box>
              <Box fullWidth alignItem="flex-start" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                <Box fullWidth style={{flex: 1}}>
                  <Image src="/icons/new-match.png" alt="application reject" width={48} height={48} style={{marginRight: 20}} />
                  <Box vertical>
                    <Typography color="#111927" fontWeight={500}>New match for you!</Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton icon="/icons/close-gray.png" width={10} height={ 10} />
                </Box>
              </Box>
              <Box>
                <Typography color="#4D5761" fontWeight={600} fontSize={14}>See all notifications</Typography>
              </Box>
            </Box>
          )}>
          <IconButton icon="/icons/message-square.png" width={24} height={24} />
        </Popover>
        <IconButton icon="/icons/star-02.png" width={24} height={24} />
        <Popover
          top={42}
          align="right"
          renderContent={() => (
            <Box vertical style={{width: 400}}>
              <Box fullWidth alignItem="flex-start" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}} onClick={() => router.push('/c/my-squad')}>
                <Box fullWidth style={{flex: 1}}>
                  <Box justifyContent="center" style={{width: 48, height: 48, borderRadius: "50%", backgroundColor: "#D0FC4A", marginRight: 20}}>
                    <Image src="/icons/invoice.png" alt="invoice" width={18} height={24} />
                  </Box>
                  <Box vertical>
                    <Typography color="#111927" fontWeight={500}>New invoice ready to be paid</Typography>
                    <Typography color="#0B0F00" style={{marginTop: 8}}>1 Feb - 7 Feb period</Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton icon="/icons/close-gray.png" width={10} height={ 10} />
                </Box>
              </Box>
              <Box fullWidth alignItem="flex-start" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 15, marginBottom: 15}}>
                <Box fullWidth style={{flex: 1}}>
                  <Box justifyContent="center" style={{width: 48, height: 48, borderRadius: "50%", backgroundColor: "#D0FC4A", marginRight: 20}}>
                  </Box>
                  <Box vertical>
                    <Typography color="#111927" fontWeight={500}>Write other notification</Typography>
                    <Typography color="#0B0F00" style={{marginTop: 8}}>Stir - MVP</Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton icon="/icons/close-gray.png" width={10} height={ 10} />
                </Box>
              </Box>
              <Box>
                <Typography color="#4D5761" fontWeight={600} fontSize={14}>See all notifications</Typography>
              </Box>
            </Box>
          )}>
          <IconButton icon="/icons/bell.png" width={24} height={24} />
        </Popover>
        <Popover
          top={42}
          align="right"
          renderContent={() => (
            <Box vertical style={{width: 240}}>
              <Navbar>
                <NavbarItem>
                  <IconButton width={16} height={16} icon="/icons/user-01.png" onClick={() => router.push('/profile-setup')}>View profile</IconButton>
                </NavbarItem>
                <NavbarItem>
                  <IconButton width={16} height={16} icon="/icons/zap.png" onClick={() => router.push('/dashboard-my-work?tab=saved jobs')}>My Work</IconButton>
                </NavbarItem>
                <Box style={{width: "100%", borderTop: "1px solid #E5E7EB"}} />
                <NavbarItem>
                  <IconButton width={16} height={16} icon="/icons/settings.png" onClick={() => router.push('/dashboard-settings')}>Settings</IconButton>
                </NavbarItem>
                <NavbarItem>
                  <IconButton width={16} height={16} icon="/icons/help-circle.png">Help</IconButton>
                </NavbarItem>
                <Box style={{width: "100%", borderTop: "1px solid #E5E7EB"}} />
                <NavbarItem>
                  <IconButton width={16} height={16} icon="/icons/log-out.png" onClick={() => router.push('/')}>Log out</IconButton>
                </NavbarItem>
              </Navbar>
            </Box>
          )}>
          <Image src="/icons/ellipse.png" alt="Avatar" width={40} height={40} />
        </Popover>
      </Box>
    </ContentHeader>
  )
}
