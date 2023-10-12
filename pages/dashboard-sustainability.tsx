import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Image from "next/image";
import Typography from "@/components/typography";
import NavbarItem from "@/components/navbar-item";
import IconButton from "@/components/icon-button";
import Navbar from "@/components/navbar";
import Button from "@/components/button";
import Box from "@/components/box";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Dropdown from "@/components/dropdown";
import TableRow from "@/components/table-row";
import TableCol from "@/components/table-col";
import Label from "@/components/label";
import Table from "@/components/table";
import {AsideBar} from "@/components/aside-bar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  width: 312px;
  border-right: 1px solid #E5E7EB;
  align-items: flex-start;
`

const AsideTop = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 20px 10px;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  //padding: 0 20px;
`

const ContentMain = styled.div`
  width: 100%;
  padding: 0 20px;
  //background-color: white;
`

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #E5E7EB;
  padding: 15px 20px;
  background-color: white;
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
  //margin-bottom: 50px;
`

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['2010', '2010', '2010', '2010', '2010', '2010', '2010'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [100, 80, 60, 40, 30, 20, 0],
      borderColor: '#A0D909',
      backgroundColor: '#FBFFE5',
    },
  ],
};

export default function DashboardPerks() {

  return (
    <Container>
      <AsideBar />
      <Content>
        <ContentMain>
          <Box flexDirection="column" alignItem="flex-start" style={{margin: "50px 0", paddingBottom: 50, borderBottom: "1px solid #E5E7EB"}}>
            <Typography color="#384250" fontWeight={500} fontSize="14px" style={{marginBottom: 10}}>Select your project</Typography>
            <Dropdown
              options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
              placeholder="Select your project"
              inputWidth="300px" />
          </Box>
          <Box style={{gap: 20}}>
            <Card style={{flex: 1}}>
              <Box vertical style={{padding: 20, borderBottom: "1px solid #E5E7EB"}}>
                <Typography color="#111927" fontWeight={500} fontSize={20}>Your carbon footprint by category</Typography>
                <Typography color="#6C737F" fontWeight={500}>This month</Typography>
              </Box>
              <Box vertical style={{padding: 20, marginBottom: 20}}>
                <Box>
                  <Box vertical>
                    <Typography color="#111927" fontSize={30}>$149.43</Typography>
                    <Typography color="#6C737F" fontWeight={600} style={{marginTop: 10}}>$149.43</Typography>
                  </Box>
                  <Box vertical style={{marginLeft: 30}}>
                    <Typography color="#111927" fontSize={30}>7.9</Typography>
                    <Typography color="#6C737F" fontWeight={600} style={{marginTop: 10}}>MT CO2e</Typography>
                  </Box>
                </Box>
                <Box fullWidth style={{borderRadius: 16, margin: "20px 0"}}>
                  <Box style={{backgroundColor: "#4B680C", width: "30%", height: 16, borderRadius: "16px 0 0 16px"}}></Box>
                  <Box style={{backgroundColor: "#5D8407", width: "25%", height: 16}}></Box>
                  <Box style={{backgroundColor: "#7BAE02", width: "16%", height: 16}}></Box>
                  <Box style={{backgroundColor: "#A0D909", width: "18%", height: 16}}></Box>
                  <Box style={{backgroundColor: "#D0FC4A", width: "11%", height: 16, borderRadius: "0 16px 16px 0"}}></Box>
                </Box>
                <Box fullWidth justifyContent="space-between">
                  <Box vertical>
                    <Typography color="#384250" fontWeight={600} style={{marginBottom: 15}}>Category</Typography>
                    <Box style={{marginBottom: 8}}>
                      <Box style={{backgroundColor: "#D0FC4A", width: 16, height: 16, borderRadius: "50%"}}></Box>
                      <Typography color="#1F2A37" fontSize={14} style={{marginLeft: 10}}>Equipment</Typography>
                    </Box>
                    <Box style={{marginBottom: 8}}>
                      <Box style={{backgroundColor: "#A0D909", width: 16, height: 16, borderRadius: "50%"}}></Box>
                      <Typography color="#1F2A37" fontSize={14} style={{marginLeft: 10}}>Equipment</Typography>
                    </Box>
                    <Box style={{marginBottom: 8}}>
                      <Box style={{backgroundColor: "#7BAE02", width: 16, height: 16, borderRadius: "50%"}}></Box>
                      <Typography color="#1F2A37" fontSize={14} style={{marginLeft: 10}}>Equipment</Typography>
                    </Box>
                    <Box style={{marginBottom: 8}}>
                      <Box style={{backgroundColor: "#5D8407", width: 16, height: 16, borderRadius: "50%"}}></Box>
                      <Typography color="#1F2A37" fontSize={14} style={{marginLeft: 10}}>Equipment</Typography>
                    </Box>
                    <Box>
                      <Box style={{backgroundColor: "#4B680C", width: 16, height: 16, borderRadius: "50%"}}></Box>
                      <Typography color="#1F2A37" fontSize={14} style={{marginLeft: 10}}>Equipment</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box vertical style={{marginRight: 20}}>
                      <Typography color="#384250" fontWeight={600} style={{marginBottom: 15}}>Spent</Typography>
                      <Box style={{marginBottom: 8}}>
                        <Typography color="#6C737F">$45.40</Typography>
                      </Box>
                      <Box style={{marginBottom: 8}}>
                        <Typography color="#6C737F">$26.48</Typography>
                      </Box>
                      <Box style={{marginBottom: 8}}>
                        <Typography color="#6C737F">$28.37</Typography>
                      </Box>
                      <Box style={{marginBottom: 8}}>
                        <Typography color="#6C737F">$32.16</Typography>
                      </Box>
                      <Box>
                        <Typography color="#6C737F">$17.02</Typography>
                      </Box>
                    </Box>
                    <Box flexDirection="column" alignItem="flex-end">
                      <Typography color="#384250" fontWeight={600} style={{marginBottom: 15}}>MT CO2e</Typography>
                      <Box style={{marginBottom: 8}}>
                        <Typography color="#6C737F">2.4</Typography>
                      </Box>
                      <Box style={{marginBottom: 8}}>
                        <Typography color="#6C737F">1.4</Typography>
                      </Box>
                      <Box style={{marginBottom: 8}}>
                        <Typography color="#6C737F">1.5</Typography>
                      </Box>
                      <Box style={{marginBottom: 8}}>
                        <Typography color="#6C737F">1.7</Typography>
                      </Box>
                      <Box>
                        <Typography color="#6C737F">0.9</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Box vertical style={{flex: 1}}>
              <Box fullWidth style={{gap: 20, marginBottom: 10}}>
                <Card style={{flex: 1}}>
                  <Box vertical style={{padding: 20, borderBottom: "1px solid #E5E7EB"}}>
                    <Typography color="#111927" fontWeight={500} fontSize={14}>Total C02 emissions this year</Typography>
                  </Box>
                  <Box justifyContent="space-between" alignItem="flex-end" style={{padding: 10}}>
                    <Typography color="#111927" fontSize={14}>MT C02</Typography>
                    <Typography color="#111927" fontSize={36} fontWeight={500}>186.65</Typography>
                  </Box>
                </Card>
                <Card style={{flex: 1}}>
                  <Box vertical style={{padding: 20, borderBottom: "1px solid #E5E7EB"}}>
                    <Typography color="#111927" fontWeight={500} fontSize={14}>C02 Neutralised this year</Typography>
                  </Box>
                  <Box justifyContent="space-between" alignItem="flex-end" style={{padding: 10}}>
                    <Typography color="#111927" fontSize={14}>MT C02</Typography>
                    <Typography color="#111927" fontSize={36} fontWeight={500}>373.3</Typography>
                  </Box>
                </Card>
              </Box>
              <Box fullWidth style={{gap: 20, marginBottom: 10}}>
                <Card style={{flex: 1}}>
                  <Box vertical style={{padding: 20, borderBottom: "1px solid #E5E7EB"}}>
                    <Typography color="#111927" fontWeight={500} fontSize={14}>Total C02 emissions this year</Typography>
                  </Box>
                  <Box justifyContent="space-between" alignItem="flex-end" style={{padding: 10}}>
                    <Typography color="#111927" fontSize={14}>MT C02</Typography>
                    <Typography color="#111927" fontSize={36} fontWeight={500}>186.65</Typography>
                  </Box>
                </Card>
                <Card style={{flex: 1}}>
                  <Box vertical style={{padding: 20, borderBottom: "1px solid #E5E7EB"}}>
                    <Typography color="#111927" fontWeight={500} fontSize={14}>C02 Neutralised this year</Typography>
                  </Box>
                  <Box justifyContent="space-between" alignItem="flex-end" style={{padding: 10}}>
                    <Typography color="#111927" fontSize={14}>MT C02</Typography>
                    <Typography color="#111927" fontSize={36} fontWeight={500}>373.3</Typography>
                  </Box>
                </Card>
              </Box>
              <Box vertical style={{backgroundColor: "black", padding: 24, borderRadius: 16}}>
                <Typography color="white" fontWeight={600} fontSize={24} style={{marginBottom: 10}}>Offset your carbon emissions estimate</Typography>
                <Typography color="rgba(255, 255, 255, 0.8)" fontSize={16} style={{marginBottom: 10}}>Balance the environmental impact of your squads by contributing to a carbon offset project.</Typography>
                <Button color="#D0FC4A" fontColor="#384250">Take Action</Button>
              </Box>
            </Box>
          </Box>
          <Box vertical style={{margin: "20px 0"}}>
            <Typography color="#111927" fontWeight={500} fontSize={24} style={{marginBottom: 10}}>Carbon Emissions</Typography>
            <Card style={{flex: 1}}>
              <Line options={options} data={data} />
            </Card>
          </Box>
          <Box vertical style={{margin: "20px 0"}}>
            <Typography color="#111927" fontWeight={500} fontSize={24} style={{marginBottom: 10}}>Orders</Typography>
            <Card style={{flex: 1}}>
              <Table>
                <thead>
                <TableRow>
                  <TableCol>Date</TableCol>
                  <TableCol>Order</TableCol>
                  <TableCol>Status</TableCol>
                  <TableCol>Metric Tonnes</TableCol>
                  <TableCol></TableCol>
                </TableRow>
                </thead>
                <tbody>
                <TableRow>
                  <TableCol style={{fontWeight: 600}}>
                    <Typography color="#4D5761" fontSize={14}>01 JAN 23</Typography>
                  </TableCol>
                  <TableCol><Typography color="#4D5761" fontSize={14}>234823</Typography></TableCol>
                  <TableCol><Label color="#EFF8FF" fontColor="#175CD3" borderColor="#EFF8FF" borderRadius="0.3rem">Processing</Label></TableCol>
                  <TableCol>
                    <Typography color="#4D5761" fontSize={14}>5.0</Typography>
                  </TableCol>
                  <TableCol>
                    <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}}>Certificate</Button>
                    <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}}>Invoice</Button>
                  </TableCol>
                </TableRow>
                <TableRow>
                  <TableCol style={{fontWeight: 600}}>
                    <Typography color="#4D5761" fontSize={14}>01 JAN 23</Typography>
                  </TableCol>
                  <TableCol><Typography color="#4D5761" fontSize={14}>234823</Typography></TableCol>
                  <TableCol><Label color="#EFF8FF" fontColor="#175CD3" borderColor="#EFF8FF" borderRadius="0.3rem">Processing</Label></TableCol>
                  <TableCol>
                    <Typography color="#4D5761" fontSize={14}>5.0</Typography>
                  </TableCol>
                  <TableCol>
                    <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}}>Certificate</Button>
                    <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}}>Invoice</Button>
                  </TableCol>
                </TableRow>
                <TableRow>
                  <TableCol style={{fontWeight: 600}}>
                    <Typography color="#4D5761" fontSize={14}>01 JAN 23</Typography>
                  </TableCol>
                  <TableCol><Typography color="#4D5761" fontSize={14}>234823</Typography></TableCol>
                  <TableCol><Label color="#EFF8FF" fontColor="#175CD3" borderColor="#EFF8FF" borderRadius="0.3rem">Processing</Label></TableCol>
                  <TableCol>
                    <Typography color="#4D5761" fontSize={14}>5.0</Typography>
                  </TableCol>
                  <TableCol>
                    <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}}>Certificate</Button>
                    <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}}>Invoice</Button>
                  </TableCol>
                </TableRow>
                <TableRow>
                  <TableCol style={{fontWeight: 600}}>
                    <Typography color="#4D5761" fontSize={14}>01 JAN 23</Typography>
                  </TableCol>
                  <TableCol><Typography color="#4D5761" fontSize={14}>234823</Typography></TableCol>
                  <TableCol><Label color="#EFF8FF" fontColor="#175CD3" borderColor="#EFF8FF" borderRadius="0.3rem">Processing</Label></TableCol>
                  <TableCol>
                    <Typography color="#4D5761" fontSize={14}>5.0</Typography>
                  </TableCol>
                  <TableCol>
                    <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB", marginRight: 10}}>Certificate</Button>
                    <Button color="white" fontColor="#384250" style={{border: "1px solid #D2D6DB"}}>Invoice</Button>
                  </TableCol>
                </TableRow>
                </tbody>
              </Table>
            </Card>
          </Box>
          <Box vertical style={{margin: "20px 0"}}>
            <Typography color="#111927" fontWeight={500} fontSize={24} style={{marginBottom: 10}}>Projects Available</Typography>
            <Box fullWidth>
              <Box style={{flex: 1, background: "url('/images/project-01.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
              <Box style={{flex: 1, background: "url('/images/project-02.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
              <Box style={{flex: 1, background: "url('/images/project-03.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
              <Box style={{flex: 1, background: "url('/images/project-04.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
            </Box>
            <Box fullWidth>
              <Box style={{flex: 1, background: "url('/images/project-05.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
              <Box style={{flex: 1, background: "url('/images/project-06.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
              <Box style={{flex: 1, background: "url('/images/project-07.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
              <Box style={{flex: 1, background: "url('/images/project-08.png') center no-repeat", height: 216, borderRadius: 8, backgroundSize: "100% 100%"}}></Box>
            </Box>
          </Box>
        </ContentMain>
      </Content>
    </Container>
  )
}
