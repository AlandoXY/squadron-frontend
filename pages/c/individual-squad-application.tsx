import React, {useEffect, useState} from "react";
import Image from "next/image";
import Typography from "@/components/typography";
import IconButton from "@/components/icon-button";
import Box from "@/components/box";
import styled from "styled-components";
import {useRouter} from "next/navigation";
import Label from "@/components/label";
import TableRow from "@/components/table-row";
import TableCol from "@/components/table-col";
import Table from "@/components/table";
import Dropdown from "@/components/dropdown";
import Button from "@/components/button";
import BookInterviewCalender from "@/components/c/squad/book-interview-calender";
import BookInterviewRequest from "@/components/c/squad/book-interview-request";

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
`

export default function IndividualSquadApplication() {
  const [bookInterviewCalender, setBookInterviewCalender] = useState(false);
  const [bookInterviewRequest, setBookInterviewRequest] = useState(false);
  const router = useRouter();

  const openBookInterView = () => {
    if (Math.random() < 0.5) {
      setBookInterviewCalender(true);
    } else {
      setBookInterviewRequest(true);
    }
  }

  return (
    <HomeContainer>
      <Header>
        <Box>
          <IconButton width={40} height={40} fontSize="20px" icon="/icons/logo.png">squadron</IconButton>
        </Box>
      </Header>
      <Box vertical justifyContent="center">
        <Section1Top>
          <Image src="/icons/google.png" width={60} height={60} alt="Ellipse" style={{marginRight: 30}} />
          <div>
            <Typography color="white">Google</Typography>
            <Typography color="white" fontSize="22px" style={{margin: "5px 0 0"}}>SurveySwap</Typography>
          </div>
        </Section1Top>
        <Box fullWidth   vertical style={{padding: "50px 80px"}}>
          <IconButton icon="/icons/chevron-left-01.png" width={20} height={20} fontColor="#1B18E4" style={{fontWeight: 600}}>Back to squads</IconButton>
          <Card style={{marginTop: 50}}>
            <Box style={{padding: "16px 24px"}}>
              <Label icon="/icons/check-2.png" color="#ECFDF3" fontColor="#027A48" style={{fontWeight: 500, border: "none"}}>Good Match 80%</Label>
            </Box>
            <Box vertical style={{padding: 24}}>
              <Box>
                <Image src="/icons/people-group-3.png" alt="People Group" width={56} height={56} style={{marginRight: 10}} />
                <Typography color="#111927" fontWeight={600} fontSize={20}>Suggested Squad #2</Typography>
              </Box>
              <Box style={{margin: "20px 0"}}>
                <Typography color="#4D5761">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, na ... <Typography component="span" color="#4B48EC" fontWeight={600}>See more</Typography></Typography>
              </Box>
              <Table>
                <thead>
                <TableRow>
                  <TableCol>Squad</TableCol>
                  <TableCol>Position</TableCol>
                  <TableCol>State</TableCol>
                  <TableCol></TableCol>
                </TableRow>
                </thead>
                <tbody>
                <TableRow>
                  <TableCol>
                    <Box>
                      <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />
                      <Box vertical>
                        <Typography color="#111927" fontWeight={500} fontSize={14}>Patricia Montero</Typography>
                        <Typography color="#1B18E4" fontSize={14}>View profile</Typography>
                      </Box>
                    </Box>
                  </TableCol>
                  <TableCol>
                    <Typography color="#111927" fontWeight={500}>Front-End Engineer</Typography>
                  </TableCol>
                  <TableCol>
                    <Dropdown
                      options={[{ label: "Viewing application", value: "Viewing application" }, { label: "Interviewing", value: "Interviewing" }, { label: "Interviewed", value: "Interviewed" }]}
                      placeholder="Viewing application"
                      disableInput
                    />
                  </TableCol>
                  <TableCol>
                    <Button color="#4B48EC" fontColor="white" onClick={() => openBookInterView()}>Book Call</Button>
                  </TableCol>
                </TableRow>
                <TableRow>
                  <TableCol>
                    <Box>
                      <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />
                      <Box vertical>
                        <Typography color="#111927" fontWeight={500} fontSize={14}>Patricia Montero</Typography>
                        <Typography color="#1B18E4" fontSize={14}>View profile</Typography>
                      </Box>
                    </Box>
                  </TableCol>
                  <TableCol>
                    <Typography color="#111927" fontWeight={500}>Front-End Engineer</Typography>
                  </TableCol>
                  <TableCol>
                    <Dropdown
                      options={[{ label: "Viewing application", value: "Viewing application" }, { label: "Interviewing", value: "Interviewing" }, { label: "Interviewed", value: "Interviewed" }]}
                      placeholder="Viewing application"
                      disableInput
                    />
                  </TableCol>
                  <TableCol>
                    <Button color="#4B48EC" fontColor="white" onClick={() => openBookInterView()}>Book Call</Button>
                  </TableCol>
                </TableRow>
                <TableRow>
                  <TableCol>
                    <Box>
                      <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />
                      <Box vertical>
                        <Typography color="#111927" fontWeight={500} fontSize={14}>Patricia Montero</Typography>
                        <Typography color="#1B18E4" fontSize={14}>View profile</Typography>
                      </Box>
                    </Box>
                  </TableCol>
                  <TableCol>
                    <Typography color="#111927" fontWeight={500}>Front-End Engineer</Typography>
                  </TableCol>
                  <TableCol>
                    <Dropdown
                      options={[{ label: "Viewing application", value: "Viewing application" }, { label: "Interviewing", value: "Interviewing" }, { label: "Interviewed", value: "Interviewed" }]}
                      placeholder="Viewing application"
                      disableInput
                    />
                  </TableCol>
                  <TableCol>
                    <Button color="#4B48EC" fontColor="white" onClick={() => openBookInterView()}>Book Call</Button>
                  </TableCol>
                </TableRow>
                <TableRow>
                  <TableCol>
                    <Box>
                      <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />
                      <Box vertical>
                        <Typography color="#111927" fontWeight={500} fontSize={14}>Patricia Montero</Typography>
                        <Typography color="#1B18E4" fontSize={14}>View profile</Typography>
                      </Box>
                    </Box>
                  </TableCol>
                  <TableCol>
                    <Typography color="#111927" fontWeight={500}>Front-End Engineer</Typography>
                  </TableCol>
                  <TableCol>
                    <Dropdown
                      options={[{ label: "Viewing application", value: "Viewing application" }, { label: "Interviewing", value: "Interviewing" }, { label: "Interviewed", value: "Interviewed" }]}
                      placeholder="Viewing application"
                      disableInput
                    />
                  </TableCol>
                  <TableCol>
                    <Button color="#4B48EC" fontColor="white" onClick={() => openBookInterView()}>Book Call</Button>
                  </TableCol>
                </TableRow>
                <TableRow>
                  <TableCol>
                    <Box>
                      <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />
                      <Box vertical>
                        <Typography color="#111927" fontWeight={500} fontSize={14}>Patricia Montero</Typography>
                        <Typography color="#1B18E4" fontSize={14}>View profile</Typography>
                      </Box>
                    </Box>
                  </TableCol>
                  <TableCol>
                    <Typography color="#111927" fontWeight={500}>Front-End Engineer</Typography>
                  </TableCol>
                  <TableCol>
                    <Dropdown
                      options={[{ label: "Viewing application", value: "Viewing application" }, { label: "Interviewing", value: "Interviewing" }, { label: "Interviewed", value: "Interviewed" }]}
                      placeholder="Viewing application"
                      disableInput
                    />
                  </TableCol>
                  <TableCol>
                    <Button color="#4B48EC" fontColor="white" onClick={() => openBookInterView()}>Book Call</Button>
                  </TableCol>
                </TableRow>
                <TableRow>
                  <TableCol>
                    <Box>
                      <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />
                      <Box vertical>
                        <Typography color="#111927" fontWeight={500} fontSize={14}>Patricia Montero</Typography>
                        <Typography color="#1B18E4" fontSize={14}>View profile</Typography>
                      </Box>
                    </Box>
                  </TableCol>
                  <TableCol>
                    <Typography color="#111927" fontWeight={500}>Front-End Engineer</Typography>
                  </TableCol>
                  <TableCol>
                    <Dropdown
                      options={[{ label: "Viewing application", value: "Viewing application" }, { label: "Interviewing", value: "Interviewing" }, { label: "Interviewed", value: "Interviewed" }]}
                      placeholder="Viewing application"
                      disableInput
                    />
                  </TableCol>
                  <TableCol>
                    <Button color="#4B48EC" fontColor="white" onClick={() => openBookInterView()}>Book Call</Button>
                  </TableCol>
                </TableRow>
                <TableRow>
                  <TableCol>
                    <Box>
                      <Image src="/icons/avatar.png" alt="Avatar" width={40} height={40} style={{marginRight: 15}} />
                      <Box vertical>
                        <Typography color="#111927" fontWeight={500} fontSize={14}>Patricia Montero</Typography>
                        <Typography color="#1B18E4" fontSize={14}>View profile</Typography>
                      </Box>
                    </Box>
                  </TableCol>
                  <TableCol>
                    <Typography color="#111927" fontWeight={500}>Front-End Engineer</Typography>
                  </TableCol>
                  <TableCol>
                    <Dropdown
                      options={[{ label: "Viewing application", value: "Viewing application" }, { label: "Interviewing", value: "Interviewing" }, { label: "Interviewed", value: "Interviewed" }]}
                      placeholder="Viewing application"
                      disableInput
                    />
                  </TableCol>
                  <TableCol>
                    <Button color="#4B48EC" fontColor="white" onClick={() => openBookInterView()}>Book Call</Button>
                  </TableCol>
                </TableRow>
                </tbody>
              </Table>
            </Box>
          </Card>
        </Box>
      </Box>
      <BookInterviewCalender open={bookInterviewCalender} setOpen={setBookInterviewCalender} />
      <BookInterviewRequest open={bookInterviewRequest} setOpen={setBookInterviewRequest} />
    </HomeContainer>
  )
}
