import styled from "styled-components";
import React from "react";

const VideoPlayerContainer = styled.div`
  display: flex;
  border-radius: 10px;
  width: ${({width}) => width + "px"};
  height: ${({height}) => height + "px"};
`;

interface VideoPlayerProps {
  url: string
  width?: number;
  height?: number;
  autoplay?: boolean;
}

export default function VideoPlayer({ url, width = 400, height = 250, autoplay=true }: VideoPlayerProps) {
  return (
    <VideoPlayerContainer width={width} height={height}>
      <video width={width} height={height} controls autoPlay={autoplay} style={{objectFit: 'fill', borderRadius: 10}}>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VideoPlayerContainer>
  );
}
