import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React, {useState} from "react";
import Textarea from "@/components/textarea";
import Box from "@/components/box";
import Image from "next/image";
import Input from "@/components/input";

export default function SquadPaymentMethod({ open, setOpen, handleSubmit }) {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={480}>
      <Typography fontSize="18px" fontWeight={600} color="#111927">Choose your payment method</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Select or add a new method of payment</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderBottom: '1px solid #e1e1e1'}}>
        <Box justifyContent="space-between" alignItem="flex-start" style={{border: paymentMethod === "0" ? "2px solid #4B48EC" : "1px solid #E5E7EB", backgroundColor: paymentMethod === "0" ? "#FAFAFE" : "#FFFFFF", borderRadius: 12, padding: 16, marginBottom: 12}} onClick={() => setPaymentMethod("0")}>
          <Box alignItem="flex-start">
            <Box justifyContent="center" style={{width: 55, border: "1px solid #F2F4F7", borderRadius: 6, padding: 10, backgroundColor: "white", marginRight: 12}}>
              <Image src="/icons/visa-logo.png" alt="Visa" width={32} height={11} />
            </Box>
            <Box vertical>
              <Typography color="#384250" fontWeight={500} fontSize={14}>Visa ending in 1234</Typography>
              <Typography color="#4D5761" fontSize={14} style={{margin: "5px 0 10px"}}>Expiry 06/2024</Typography>
              <Box>
                <Typography color="#4D5761" fontSize={14} fontWeight={600}>Set as default</Typography>
                <Typography color="#1B18E4" fontSize={14} fontWeight={600} style={{marginLeft: 10}}>Edit</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Input type="radio" name="hear" noBorder width="auto" height="auto" containerRest={{style: {padding: 0}}} value="0" checked={paymentMethod === "0"} onChange={(e) => setPaymentMethod(e.target.value)} />
          </Box>
        </Box>
        <Box justifyContent="space-between" alignItem="flex-start" style={{border: paymentMethod === "1" ? "2px solid #4B48EC" : "1px solid #E5E7EB", backgroundColor: paymentMethod === "1" ? "#FAFAFE" : "#FFFFFF", borderRadius: 12, padding: 16, marginBottom: 12}} onClick={() => setPaymentMethod("1")}>
          <Box alignItem="flex-start">
            <Box justifyContent="center" style={{width: 55, border: "1px solid #F2F4F7", borderRadius: 6, padding: 10, backgroundColor: "white", marginRight: 12}}>
              <Image src="/icons/Mastercard.png" alt="Visa" width={30} height={18} />
            </Box>
            <Box vertical>
              <Typography color="#384250" fontWeight={500} fontSize={14}>Visa ending in 1234</Typography>
              <Typography color="#4D5761" fontSize={14} style={{margin: "5px 0 10px"}}>Expiry 06/2024</Typography>
              <Box>
                <Typography color="#4D5761" fontSize={14} fontWeight={600}>Set as default</Typography>
                <Typography color="#1B18E4" fontSize={14} fontWeight={600} style={{marginLeft: 10}}>Edit</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Input type="radio" name="hear" noBorder width="auto" height="auto" containerRest={{style: {padding: 0}}} value="1" checked={paymentMethod === "1"} onChange={(e) => setPaymentMethod(e.target.value)} />
          </Box>
        </Box>
        <Box justifyContent="space-between" alignItem="flex-start" style={{border: paymentMethod === "2" ? "2px solid #4B48EC" : "1px solid #E5E7EB", backgroundColor: paymentMethod === "2" ? "#FAFAFE" : "#FFFFFF", borderRadius: 12, padding: 16, marginBottom: 12}} onClick={() => setPaymentMethod("2")}>
          <Box alignItem="flex-start">
            <Box justifyContent="center" style={{width: 55, border: "1px solid #F2F4F7", borderRadius: 6, padding: 10, backgroundColor: "white", marginRight: 12}}>
              <Image src="/icons/ApplePay.png" alt="Visa" width={33} height={14} />
            </Box>
            <Box vertical>
              <Typography color="#384250" fontWeight={500} fontSize={14}>Visa ending in 1234</Typography>
              <Typography color="#4D5761" fontSize={14} style={{margin: "5px 0 10px"}}>Expiry 06/2024</Typography>
              <Box>
                <Typography color="#4D5761" fontSize={14} fontWeight={600}>Set as default</Typography>
                <Typography color="#1B18E4" fontSize={14} fontWeight={600} style={{marginLeft: 10}}>Edit</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Input type="radio" name="hear" noBorder width="auto" height="auto" containerRest={{style: {padding: 0}}} value="2" checked={paymentMethod === "2"} onChange={(e) => setPaymentMethod(e.target.value)} />
          </Box>
        </Box>
        <Box justifyContent="space-between" alignItem="flex-start" style={{border: "1px solid #E5E7EB", borderRadius: 12, padding: 16}}>
          <Box alignItem="flex-start">
            <Box justifyContent="center" style={{width: 55, border: "1px solid #F2F4F7", borderRadius: 6, padding: 10, backgroundColor: "white", marginRight: 12}}>
              <Image src="/icons/add-card.png" alt="Visa" width={24} height={24} />
            </Box>
            <Box vertical>
              <Typography color="#384250" fontWeight={500} fontSize={14}>Visa ending in 1234</Typography>
              <Typography color="#4D5761" fontSize={14} style={{margin: "5px 0 10px"}}>Expiry 06/2024</Typography>
              <Box>
                <Typography color="#4D5761" fontSize={14} fontWeight={600}>Set as default</Typography>
                <Typography color="#1B18E4" fontSize={14} fontWeight={600} style={{marginLeft: 10}}>Edit</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Button color="#FAFAFE" fontColor="#1B18E4" style={{fontWeight: 600}}>Add</Button>
          </Box>
        </Box>
      </div>
      <Box>
        <Button color="white" style={{border: '1px solid #D2D6DB', flex: 1}} onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="#111927" fontColor="white" style={{marginLeft: 10, flex: 1}} onClick={() => handleSubmit()}>Confirm</Button>
      </Box>
    </Modal>
  )
}
