import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Typography from "@/components/typography";
import Box from "@/components/box";
import Input from "@/components/input";
import {DashboardHeader} from "@/components/dashboard-header";
import {AsideBarC} from "@/components/aside-bar-c";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f9fafb;
  //padding: 0 20px;
`

const ContentMain = styled.div`
  width: 100%;
  //padding: 40px;
  background-color: white;
`

export default function DashboardResourcesSectionDetail() {
  return (
    <Container>
      <AsideBarC />
      <Content>
        <DashboardHeader />
        <ContentMain>
          <Box vertical style={{backgroundColor: "black", padding: 30}}>
            <Typography color="white" fontSize={30} fontWeight={600}>Resources</Typography>
            <Typography color="white" style={{margin: "10px 0 30px"}}>Find a solution for any topic</Typography>
            <Input placeholder="Search any topic" prefixIcon="/icons/search-lg.png" width={400} style={{height: 15}} />
          </Box>
          <Box vertical style={{padding: 30}}>
            <Box style={{marginBottom: 40}}>
              <Typography color="#4D5761" fontSize={14} fontWeight={500}>Resources</Typography>
              <Typography color="#D2D6DB" fontSize={14} style={{margin: "0 12px"}}>/</Typography>
              <Typography color="#4D5761" fontSize={14} fontWeight={500}>Section 01</Typography>
              <Typography color="#D2D6DB" fontSize={14} style={{margin: "0 12px"}}>/</Typography>
              <Typography color="#1B18E4" fontSize={14} fontWeight={600}>Article or question 01</Typography>
            </Box>
            <Box vertical>
              <Typography color="#111927" fontSize={24} fontWeight={500} style={{marginBottom: 20}}>Article or question 01</Typography>
              <Typography color="#4D5761" style={{marginBottom: 20}}>Lorem ipsum dolor sit amet consectetur. Tristique massa pretium ullamcorper eu volutpat justo cum facilisis. Egestas volutpat risus pretium id imperdiet urna in bibendum. Tellus orci at sit facilisis. Sed a viverra pretium proin. Nunc integer fusce integer non urna felis habitasse tellus. Pulvinar odio hac eget gravida nunc quis sit amet. A praesent sagittis id senectus sit non. Convallis sed condimentum donec praesent nunc id. Blandit viverra nisi curabitur ut. Mauris gravida in nulla volutpat auctor eget commodo. Nibh euismod nunc massa nibh ac lectus. Venenatis massa aliquam iaculis leo posuere nulla. Sagittis felis elit vestibulum quam nullam ipsum. Et a sed mattis lacus.</Typography>
              <Typography color="#4D5761" style={{marginBottom: 20}}>Fringilla egestas suspendisse urna vel. Vitae quisque ornare mauris lorem elementum amet vulputate pellentesque mauris. Neque est mauris magna tincidunt tortor pellentesque lectus placerat. Tortor vel a venenatis posuere. Nam fringilla orci nulla euismod sed sagittis mi tempor enim. Sem ipsum vestibulum orci mi tincidunt ultricies velit suscipit. A enim id malesuada vel. Rutrum amet pellentesque eget faucibus dignissim tempor malesuada. Sit feugiat et proin sit pellentesque tortor arcu.</Typography>
              <Typography color="#4D5761">Facilisi auctor vel urna tortor tortor ipsum turpis feugiat orci. In dignissim vitae eget urna hendrerit non est lectus orci. Nisl et metus neque lectus. Odio praesent in enim quis magnis potenti eget. Nullam rutrum nibh nisl vitae mus curabitur sapien diam interdum. Amet in elementum pellentesque elit posuere nunc.</Typography>
            </Box>
          </Box>
        </ContentMain>
      </Content>
    </Container>
  )
}
