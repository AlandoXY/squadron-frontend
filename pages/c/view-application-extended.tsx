import React, {useEffect, useState} from "react";
import Image from "next/image";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";
import Label from "@/components/label";
import Box from "@/components/box";
import Table from "@/components/table";
import TableRow from "@/components/table-row";
import TableCol from "@/components/table-col";
import Button from "@/components/button";
import styled from "styled-components";

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
  padding: 15px 50px;
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
  margin-bottom: 20px;
  overflow: hidden;
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

export default function ViewApplicationExtended() {
  return (
    <HomeContainer>
      <Box vertical justifyContent="center">
        <Section1Top style={{justifyContent: "space-between"}}>
          <Box>
            <Box style={{marginRight: 30}}>
              <IconButton icon="/icons/chevron-left.png" width={20} height={20} style={{border: "1px solid #6C737F", backgroundColor: "#1F2A37", marginRight: 25}} />
              <IconButton icon="/icons/chevron-right-01.png" width={20} height={20} style={{border: "1px solid #6C737F", backgroundColor: "#1F2A37"}} />
            </Box>
            <Box vertical>
              <Typography color="white" fontSize={20} fontWeight={600}>Talent 1 of 5</Typography>
              <Typography color="#D2D6DB" fontSize={14}>Suggested Squad #1</Typography>
            </Box>
          </Box>
          <Button color="transparent" fontColor="white">Close</Button>
        </Section1Top>
        <Box fullWidth vertical style={{padding: "0 50px"}}>
          <Box fullWidth vertical style={{margin: "50px 0px"}}>
            <Card>
              <Section1Top>
                <Box  style={{marginRight: 30, border: "5px solid rgba(255, 255, 255, 0.2)", borderRadius: "50%"}}>
                  <Image src="/icons/avatar.png" width={126} height={126} alt="Ellipse" />
                </Box>
                <div>
                  <Typography color="white" fontSize={18} fontWeight={500}>Product Manager</Typography>
                  <Box style={{margin: "5px 0 10px"}}>
                    <Typography color="white" fontSize={30} fontWeight={500}>Patricia Montero</Typography>
                    <Image src="/icons/verification.png" alt="Verification" width={24} height={24} style={{margin: "0 8px"}} />
                    <Label color="#027A48" fontColor="white">90% Great match</Label>
                  </Box>
                  <Box>
                    <Image src="/icons/location.png" alt="Location" width={15} height={18.75} style={{marginRight: 5}} />
                    <Typography color="white">Sydney, AU</Typography>
                  </Box>
                </div>
                <Section1TopRight>
                  <IconButton icon="/icons/share-07.png" width={20} height={20} />
                  <IconButton icon="/icons/star-01.png" width={20} height={20} />
                  <Button fontColor="Apply as squad" color="#D0FC4A">Interview</Button>
                </Section1TopRight>
              </Section1Top>
              <Section1Content>
                <Section1ContentLeft>
                  <Box flexDirection="column" alignItem="flex-start" style={{marginBottom: 20}}>
                    <Box fullWidth justifyContent="space-between">
                      <Typography color="#111927" fontSize="18px" fontWeight={500}>Experience</Typography>
                    </Box>
                    <Box flexDirection="column" alignItem="flex-start" style={{marginTop: 10}}>
                      <Typography color="#475467" fontSize="14px">5 years</Typography>
                    </Box>
                  </Box>
                  <Box flexDirection="column" alignItem="flex-start" style={{marginBottom: 20}}>
                    <Box fullWidth justifyContent="space-between">
                      <Typography color="#111927" fontSize="18px" fontWeight={500}>Languages</Typography>
                    </Box>
                    <Box flexDirection="column" alignItem="flex-start" style={{marginTop: 10}}>
                      <Box>
                        <Typography color="#344054" fontSize="14px" fontWeight={500} style={{marginRight: 10}}>English: </Typography>
                        <Typography color="#475467" fontSize="14px">Native</Typography>
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
                    </Box>
                    <Box style={{marginTop: 10}}>
                      <IconButton icon="/icons/link-in.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
                      <IconButton icon="/icons/at.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
                      <IconButton icon="/icons/twitter.png" width={20} height={20} fontColor="#1B18E4" fontSize="14px" style={{fontWeight: 600}} />
                    </Box>
                  </Box>
                </Section1ContentLeft>
                <Section1ContentRight>
                  <Box style={{gap: 20}}>
                    <Card>
                      <Box justifyContent="space-between" style={{padding: 24}}>
                        <Box>
                          <Image src="/icons/money.png" alt="" width={24} height={24} style={{marginRight: 15}} />
                          <Typography color="#384250" fontWeight={500}>Hourly Rate</Typography>
                        </Box>
                        <Box>
                          <Typography color="#1F2A37" fontWeight={600} fontSize={18}>$90/h</Typography>
                        </Box>
                      </Box>
                    </Card>
                    <Card>
                      <Box justifyContent="space-between" style={{padding: 24}}>
                        <Box>
                          <Image src="/icons/location.png" alt="" width={19} height={24} style={{marginRight: 15}} />
                          <Typography color="#384250" fontWeight={500}>Location</Typography>
                        </Box>
                        <Box>
                          <Typography color="#1F2A37" fontWeight={600} fontSize={18}>Sydney AU, GMT+11</Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                  <Box style={{gap: 20}}>
                    <Card>
                      <Box justifyContent="space-between" style={{padding: 24}}>
                        <Box>
                          <Image src="/icons/calendar.png" alt="" width={24} height={24} style={{marginRight: 15}} />
                          <Typography color="#384250" fontWeight={500}>Availability</Typography>
                        </Box>
                        <Box>
                          <Typography color="#1F2A37" fontWeight={600} fontSize={18}>Immediately</Typography>
                        </Box>
                      </Box>
                    </Card>
                    <Card>
                      <Box justifyContent="space-between" style={{padding: 24}}>
                        <Box>
                          <Image src="/icons/clock.png" alt="" width={24} height={24} style={{marginRight: 15}} />
                          <Typography color="#384250" fontWeight={500}>Working hours</Typography>
                        </Box>
                        <Box>
                          <Typography color="#1F2A37" fontWeight={600} fontSize={18}>8:30 AM - 4:30 PM</Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                  <Box style={{gap: 20}}>
                    <Card>
                      <Box justifyContent="space-between" style={{padding: 24}}>
                        <Box>
                          <Image src="/icons/clock.png" alt="" width={24} height={24} style={{marginRight: 15}} />
                          <Typography color="#384250" fontWeight={500}>Hours to commit</Typography>
                        </Box>
                        <Box>
                          <Typography color="#1F2A37" fontWeight={600} fontSize={18}>40h / week</Typography>
                        </Box>
                      </Box>
                    </Card>
                    <Card>
                      <Box justifyContent="space-between" style={{padding: 24}}>
                        <Box>
                          <Image src="/icons/pie-chart.png" alt="" width={24} height={24} style={{marginRight: 15}} />
                          <Typography color="#384250" fontWeight={500}>Overlap</Typography>
                        </Box>
                        <Box>
                          <Typography color="#1F2A37" fontWeight={600} fontSize={18}>7 hours</Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Box>
                </Section1ContentRight>
              </Section1Content>
            </Card>
            <Card>
              <Box vertical fullWidth style={{padding: "15px 50px"}}>
                <Box fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                  <Typography color="#111927" fontWeight={600} fontSize={20}>Skills & Tools</Typography>
                </Box>
                <Box vertical>
                  <Typography color="#111927" fontWeight={500} fontSize={18}>Skills</Typography>
                  <Box style={{marginTop: 10, gap: 10, flexWrap: 'wrap'}}>
                    <Label icon="/icons/star-fill-01.png" fontColor="#039855" borderColor="#039855">Roadmapping</Label>
                    <Label icon="/icons/star-fill.png" fontColor="#6C737F" borderColor="#6C737F">Vendor Management & Selection</Label>
                    <Label icon="/icons/star-fill.png" fontColor="#6C737F" borderColor="#6C737F">Cross-functional Team Management</Label>
                    <Label fontColor="#039855" borderColor="#039855">Team Leadership</Label>
                    <Label fontColor="#039855" borderColor="#039855">Product Analytics</Label>
                    <Label fontColor="#6C737F" borderColor="#6C737F">E-Commerce</Label>
                    <Label fontColor="#6C737F" borderColor="#6C737F">Optimization</Label>
                    <Label fontColor="#6C737F" borderColor="#6C737F">User Research</Label>
                    <Label fontColor="#6C737F" borderColor="#6C737F">Stakeholder Management</Label>
                  </Box>
                </Box>
                <Box vertical style={{marginTop: 30}}>
                  <Typography color="#111927" fontWeight={500} fontSize={18}>Tools</Typography>
                  <Box style={{marginTop: 10, gap: 10, flexWrap: 'wrap'}}>
                    <Label icon="/icons/miro.png" fontColor="#039855" borderColor="#039855">Miro</Label>
                    <Label icon="/icons/figma.png" fontColor="#039855" borderColor="#039855">Figma</Label>
                    <Label icon="/icons/jira.png" fontColor="#039855" borderColor="#039855">Jira</Label>
                    <Label icon="/icons/ps.png" fontColor="#6C737F" borderColor="#6C737F">Photoshop</Label>
                    <Label icon="/icons/shopify.png" fontColor="#6C737F" borderColor="#6C737F">Shopify</Label>
                    <Label icon="/icons/balsamiq.png" fontColor="#6C737F" borderColor="#6C737F">Balsamiq</Label>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card>
              <Box vertical fullWidth style={{padding: "15px 50px"}}>
                <Box fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                  <Typography color="#111927" fontWeight={600} fontSize={20}>Talent answers</Typography>
                </Box>
                <Box vertical fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                  <Typography color="#111927" fontWeight={500}>Why are you a great fit for this role?</Typography>
                  <Box style={{marginTop: 5}}>
                    <Typography color="#4D5761">Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit.Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. <Typography component="span" color="#4B48EC" fontWeight={600}>See more</Typography></Typography>
                  </Box>
                </Box>
                <Box vertical fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                  <Typography color="#111927" fontWeight={500}>What excites you about this mission?</Typography>
                  <Box style={{marginTop: 5}}>
                    <Typography color="#4D5761">Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit.Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. <Typography component="span" color="#4B48EC" fontWeight={600}>See more</Typography></Typography>
                  </Box>
                </Box>
                <Box vertical fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                  <Typography color="#111927" fontWeight={500}>Tell us about your experience with product management at an early-stage start up?</Typography>
                  <Box style={{marginTop: 5}}>
                    <Typography color="#4D5761">Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit.Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. <Typography component="span" color="#4B48EC" fontWeight={600}>See more</Typography></Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Box style={{gap: 20}}>
              <Card>
                <Box vertical fullWidth style={{padding: "15px 50px"}}>
                  <Box fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                    <Typography color="#111927" fontWeight={600} fontSize={20}>Additional notes</Typography>
                  </Box>
                  <Box alignItem="flex-start" fullWidth style={{border: "1px solid #D2D6DB", borderRadius: 8, padding: "12px 14px", backgroundColor: "#F9FAFB", height: 184}}>
                    <Typography color="#6C737F">Lorem ipsum dolor sit amet consectetur. Leo sit tristique arcu ornare faucibus. Sit lobortis vel ut pharetra integer odio. Venenatis eu sit sit turpis feugiat. Egestas adipiscing morbi tortor hendrerit.</Typography>
                  </Box>
                </Box>
              </Card>
              <Card>
                <Box vertical fullWidth style={{padding: "15px 50px"}}>
                  <Box fullWidth style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                    <Typography color="#111927" fontWeight={600} fontSize={20}>Documents attached</Typography>
                  </Box>
                  <Box vertical fullWidth style={{marginBottom: 20, height: 164, overflowY: "auto"}}>
                    <Box fullWidth justifyContent="space-between" style={{marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid #E5E7EB"}}>
                      <Box vertical>
                        <Typography color="#384250">name_of_the_archive.pdf</Typography>
                        <Typography color="#9DA4AE" fontSize={12} style={{marginTop: 5}}>243k</Typography>
                      </Box>
                      <Box>
                        <Button color="white" fontColor="#1B18E4" style={{border: "none", fontWeight: 600}}>Download</Button>
                      </Box>
                    </Box>
                    <Box fullWidth justifyContent="space-between" style={{marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid #E5E7EB"}}>
                      <Box vertical>
                        <Typography color="#384250">name_of_the_archive.pdf</Typography>
                        <Typography color="#9DA4AE" fontSize={12} style={{marginTop: 5}}>243k</Typography>
                      </Box>
                      <Box>
                        <Button color="white" fontColor="#1B18E4" style={{border: "none", fontWeight: 600}}>Download</Button>
                      </Box>
                    </Box>
                    <Box fullWidth justifyContent="space-between" style={{marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid #E5E7EB"}}>
                      <Box vertical>
                        <Typography color="#384250">name_of_the_archive.pdf</Typography>
                        <Typography color="#9DA4AE" fontSize={12} style={{marginTop: 5}}>243k</Typography>
                      </Box>
                      <Box>
                        <Button color="white" fontColor="#1B18E4" style={{border: "none", fontWeight: 600}}>Download</Button>
                      </Box>
                    </Box>
                    <Box fullWidth justifyContent="space-between" style={{marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid #E5E7EB"}}>
                      <Box vertical>
                        <Typography color="#384250">name_of_the_archive.pdf</Typography>
                        <Typography color="#9DA4AE" fontSize={12} style={{marginTop: 5}}>243k</Typography>
                      </Box>
                      <Box>
                        <Button color="white" fontColor="#1B18E4" style={{border: "none", fontWeight: 600}}>Download</Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </Box>
        <Section1Top style={{justifyContent: "space-between"}}>
          <Box>
            <Box style={{marginRight: 30}}>
              <IconButton icon="/icons/chevron-left.png" width={20} height={20} style={{border: "1px solid #6C737F", backgroundColor: "#1F2A37", marginRight: 25}} />
              <IconButton icon="/icons/chevron-right-01.png" width={20} height={20} style={{border: "1px solid #6C737F", backgroundColor: "#1F2A37"}} />
            </Box>
            <Box vertical>
              <Typography color="white" fontSize={20} fontWeight={600}>Suggested Squad #1</Typography>
            </Box>
          </Box>
        </Section1Top>
      </Box>
    </HomeContainer>
  )
}
