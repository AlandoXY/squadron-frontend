import styled from "styled-components";
import React, {useRef, useState} from "react";
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
import SelectProfilePhoto from "@/components/profile-setup/select-profile-photo";
import Popover from "@/components/popover";
import SelectProfileCover from "@/components/profile-setup/select-profile-cover";
import AddOrEditExperience from "@/components/profile-edit/add-or-edit-experience";
import EditProject from "@/components/profile-edit/edit-project";
import Delete from "@/components/profile-edit/delete";

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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #F9FAFB;
  box-shadow: 0 1px 2px 0 #1018280F;
  width: 400px;
  border-radius: 12px;
  background-color: white;
  margin-bottom: 50px;
`

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoOpen, setPhotoOpen] = useState(false);
  const [cover, setCover] = useState('');
  const [coverOpen, setCoverOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [skills, setSkills] = useState([1,2,3,4,5,6,7,8,9,10])
  const [superSkills, setSuperSkills] = useState([1,2,3])
  const [tools, setTools] = useState([1,2,3,4,5])
  const [languages, setLanguages] = useState([1])

  const avatarRef = useRef();
  const coverRef = useRef();
  const editCoverRef = useRef();

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
    }
  }

  const handleSelectAvatar = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setPhoto(reader.result);
      setPhotoOpen(true)
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  const handleSelectCover = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setCover(reader.result);
      setCoverOpen(true)
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
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
                    <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{backgroundColor: 'black', padding: "30px 20px", borderRadius: 8, backgroundImage: cover ? 'url("' + cover +'")' :'none', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                      <Box style={{borderRadius: "50%", border: "5px solid rgba(208, 252, 74, 0.3)"}}>
                        {
                          photo ? (
                            <Image src={photo} alt="Photo" width={116} height={116} style={{borderRadius: "50%"}} />
                          ) : (
                            <Box onClick={() => avatarRef.current.click()} flexDirection="column" justifyContent="center" style={{width: 116, height: 116, backgroundColor: "#F3F4F6", borderRadius: "50%"}}>
                              <Image src="/icons/upload-cloud.png" alt="Upload" width={24} height={24} />
                              <Typography color="#384250" fontWeight={600} fontSize="14px">Upload</Typography>
                            </Box>
                          )
                        }
                        <input ref={avatarRef} type="file" style={{display: "none"}} onChange={handleSelectAvatar} />
                        <input ref={coverRef} type="file" style={{display: "none"}} onChange={handleSelectCover} />
                      </Box>
                      <Box>
                        <Popover
                          ref={editCoverRef}
                          top={42}
                          align="right"
                          renderContent={() => (
                            <Box vertical style={{width: 280}}>
                              <Box onClick={() => coverRef.current.click()}>
                                <Image src="/icons/image-03.png" width={20} height={20} style={{marginRight: 10}} />
                                <Typography>Select Squadron covers</Typography>
                              </Box>
                              <Box onClick={() => avatarRef.current.click()} style={{marginTop: 20}}>
                                <Image src="/icons/camera-plus.png" width={20} height={20} style={{marginRight: 10}} />
                                <Typography>Upload photo</Typography>
                              </Box>
                            </Box>
                          )}>
                          <IconButton width={20} height={20} icon="/icons/edit.png" color="#D0FC4A" fontColor="#384250">Edit Cover</IconButton>
                        </Popover>
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
                      <Textarea width="100%" onChange={(e) => setText(e.target.value)} resize={false}>{text}</Textarea>
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
                      <Textarea width="100%" onChange={(e) => setText(e.target.value)} resize={false}>{text}</Textarea>
                      <Box style={{margin: "20px 0"}} fullWidth>
                        <Dropdown placeholder="Question 02" fullWidth options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]} />
                      </Box>
                      <Textarea width="100%" onChange={(e) => setText(e.target.value)} resize={false}>{text}</Textarea>
                      <Box style={{margin: "20px 0"}} fullWidth>
                        <Dropdown placeholder="Question 03" fullWidth options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]} />
                      </Box>
                      <Textarea width="100%" onChange={(e) => setText(e.target.value)} resize={false}>{text}</Textarea>
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
                        {
                          skills.map(skill => <Label key={skill} icon="/icons/star.png">Skill name<IconButton icon="/icons/close-gray.png" width={8} height={8} style={{padding: 0, marginLeft: 5}} onClick={() => setSkills(skills.filter(s => s !== skill))} /></Label>)
                        }
                      </Box>
                      <Box fullWidth flexDirection="column" alignItem="flex-start" style={{margin: "30px 0 10px"}}>
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Superskills</Typography>
                        <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>Select your 3 best skills from the list above clicking on their stars</Typography>
                        <Box fullWidth style={{flexWrap: "wrap", border: "1px solid #D2D6DB", borderRadius: 8, padding: 12, gap: "10px 20px"}}>
                          {
                            superSkills.map(skill => <Label key={skill} icon="/icons/star-fill.png">Skill name<IconButton icon="/icons/close-gray.png" width={8} height={8} style={{padding: 0, marginLeft: 5}} onClick={() => setSuperSkills(superSkills.filter(s => s !== skill))} /></Label>)
                          }
                        </Box>
                      </Box>
                      <Box fullWidth flexDirection="column" alignItem="flex-start" style={{margin: "30px 0 10px"}}>
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Tools</Typography>
                        <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>blablabla</Typography>
                        <Box fullWidth style={{flexWrap: "wrap", border: "1px solid #D2D6DB", borderRadius: 8, padding: 12, gap: "10px 20px"}}>
                          {
                            tools.map(skill => <Label key={skill} icon="/icons/ps.png">Skill name<IconButton icon="/icons/close-gray.png" width={8} height={8} style={{padding: 0, marginLeft: 5}} onClick={() => setTools(tools.filter(s => s !== skill))} /></Label>)
                          }
                        </Box>
                      </Box>
                      <Box fullWidth flexDirection="column" alignItem="flex-start" style={{margin: "30px 0 10px"}}>
                        <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 5}}>Languages</Typography>
                        <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>blablabla</Typography>
                        {
                          languages.map(language => (
                            <Box key={language} fullWidth style={{gap: 10, marginBottom: 15}}>
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
                              <IconButton icon="/icons/delete.png" width={15} height={15} onClick={() => setLanguages(languages.filter(l => l !== language))}/>
                            </Box>
                          ))
                        }
                        <Box>
                          <IconButton icon="/icons/plus-purple.png" width={14} height={14} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} onClick={() => setLanguages([...languages, languages.length + 1])}>Add more</IconButton>
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
                        <Button color="#4B48EC" fontColor="white" onClick={() => setExperienceOpen(true)}>Add experience</Button>
                      </Box>
                      <Box fullWidth style={{margin: "30px 0", borderTop: "1px solid #E5E7EB"}} />
                      {
                        experience.length === 0 ? (
                          <Box flexDirection="column" justifyContent="center" fullWidth style={{backgroundColor: "#F9FAFB", padding: 50, borderRadius: 8}}>
                            <Image src="/icons/resume.png" alt="Resume" width={56} height={56} />
                            <Box style={{marginTop: 15}}>
                              <Typography color="#4B48EC" fontSize="14px" fontWeight={500} style={{marginRight: 5}}>Add</Typography>
                              <Typography color="#6C737F" fontSize="14px">your first experience</Typography>
                            </Box>
                          </Box>
                        ) : (
                          experience.map((e, index) => (
                            <Box key={index} alignItem="flex-start" style={{padding: 20}}>
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
                                <IconButton icon="/icons/close.png" width={16} height={16} style={{padding: 0, marginLeft: 10}} onClick={() => setDeleteOpen(true)} />
                              </Box>
                            </Box>
                          ))
                        )
                      }
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
                        <Button color="#4B48EC" fontColor="white" onClick={() => setProjectOpen(true)}>Add project</Button>
                      </Box>
                      <Box fullWidth style={{margin: "30px 0", borderTop: "1px solid #E5E7EB"}} />
                      {
                        projects.length === 0 ? (
                          <Box flexDirection="column" justifyContent="center" fullWidth style={{backgroundColor: "#F9FAFB", padding: 50, borderRadius: 8}}>
                            <Image src="/icons/portfolio.png" alt="Resume" width={56} height={56} />
                            <Box style={{marginTop: 15}}>
                              <Typography color="#4B48EC" fontSize="14px" fontWeight={500} style={{marginRight: 5}}>Add</Typography>
                              <Typography color="#6C737F" fontSize="14px">your first projects</Typography>
                            </Box>
                          </Box>
                        ) : (
                          projects.map((e, index) => (
                            <Card key={index}>
                              <Box vertical style={{position: 'relative', backgroundColor: 'black', padding: 20, borderRadius: "12px 12px 0 0"}}>
                                <Typography color="white" fontSize="20px" fontWeight={600}>iOS strategy</Typography>
                                <Typography color="white" fontSize="14px" style={{opacity: 0.8, marginTop: 15}}>2022</Typography>
                                <Popover
                                  style={{position: 'absolute', right: 15, top: 0, marginLeft: 10}}
                                  renderContent={() => (
                                    <Box vertical style={{width: 220}}>
                                      <IconButton icon="/icons/edit.png" width={14} height={14} fontSize="14px" fullWidth style={{justifyContent: 'flex-start'}}>Edit project</IconButton>
                                      <IconButton icon="/icons/delete.png" width={14} height={14} fontSize="14px" fullWidth style={{justifyContent: 'flex-start', marginTop: 10}}>Delete</IconButton>
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
                          ))
                        )
                      }
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
                          <Textarea width="100%" onChange={(e) => setText1(e.target.value)} resize={false}>{text1}</Textarea>
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
      <SelectProfilePhoto open={photoOpen} setOpen={setPhotoOpen} photo={photo} handleSubmit={url => setPhoto(url)} />
      <SelectProfileCover open={coverOpen} setOpen={setCoverOpen} photo={cover} handleSubmit={url => setCover(url)} />
      <AddOrEditExperience open={experienceOpen} setOpen={setExperienceOpen} handleSubmit={() => {
        setExperienceOpen(false)
        setExperience([...experience, 1])
      }} />
      <EditProject open={projectOpen} setOpen={setProjectOpen} handleSubmit={() => {
        setProjectOpen(false)
        setProjects([...projects, 1])
      }} />
      <Delete open={deleteOpen} setOpen={setDeleteOpen} />
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
