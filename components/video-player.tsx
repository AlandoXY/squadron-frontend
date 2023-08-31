import styled from "styled-components";
import React from "react";

const VideoPlayerContainer = styled.div`
  display: flex;
  border-radius: 10px;
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
  //overflow: hidden;
`;

interface VideoPlayerProps {
  url: string
  width?: number;
  height?: number;
  autoplay?: number;
}

export default function VideoPlayer({ url, width = 400, height = 250, autoplay=true }: VideoPlayerProps) {
  return (
    <VideoPlayerContainer width={width} height={height}>
      <video width={width} height={height} controls autoplay={autoplay} style={{objectFit: 'fill', borderRadius: 10}}>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VideoPlayerContainer>
  );
}
