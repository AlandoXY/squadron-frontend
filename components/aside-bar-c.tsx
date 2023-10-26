import Image from "next/image";
import Typography from "@/components/typography";
import Navbar from "@/components/navbar";
import NavbarItem from "@/components/navbar-item";
import IconButton from "@/components/icon-button";
import React from "react";
import styled from "styled-components";
import {useRouter, usePathname} from "next/navigation";

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

export function AsideBarC () {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Aside>
      <AsideTop>
        <Image src="/icons/logo.png" width={30} height={30} alt="Logo" />
        <Typography>squadron</Typography>
      </AsideTop>
      <Navbar>
        <NavbarItem active={pathname === '/dashboard-search-projects'}>
          <IconButton width={20} height={20} icon="/icons/projects.png" onClick={() => router.push('/c/home')}>Home</IconButton>
        </NavbarItem>
        <NavbarItem active={pathname === '/dashboard-wallet'}>
          <IconButton width={20} height={20} icon="/icons/wallet.png" onClick={() => router.push('/c/dashboard-wallet')}>Wallet</IconButton>
        </NavbarItem>
        <NavbarItem active={pathname === '/dashboard-sustainability'}>
          <IconButton width={20} height={20} icon="/icons/sustainability.png" onClick={() => router.push('/c/dashboard-sustainability')}>Sustainability</IconButton>
        </NavbarItem>
        <NavbarItem active={pathname === '/dashboard-resources'}>
          <IconButton width={20} height={20} icon="/icons/resource.png" onClick={() => router.push('/c/dashboard-resources')}>Resources</IconButton>
        </NavbarItem>
        <NavbarItem active={pathname === '/dashboard-perks'}>
          <IconButton width={20} height={20} icon="/icons/perks.png" onClick={() => router.push('/c/dashboard-perks')}>Perks</IconButton>
        </NavbarItem>
      </Navbar>
    </Aside>
  )
}
