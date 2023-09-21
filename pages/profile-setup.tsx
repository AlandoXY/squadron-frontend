import styled from "styled-components";
import React, {useState} from "react";
import Box from "@/components/box";
import Header from "@/components/header";
import Image from "next/image";
import Typography from "@/components/typography";
import ProgressBar from "@/components/progress-bar";
import NavbarItem from "@/components/navbar-item";
import IconButton from "@/components/icon-button";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import {useRouter} from "next/navigation";
import Textarea from "@/components/textarea";
import Dropdown from "@/components/dropdown";
import Input from "@/components/input";
import Label from "@/components/label";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const ProfileLeft = styled(Box)`
  width: 384px;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 20px;
  background-color: white;
  margin-right: 30px;
`

const ProfileRight = styled(Box)`
  flex: 1;
  flex-direction: column;
`

const RightItem = styled(Box)`
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 30px 20px;
  background-color: white;
  margin-bottom: 20px;
`

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');

  const router = useRouter()

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      router.push('/profile-success');
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
      if (step <= 1) {
        setStep(1)
      }
    }
  }

  return (
    <ProfileContainer>
      <Header onlyLogo />
      <Box justifyContent="flex-start" alignItem="flex-start" style={{minHeight: 'calc(100vh - 160px)', padding: "30px 100px"}}>
        <ProfileLeft flexDirection="column" alignItem="flex-start">
          <Image src="/icons/user.png" alt="User" width={56} height={56} />
          <Typography color="#101828" fontSize="18px" fontWeight={600} style={{margin: "20px 0 30px"}}>Your profile is 0% complete</Typography>
          <ProgressBar value={20} color="#A0D909" height={8} bgColor="#E5E7EB" />
          <Box style={{borderTop: "1px solid #E5E7EB", margin: "20px 0"}} fullWidth />
          <Navbar>
            <NavbarItem>
              <Box justifyContent="space-between" style={{padding: "8px 0"}}>
                <Typography color="#101828" fontSize="14px" fontWeight={500}>About You</Typography>
                <Typography color="#101828" fontSize="14px" fontWeight={500}>0 %</Typography>
              </Box>
            </NavbarItem>
            <NavbarItem>
              <Box justifyContent="space-between" style={{padding: "8px 0"}}>
                <Typography color="#101828" fontSize="14px" fontWeight={500}>Skills</Typography>
                <Typography color="#101828" fontSize="14px" fontWeight={500}>0 %</Typography>
              </Box>
            </NavbarItem>
            <NavbarItem>
              <Box justifyContent="space-between" style={{padding: "8px 0"}}>
                <Typography color="#101828" fontSize="14px" fontWeight={500}>Experience</Typography>
                <Typography color="#101828" fontSize="14px" fontWeight={500}>0 %</Typography>
              </Box>
            </NavbarItem>
            <NavbarItem>
              <Box justifyContent="space-between" style={{padding: "8px 0"}}>
                <Typography color="#101828" fontSize="14px" fontWeight={500}>Projects</Typography>
                <Typography color="#101828" fontSize="14px" fontWeight={500}>0 %</Typography>
              </Box>
            </NavbarItem>
            <NavbarItem>
              <Box justifyContent="space-between" style={{padding: "8px 0"}}>
                <Typography color="#101828" fontSize="14px" fontWeight={500}>Finer Details</Typography>
                <Typography color="#101828" fontSize="14px" fontWeight={500}>0 %</Typography>
              </Box>
            </NavbarItem>
          </Navbar>
        </ProfileLeft>
        <ProfileRight>
          {
            step === 1 && (
              <>
                <Accordion
                  title="Profile picture & header"
                  desc="Update your photo and personal details here."
                  renderBody={() => (
                    <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{backgroundColor: 'black', padding: "30px 20px", borderRadius: 8}}>
                      <Box style={{borderRadius: "50%", border: "5px solid rgba(208, 252, 74, 0.3)"}}>
                        <Box flexDirection="column" justifyContent="center" style={{width: 116, height: 116, backgroundColor: "#F3F4F6", borderRadius: "50%"}}>
                          <Image src="/icons/upload-cloud.png" alt="Upload" width={24} height={24} />
                          <Typography color="#384250" fontWeight={600} fontSize="14px">Upload</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <IconButton width={20} height={20} icon="/icons/edit.png" color="#D0FC4A" fontColor="#384250">Edit Cover</IconButton>
                      </Box>
                    </Box>
                  )}
                />
                <Accordion
                  title="Bio"
                  desc="Write a short introduction."
                  renderBody={() => (
                    <Box flexDirection="column" alignItem="flex-start" fullWidth>
                      <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>My biography</Typography>
                      <Textarea width="100%" onChange={(e) => setText(e.target.value)} resize={false}></Textarea>
                    </Box>
                  )}
                />
                <Accordion
                  title="Personal Questions"
                  desc="Update your photo and personal details here."
                  renderBody={() => (
                    <Box flexDirection="column" alignItem="flex-start" fullWidth>
                      <Box style={{marginBottom: 20}} fullWidth>
                        <Dropdown placeholder="Question 01" fullWidth options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]} />
                      </Box>
                      <Textarea width="100%" onChange={(e) => setText(e.target.value)} resize={false}></Textarea>
                      <Box style={{margin: "20px 0"}} fullWidth>
                        <Dropdown placeholder="Question 02" fullWidth options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]} />
                      </Box>
                      <Textarea width="100%" onChange={(e) => setText(e.target.value)} resize={false}></Textarea>
                      <Box style={{margin: "20px 0"}} fullWidth>
                        <Dropdown placeholder="Question 03" fullWidth options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]} />
                      </Box>
                      <Textarea width="100%" onChange={(e) => setText(e.target.value)} resize={false}></Textarea>
                    </Box>
                  )}
                />
                <Accordion
                  title="Social Skills"
                  desc="Blablablabal"
                  renderBody={() => (
                    <Box flexDirection="column" alignItem="flex-start" fullWidth>
                      <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>My biography</Typography>
                      <Input prefixIcon="/icons/link.png" suffixIcon="/icons/check.png" width={350} />
                      <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>Personal website</Typography>
                      <Input prefixIcon="/icons/link.png" width={350} />
                      <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>GitHub (optional)</Typography>
                      <Input prefixIcon="/icons/link.png" width={350} />
                      <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>Dribbble (optional)</Typography>
                      <Input prefixIcon="/icons/link.png" width={350} />
                      <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>Behance</Typography>
                      <Input prefixIcon="/icons/link.png" width={350} />
                      <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>StackOverflow</Typography>
                      <Input prefixIcon="/icons/link.png" width={350} />
                      <Typography color="#384250" fontWeight={500} fontSize="14px" style={{margin: "20px 0 10px"}}>Twitter</Typography>
                      <Input prefixIcon="/icons/link.png" width={350} />
                    </Box>
                  )}
                />
              </>
            )
          }
          {
            step === 2 && (
              <>
                <Accordion
                  title="Project scope"
                  desc="Update your photo and personal details here."
                  renderBody={() => (
                    <Box flexDirection="column" alignItem="flex-start" fullWidth>
                      <Box flexDirection="column" alignItem="flex-start">
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>My skills</Typography>
                        <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>Write a short introduction about your project</Typography>
                      </Box>
                      <Box fullWidth style={{flexWrap: "wrap", border: "1px solid #D2D6DB", borderRadius: 8, padding: 12, gap: "10px 20px"}}>
                        <Label icon="/icons/star.png">Skill name</Label>
                        <Label icon="/icons/star.png">Skill name</Label>
                        <Label icon="/icons/star.png">Skill name</Label>
                        <Label icon="/icons/star.png">Skill name</Label>
                        <Label icon="/icons/star.png">Skill name</Label>
                        <Label icon="/icons/star.png">Skill name</Label>
                        <Label icon="/icons/star.png">Skill name</Label>
                        <Label icon="/icons/star.png">Skill name</Label>
                        <Label icon="/icons/star.png">Skill name</Label>
                        <Label icon="/icons/star.png">Skill name</Label>
                      </Box>
                      <Box fullWidth flexDirection="column" alignItem="flex-start" style={{margin: "30px 0 10px"}}>
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Superskills</Typography>
                        <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>Select your 3 best skills from the list above clicking on their stars</Typography>
                        <Input fullWidth />
                      </Box>
                      <Box fullWidth flexDirection="column" alignItem="flex-start" style={{margin: "30px 0 10px"}}>
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Tools</Typography>
                        <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>blablabla</Typography>
                        <Input fullWidth />
                      </Box>
                      <Box fullWidth flexDirection="column" alignItem="flex-start" style={{margin: "30px 0 10px"}}>
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Languages</Typography>
                        <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>blablabla</Typography>
                        <Box fullWidth style={{gap: 10}}>
                          <Dropdown
                            placeholder="Select language"
                            options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
                            prevIcon="/icons/role.png"
                            inputWidth="40px"
                            fullWidth />
                          <Dropdown
                            placeholder="Select your level"
                            options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
                            inputWidth="40px"
                            fullWidth />
                        </Box>
                      </Box>
                    </Box>
                  )}
                />
              </>
            )
          }
          {
            step === 3 && (
              <>
                <Accordion
                  title="Experience"
                  desc="Blablablabal"
                  renderBody={() => (
                    <Box flexDirection="column" alignItem="flex-start" fullWidth>
                      <Box fullWidth justifyContent="flex-end">
                        <Button color="#4B48EC" fontColor="white">Add experience</Button>
                      </Box>
                      <Box fullWidth style={{margin: "30px 0", borderTop: "1px solid #E5E7EB"}} />
                      <Box flexDirection="column" justifyContent="center" fullWidth style={{backgroundColor: "#F9FAFB", padding: 50, borderRadius: 8}}>
                        <Image src="/icons/resume.png" alt="Resume" width={56} height={56} />
                        <Box style={{marginTop: 15}}>
                          <Typography color="#4B48EC" fontSize="14px" fontWeight={500} style={{marginRight: 5}}>Add</Typography>
                          <Typography color="#6C737F" fontSize="14px">your first experience</Typography>
                        </Box>
                      </Box>
                    </Box>
                  )}
                />
              </>
            )
          }
          {
            step === 4 && (
              <>
                <Accordion
                  title="Projects"
                  desc="Blablablabal"
                  renderBody={() => (
                    <Box flexDirection="column" alignItem="flex-start" fullWidth>
                      <Box fullWidth justifyContent="flex-end">
                        <Button color="#4B48EC" fontColor="white">Add project</Button>
                      </Box>
                      <Box fullWidth style={{margin: "30px 0", borderTop: "1px solid #E5E7EB"}} />
                      <Box flexDirection="column" justifyContent="center" fullWidth style={{backgroundColor: "#F9FAFB", padding: 50, borderRadius: 8}}>
                        <Image src="/icons/portfolio.png" alt="Resume" width={56} height={56} />
                        <Box style={{marginTop: 15}}>
                          <Typography color="#4B48EC" fontSize="14px" fontWeight={500} style={{marginRight: 5}}>Add</Typography>
                          <Typography color="#6C737F" fontSize="14px">your first projects</Typography>
                        </Box>
                      </Box>
                    </Box>
                  )}
                />
              </>
            )
          }
          {
            step === 5 && (
              <>
                <Accordion
                  title="Finner details"
                  desc="This information will be used to help us recommend projects but won’t be shown on your profile. You can edit this at the time of applying for a mission."
                  renderBody={() => (
                    <Box flexDirection="column" alignItem="flex-start" fullWidth>
                      <Box fullWidth flexDirection="column" alignItem="flex-start" style={{margin: "30px 0 10px"}}>
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Hourly rate</Typography>
                        <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 20}}>Write a short introduction about your project</Typography>
                        <Dropdown placeholder="Select your hourly rate" options={[{ label: "fill", value: "fill" }, { label: "fill", value: "fill" }, { label: "fill", value: "fill" }]} />
                      </Box>
                      <Box fullWidth flexDirection="column" alignItem="flex-start" style={{margin: "30px 0 10px"}}>
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Availability</Typography>
                        <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 20}}>Write a short introduction.</Typography>
                        <Box fullWidth style={{gap: 10, margin: "10px 0 10px"}}>
                          <Dropdown fullWidth placeholder="Select your availability" options={[{ label: "fill", value: "fill" }, { label: "fill", value: "fill" }, { label: "fill", value: "fill" }]} />
                          <Dropdown fullWidth placeholder="Select hours a week" options={[{ label: "fill", value: "fill" }, { label: "fill", value: "fill" }, { label: "fill", value: "fill" }]} />
                        </Box>
                      </Box>
                      <Box fullWidth flexDirection="column" alignItem="flex-start" style={{margin: "30px 0 10px"}}>
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Working hours</Typography>
                        <Box fullWidth style={{gap: 10, margin: "10px 0 10px"}}>
                          <Dropdown fullWidth placeholder="From" options={[{ label: "fill", value: "fill" }, { label: "fill", value: "fill" }, { label: "fill", value: "fill" }]} />
                          <Dropdown fullWidth placeholder="To" options={[{ label: "fill", value: "fill" }, { label: "fill", value: "fill" }, { label: "fill", value: "fill" }]} />
                        </Box>
                      </Box>
                      <Box fullWidth flexDirection="column" alignItem="flex-start" style={{margin: "30px 0 10px"}}>
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Additional notes (optional)</Typography>
                        <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>Write a short introduction.</Typography>
                        <Box fullWidth style={{gap: 10, margin: "10px 0 10px"}}>
                          <Textarea width="100%" onChange={(e) => setText1(e.target.value)} resize={false}></Textarea>
                        </Box>
                      </Box>
                    </Box>
                  )}
                />
              </>
            )
          }
        </ProfileRight>
      </Box>
      <Box justifyContent="space-between" style={{padding: "20px 50px", backgroundColor: "white"}}>
        <Button color="white" fontColor="#384250" width="114px" height="40px" onClick={() => {}}>Cancel</Button>
        <Box>
          <Button color="white" fontColor="#384250" width="114px" height="40px" style={{border: "1px solid #D2D6DB", marginRight: 50}} onClick={() => prevStep()}>Back</Button>
          <Button color="#4B48EC" fontColor="white" width="114px" height="40px" onClick={() => nextStep()}>Next</Button>
        </Box>
      </Box>
    </ProfileContainer>
  );
}

function Accordion({title, desc, renderBody = () => {}}) {
  const [show, setShow] = useState(true);

  return (
    <>
      <RightItem flexDirection="column" fullWidth>
        <Box justifyContent="space-between" fullWidth>
          <Box flexDirection="column" alignItem="flex-start">
            <Typography color="#111927" fontSize="24px" fontWeight={600}>{title}</Typography>
            <Typography color="#4D5761" fontSize="14px">{desc}</Typography>
          </Box>
          <Box style={{alignSelf: "flex-start"}}>
            <Image src={show ? "/icons/minus.png" : "/icons/plus.png"} alt="Plus" width={24} height={24} style={{marginRight: 20}} onClick={() => setShow(!show)} />
            <Image src="/icons/checkbox.png" alt="Checkbox" width={24} height={24} />
          </Box>
        </Box>
        {
          show && (
            <Box fullWidth style={{borderTop: "1px solid #E5E7EB", marginTop: 20, paddingTop: 20}}>
              {renderBody()}
            </Box>
          )
        }
      </RightItem>
    </>
  )
}
