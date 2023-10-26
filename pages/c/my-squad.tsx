import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "@/components/header";
import Box from "@/components/box";
import Typography from "@/components/typography";
import Button from "@/components/button";
import Image from "next/image";
import Table from "@/components/table";
import TableRow from "@/components/table-row";
import TableCol from "@/components/table-col";
import SquadPaymentMethod from "@/components/c/home/squad-payment-method";
import SquadPaymentSubmit from "@/components/c/home/squad-payment-submit";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f9fafb;
`

const ContentMain = styled.div`
  width: 100%;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #F9FAFB;
  box-shadow: 0 1px 2px 0 #1018280F;
  width: 100%;
  border-radius: 12px;
  background-color: white;
  margin-bottom: 50px;
`

const Footer =  styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 122px;
  margin: 0 auto;
`

export default function MySquad() {
  const [squadPaymentMethodOpen, setSquadPaymentMethod] = useState(false);
  const [squadPaymentSubmitOpen, setSquadPaymentSubmit] = useState(false);

  return (
    <Container>
      <Header onlyLogo />
      <Content>
        <ContentMain>
          <Box justifyContent="space-between" style={{backgroundColor: "#0B0F00", padding: "16px 122px"}}>
            <Box vertical>
              <Typography color="#FFFFFF" fontSize={24} fontWeight={600}>Total cost</Typography>
              <Typography color="#D0FC4A" fontSize={18} fontWeight={500} style={{margin: "5px 0"}}>MVP for Serverless E-commerce Return Portal</Typography>
              <Typography color="rgba(255, 255, 255, 0.6)" fontSize={14}>Period 1 February - 7 February, 2023</Typography>
            </Box>
            <Box>
              <Box vertical>
                <Typography color="white" fontSize={14} fontWeight={500}>Hours submitted</Typography>
                <Button color="#F3F4F6" fontColor="#111927" style={{fontSize: 24, marginTop: 6}}>120 hours</Button>
              </Box>
              <Box vertical style={{margin: "0 20px"}}>
                <Typography color="white" fontSize={14} fontWeight={500}>Service fee</Typography>
                <Button color="#F3F4F6" fontColor="#111927" style={{fontSize: 24, marginTop: 6}}>20%</Button>
              </Box>
              <Box vertical>
                <Typography color="white" fontSize={14} fontWeight={500}>Total  due</Typography>
                <Button color="#D1FADF" fontColor="#05603A" style={{fontSize: 24, marginTop: 6, fontWeight: 600}}>$15,360</Button>
              </Box>
            </Box>
          </Box>
          <Box vertical style={{padding: "50px 122px"}}>
            <Card style={{padding: "20px"}}>
              <Box vertical fullWidth>
                <Box fullWidth justifyContent="space-between" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                  <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                    <Image src="/icons/avatar.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                    <div>
                      <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                      <Typography color="#384250" fontSize={14}>Product Manager</Typography>
                    </div>
                  </Box>
                  <Box>
                    <Box vertical style={{width: 150}}>
                      <Typography color="#111927" fontSize={14} fontWeight={500}>Hours submitted</Typography>
                      <Button color="#F3F4F6" fontColor="#111927" style={{fontSize: 24, marginTop: 6}}>40 hours</Button>
                    </Box>
                    <Box vertical>
                      <Typography color="#111927" fontSize={14} fontWeight={500}>Sum</Typography>
                      <Button color="#D1FADF" fontColor="#05603A" style={{fontSize: 24, marginTop: 6, fontWeight: 600}}>$3600</Button>
                    </Box>
                  </Box>
                </Box>
                <ExpandTable open />
              </Box>
            </Card>
            <Card style={{padding: "20px"}}>
              <Box vertical fullWidth>
                <Box fullWidth justifyContent="space-between" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                  <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                    <Image src="/icons/avatar-1.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                    <div>
                      <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                      <Typography color="#384250" fontSize={14}>Product Manager</Typography>
                    </div>
                  </Box>
                  <Box>
                    <Box vertical style={{width: 150}}>
                      <Typography color="#111927" fontSize={14} fontWeight={500}>Hours submitted</Typography>
                      <Button color="#F3F4F6" fontColor="#111927" style={{fontSize: 24, marginTop: 6}}>40 hours</Button>
                    </Box>
                    <Box vertical>
                      <Typography color="#111927" fontSize={14} fontWeight={500}>Sum</Typography>
                      <Button color="#D1FADF" fontColor="#05603A" style={{fontSize: 24, marginTop: 6, fontWeight: 600}}>$3600</Button>
                    </Box>
                  </Box>
                </Box>
                <ExpandTable />
              </Box>
            </Card>
            <Card style={{padding: "20px"}}>
              <Box vertical fullWidth>
                <Box fullWidth justifyContent="space-between" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                  <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                    <Image src="/icons/avatar-2.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                    <div>
                      <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                      <Typography color="#384250" fontSize={14}>Product Manager</Typography>
                    </div>
                  </Box>
                  <Box>
                    <Box vertical style={{width: 150}}>
                      <Typography color="#111927" fontSize={14} fontWeight={500}>Hours submitted</Typography>
                      <Button color="#F3F4F6" fontColor="#111927" style={{fontSize: 24, marginTop: 6}}>40 hours</Button>
                    </Box>
                    <Box vertical>
                      <Typography color="#111927" fontSize={14} fontWeight={500}>Sum</Typography>
                      <Button color="#D1FADF" fontColor="#05603A" style={{fontSize: 24, marginTop: 6, fontWeight: 600}}>$3600</Button>
                    </Box>
                  </Box>
                </Box>
                <ExpandTable />
              </Box>
            </Card>
            <Card style={{padding: "20px"}}>
              <Box vertical fullWidth>
                <Box fullWidth justifyContent="space-between" style={{borderBottom: "1px solid #E5E7EB", paddingBottom: 20, marginBottom: 20}}>
                  <Box fullWidth style={{borderRadius: 8, padding: 8}}>
                    <Image src="/icons/avatar-3.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
                    <div>
                      <Typography color="##111927" fontSize={20 } fontWeight={600}>Patricia Montero</Typography>
                      <Typography color="#384250" fontSize={14}>Product Manager</Typography>
                    </div>
                  </Box>
                  <Box>
                    <Box vertical style={{width: 150}}>
                      <Typography color="#111927" fontSize={14} fontWeight={500}>Hours submitted</Typography>
                      <Button color="#F3F4F6" fontColor="#111927" style={{fontSize: 24, marginTop: 6}}>40 hours</Button>
                    </Box>
                    <Box vertical>
                      <Typography color="#111927" fontSize={14} fontWeight={500}>Sum</Typography>
                      <Button color="#D1FADF" fontColor="#05603A" style={{fontSize: 24, marginTop: 6, fontWeight: 600}}>$3600</Button>
                    </Box>
                  </Box>
                </Box>
                <ExpandTable />
              </Box>
            </Card>
          </Box>
        </ContentMain>
      </Content>
      <Footer>
        <Button color="white" fontColor="#384250" width="114px" height="40px">Back</Button>
        <Button color="#4B48EC" fontColor="white" height="40px" onClick={() => setSquadPaymentMethod(true)}>Submit payment</Button>
      </Footer>
      <SquadPaymentMethod open={squadPaymentMethodOpen} setOpen={setSquadPaymentMethod} handleSubmit={() => {
        setSquadPaymentMethod(false)
        setSquadPaymentSubmit(true)
      }} />
      <SquadPaymentSubmit open={squadPaymentSubmitOpen} setOpen={setSquadPaymentSubmit}></SquadPaymentSubmit>
    </Container>
  )
}

function ExpandTable({ open }) {
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    setExpand(open);
  }, [open])

  return (
    <>
      {
        expand && (
          <Table>
            <thead style={{backgroundColor: "#F9FAFB"}}>
            <TableRow>
              <TableCol>Hours</TableCol>
              <TableCol>Date</TableCol>
              <TableCol>Notes</TableCol>
            </TableRow>
            </thead>
            <tbody>
            <TableRow>
              <TableCol style={{fontWeight: 500, color: "#111927", fontSize: 14}}>6</TableCol>
              <TableCol style={{color: "#4D5761", fontSize: 14}}>Feb 5, 2023</TableCol>
              <TableCol style={{color: "#4D5761", fontSize: 14}}>Lorem ipsum dolor sit amet consectetur. Neque suscipit quis risus sed phasellus in.</TableCol>
            </TableRow>
            <TableRow>
              <TableCol style={{fontWeight: 500, color: "#111927", fontSize: 14}}>8</TableCol>
              <TableCol style={{color: "#4D5761", fontSize: 14}}>Feb 5, 2023</TableCol>
              <TableCol style={{color: "#4D5761", fontSize: 14}}>Lorem ipsum dolor sit amet consectetur. Neque suscipit quis risus sed phasellus in.</TableCol>
            </TableRow>
            <TableRow>
              <TableCol style={{fontWeight: 500, color: "#111927", fontSize: 14}}>10</TableCol>
              <TableCol style={{color: "#4D5761", fontSize: 14}}>Feb 5, 2023</TableCol>
              <TableCol style={{color: "#4D5761", fontSize: 14}}>Lorem ipsum dolor sit amet consectetur. Neque suscipit quis risus sed phasellus in.</TableCol>
            </TableRow>
            <TableRow>
              <TableCol style={{fontWeight: 500, color: "#111927", fontSize: 14}}>8</TableCol>
              <TableCol style={{color: "#4D5761", fontSize: 14}}>Feb 5, 2023</TableCol>
              <TableCol style={{color: "#4D5761", fontSize: 14}}>Lorem ipsum dolor sit amet consectetur. Neque suscipit quis risus sed phasellus in.</TableCol>
            </TableRow>
            <TableRow>
              <TableCol style={{fontWeight: 500, color: "#111927", fontSize: 14}}>8</TableCol>
              <TableCol style={{color: "#4D5761", fontSize: 14}}>Feb 5, 2023</TableCol>
              <TableCol style={{color: "#4D5761", fontSize: 14}}>Lorem ipsum dolor sit amet consectetur. Neque suscipit quis risus sed phasellus in.</TableCol>
            </TableRow>
            </tbody>
          </Table>
        )
      }
      <Box style={{marginTop: 20}} onClick={() => setExpand(!expand)}>
        <Typography color="#4D5761" fontSize={14} fontWeight={600}>See less</Typography>
        <Image src={expand ? "/icons/up-arrow.png" : "/icons/down-arrow.png"} alt="up arrow" width={14} height={8} style={{marginLeft: 10}} />
      </Box>
    </>
  )
}
