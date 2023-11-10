import styled from "styled-components";
import React, {useEffect, useRef, useState} from "react";
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
import {B} from "msw/lib/glossary-de6278a9";
import FileUpload from "@/components/file-upload";
import UploadVideo from "@/components/c/project-flow/upload-video";
import VideoPlayer from "@/components/video-player";
import AddAdmin from "@/components/c/project-flow/add-Admin";
import AddRole from "@/components/c/project-flow/add-role";
import Explanation from "@/components/explanation";
import UnsavedChange from "@/components/c/project-flow/unsaved-change";

const ProjectSetupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

const ProjectSetupLeft = styled(Box)`
  width: 384px;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  //padding: 20px;
  background-color: white;
  margin-right: 30px;
  overflow: hidden;
`

const ProjectSetupRight = styled(Box)`
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

const Row = styled.div`
  display: flex;
  align-items: center;
`

export default function ProjectSetup() {
  const [photo, setPhoto] = useState('');
  const [photoOpen, setPhotoOpen] = useState(false);
  const [cover, setCover] = useState('');
  const [coverOpen, setCoverOpen] = useState(false);
  const [uploadVideoOpen, setUploadVideoOpen] = useState(false);
  const [uploadVideo, setUploadVideo] = useState("");
  const [addAdminOpen, setAddAdminOpen] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [addRoleOpen, setAddRoleOpen] = useState(false);
  const [roles, setRoles] = useState([]);
  const [unsavedChangeOpen, setUnsavedChangeOpen] = useState(false);

  const avatarRef = useRef();
  const coverRef = useRef();
  const editCoverRef = useRef();

  const router = useRouter()

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
    <ProjectSetupContainer>
      <Header onlyLogo />
      <Box justifyContent="flex-start" alignItem="flex-start" style={{minHeight: 'calc(100vh - 160px)', padding: "30px 100px"}}>
        <ProjectSetupLeft flexDirection="column" alignItem="flex-start">
          <Box fullWidth style={{backgroundColor: "#1A2121", padding: "16px 24px"}}>
            <Image src="/icons/monry.png" alt="User" width={56} height={56} />
            <Box vertical style={{marginLeft: 12}}>
              <Typography color="white" fontSize={20} fontWeight={600}>Cost Estimator</Typography>
              <Typography color="rgba(255, 255, 255, 0.6)" fontSize={14}>Lorem ipsum dolor sit amet consectetur.</Typography>
            </Box>
          </Box>
          <Box vertical fullWidth style={{padding: "0 20px 20px 20px"}}>
            <Box fullWidth justifyContent="space-between" style={{padding: "15px 0", borderBottom: "1px solid #F3F4F6", marginBottom: 20}}>
              <Typography color="#525252" fontSize={14} fontWeight={500}>Roles</Typography>
              <Typography color="#525252" fontSize={14} fontWeight={500}>Hours a week</Typography>
              <Typography color="#525252" fontSize={14} fontWeight={500}>Hourly rate</Typography>
            </Box>
            <Box vertical fullWidth style={{margin: "0 0 20px"}}>
              <Box fullWidth justifyContent="space-between" style={{marginBottom: 15}}>
                <Typography color="#111927" fontWeight={500} style={{width: 150}}>Product Manager</Typography>
                <Input value="40" width={28} style={{textAlign: "center", color: "#6C737F"}} />
                <Input value="$90" width={35} style={{textAlign: "center", color: "#6C737F"}} />
              </Box>
              <Box fullWidth justifyContent="space-between" style={{marginBottom: 15}}>
                <Typography color="#111927" fontWeight={500} style={{width: 150}}>UX/UI Designer</Typography>
                <Input value="20" width={28} style={{textAlign: "center", color: "#6C737F"}} />
                <Input value="$100" width={42} style={{textAlign: "center", color: "#6C737F"}} />
              </Box>
              <Box fullWidth justifyContent="space-between" style={{marginBottom: 15}}>
                <Typography color="#111927" fontWeight={500} style={{width: 150}}>Full-Stack Developer</Typography>
                <Input value="30" width={28} style={{textAlign: "center", color: "#6C737F"}} />
                <Input value="$120" width={42} style={{textAlign: "center", color: "#6C737F"}} />
              </Box>
              <Box fullWidth justifyContent="space-between" style={{marginBottom: 15}}>
                <Typography color="#111927" fontWeight={500} style={{width: 150}}>Full-Stack Developer</Typography>
                <Input value="30" width={28} style={{textAlign: "center", color: "#6C737F"}} />
                <Input value="$120" width={42} style={{textAlign: "center", color: "#6C737F"}} />
              </Box>
            </Box>
            <Box vertical fullWidth>
              <Box fullWidth justifyContent="space-between" style={{backgroundColor: "#F3F4F6", borderRadius: 8, padding: "16px 24px", marginBottom: 15}}>
                <Box>
                  <Typography color="#111927" fontWeight={500}>Service fee</Typography>
                  <Image src="/icons/info-circle.png" alt="Info" width={24} height={24} style={{marginLeft: 15}} />
                </Box>
                <Typography color="#525252">NNN%</Typography>
              </Box>
              <Box fullWidth justifyContent="space-between" style={{backgroundColor: "#F3F4F6", borderRadius: 8, padding: "16px 24px"}}>
                <Typography color="#111927" fontWeight={500}>Team average weekly rate</Typography>
                <Typography color="#525252">$0</Typography>
              </Box>
            </Box>
          </Box>
        </ProjectSetupLeft>
        <ProjectSetupRight>
          <>
            <Accordion
              title="Project Header"
              desc="Upload a header image here. We recommend JPEG or PNG files that are 1128x191 in size."
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
              title="Project Scope"
              desc="Tell us about your mission."
              renderBody={() => (
                <Box flexDirection="column" alignItem="flex-start" fullWidth>
                  <Box vertical style={{marginBottom: 20}} fullWidth>
                    <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Project title</Typography>
                    <Input fullWidth />
                  </Box>
                  <Box vertical style={{marginBottom: 20}} fullWidth>
                    <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Project description</Typography>
                    <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>Include details about your project and what you’re looking to build. Be clear about your mission and the big picture problems that you are looking to solve.</Typography>
                    <Textarea fullWidth style={{width: "100%"}} />
                  </Box>
                  <Box vertical style={{marginBottom: 20}} fullWidth>
                    <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Key deliverables</Typography>
                    <Typography color="#4D5761" fontSize="14px" style={{marginBottom: 10}}>Identify any specific milestones and deadlines that you’re looking to achieve.</Typography>
                    <Textarea fullWidth style={{width: "100%"}} />
                  </Box>
                  <Box fullWidth style={{borderBottom: "1px solid #E5E7EB", margin: "20px 0"}}></Box>
                  <Box fullWidth justifyContent="space-between">
                    <Box vertical>
                      <Typography color="#384250" fontWeight={500}>Project video (optional)</Typography>
                      <Typography color="#4D5761" fontSize={14}>Create a short video intro so talent can get to know you better.</Typography>
                    </Box>
                    {
                      uploadVideo ? <IconButton width={20} height={20} icon="/icons/close.png" color="white" fontColor="#B42318" onClick={() => setUploadVideo("")}>Delete</IconButton> :
                        <Button color="#4B48EC" fontColor="white" onClick={() => setUploadVideoOpen(true)}>Upload video</Button>
                    }
                  </Box>
                  {
                    uploadVideo && (
                      <Box style={{marginTop: 40}}>
                        <VideoPlayer url={uploadVideo} width="100%" height="auto" />
                      </Box>
                    )
                  }
                </Box>
              )}
            />
            <Accordion
              title="Admin Details"
              desc="Update details about your internal team."
              renderBody={() => (
                <Box flexDirection="column" alignItem="flex-start" fullWidth>
                  <Box fullWidth justifyContent="space-between">
                    <Box vertical>
                      <Typography color="#384250" fontWeight={500}>Project admin</Typography>
                      <Typography color="#4D5761" fontSize={14}>Invite internal collaborators to view and interact with your project.</Typography>
                    </Box>
                    <IconButton icon="/icons/plus-white.png" color="#4B48EC" fontColor="white" width={20} height={20} onClick={() => setAddAdminOpen(true)}>Add admins</IconButton>
                  </Box>
                  {
                    (!admins || admins.length === 0) ? (
                      <Box fullWidth justifyContent="center" style={{padding: 16, borderRadius: 8, backgroundColor: "#F3F4F6", marginTop: 25}}>
                        <Typography color="#384250" fontSize={14}>You haven’t added any admin yet. </Typography>
                        <Typography color="#1B18E4" fontSize={14} fontWeight={600} style={{marginLeft: 10}}>Add admin(s)</Typography>
                      </Box>
                    ) : (
                      <Box fullWidth vertical style={{border: "1px solid #E5E7EB", borderRadius: 12, overflow: "hidden", marginTop: 25}}>
                        <Box fullWidth style={{backgroundColor: "#F9FAFB", padding: "12px 24px"}}>
                          <Typography color="#4D5761" fontSize={12} fontWeight={500}>Invited</Typography>
                        </Box>
                        {
                          admins.map(admin => (
                            <Box key={admin.email} fullWidth justifyContent="space-between" style={{padding: "16px 24px", borderTop: "1px solid #E5E7EB"}}>
                              <Typography color="#1F2A37">{admin.email}</Typography>
                              <IconButton icon="/icons/close.png" width={18} height={18} />
                            </Box>
                          ))
                        }
                      </Box>
                    )
                  }
                  <Box fullWidth style={{borderBottom: "1px solid #E5E7EB", margin: "40px 0"}}></Box>
                  <Box fullWidth justifyContent="space-between">
                    <Box vertical>
                      <Typography color="#384250" fontWeight={500}>Your working hours</Typography>
                      <Typography color="#4D5761" fontSize={14}>Let us know your primary business hours. You can select the number of hours you want each Squad member to overlap with you in Squad Details.</Typography>
                    </Box>
                  </Box>
                  <Box fullWidth style={{marginTop: 25, gap: 15}}>
                    <Box style={{flex: 1}} vertical>
                      <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>From</Typography>
                      <Dropdown
                        fullWidth
                        placeholder="Select"
                        options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]} />
                    </Box>
                    <Box style={{flex: 1}} vertical>
                      <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>To</Typography>
                      <Dropdown
                        fullWidth
                        placeholder="Select"
                        options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]} />
                    </Box>
                    <Box style={{flex: 1}} vertical>
                      <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>Time Zone</Typography>
                      <Dropdown
                        fullWidth
                        placeholder="Select"
                        options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]} />
                    </Box>
                  </Box>
                </Box>
              )}
            />
            <Accordion
              title="Squad Details"
              desc="Here you can add or remove squad roles at any time."
              renderBody={() => (
                <Box flexDirection="column" alignItem="flex-start" fullWidth>
                  <Box fullWidth justifyContent="space-between">
                    <Typography color="#111927" fontSize={18} fontWeight={600}>Squad Roles</Typography>
                    <IconButton icon="/icons/plus-white.png" color="#4B48EC" fontColor="white" width={20} height={20} onClick={() => setAddRoleOpen(true)}>Add role</IconButton>
                  </Box>
                  {
                    (!roles || roles.length === 0) ? (
                      <Box flexDirection="column" fullWidth justifyContent="center" alignItem="center" style={{backgroundColor: "#F3F4F6", padding: 24, borderRadius: 8, marginTop: 20}}>
                        <Image src="/icons/user-1.png" alt="User" width={56} height={56} />
                        <Typography color="#384250" style={{margin: "10px 0 20px"}}>You haven’t added any roles yet</Typography>
                        <IconButton icon="/icons/plus-white.png" color="#4B48EC" fontColor="white" width={20} height={20} onClick={() => setAddRoleOpen(true)}>Add roles</IconButton>
                      </Box>
                    ) : (
                      <Box fullWidth vertical style={{marginTop: 20}}>
                        {
                          roles.map((role, index) => <RoleCard key={role} handleEdit={() => setAddRoleOpen(true)} handleDelete={() => setRoles(roles.filter(r => r !== role))} />)
                        }
                      </Box>
                    )
                  }
                </Box>
              )}
            />
            <Accordion
              title="Additional Info (optional)"
              desc="Upload any additional information that your Squad should know about the mission here. "
              renderBody={() => (
                <Box flexDirection="column" alignItem="flex-start" fullWidth>
                  <Typography color="#384250" fontWeight={500} style={{marginBottom: 20}}>Other documents</Typography>
                  <FileUpload />
                </Box>
              )}
            />
          </>
        </ProjectSetupRight>
      </Box>
      <Box justifyContent="space-between" style={{padding: "20px 50px", backgroundColor: "white"}}>
        <Button color="white" fontColor="#384250" width="114px" height="40px" onClick={() => {}}>Cancel</Button>
        <Box>
          <Button color="white" fontColor="#1B18E4" height="40px" style={{marginRight: 50}}>Save to drafts</Button>
          <Button color="#4B48EC" fontColor="white" width="114px" height="40px" onClick={() => router.push('/c/project-preview')}>Preview</Button>
        </Box>
      </Box>
      <SelectProfilePhoto open={photoOpen} setOpen={setPhotoOpen} photo={photo} handleSubmit={url => setPhoto(url)} />
      <SelectProfileCover open={coverOpen} setOpen={setCoverOpen} photo={cover} handleSubmit={url => setCover(url)} />
      <UploadVideo open={uploadVideoOpen} setOpen={setUploadVideoOpen} handleSubmit={() => {
        setUploadVideoOpen(false);
        setUploadVideo("/videos/video.mp4");
      }}  />
      <AddAdmin open={addAdminOpen} setOpen={setAddAdminOpen} handleSubmit={() => {
        setAddAdminOpen(false);
        setAdmins([
          { name: 'john', email: 'john@stir.com' },
          { name: 'khloe', email: 'khloe@stir.com' },
          { name: 'chris', email: 'chris@stir.com' },
        ])
      }} />
      <AddRole
        open={addRoleOpen}
        setOpen={setAddRoleOpen}
        handleSubmit={() => {
          setAddRoleOpen(false);
          setRoles(['1', '2', '3', '4'])
        }}
        handleCancel={() => {
          setUnsavedChangeOpen(true);
        }}
      />
      <UnsavedChange open={unsavedChangeOpen} setOpen={setUnsavedChangeOpen} handleSubmit={() => {
        setAddRoleOpen(false);
        setUnsavedChangeOpen(false)
      }} />
    </ProjectSetupContainer>
  );
}

function RoleCard({openMore = false, handleEdit, handleDelete}) {
  const [more, setMore] = useState(false);

  useEffect(() => {
    setMore(openMore)
  }, [openMore])

  return (
    <Card style={{width: "100%", marginBottom: 20}}>
      <div style={{padding: "16px 24px"}}>
        <Row style={{justifyContent: "space-between", width: "100%"}}>
          <Row>
            <Image src="/icons/ellipse.png" width={50} height={50} alt="Google" style={{marginRight: 10}} />
            <Typography fontSize="20px" color="#111927" fontWeight={500}>Product Manager</Typography>
          </Row>
          <Row>
            <Popover
              top={42}
              align="right"
              renderContent={() => (
                <Box vertical style={{boxShadow: "0 4px 6px #10182814", borderRadius: 8}}>
                  <IconButton
                    icon="/icons/settings.png"
                    width={16}
                    height={16}
                    style={{width: 200, padding: "12px 16px", justifyContent: "flex-start"}}
                    onClick={handleEdit}>
                    Edit Role
                  </IconButton>
                  <IconButton
                    icon="/icons/delete.png"
                    width={16}
                    height={16}
                    style={{width: 200, padding: "12px 16px", justifyContent: "flex-start"}}
                    onClick={handleDelete}>
                    Delete Role
                  </IconButton>
                </Box>
              )}>
              <IconButton icon="/icons/dots-vertical.png" width={20} height={20} style={{border: "1px solid #D2D6DB"}} />
            </Popover>
          </Row>
        </Row>
        <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
          <Typography color="#475467" fontSize="14px">Growth PM to work cross-functionally to improve app experience. The role will focus on tasks like building improved onboarding funnels, optimising conversions, A/B testing data, etc.</Typography>
        </Row>
        <Row style={{borderBottom: "1px solid #E5E7EB", padding: "24px 0"}}>
          <Row style={{marginRight: 15}}>
            <Image src="/icons/money.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
            <Typography>$30-$50 /h</Typography>
          </Row>
          <Row style={{marginRight: 15}}>
            <Image src="/icons/clock.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
            <Typography>20-25h /week</Typography>
          </Row>
          <Row style={{marginRight: 15}}>
            <Image src="/icons/marker-pin-01.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
            <Typography>Amsterdam, NL</Typography>
          </Row>
          <Row>
            <Image src="/icons/calendar.png" width={17} height={17} alt="Money" style={{marginRight: 3}} />
            <Typography>13 AUG</Typography>
          </Row>
        </Row>
        {
          more && (
            <>
              <Typography fontWeight={500} fontSize="14px" style={{margin: "20px 0"}}>Required skills</Typography>
              <Row style={{gap: 20, marginBottom: 20}}>
                <Label borderColor="#027A48" fontColor="#027A48">Product Analytics</Label>
                <Label borderColor="#027A48" fontColor="#027A48">Roadmapping</Label>
                <Label borderColor="#027A48" fontColor="#027A48">Team Leadership</Label>
              </Row>
              <Typography fontWeight={500} fontSize="14px" style={{margin: "20px 0"}}>Recommended skills</Typography>
              <Row style={{gap: 20, marginBottom: 20}}>
                <Label>Agile</Label>
              </Row>
              <Typography fontWeight={500} fontSize="14px" style={{margin: "20px 0"}}>Tools</Typography>
              <Row style={{gap: 20, marginBottom: 20}}>
                <Label icon="/icons/jira.png">Jira</Label>
                <Label icon="/icons/figma.png">Figma</Label>
                <Label icon="/icons/miro.png">Miro</Label>
              </Row>
            </>
          )
        }
        <Row style={{marginTop: 15}} onClick={() => setMore(!more)}>
          <Typography fontWeight={500} color="#4D5761">{more ? "See less" : "See more"}</Typography>
          <Image src={more ? "/icons/up-arrow.png" : "/icons/down-arrow.png"} width={12} height={6} alt={more ? "Up-Arrow": "Down-Arrow"} style={{marginLeft: 15}} />
        </Row>
      </div>
    </Card>
  )
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
