import React, {useState} from "react";
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
import Box from "@/components/box";
import Input from "@/components/input";
import ProgressBar from "@/components/progress-bar";
import Dropdown from "@/components/dropdown";
import {useRouter} from "next/navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  background-color: #0B0F00;
  padding: 70px 10%;
  box-sizing: border-box;
`

const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

export default function LocationType() {
  const [dropVal1, setDropVal1] = useState("");
  const [workType, setWorkType] = useState(-1);
  const [step, setStep] = useState(1);
  const [level, setLevel] = useState(-1);

  const router = useRouter()

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      router.push('/join-success');
    }
  }

  const prevStep = () => {
    if (step <= 1) {
      router.push('signup')
    }
    if (step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <Container>
      <Box alignItem="stretch" style={{flex: 1}}>
        <LeftContainer>
          <IconButton width={32} height={32} fontSize="22px" fontColor="white" icon="/icons/logo-white.png">squadron</IconButton>
          <Box flexDirection="column" alignItem="flex-start" style={{marginTop: 75}}>
            <VideoPlayer url={"/videos/video.mp4"} width="100%" height="auto" />
            <Box flexDirection="column" style={{marginTop: 60}}>
              <Typography color="white" style={{marginBottom: 20}}>Lorem ipsum dolor sit</Typography>
              <Typography color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non scelerisque in augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non scelerisque in augue.</Typography>
            </Box>
          </Box>
        </LeftContainer>
        <RightContainer>
          <Box flexDirection="column" alignItem="flex-start" style={{padding: "20px 10%", borderBottom: "1px solid #E5E7EB"}}>
            <Typography color="#384250" fontWeight={600} style={{marginBottom: 5}}>Step 0{step}/05</Typography>
            <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 12}}>Location and type of work</Typography>
            <ProgressBar value={20 * step} color="#A0D909" height={8} bgColor="#E5E7EB" />
          </Box>
          {
            step === 1 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 30}}>Where are you located?</Typography>
                <Box flexDirection="column" alignItem="flex-start" style={{width: '100%', marginBottom: 50}}>
                  <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Country</Typography>
                  <Dropdown
                    options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
                    value={dropVal1}
                    onChange={(value) => setDropVal1(value)}
                    prevIcon="/icons/search-lg.png"
                    placeholder="Search"
                    disableInput={false}
                    showSuffixIcon={false}
                    fullWidth />
                </Box>
                <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 30}}>What type of work are you looking for?</Typography>
                <Box justifyContent="space-between" alignItem="flex-start" style={{width: '100%'}}>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: workType === 0 ? "#F4FFC7" : "white"}} onClick={() => setWorkType(0)}>
                    <Image src="/icons/full-time.png" alt="Full Time" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>Full-time</Typography>
                  </Box>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: workType === 1 ? "#F4FFC7" : "white"}} onClick={() => setWorkType(1)}>
                    <Image src="/icons/part-time.png" alt="Part Time" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>Full-time</Typography>
                  </Box>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: workType === 2 ? "#F4FFC7" : "white"}} onClick={() => setWorkType(2)}>
                    <Image src="/icons/side-hustle.png" alt="Side Hustle" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>Full-time</Typography>
                  </Box>
                </Box>
              </Box>
            )
          }
          {
            step === 2 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 30}}>What role best describes you?</Typography>
                <Box flexDirection="column" alignItem="flex-start" style={{width: '100%', marginBottom: 50}}>
                  <Dropdown
                    options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
                    value={dropVal1}
                    onChange={(value) => setDropVal1(value)}
                    placeholder="Enter your role"
                    disableInput={false}
                    showSuffixIcon={false}
                    fullWidth />
                </Box>
                <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 30}}>What is your level of professional experience?</Typography>
                <Box justifyContent="space-between" alignItem="flex-start" style={{width: '100%', flexWrap: 'wrap', gap: 50}}>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: level === 0 ? "#F4FFC7" : "white"}} onClick={() => setLevel(0)}>
                    <Image src="/icons/level-3.png" alt="Full Time" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>&lt; 3 years</Typography>
                  </Box>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: level === 1 ? "#F4FFC7" : "white"}} onClick={() => setLevel(1)}>
                    <Image src="/icons/level-3-6.png" alt="Part Time" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>3 - 6 years</Typography>
                  </Box>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: level === 2 ? "#F4FFC7" : "white"}} onClick={() => setLevel(2)}>
                    <Image src="/icons/level-6-9.png" alt="Side Hustle" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>6 - 9 years</Typography>
                  </Box>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: level === 3 ? "#F4FFC7" : "white"}} onClick={() => setLevel(3)}>
                    <Image src="/icons/level-9.png" alt="Side Hustle" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>&gt; 9 years</Typography>
                  </Box>
                </Box>
              </Box>
            )
          }
          {
            step === 3 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 30}}>What are some of your top skills?</Typography>
                <Box flexDirection="column" alignItem="flex-start" style={{width: '100%', marginBottom: 50}}>
                  <Dropdown
                    options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
                    value={dropVal1}
                    onChange={(value) => setDropVal1(value)}
                    placeholder="Search your skills"
                    disableInput={false}
                    showSuffixIcon={false}
                    fullWidth />
                </Box>
                <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 30}}>Where can we see some of your work?</Typography>
                <Box flexDirection="column" justifyContent="space-between" alignItem="flex-start" style={{width: '100%', flexWrap: 'wrap', gap: 50}}>
                  <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
                    <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>LinkedIn</Typography>
                    <Input prefixIcon="/icons/link.png" fullWidth />
                  </Box>
                  <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
                    <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>GitHub (optional)</Typography>
                    <Input prefixIcon="/icons/link.png" fullWidth />
                  </Box>
                  <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
                    <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Dribbble (optional)</Typography>
                    <Input prefixIcon="/icons/link.png" fullWidth />
                  </Box>
                  <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
                    <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Personal website (optional)</Typography>
                    <Input prefixIcon="/icons/link.png" fullWidth />
                  </Box>
                </Box>
              </Box>
            )
          }
          {
            step === 4 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Box justifyContent="space-between" style={{width: '100%'}}>
                  <Box flexDirection="column" alignItem="flex-start">
                    <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 5}}>Do you have a squad redy to go?</Typography>
                    <Typography color="#4D5761" fontSize="14px">Invite colleagues to collaborate on this project.</Typography>
                  </Box>
                  <Box>
                    <Button color="#4B48EC" fontColor="white" width="130px" height="30px">Invite members</Button>
                  </Box>
                </Box>
                <Box flexDirection="column" alignItem="flex-start" style={{width: '100%', border: "1px solid #E5E7EB", borderRadius: 12, marginTop: 40}}>
                  <Box style={{backgroundColor: '#FCFCFD', width: '100%', padding: "10px 20px", borderRadius: 12}}>
                    <Typography color="#4D5761" fontSize="12px">Name</Typography>
                  </Box>
                  <Box style={{width: '100%', padding: "18px 20px", borderTop: "1px solid #E5E7EB"}}>
                    <Typography color="#4D5761" fontSize="12px">Antonio Hidalgo Garcia</Typography>
                  </Box>
                  <Box style={{width: '100%', padding: "18px 20px", borderTop: "1px solid #E5E7EB"}}>
                    <Typography color="#4D5761" fontSize="12px">Antonio Hidalgo Garcia</Typography>
                  </Box>
                  <Box style={{width: '100%', padding: "18px 20px", borderTop: "1px solid #E5E7EB"}}>
                    <Typography color="#4D5761" fontSize="12px">Antonio Hidalgo Garcia</Typography>
                  </Box>
                  <Box style={{width: '100%', padding: "18px 20px", borderTop: "1px solid #E5E7EB"}}>
                    <Typography color="#4D5761" fontSize="12px">Antonio Hidalgo Garcia</Typography>
                  </Box>
                </Box>
              </Box>
            )
          }
          {
            step === 5 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
                  <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 5}}>How did you hear about us?</Typography>
                  <Box flexDirection="column" alignItem="flex-start" style={{width: '100%', margin: '30px 0'}}>
                    <Box>
                      <Input type="radio" name="hear" noBorder width={15} /> Referral
                    </Box>
                    <Box>
                      <Input type="radio" name="hear" noBorder width={15} /> Search engine
                    </Box>
                    <Box>
                      <Input type="radio" name="hear" noBorder width={15} /> Social media
                    </Box>
                    <Box>
                      <Input type="radio" name="hear" noBorder width={15} /> Job post
                    </Box>
                    <Box>
                      <Input type="radio" name="hear" noBorder width={15} /> Other
                    </Box>
                  </Box>
                  <Box style={{width: '100%'}}>
                    <Input placeholder="Type here" fullWidth />
                  </Box>
                </Box>
              </Box>
            )
          }
        </RightContainer>
      </Box>
      <Box justifyContent="space-between" style={{margin: "20px 50px"}}>
        <Button color="white" fontColor="#384250" width="114px" height="40px" style={{border: "1px solid #D2D6DB"}} onClick={() => prevStep()}>&lt; Back</Button>
        <Button color="#4B48EC" fontColor="white" width="114px" height="40px" onClick={() => nextStep()}>Next</Button>
      </Box>
    </Container>
  )
}
