import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";
import Button from "@/components/button";
import Link from "@/components/link";
import Label from "@/components/label";
import Box from "@/components/box";
import Input from "@/components/input";
import {AsideBar} from "@/components/aside-bar";
import {useSearchParams} from "next/navigation";
import {host} from "@/mocks/handlers";
import Pagination from "@/components/pagination";
import Popover from "@/components/popover";
import HideProject from "@/components/project-view/hide-project";
import ShareProject from "@/components/project-view/share-project";
import {DashboardHeader} from "@/components/dashboard-header";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
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
  margin-bottom: 30px;
`

export default function DashboardSearchProjects() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  const [searchText, setSearchText] = useState(query);
  const [searchTextTemp, setSearchTextTemp] = useState(query);
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [page, setPage] = useState(1);

  const roleRef = useRef();
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedRoleTemp, setSelectedRoleTemp] = useState('');

  const skillRef = useRef();
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedSkillTemp, setSelectedSkillTemp] = useState('');

  const rateRef = useRef();
  const [selectedRateMin, setSelectedRateMin] = useState('');
  const [selectedRateMax, setSelectedRateMax] = useState('');
  const [selectedRateTempMin, setSelectedRateTempMin] = useState('');
  const [selectedRateTempMax, setSelectedRateTempMax] = useState('');

  const locationRef = useRef();
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedLocationTemp, setSelectedLocationTemp] = useState([]);

  const weekRef = useRef();
  const [selectedWeekMin, setSelectedWeekMin] = useState('');
  const [selectedWeekMax, setSelectedWeekMax] = useState('');
  const [selectedWeekTempMin, setSelectedWeekTempMin] = useState('');
  const [selectedWeekTempMax, setSelectedWeekTempMax] = useState('');

  const [hideProjectOpen, setHideProjectOpen] = useState(false)
  const [shareProjectOpen, setShareProjectOpen] = useState(false)

  useEffect(() => {
    fetch(`${host}/projects`)
      .then(res => res.json())
      .then((res) => {
        setProjects(res);
        setFilterProjects(res);
      })
  }, [])

  useEffect(() => {
    if (projects.length > 0) {
      let fp = [...projects]
      if (searchText) {
        fp = fp.filter(project => project.labels.some(label => label.indexOf(searchText) >= 0) || project.company.indexOf(searchText) >=0 || project.description.indexOf(searchText) >=0)
      }

      if (selectedRole) {
        fp = fp.filter(project => project.roles.some(role => role === selectedRole))
      }

      if (selectedSkill) {
        fp = fp.filter(project => project.skills.some(skill => skill === selectedSkill))
      }

      if (selectedRateMin || selectedRateMax) {
        fp = fp.filter(project => project.minRate >= +selectedRateMin && project.maxRate <= +selectedRateMax)
      }

      if (selectedLocation.length > 0) {
        fp = fp.filter(project => project.locations.every(location => selectedLocation.includes(location)))
      }

      setFilterProjects(fp)
    }
  }, [projects, searchText, selectedRole, selectedSkill, selectedRateMin, selectedRateMax])

  return (
    <Container>
      <AsideBar />
      <Content>
        <DashboardHeader />
        <ContentMain>
          <Box vertical fullWidth style={{margin: "30px 0", justifyContent: "space-between"}}>
            <Typography color="#111927" fontSize="24px" fontWeight={500}>Search projects</Typography>
            <Box fullWidth style={{marginTop: 20}}>
              <Input prefixIcon="/icons/search-lg.png" fullWidth value={searchTextTemp} onChange={e => setSearchTextTemp(e.target.value)} />
              <Button color="#4B48EC" fontColor="white" height="45px" style={{marginLeft: 10}} onClick={() => setSearchText(searchTextTemp)}>Search</Button>
            </Box>
            <Box fullWidth style={{marginTop: 20, gap: 15}}>
              <Popover
                ref={roleRef}
                top={42}
                align="left"
                renderContent={() => (
                  <Box vertical>
                    <Box vertical style={{borderBottom: "1px solid #E5E7EB", marginBottom: 20, paddingBottom: 20}}>
                      <Box style={{height: 60, width: 450, backgroundColor: '#F9FAFB', borderRadius: 8}}>
                        {
                          selectedRoleTemp && (
                            <Box style={{border: "1px solid #6C737F", borderRadius: 16, padding: "3px 10px"}}>
                              <Typography fontSize={14} fontWeight={500} color="#4D5761">{selectedRoleTemp}</Typography>
                              <IconButton icon="/icons/close-gray.png" width={6} height={6} onClick={() => setSelectedRoleTemp('')} />
                            </Box>
                          )
                        }
                      </Box>
                    </Box>
                    <Box style={{gap: 20, marginBottom: 20}}>
                      <Typography color="#1A2122" fontWeight={500}>All</Typography>
                      <Typography color="#9DA4AE" fontWeight={500}>Engineering</Typography>
                      <Typography color="#9DA4AE" fontWeight={500}>Design</Typography>
                      <Typography color="#9DA4AE" fontWeight={500}>Product</Typography>
                      <Typography color="#9DA4AE" fontWeight={500}>Other</Typography>
                    </Box>
                    <Box vertical fullWidth>
                      <Input placeholder="Search your role" fullWidth prefixIcon="/icons/search-lg.png" />
                      <Box fullWidth vertical style={{borderRadius: 8, border: "1px solid #E5E7EB", marginTop: 20}}>
                        <Box style={{padding: 10}} onClick={() => setSelectedRoleTemp('Product Manager')}><Typography color="#111927" fontWeight={500}>Product Manager</Typography></Box>
                        <Box style={{padding: 10}} onClick={() => setSelectedRoleTemp('Front End Developer')}><Typography color="#111927" fontWeight={500}>Front End Developer</Typography></Box>
                        <Box style={{padding: 10}} onClick={() => setSelectedRoleTemp('Back End Developer')}><Typography color="#111927" fontWeight={500}>Back End Developer</Typography></Box>
                        <Box style={{padding: 10}} onClick={() => setSelectedRoleTemp('UX Designer')}><Typography color="#111927" fontWeight={500}>UX Designer</Typography></Box>
                      </Box>
                    </Box>
                    <Box justifyContent="space-between" fullWidth style={{borderTop: "1px solid #E5E7EB", marginTop: 20, paddingTop: 20}}>
                      <Button color="white" fontColor="#4D5761" onClick={() => setSelectedRoleTemp('')}>Clear all</Button>
                      <Button color="#4B48EC" fontColor="white" onClick={(e) => {
                        e.stopPropagation()
                        setSelectedRole(selectedRoleTemp)
                        roleRef.current.toggle()
                      }}>Apply</Button>
                    </Box>
                  </Box>
                )}>
                <Input
                  placeholder="Role"
                  prefixIcon="/icons/role.png"
                  suffixIcon="/icons/down-arrow.png"
                  suffixIconHeight={7}
                  suffixIconWidth={10}
                  prefixIconHeight={15}
                  prefixIconWidth={15}
                  width={50}
                  height={18}
                  readOnly
                  value={selectedRole}
                  containerRest={{ style: { backgroundColor: selectedRole ? '#E7FF96' : 'white' } }}
                />
              </Popover>
              <Popover
                ref={skillRef}
                top={42}
                align="left"
                renderContent={() => (
                  <Box vertical>
                    <Box vertical style={{borderBottom: "1px solid #E5E7EB", marginBottom: 20, paddingBottom: 20}}>
                      <Box style={{height: 60, width: 450, backgroundColor: '#F9FAFB', borderRadius: 8}}>
                        {
                          selectedSkillTemp && (
                            <Box style={{border: "1px solid #6C737F", borderRadius: 16, padding: "3px 10px"}}>
                              <Typography fontSize={14} fontWeight={500} color="#4D5761">{selectedSkillTemp}</Typography>
                              <IconButton icon="/icons/close-gray.png" width={6} height={6} onClick={() => setSelectedSkillTemp('')} />
                            </Box>
                          )
                        }
                      </Box>
                    </Box>
                    <Box style={{gap: 20, marginBottom: 20}}>
                      <Typography color="#1A2122" fontWeight={500}>All</Typography>
                      <Typography color="#9DA4AE" fontWeight={500}>Engineering</Typography>
                      <Typography color="#9DA4AE" fontWeight={500}>Design</Typography>
                      <Typography color="#9DA4AE" fontWeight={500}>Product</Typography>
                      <Typography color="#9DA4AE" fontWeight={500}>Other</Typography>
                    </Box>
                    <Box vertical fullWidth>
                      <Input placeholder="Search your role" fullWidth prefixIcon="/icons/search-lg.png" />
                      <Box fullWidth vertical style={{borderRadius: 8, border: "1px solid #E5E7EB", marginTop: 20}}>
                        {
                          ['3D Engineering', 'Ada', 'Adtech', 'Agora', 'React', 'Java'].map(skill => <Box key={skill} style={{padding: 10}} onClick={() => setSelectedSkillTemp(skill)}><Typography color="#111927" fontWeight={500}>{skill}</Typography></Box>)
                        }
                      </Box>
                    </Box>
                    <Box justifyContent="space-between" fullWidth style={{borderTop: "1px solid #E5E7EB", marginTop: 20, paddingTop: 20}}>
                      <Button color="white" fontColor="#4D5761" onClick={() => setSelectedSkillTemp('')}>Clear all</Button>
                      <Button color="#4B48EC" fontColor="white" onClick={(e) => {
                        e.stopPropagation()
                        setSelectedSkill(selectedSkillTemp)
                        skillRef.current.toggle()
                      }}>Apply</Button>
                    </Box>
                  </Box>
                )}>
                <Input
                  placeholder="Skills"
                  prefixIcon="/icons/tools.png"
                  suffixIcon="/icons/down-arrow.png"
                  suffixIconHeight={7}
                  suffixIconWidth={10}
                  prefixIconHeight={15}
                  prefixIconWidth={15}
                  width={50}
                  height={18}
                  readOnly
                  value={selectedSkill}
                  containerRest={{ style: { backgroundColor: selectedSkill ? '#E7FF96' : 'white' } }}
                />
              </Popover>
              <Popover
                ref={rateRef}
                top={42}
                align="left"
                renderContent={() => (
                  <Box vertical>
                    <Box>
                      <Input width={80} placeholder="Min" prefixIcon="/icons/currency-dollar.png" value={selectedRateTempMin} onChange={e => setSelectedRateTempMin(e.target.value)} />
                      <Typography fontSize={14} color="#4D5761" style={{marginRight: 10}}>/h</Typography>
                      <Input width={80} placeholder="Max" prefixIcon="/icons/currency-dollar.png" value={selectedRateTempMax} onChange={e => setSelectedRateTempMax(e.target.value)} />
                      <Typography fontSize={14} color="#4D5761">/h</Typography>
                    </Box>
                    <Box justifyContent="space-between" fullWidth style={{borderTop: "1px solid #E5E7EB", marginTop: 20, paddingTop: 20}}>
                      <Button color="white" fontColor="#4D5761" onClick={() => {
                        setSelectedRateTempMin('')
                        setSelectedRateTempMax('')
                      }}>Clear all</Button>
                      <Button color="#4B48EC" fontColor="white" onClick={(e) => {
                        e.stopPropagation()
                        setSelectedRateMin(selectedRateTempMin)
                        setSelectedRateMax(selectedRateTempMax)
                        rateRef.current.toggle()
                      }}>Apply</Button>
                    </Box>
                  </Box>
                )}>
                <Input
                  placeholder="Rate"
                  prefixIcon="/icons/rate.png"
                  suffixIcon="/icons/down-arrow.png"
                  suffixIconHeight={7}
                  suffixIconWidth={10}
                  prefixIconHeight={15}
                  prefixIconWidth={15}
                  width={50}
                  height={18}
                  readOnly
                  value={(selectedRateMin || selectedRateMax) ? `${selectedRateMin} - ${selectedRateMax} $/h` : ''}
                  containerRest={{ style: { backgroundColor: (selectedRateMin || selectedRateMax) ? '#E7FF96' : 'white' } }}
                />
              </Popover>
              <Popover
                ref={locationRef}
                top={42}
                align="left"
                renderContent={() => (
                  <Box vertical>
                    <Box vertical style={{width: 300}}>
                      {
                        ['North America', 'South America', 'Europe', 'Africa', 'Asia', 'Oceania'].map(l => (
                          <Box key={l} fullWidth justifyContent="space-between" style={{backgroundColor: '#F3F4F6', borderRadius: 6, padding: 10, marginBottom: 10}}>
                            <Box>
                              <input type="checkbox" style={{margin: 0}} onChange={e => {
                                if (e.target.checked) {
                                  setSelectedLocationTemp([...selectedLocationTemp, l])
                                } else {
                                  setSelectedLocationTemp(selectedLocationTemp.filter(lt => lt !== l))
                                }
                              }} />
                              <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginLeft: 10}}>{l}</Typography>
                            </Box>
                            <Box>
                              <IconButton icon="/icons/down-arrow.png" width={8} height={4} />
                            </Box>
                          </Box>
                        ))
                      }
                    </Box>
                    <Box justifyContent="space-between" fullWidth style={{borderTop: "1px solid #E5E7EB", marginTop: 20, paddingTop: 20}}>
                      <Button color="white" fontColor="#4D5761" onClick={() => setSelectedLocationTemp([])}>Clear all</Button>
                      <Button color="#4B48EC" fontColor="white" onClick={(e) => {
                        e.stopPropagation()
                        setSelectedLocation(selectedLocationTemp)
                        locationRef.current.toggle()
                      }}>Apply</Button>
                    </Box>
                  </Box>
                )}>
                <Input
                  placeholder="Location"
                  prefixIcon="/icons/location.png"
                  suffixIcon="/icons/down-arrow.png"
                  suffixIconHeight={7}
                  suffixIconWidth={10}
                  prefixIconHeight={15}
                  prefixIconWidth={15}
                  width={60}
                  height={18}
                  readOnly
                  value={selectedLocation.join(",")}
                  containerRest={{ style: { backgroundColor: selectedLocation.length > 0 ? '#E7FF96' : 'white' } }}
                />
              </Popover>
              <Popover
                ref={weekRef}
                top={42}
                align="left"
                renderContent={() => (
                  <Box vertical>
                    <Box>
                      <Input width={30} placeholder="Min" value={selectedWeekTempMin} onChange={e => setSelectedWeekTempMin(e.target.value)} />
                      <Typography fontSize={14} color="#4D5761" style={{marginRight: 10}}>hrs/week</Typography>
                      <Input width={30} placeholder="Max" value={selectedWeekTempMax} onChange={e => setSelectedWeekTempMax(e.target.value)} />
                      <Typography fontSize={14} color="#4D5761">hrs/week</Typography>
                    </Box>
                    <Box justifyContent="space-between" fullWidth style={{borderTop: "1px solid #E5E7EB", marginTop: 20, paddingTop: 20}}>
                      <Button color="white" fontColor="#4D5761" onClick={() => {
                        setSelectedWeekTempMin('')
                        setSelectedWeekTempMax('')
                      }}>Clear all</Button>
                      <Button color="#4B48EC" fontColor="white" onClick={(e) => {
                        e.stopPropagation()
                        setSelectedWeekMin(selectedWeekTempMin)
                        setSelectedWeekMax(selectedWeekTempMax)
                        weekRef.current.toggle()
                      }}>Apply</Button>
                    </Box>
                  </Box>
                )}>
                <Input
                  placeholder="Commitment"
                  prefixIcon="/icons/clock.png"
                  suffixIcon="/icons/down-arrow.png"
                  suffixIconHeight={7}
                  suffixIconWidth={10}
                  prefixIconHeight={15}
                  prefixIconWidth={15}
                  width={80}
                  height={18}
                  readOnly
                  value={(selectedWeekMin || selectedWeekMax) ? `${selectedWeekMin} - ${selectedWeekMax} hrs/week` : ''}
                  containerRest={{ style: { backgroundColor: (selectedWeekMin || selectedWeekMax) ? '#E7FF96' : 'white' } }}
                />
              </Popover>
            </Box>
          </Box>
          <Box vertical style={{marginTop: 40}}>
            <Box fullWidth justifyContent="flex-end" style={{marginBottom: 30}}>
              <Typography color="#4D5761">Sorted by: </Typography>
              <Typography color="#4D5761" fontWeight={600} style={{margin: "0 10px 0 15px"}}>Newest</Typography>
              <Image src="/icons/down-arrow.png" alt="Down Arrow" width={12} height={6.75} />
            </Box>
            <Box vertical fullWidth>
              {
                filterProjects.slice((page - 1) * 10, page * 10).map(project => (
                  <Box key={project.id} fullWidth>
                    <Card>
                      <Box justifyContent="space-between" style={{padding: 20, borderBottom: "1px solid #F3F4F6"}}>
                        <Box style={{gap: 15}}>
                          {
                            project.labels.map((label, index) => <Label key={index} color="#F3F4F6" borderColor="#F3F4F6">{label}</Label>)
                          }
                        </Box>
                        <Box style={{gap: 15}}>
                          <IconButton icon="/icons/share.png" width={24} height={24} onClick={() => setShareProjectOpen(true)} />
                          <IconButton icon="/icons/star-02.png" width={24} height={24} />
                          <IconButton icon="/icons/eye-off.png" width={16} height={16} style={{border: "1px solid #D2D6DB"}} onClick={() => setHideProjectOpen(true)} />
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
          </Box>
        </ContentMain>
      </Content>
      <HideProject open={hideProjectOpen} setOpen={setHideProjectOpen} />
      <ShareProject open={shareProjectOpen} setOpen={setShareProjectOpen} />
    </Container>
  )
}
