import styled from "styled-components";
import React from "react";
import Image from "next/image";
import Typography from "@/components/typography";
import Box from "@/components/box";

const AvatarGroupsContainer = styled.div`
    display: flex;
`;

interface AvatarGroupsProps {
  avatars: string[],
  size?: number;
}

export default function AvatarGroups({ avatars, size = 40 }: AvatarGroupsProps) {
  return (
    <AvatarGroupsContainer>
      {
        avatars.slice(0, 4).map((avatar, index) => <Image key={index} style={{marginLeft: -10, border: "2px solid #ffffff", borderRadius: "50%"}} src={avatar} alt="Avatar" width={size!} height={size!} />)
      }
      {
        avatars.length > 4 && (
          <Box justifyContent="center" alignItem="center" style={{width: size, height: size, borderRadius: "50%", backgroundColor: '#F3F4F6', marginLeft: -10, border: "2px solid #ffffff"}}>
            <Typography color="#4D5761" fontWeight={500}>+{avatars.length - 4}</Typography>
          </Box>
        )
      }
    </AvatarGroupsContainer>
  );
}
