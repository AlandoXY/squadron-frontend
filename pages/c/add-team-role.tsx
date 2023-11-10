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
import {useRouter, useSearchParams} from "next/navigation";
import Navbar from "@/components/navbar";
import NavbarItem from "@/components/navbar-item";
import Popover from "@/components/popover";

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

export default function AddTeamRoleC() {

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
          <Box fullWidth justifyContent="space-between" style={{margin: "20px 0", paddingBottom: 20, borderBottom: '1px solid #E5E7EB'}}>
            <Typography color="#111927" fontSize={30} fontWeight={500}>Manage Squad</Typography>
            <IconButton icon="/icons/plus-white.png" width={20} height={20} color="#4B48EC" fontColor="white">Add role</IconButton>
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
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  return (
    <Card>
      <Box justifyContent="space-between" style={{padding: 20, borderBottom: "1px solid #F3F4F6"}}>
        <Box style={{gap: 15}}>
          {
            status === 'unsent' && <Label color="#111927" borderColor="#111927" fontColor="white">Send offer</Label>
          }
          {
            status === 'sent' && <Label color="#B54708" borderColor="#B54708" fontColor="white">Offer sent</Label>
          }
          {
            status === 'live' && <Label icon="/icons/dot.png" iconSize={8} color="#039855" fontColor="white" style={{border: "none", marginTop: 10}}>Live</Label>
          }
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
            <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}} disabled={status !== 'live'}>Message</Button>
            <Popover
              top={42}
              align="right"
              renderContent={() => (
                <Box vertical style={{width: 240, boxShadow: "0 4px 6px -2px #10182808"}}>
                  <Button fullWidth color="white" style={{padding: "12px 15px", textAlign: "left"}}>View profile</Button>
                  <Button fullWidth color="white" style={{padding: "12px 15px", textAlign: "left"}}>View original application</Button>
                  <Button fullWidth color="white" style={{padding: "12px 15px", textAlign: "left"}} disabled={status !== 'live'}>Change role conditions</Button>
                  <Button fullWidth color="white" style={{padding: "12px 15px", textAlign: "left"}}>Delete role</Button>
                </Box>
              )}>
              <IconButton icon="/icons/more-dark.png" width={13} height={3} style={{border: "1px solid #D2D6DB", width: 33.6, height: 33.6}} />
            </Popover>
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
