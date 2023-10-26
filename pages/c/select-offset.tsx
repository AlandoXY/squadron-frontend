import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Header from "@/components/header";
import Box from "@/components/box";
import Typography from "@/components/typography";
import Input from "@/components/input";
import Image from "next/image";
import Button from "@/components/button";
import SustainabilityMakeSubmit from "@/components/c/sustainability/sustainability-make-submit";

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
  background-color: #ffffff;
  padding: 50px 0;
`

const ContentMain = styled.div`
  width: 100%;
  padding: 0 20px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #F9FAFB;
  box-shadow: 0 1px 2px 0 #1018280F;
  width: 100%;
  border-radius: 12px;
  background-color: white;
  overflow: hidden;
`

const Footer =  styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
`


export default function ProfileFlowExternal() {
  const [amount, setAmount] = useState("")
  const [project, setProject] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [step, setStep] = useState(1)
  const [sustainabilityMakeSubmitOpen, setSustainabilityMakeSubmitOpen] = useState(false)

  return (
    <Container>
      <Header />
      <Content>
        <ContentMain>
          {
            step === 1 && (
              <>
                <Card style={{width: 1200, margin: "0 auto 50px"}}>
                  <Box vertical style={{padding: 15}}>
                    <Typography color="#111927" fontSize={24} fontWeight={500}>1. Select the footprint amount to offset</Typography>
                    <Typography color="#4D5761" style={{width: 500}}>Choose how much you would like to offset your squad by. 100% of the funds are given directly to the offset projects.</Typography>
                    <Box fullWidth alignItem="flex-end" style={{gap: 20, marginTop: 30 }}>
                      <Card style={{flex: 1, margin: "0 auto"}}>
                        <Box style={{backgroundColor: "#0B0F00", padding: "16px 32px"}}>
                          <Typography color="#D0FC4A" fontWeight={500}>Most popular</Typography>
                        </Box>
                        <Box flexDirection="column" justifyContent="center" style={{padding: 20}}>
                          <Input type="radio" name="hear" noBorder width={15} value="1" checked={amount === "1"} onChange={(e) => setAmount(e.target.value)} />
                          <Typography color="#4D5761" fontSize={30} fontWeight={500}>200%</Typography>
                          <Typography color="#6C737F" fontWeight={500}>Climate Negative</Typography>
                          <Typography color="#111927" fontSize={24} fontWeight={600}>Efficient</Typography>
                          <Typography color="#384250">Lorem ipsum dolor sit amet consectetur. Lorem eu consequat et proin bibendum. </Typography>
                        </Box>
                      </Card>
                      <Card style={{flex: 1, margin: "0 auto"}}>
                        <Box flexDirection="column" justifyContent="center" style={{padding: 20}}>
                          <Input type="radio" name="hear" noBorder width={15} value="2" checked={amount === "2"} onChange={(e) => setAmount(e.target.value)} />
                          <Typography color="#4D5761" fontSize={30} fontWeight={500}>100%</Typography>
                          <Typography color="#6C737F" fontWeight={500}>Climate Neutral</Typography>
                          <Typography color="#111927" fontSize={24} fontWeight={600}>pro</Typography>
                          <Typography color="#384250">Lorem ipsum dolor sit amet consectetur. Lorem eu consequat et proin bibendum. </Typography>
                        </Box>
                      </Card>
                      <Card style={{flex: 1, margin: "0 auto"}}>
                        <Box flexDirection="column" justifyContent="center" style={{padding: 20}}>
                          <Input type="radio" name="hear" noBorder width={15} value="3" checked={amount === "3"} onChange={(e) => setAmount(e.target.value)} />
                          <Typography color="#4D5761" fontSize={30} fontWeight={500}>300%</Typography>
                          <Typography color="#6C737F" fontWeight={500}>Climate Negative+</Typography>
                          <Typography color="#111927" fontSize={24} fontWeight={600}>Superhuman</Typography>
                          <Typography color="#384250">Lorem ipsum dolor sit amet consectetur. Lorem eu consequat et proin bibendum. </Typography>
                        </Box>
                      </Card>
                    </Box>
                  </Box>
                </Card>
                <Card style={{width: 1200, margin: "0 auto 50px", opacity: amount ? 1 : 0.5}}>
                  <Box vertical style={{padding: 15}}>
                    <Typography color="#111927" fontSize={24} fontWeight={500}>2. Select a project</Typography>
                    <Typography color="#4D5761" style={{width: 500}}>Blablablablabla</Typography>
                    <Box vertical fullWidth style={{gap: 20, marginTop: 30 }}>
                      <Card style={{flexDirection: "row", alignItems: "center", flex: 1, margin: "0 auto"}}>
                        <Box style={{flex: 1}}>
                          <Input type="radio" name="project" noBorder width={15} value="1" checked={project === "1"} onChange={(e) => setProject(e.target.value)} />
                          <Image src="/images/select-offset-1.png" alt="Project" width={130} height={130} />
                          <Box vertical style={{padding: 20}}>
                            <Typography color="#384250" fontSize={14} style={{marginBottom: 3}}>Category</Typography>
                            <Typography color="#111927" fontWeight={500}>Restoring Luangwa Community Forests</Typography>
                            <Box style={{margin: "5px 0 15px"}}>
                              <Image src="/icons/location.png" alt="Location" width={12} height={15} style={{marginRight: 5}} />
                              <Typography color="#6C737F" fontSize={14}>Nyimba District, Lusaka Province, Republic of Zambia</Typography>
                            </Box>
                            <Button color="white" fontColor="#384250" style={{fontSize: 14, fontWeight: 600, border: "1px solid #D2D6DB"}}>See project</Button>
                          </Box>
                        </Box>
                        <Typography color="#111927" fontSize={24} fontWeight={600} style={{marginRight: 20}}>$149.43</Typography>
                      </Card>
                      <Card style={{flexDirection: "row", alignItems: "center", flex: 1, margin: "0 auto"}}>
                        <Box style={{flex: 1}}>
                          <Input type="radio" name="project" noBorder width={15} value="2" checked={project === "2"} onChange={(e) => setProject(e.target.value)} />
                          <Image src="/images/select-offset-2.png" alt="Project" width={130} height={130} />
                          <Box vertical style={{padding: 20}}>
                            <Typography color="#384250" fontSize={14} style={{marginBottom: 3}}>Category</Typography>
                            <Typography color="#111927" fontWeight={500}>Charm Industrial Bio-Oil</Typography>
                            <Box style={{margin: "5px 0 15px"}}>
                              <Image src="/icons/location.png" alt="Location" width={12} height={15} style={{marginRight: 5}} />
                              <Typography color="#6C737F" fontSize={14}>Nyimba District, Lusaka Province, Republic of Zambia</Typography>
                            </Box>
                            <Button color="white" fontColor="#384250" style={{fontSize: 14, fontWeight: 600, border: "1px solid #D2D6DB"}}>See project</Button>
                          </Box>
                        </Box>
                        <Typography color="#111927" fontSize={24} fontWeight={600} style={{marginRight: 20}}>$149.43</Typography>
                      </Card>
                      <Card style={{flexDirection: "row", alignItems: "center", flex: 1, margin: "0 auto"}}>
                        <Box style={{flex: 1}}>
                          <Input type="radio" name="project" noBorder width={15} value="3" checked={project === "3"} onChange={(e) => setProject(e.target.value)} />
                          <Image src="/images/select-offset-3.png" alt="Project" width={130} height={130} />
                          <Box vertical style={{padding: 20}}>
                            <Typography color="#384250" fontSize={14} style={{marginBottom: 3}}>Category</Typography>
                            <Typography color="#111927" fontWeight={500}>Carbo Culture Biochar</Typography>
                            <Box style={{margin: "5px 0 15px"}}>
                              <Image src="/icons/location.png" alt="Location" width={12} height={15} style={{marginRight: 5}} />
                              <Typography color="#6C737F" fontSize={14}>Nyimba District, Lusaka Province, Republic of Zambia</Typography>
                            </Box>
                            <Button color="white" fontColor="#384250" style={{fontSize: 14, fontWeight: 600, border: "1px solid #D2D6DB"}}>See project</Button>
                          </Box>
                        </Box>
                        <Typography color="#111927" fontSize={24} fontWeight={600} style={{marginRight: 20}}>$149.43</Typography>
                      </Card>
                      <Card style={{flexDirection: "row", alignItems: "center", flex: 1, margin: "0 auto"}}>
                        <Box style={{flex: 1}}>
                          <Input type="radio" name="project" noBorder width={15} value="4" checked={project === "4"} onChange={(e) => setProject(e.target.value)} />
                          <Image src="/images/select-offset-4.png" alt="Project" width={130} height={130} />
                          <Box vertical style={{padding: 20}}>
                            <Typography color="#384250" fontSize={14} style={{marginBottom: 3}}>Category</Typography>
                            <Typography color="#111927" fontWeight={500}>CarbonCure Concrete Mineralisation</Typography>
                            <Box style={{margin: "5px 0 15px"}}>
                              <Image src="/icons/location.png" alt="Location" width={12} height={15} style={{marginRight: 5}} />
                              <Typography color="#6C737F" fontSize={14}>Nyimba District, Lusaka Province, Republic of Zambia</Typography>
                            </Box>
                            <Button color="white" fontColor="#384250" style={{fontSize: 14, fontWeight: 600, border: "1px solid #D2D6DB"}}>See project</Button>
                          </Box>
                        </Box>
                        <Typography color="#111927" fontSize={24} fontWeight={600} style={{marginRight: 20}}>$149.43</Typography>
                      </Card>
                    </Box>
                  </Box>
                </Card>
              </>
            )
          }
          {
            step === 2 && (
              <Box vertical style={{width: 800, margin: "0 auto 50px"}}>
                <Typography color="#111927" fontSize={24} fontWeight={500}>Order</Typography>
                <Typography color="#4D5761" style={{margin: "10px 0 20px"}}>ACME9992342342</Typography>
                <Card style={{padding: 20, marginBottom: 40}}>
                  <Typography color="#111927" fontSize={14} fontWeight={500} style={{marginBottom: 5}}>Product</Typography>
                  <Typography color="#4D5761" style={{marginBottom: 15}}>Restoring Luangwa Community Forests</Typography>
                  <Typography color="#111927" fontSize={14} fontWeight={500} style={{marginBottom: 5}}>Total to pay</Typography>
                  <Typography color="#4D5761">$298.86</Typography>
                </Card>
                <Typography color="#111927" fontSize={18} fontWeight={500}>Choose your payment method</Typography>
                <Typography color="#4D5761" style={{margin: "10px 0 20px"}}>Select or add a new method of payment</Typography>
                <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{border: paymentMethod === "0" ? "2px solid #4B48EC" : "1px solid #E5E7EB", backgroundColor: paymentMethod === "0" ? "#FAFAFE" : "#FFFFFF", borderRadius: 12, padding: 16, marginBottom: 12}} onClick={() => setPaymentMethod("0")}>
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
                <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{border: paymentMethod === "1" ? "2px solid #4B48EC" : "1px solid #E5E7EB", backgroundColor: paymentMethod === "1" ? "#FAFAFE" : "#FFFFFF", borderRadius: 12, padding: 16, marginBottom: 12}} onClick={() => setPaymentMethod("1")}>
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
                <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{border: paymentMethod === "2" ? "2px solid #4B48EC" : "1px solid #E5E7EB", backgroundColor: paymentMethod === "2" ? "#FAFAFE" : "#FFFFFF", borderRadius: 12, padding: 16, marginBottom: 12}} onClick={() => setPaymentMethod("2")}>
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
                <Box fullWidth justifyContent="space-between" alignItem="flex-start" style={{border: "1px solid #E5E7EB", borderRadius: 12, padding: 16}}>
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
              </Box>
            )
          }
        </ContentMain>
      </Content>
      <Footer>
        <Button color="white" fontColor="#384250" width="114px" height="40px">Cancel</Button>
        <Box>
          <Button color="white" fontColor="#384250" width="114px" height="40px" style={{border: "1px solid #D2D6DB", marginRight: 50}} disabled={step !== 2} onClick={() => {
            if (step === 2) {
              setStep(1)
            }
          }}>Back</Button>
          <Button color="#4B48EC" fontColor="white" width="auto" height="40px" onClick={() => {
            if (step === 1) {
              setStep(step + 1)
            } else {
              setSustainabilityMakeSubmitOpen(true)
            }
          }} disabled={!amount || !project}>{step === 1 ? 'Next' : 'Make payment'}</Button>
        </Box>
      </Footer>
      <SustainabilityMakeSubmit open={sustainabilityMakeSubmitOpen} setOpen={setSustainabilityMakeSubmitOpen} />
    </Container>
  )
}
