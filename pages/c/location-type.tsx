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
import Textarea from "@/components/textarea";

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
    if (step < 6) {
      setStep(step + 1);
    } else {
      router.push('/c/join-success');
    }
  }

  const prevStep = () => {
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
            <Typography color="#384250" fontWeight={600} style={{marginBottom: 5}}>Step 0{step}/06</Typography>
            <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 12}}>Location and type of work</Typography>
            <ProgressBar value={17 * step} color="#A0D909" height={8} bgColor="#E5E7EB" />
          </Box>
          {
            step === 1 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                <Box style={{width: '100%', marginBottom: 20}}>
                  <Box flexDirection="column" alignItem="flex-start" style={{flex: 1, marginRight: 15}}>
                    <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>Name*</Typography>
                    <Input placeholder="Enter your name" fullWidth />
                  </Box>
                  <Box flexDirection="column" alignItem="flex-start" style={{flex: 1}}>
                    <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>Last name*</Typography>
                    <Input placeholder="Enter your last name" fullWidth />
                  </Box>
                </Box>
                <Box style={{width: '100%', marginBottom: 20}}>
                  <Box flexDirection="column" alignItem="flex-start" style={{flex: 1}}>
                    <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>Email*</Typography>
                    <Input placeholder="Enter your email" fullWidth />
                  </Box>
                </Box>
                <Box style={{width: '100%', marginBottom: 20}}>
                  <Box flexDirection="column" alignItem="flex-start" style={{flex: 1}}>
                    <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>LinkedIn</Typography>
                    <Input prefixIcon="/icons/link.png" fullWidth />
                  </Box>
                </Box>
              </Box>
            )
          }
          {
            step === 2 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                <Box style={{width: '100%', marginBottom: 20}}>
                  <Box flexDirection="column" alignItem="flex-start" style={{flex: 1}}>
                    <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>Company name</Typography>
                    <Input fullWidth />
                  </Box>
                </Box>
                <Box style={{width: '100%', marginBottom: 20}}>
                  <Box flexDirection="column" alignItem="flex-start" style={{flex: 1}}>
                    <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>Company website</Typography>
                    <Input prefixIcon="/icons/link.png" fullWidth />
                  </Box>
                </Box>
                <Box style={{width: '100%', marginBottom: 20}}>
                  <Box flexDirection="column" alignItem="flex-start" style={{flex: 1}}>
                    <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 6}}>Company website</Typography>
                    <Box flexDirection="column" alignItem="flex-start" style={{width: '100%', marginBottom: 50}}>
                      <Dropdown
                        options={[{ label: "10", value: "10" }, { label: "100", value: "100" }, { label: "200", value: "200" }, { label: "500", value: "500" }, { label: "1000", value: "1000" }]}
                        value={dropVal1}
                        onChange={(value) => setDropVal1(value)}
                        placeholder="Select number of employees"
                        disableInput={false}
                        showSuffixIcon={false}
                        fullWidth />
                    </Box>
                  </Box>
                </Box>
              </Box>
            )
          }
          {
            step === 3 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 30}}>What do you need help with?</Typography>
                <Box justifyContent="space-between" alignItem="flex-start" style={{width: '100%', flexWrap: 'wrap', gap: 60}}>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: level === 0 ? "#F4FFC7" : "white"}} onClick={() => setLevel(0)}>
                    <Image src="/icons/product.png" alt="Full Time" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>Product</Typography>
                  </Box>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: level === 1 ? "#F4FFC7" : "white"}} onClick={() => setLevel(1)}>
                    <Image src="/icons/design.png" alt="Full Time" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>Design</Typography>
                  </Box>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: level === 2 ? "#F4FFC7" : "white"}} onClick={() => setLevel(2)}>
                    <Image src="/icons/engineering.png" alt="Full Time" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>Engineering</Typography>
                  </Box>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: level === 3 ? "#F4FFC7" : "white"}} onClick={() => setLevel(3)}>
                    <Image src="/icons/marketing.png" alt="Full Time" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>Marketing</Typography>
                  </Box>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: level === 4 ? "#F4FFC7" : "white"}} onClick={() => setLevel(4)}>
                    <Image src="/icons/strategy.png" alt="Full Time" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>Strategy</Typography>
                  </Box>
                  <Box flexDirection="column" style={{border: "1px solid #D2D6DB", borderRadius: "8px", padding: "20px 30px", backgroundColor: level === 5 ? "#F4FFC7" : "white"}} onClick={() => setLevel(5)}>
                    <Image src="/icons/content.png" alt="Full Time" width={48} height={48} />
                    <Typography color="#111927" fontWeight={500} fontSize="18px" style={{marginTop: 10}}>Content</Typography>
                  </Box>
                </Box>
                <Box>
                  <Input type="radio" name="not_sure_yet" noBorder width={15} /> Not sure yet
                </Box>
              </Box>
            )
          }
          {
            step === 4 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 5}}>Do you have a referral code?</Typography>
                <Input placeholder="Enter a referral code here" fullWidth />
                <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A non scelerisque in augue.</Typography>
              </Box>
            )
          }
          {
            step === 5 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
                  <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 5}}>What type of Design help do you need?</Typography>
                  <Textarea width="100%" resize={false}></Textarea>
                </Box>
                <Box>
                  <Input type="radio" name="not_sure_yet" noBorder width={15} /> Not sure yet
                </Box>
              </Box>
            )
          }
          {
            step === 6 && (
              <Box flexDirection="column" alignItem="flex-start" style={{padding: "50px 10%"}}>
                <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
                  <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 5}}>How did you hear about us?</Typography>
                  <Box flexDirection="column" alignItem="flex-start" style={{width: '100%', margin: '30px 0'}}>
                    <Box>
                      <Input type="radio" name="hear" noBorder width={15} /> 1
                    </Box>
                    <Box>
                      <Input type="radio" name="hear" noBorder width={15} /> 2'4
                    </Box>
                    <Box>
                      <Input type="radio" name="hear" noBorder width={15} /> 5
                    </Box>
                  </Box>
                </Box>
                <Box flexDirection="column" alignItem="flex-start" style={{width: '100%'}}>
                  <Typography color="#111927" fontWeight={600} fontSize="18px" style={{marginBottom: 5}}>How long do you need the talent</Typography>
                  <Box flexDirection="column" alignItem="flex-start" style={{width: '100%', margin: '30px 0'}}>
                    <Box>
                      <Input type="radio" name="hear2" noBorder width={15} /> Less than 1 month
                    </Box>
                    <Box>
                      <Input type="radio" name="hear2" noBorder width={15} /> 1 - 6 months
                    </Box>
                    <Box>
                      <Input type="radio" name="hear2" noBorder width={15} /> 6 - 12 months
                    </Box>
                    <Box>
                      <Input type="radio" name="hear2" noBorder width={15} /> 12+ months
                    </Box>
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
