import React, {useEffect, useState} from "react";
import IconButton from "@/components/icon-button";
import Box from "@/components/box";
import styled from "styled-components";
import Typography from "@/components/typography";
import Input from "@/components/input";
import Button from "@/components/button";
import Dropdown from "@/components/dropdown";
import Image from "next/image";
import Label from "@/components/label";
import Link from "@/components/link";
import Table from "@/components/table";
import TableRow from "@/components/table-row";
import TableCol from "@/components/table-col";
import {host} from "@/mocks/handlers";
import Pagination from "@/components/pagination";
import SendOffer from "@/components/c/squad/send-offer";
import {useRouter} from "next/navigation";

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

const Row = styled.div`
  display: flex;
  align-items: center;
`

export default function ApplicationForRoleC() {

  const [sendOfferOpen, setSendOfferOpen] = useState(false);

  const router = useRouter();

  return (
    <HomeContainer>
      <Header>
        <Box>
          <IconButton width={40} height={40} fontSize="20px" icon="/icons/logo.png">squadron</IconButton>
        </Box>
      </Header>
      <Box fullWidth vertical justifyContent="center" style={{padding: "40px 112px"}}>
        <Box fullWidth vertical>
          <Typography color="#111927" fontSize={30} fontWeight={500}>Talent for UX Designer</Typography>
          <Box fullWidth style={{margin: "20px 0"}}>
            <Input prefixIcon="/icons/search-lg.png" containerRest={{style: {flex: 1, marginRight: 10}}} />
            <Button color="#4B48EC" fontColor="white" height="43.8px">Search</Button>
          </Box>
          <Box style={{gap: 15}}>
            <Dropdown
              options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
              prevIcon="/icons/star-02.png"
              placeholder="Favourites"
              disableInput
              showSuffixIcon={false}
              inputWidth="90px"
            />
            <Dropdown
              options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
              prevIcon="/icons/price.png"
              placeholder="Rate"
              inputWidth="50px"
            />
            <Dropdown
              options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
              prevIcon="/icons/clock.png"
              placeholder="Commitment"
              inputWidth="120px"
            />
            <Dropdown
              options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
              prevIcon="/icons/marker-pin-01.png"
              placeholder="Location"
              inputWidth="80px"
            />
            <Dropdown
              options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
              prevIcon="/icons/calendar.png"
              placeholder="Availability"
              inputWidth="80px"
            />
            <Dropdown
              options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
              prevIcon="/icons/zap.png"
              placeholder="Experience"
              inputWidth="80px"
            />
            <Dropdown
              options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
              prevIcon="/icons/delete-1.png"
              placeholder="Clear all filters"
              disableInput
              showSuffixIcon={false}
              inputWidth="100px"
            />
          </Box>
          <Box fullWidth justifyContent="flex-end" style={{margin: "30px 0"}}>
            <Typography color="#4D5761">Sorted by: </Typography>
            <Typography color="#4D5761" fontWeight={600} style={{margin: "0 10px 0 15px"}}>Best match</Typography>
            <Image src="/icons/down-arrow.png" alt="Down Arrow" width={12} height={6.75} />
          </Box>
          <Box vertical fullWidth>
            <RoleCard setSendOfferOpen={setSendOfferOpen} />
            <RoleCard setSendOfferOpen={setSendOfferOpen} />
            <RoleCard setSendOfferOpen={setSendOfferOpen} />
            <RoleCard setSendOfferOpen={setSendOfferOpen} />
            <RoleCard setSendOfferOpen={setSendOfferOpen} />
            <RoleCard setSendOfferOpen={setSendOfferOpen} />
            <RoleCard setSendOfferOpen={setSendOfferOpen} />
            <RoleCard setSendOfferOpen={setSendOfferOpen} />
          </Box>
        </Box>
        <Box justifyContent="center" fullWidth style={{margin: "20px 0 80px"}}>
          <Pagination page={1} totalSize={100} onChange={(p) => {}} />
        </Box>
      </Box>
      <SendOffer open={sendOfferOpen} setOpen={setSendOfferOpen} handleSubmit={() => {
        setSendOfferOpen(false);
        router.push('/c/project-details?tab=Squad');
      }} />
    </HomeContainer>
  )
}

function RoleCard({ setSendOfferOpen }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <Card>
      <Box justifyContent="space-between" style={{padding: 20, borderBottom: "1px solid #F3F4F6"}}>
        <Box style={{gap: 15}}>
          <Label icon="/icons/check-2.png" color="#ECFDF3" borderColor="#ECFDF3" fontColor="#027A48">Good Match 80%</Label>
          <Label color="#F0F9FF" borderColor="#026AA2" fontColor="#026AA2" style={{border: "none"}}>From Suggested squad #1</Label>
        </Box>
      </Box>
      <Box vertical style={{padding: 20}}>
        <Box fullWidth justifyContent="space-between">
          <Box>
            <Box style={{marginRight: 10}}>
              <Image src="/icons/avatar.png" alt="Avatar" width={56} height={56} />
            </Box>
            <Box vertical>
              <Typography color="#111927" fontSize={20} fontWeight={600}>Patricia Montero</Typography>
              <Typography color="#384250" fontSize={14} style={{marginTop: 5}}>UX Designer</Typography>
            </Box>
          </Box>
          <Box style={{gap: 15}}>
            <IconButton icon="/icons/star-02.png" width={16} height={16} style={{border: "1px solid #D2D6DB"}} />
            <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}}>View application</Button>
            <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}}>Interview</Button>
            <Button color="#111927" fontColor="white" onClick={() => setSendOfferOpen(true)}>Make offer</Button>
            <IconButton icon="/icons/more-dark.png" width={13} height={3} style={{border: "1px solid #D2D6DB", width: 33.6, height: 33.6}} />
          </Box>
        </Box>
        <Box style={{marginTop: 15}}>
          <Box style={{marginRight: 10}}>
            <Image src="/icons/price.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
            <Typography color="#027A48">$30 /h</Typography>
          </Box>
          <Box style={{marginRight: 10}}>
            <Image src="/icons/clock.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
            <Typography color="#027A48">20-25h /week</Typography>
          </Box>
          <Box style={{marginRight: 10}}>
            <Image src="/icons/location.png" alt="Price" width={11} height={14} style={{marginRight: 5}} />
            <Typography color="#B42318">Amsterdam (8 hours overlap)</Typography>
          </Box>
          <Box style={{marginRight: 10}}>
            <Image src="/icons/calendar.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
            <Typography color="#027A48">Inmediate</Typography>
          </Box>
          <Box>
            <Image src="/icons/zap.png" alt="Price" width={14} height={14} style={{marginRight: 5}} />
            <Typography color="#4D5761">5 years experience</Typography>
          </Box>
        </Box>
        {
          showMore && (
            <Box fullWidth style={{marginTop: 20}}>
              <Box vertical>
                <Typography color="#111927" fontSize={14} fontWeight={600}>Skills</Typography>
                <Box style={{marginTop: 15, gap: 10, flexWrap: "wrap"}}>
                  <Label borderColor="#039855" color="white" fontColor="#039855">Skill name</Label>
                  <Label borderColor="#039855" color="white" fontColor="#039855">Skill name</Label>
                  <Label borderColor="#039855" color="white" fontColor="#039855">Skill name</Label>
                  <Label icon="/icons/star-fill.png" borderColor="#6C737F" color="white" fontColor="#6C737F">Skill name</Label>
                  <Label icon="/icons/star-fill.png" borderColor="#6C737F" color="white" fontColor="#6C737F">Skill name</Label>
                  <Label icon="/icons/star-fill.png" borderColor="#6C737F" color="white" fontColor="#6C737F">Skill name</Label>
                  <Label borderColor="#6C737F" color="white" fontColor="#6C737F">Skill name</Label>
                  <Label borderColor="#6C737F" color="white" fontColor="#6C737F">Skill name</Label>
                  <Label borderColor="#6C737F" color="white" fontColor="#6C737F">Skill name</Label>
                  <Label borderColor="#6C737F" color="white" fontColor="#6C737F">Skill name</Label>
                  <Label borderColor="#6C737F" color="white" fontColor="#6C737F">Skill name</Label>
                  <Label borderColor="#6C737F" color="white" fontColor="#6C737F">Skill name</Label>
                  <Label borderColor="#6C737F" color="white" fontColor="#6C737F">Skill name</Label>
                </Box>
                <Typography color="#111927" fontSize={14} fontWeight={600} style={{marginTop: 20}}>Tools</Typography>
                <Box style={{marginTop: 15, gap: 10, flexWrap: "wrap"}}>
                  <Label icon="/icons/ps.png" borderColor="#039855" color="white" fontColor="#039855">Tool</Label>
                  <Label icon="/icons/ps.png" borderColor="#039855" color="white" fontColor="#039855">Tool</Label>
                  <Label icon="/icons/ps.png" borderColor="#039855" color="white" fontColor="#039855">Tool</Label>
                  <Label icon="/icons/ps.png" borderColor="#6C737F" color="white" fontColor="#6C737F">Tool</Label>
                  <Label icon="/icons/ps.png" borderColor="#6C737F" color="white" fontColor="#6C737F">Tool</Label>
                  <Label icon="/icons/ps.png" borderColor="#6C737F" color="white" fontColor="#6C737F">Tool</Label>
                </Box>
              </Box>
            </Box>
          )
        }
        <Box style={{marginTop: 25}} onClick={() => setShowMore(!showMore)}>
          <Typography color="#4D5761" fontSize="14px" fontWeight={600} style={{marginRight: 5}}>{showMore ? "See less" : "See more"}</Typography>
          <Image src={showMore ? "/icons/up-arrow.png" : "/icons/down-arrow.png"} alt={showMore ? "Up Arrow" : "Down Arrow"} width={12} height={6.75} />
        </Box>
      </Box>
    </Card>
  )
}
