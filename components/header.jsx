import styled from "styled-components";
import IconButton from "@/components/icon-button";
import React from "react";
import Button from "@/components/button";
import Box from "@/components/box";
import {useRouter} from "next/navigation";


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 100px;
  border: 1px solid #F3F4F6;
  color: #4D5761;
  background-color: white;
`;

const HeaderMenus = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderMenuItem = styled.div`
  color: #4D5761;
  margin: 20px;
`;

export default function Header({ onlyLogo }) {
  const router = useRouter()

  return (
    <HeaderContainer>
      <Box>
        <IconButton width={40} height={40} fontSize="20px" icon="/icons/logo.png">squadron</IconButton>
        {
          !onlyLogo && (
            <HeaderMenus>
              <HeaderMenuItem>Home</HeaderMenuItem>
              <HeaderMenuItem>Products</HeaderMenuItem>
              <HeaderMenuItem>Resources</HeaderMenuItem>
              <HeaderMenuItem>Pricing</HeaderMenuItem>
            </HeaderMenus>
          )
        }
      </Box>
      {
        !onlyLogo && (
          <Box>
            <Button style={{marginRight: 10}} color="transparent">Log in</Button>
            <Button color="#111927" fontColor="white" onClick={() => router.push('signup')}>Sign up</Button>
          </Box>
        )
      }
    </HeaderContainer>
  );
}
