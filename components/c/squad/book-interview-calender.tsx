import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Button from "@/components/button";
import Image from "next/image";
import Typography from "@/components/typography";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../app/global.css';
import IconButton from "@/components/icon-button";
import Input from "@/components/input";

export default function BookInterviewCalender({ open, setOpen }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [step, setStep] = useState(0);

  return (
    <Modal open={open} width={850} style={{padding: 0}}>
      <Box alignItem="flex-start">
        <Box vertical style={{padding: 24, width: 360}}>
          <Image src="/icons/avatar.png" alt="Avatar" width={60} height={60} />
          <Typography color="#384250" fontSize={14} style={{marginTop: 10}}>Patricia Montero</Typography>
          <Typography color="#000000" fontWeight={500} fontSize={20} style={{margin: "30px 0 10px"}}>Interview Call</Typography>
          <Typography color="#384250" fontSize={14}>Book a call to interview this talent</Typography>
        </Box>
        <Box fullWidth vertical style={{padding: "50px 24px", borderLeft: "1px solid #E5E7EB"}}>
          {
            step === 0 && (
              <>
                <Typography color="#111927" fontSize={18} fontWeight={600}>Select a day & time</Typography>
                <Box style={{marginTop: 30}}>
                  <Calendar onChange={setDate} value={date} />
                  <Box flexDirection="column" justifyContent="center" style={{marginLeft: 20}}>
                    <IconButton icon="/icons/up-arrow.png" width={16} height={9} onClick={() => {
                      if (scrollY < -43.6) {
                        setScrollY(scrollY + 43.6)
                      }
                    }} />
                    <Box vertical style={{height: 220, overflowY: "hidden", margin: "10px 0"}}>
                      <Box vertical style={{transition: "all 0.5s ease", transform: `translateY(${scrollY}px)`}}>
                        {
                          new Array(48).fill(0).map((item, index) => {
                            const curTime = `${(index === 24 || index === 25) ? 12 : Math.floor(index / 2) % 12}.${index % 2 === 0 ? "00" : "30"} ${index < 24 ? "am": "pm"}`

                            return (
                              <Button
                                key={index}
                                color={time === curTime ? "#006edc" : "white"}
                                fontColor={time === curTime ? "white" : "#384250"}
                                width="120px"
                                style={{border: "1px solid #D2D6DB", fontWeight: 600, marginBottom: 10}}
                                onClick={() => setTime(curTime)}
                              >
                                {curTime}
                              </Button>
                            )
                          })
                        }
                      </Box>
                    </Box>
                    <IconButton icon="/icons/down-arrow.png" width={16} height={9} onClick={() => {
                      if (scrollY > -1831.2) {
                        setScrollY(scrollY - 43.6)}
                    }
                    } />
                  </Box>
                </Box>
              </>
            )
          }
          {
            step === 1 && (
              <Box vertical fullWidth>
                <Box vertical fullWidth style={{border: "1px solid #E5E7EB", backgroundColor: "#F3F4F6", borderRadius: 8}}>
                  <Box fullWidth justifyContent="space-between" style={{padding: 16, borderBottom: "1px solid #E5E7EB"}}>
                    <Typography color="#111927" fontWeight={500}>Review your call booking</Typography>
                    <IconButton icon="/icons/edit.png" width={24} height={24} />
                  </Box>
                  <Box vertical style={{padding: "24px 16px"}}>
                    <Typography color="#4D5761" fontWeight={500} style={{marginBottom: 10}}>Date: 25 Mar 2023</Typography>
                    <Typography color="#4D5761" fontWeight={500}>Time: 15:30 AM</Typography>
                  </Box>
                </Box>
                <Box fullWidth vertical style={{marginTop: 40}}>
                  <Typography color="#111927" fontSize={18} fontWeight={600}>Your details</Typography>
                  <Box fullWidth vertical style={{marginTop: 20}}>
                    <Typography color="#384250" fontWeight={500} style={{marginBottom: 5}}>Name</Typography>
                    <Input fullWidth />
                  </Box>
                  <Box fullWidth vertical style={{marginTop: 20}}>
                    <Typography color="#384250" fontWeight={500} style={{marginBottom: 5}}>Phone number</Typography>
                    <Input fullWidth />
                  </Box>
                  <Box fullWidth vertical style={{marginTop: 20}}>
                    <Typography color="#384250" fontWeight={500} style={{marginBottom: 5}}>Email</Typography>
                    <Input fullWidth />
                  </Box>
                </Box>
              </Box>
            )
          }
        </Box>
      </Box>
      <Box justifyContent="space-between" style={{borderTop: "1px solid #E5E7EB", padding: 24}}>
        <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)} disabled>Back</Button>
        <Box>
          <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => {
            setTime("");
            setScrollY(0);
            setStep(0);
            setOpen(false)
          }}>Cancel</Button>
          <Button color="#111927" fontColor="white" style={{marginLeft: 10}} onClick={() => {
            if (step === 0) {
              setStep(1);
            } else {
              setTime("");
              setScrollY(0);
              setStep(0);
              setOpen(false);
            }
          }} disabled={!time}>{step === 0 ? "Next" : "Book call"}</Button>
        </Box>
      </Box>
    </Modal>
  )
}
