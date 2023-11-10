import React, {useState} from "react";
import Image from "next/image";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";
import Box from "@/components/box";
import styled from "styled-components";
import Button from "@/components/button";
import Link from "@/components/link";

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #F9FAFB;
  box-shadow: 0 1px 2px 0 #1018280F;
  width: 100%;
  border-radius: 12px;
  background-color: white;
  margin-bottom: 20px;
  overflow: hidden;
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
      <Box vertical justifyContent="center" style={{width: "1000px", margin: "30px auto"}}>
        <Card>
          <Section1Top>
            <Image src="/icons/google.png" width={60} height={60} alt="Ellipse" style={{marginRight: 30}} />
            <div>
              <Typography color="white">Google</Typography>
              <Typography color="white" fontSize="20px" fontWeight={500} style={{margin: "10px 0"}}>AI Tech team</Typography>
            </div>
          </Section1Top>
          <Box justifyContent="space-between" style={{padding: 15}}>
            <IconButton icon="/icons/download.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}}>Download agreement</IconButton>
            <Box>
              <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}}>Decline</Button>
              <Button color="#4B48EC" fontColor="white">Sign</Button>
            </Box>
          </Box>
          <Box vertical style={{padding: 15, borderTop: "1px solid #D2D6DB"}}>
            <Typography color="#111927" fontWeight={500} fontSize={18} style={{marginBottom: 15}}>Project description</Typography>
            <Typography color="#4D5761" fontSize={14} style={{marginBottom: 15}}>Lorem ipsum dolor sit amet consectetur. Velit nisl adipiscing pharetra viverra. Sem purus condimentum placerat auctor mi at tristique. Sagittis accumsan viverra laoreet adipiscing habitasse elit convallis. Feugiat eget scelerisque ut tortor augue eu.</Typography>
            <Typography color="#4D5761" fontSize={14} style={{marginBottom: 15}}>Lorem ipsum dolor sit amet consectetur. Velit nisl adipiscing pharetra viverra. Sem purus condimentum placerat auctor mi at tristique. Sagittis accumsan viverra laoreet adipiscing habitasse elit convallis. Feugiat eget scelerisque ut tortor augue eu.</Typography>
            <Typography color="#4D5761" fontSize={14} style={{marginBottom: 15}}>Lorem ipsum dolor sit amet consectetur. Velit nisl adipiscing pharetra viverra. Sem purus condimentum placerat auctor mi at tristique. Sagittis accumsan viverra laoreet adipiscing habitasse elit convallis. Feugiat eget scelerisque ut tortor augue eu.</Typography>
          </Box>
          <Box vertical style={{padding: 15, borderTop: "1px solid #D2D6DB", borderBottom: "1px solid #D2D6DB"}}>
            <Typography color="#111927" fontWeight={500} fontSize={18} style={{marginBottom: 15}}>Role description</Typography>
            <Typography color="#4D5761" fontSize={14} style={{marginBottom: 15}}>Lorem ipsum dolor sit amet consectetur. Velit nisl adipiscing pharetra viverra. Sem purus condimentum placerat auctor mi at tristique. Sagittis accumsan viverra laoreet adipiscing habitasse elit convallis. Feugiat eget scelerisque ut tortor augue eu.</Typography>
          </Box>
          <Box vertical style={{padding: 15, backgroundColor: "#F9FAFB"}}>
            <Typography color="#111927" fontWeight={500} fontSize={18} style={{marginBottom: 15}}>Offer</Typography>
            <Box vertical>
              <Box style={{marginBottom: 15}}>
                <Box style={{width: 112}}>
                  <Typography color="#111927" fontSize={14} fontWeight={500}>Role</Typography>
                </Box>
                <Box>
                  <Typography color="#4D5761" fontSize={14}>Product Manager</Typography>
                </Box>
              </Box>
              <Box style={{marginBottom: 15}}>
                <Box style={{width: 112}}>
                  <Typography color="#111927" fontSize={14} fontWeight={500}>Project</Typography>
                </Box>
                <Box>
                  <Typography color="#4D5761" fontSize={14}>SurveySwap</Typography>
                </Box>
              </Box>
              <Box style={{marginBottom: 15}}>
                <Box style={{width: 112}}>
                  <Typography color="#111927" fontSize={14} fontWeight={500}>Company</Typography>
                </Box>
                <Box>
                  <Typography color="#4D5761" fontSize={14}>Nautilus</Typography>
                </Box>
              </Box>
              <Box style={{marginBottom: 15}}>
                <Box style={{width: 112}}>
                  <Typography color="#111927" fontSize={14} fontWeight={500}>Start date</Typography>
                </Box>
                <Box>
                  <Typography color="#4D5761" fontSize={14}>25 December 2022</Typography>
                </Box>
              </Box>
              <Box style={{marginBottom: 15}}>
                <Box style={{width: 112}}>
                  <Typography color="#111927" fontSize={14} fontWeight={500}>Hours per week</Typography>
                </Box>
                <Box>
                  <Typography color="#4D5761" fontSize={14}>40</Typography>
                </Box>
              </Box>
              <Box>
                <Box style={{width: 112}}>
                  <Typography color="#111927" fontSize={14} fontWeight={500}>Rate</Typography>
                </Box>
                <Box>
                  <Typography color="#4D5761" fontSize={14}>$80/h</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box vertical style={{padding: 15, borderTop: "1px solid #D2D6DB", borderBottom: "1px solid #D2D6DB"}}>
            <Typography color="#111927" fontWeight={500} fontSize={18} style={{marginBottom: 15}}>Client message</Typography>
            <Typography color="#4D5761" fontSize={14} style={{marginBottom: 15}}>Lorem ipsum dolor sit amet consectetur. Velit nisl adipiscing pharetra viverra. Sem purus condimentum placerat auctor mi at tristique. Sagittis accumsan viverra laoreet adipiscing habitasse elit convallis. Feugiat eget scelerisque ut tortor augue eu.</Typography>
            <Typography color="#4D5761" fontSize={14} style={{marginBottom: 15}}>Lorem ipsum dolor sit amet consectetur. Velit nisl adipiscing pharetra viverra. Sem purus condimentum placerat auctor mi at tristique. Sagittis accumsan viverra laoreet adipiscing habitasse elit convallis. Feugiat eget scelerisque ut tortor augue eu.</Typography>
            <Typography color="#4D5761" fontSize={14} style={{marginBottom: 15}}>Lorem ipsum dolor sit amet consectetur. Velit nisl adipiscing pharetra viverra. Sem purus condimentum placerat auctor mi at tristique. Sagittis accumsan viverra laoreet adipiscing habitasse elit convallis. Feugiat eget scelerisque ut tortor augue eu.</Typography>
          </Box>
          <Box justifyContent="space-between" style={{padding: 15}}>
            <IconButton icon="/icons/download.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}}>Download agreement</IconButton>
            <Box>
              <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}}>Decline</Button>
              <Button color="#4B48EC" fontColor="white">Sign</Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </HomeContainer>
  )
}
