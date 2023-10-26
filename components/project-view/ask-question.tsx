import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React from "react";
import Box from "@/components/box";
import Input from "@/components/input";
import Image from "next/image";
import Textarea from "@/components/textarea";
import IconButton from "@/components/icon-button";

export default function AskQuestion({ open, setOpen, handleSubmit }) {
  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={790}>
      <Typography fontSize="18px" fontWeight={600} color="#111927">Ask a question</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Ask blablabla a question or check their FAQ </Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1'}}>
        <Box vertical>
          <Box fullWidth style={{backgroundColor: "#F3F4F6", borderRadius: 8, padding: 8}}>
            <Image src="/icons/avatar-1.png" width={50} height={50} alt="Avatar" style={{marginRight: 10}} />
            <div>
              <Typography color="#4D5761">Jack Green</Typography>
              <Typography fontWeight={600}>Project consultant</Typography>
            </div>
          </Box>
          <Box vertical fullWidth style={{marginTop: 15}}>
            <Typography color="#384250" fontSize="14px" fontWeight={500} style={{marginBottom: 10}}>Ask Jack a question</Typography>
            <Textarea withLimit={false} style={{width: "100%", height: 120}} />
          </Box>
          <Box fullWidth justifyContent="flex-end" style={{marginTop: 15}}>
            <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Cancel</Button>
            <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}} onClick={() => handleSubmit()}>Send invitation</Button>
          </Box>
          <Box fullWidth justifyContent="flex-end" style={{marginTop: 15}}>
            <Typography color="#384250" fontSize={14}>You will receive a response to your question in your email</Typography>
          </Box>
          <Box fullWidth justifyContent="flex-end" style={{margin: "20px 0"}}>
            <Box style={{flex: 1, borderTop: "1px solid #E5E7EB"}}></Box>
            <Typography color="#4D5761" fontSize={14} fontWeight={500} style={{margin: "0 10px"}}>Or</Typography>
            <Box style={{flex: 1, borderTop: "1px solid #E5E7EB"}}></Box>
          </Box>
          <Box vertical fullWidth>
            <Typography color="#000000" fontWeight={500} style={{marginBottom: 10}}>FAQ</Typography>
            <Box fullWidth justifyContent="space-between" style={{margin: "5px 0", backgroundColor: "#ffffff", padding: "8px 16px", borderRadius: 16}}>
              <Typography color="#101828" fontWeight={500}>Can I change my plan later?</Typography>
              <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
            </Box>
            <Box fullWidth justifyContent="space-between" style={{margin: "5px 0", backgroundColor: "#ffffff", padding: "8px 16px", borderRadius: 16}}>
              <Typography color="#101828" fontWeight={500}>What is your cancellation policy?</Typography>
              <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
            </Box>
            <Box fullWidth justifyContent="space-between" style={{margin: "5px 0", backgroundColor: "#ffffff", padding: "8px 16px", borderRadius: 16}}>
              <Typography color="#101828" fontWeight={500}>Can other info be added to an invoice?</Typography>
              <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
            </Box>
            <Box fullWidth justifyContent="space-between" style={{margin: "5px 0", backgroundColor: "#ffffff", padding: "8px 16px", borderRadius: 16}}>
              <Typography color="#101828" fontWeight={500}>How does billing work?</Typography>
              <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
            </Box>
            <Box fullWidth justifyContent="space-between" style={{margin: "5px 0", backgroundColor: "#ffffff", padding: "8px 16px", borderRadius: 16}}>
              <Typography color="#101828" fontWeight={500}>How do I change my account email?</Typography>
              <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
            </Box>
            <Box fullWidth justifyContent="space-between" style={{margin: "5px 0", backgroundColor: "#F9FAFB", padding: "8px 16px", borderRadius: 16}}>
              <Box vertical>
                <Typography color="#101828" fontWeight={500}>Is there a free trial available?</Typography>
                <Typography color="#475467">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</Typography>
              </Box>
              <IconButton icon="/icons/plus-circle.png" width={25} height={25} />
            </Box>
          </Box>
        </Box>
      </div>
    </Modal>
  )
}
