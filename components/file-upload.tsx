import styled from "styled-components";
import React, {useState} from "react";
import Image from "next/image";

const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  width: 100%;
`;

const FileUploadImageOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #f9fafb;
  border-radius: 50px;
`;

const FileUploadImageInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: #f2f4f7;
  border-radius: 35px;
`;

const FileUploadImageText = styled.div`
  font-size: 14px;
  margin-top: 10px;
  width: 250px;
  text-align: center;
  color: #4D5761;
`;

const FileUploadImageTextHighlight = styled.span`
  color: #1B18E4;
  font-weight: bold;
`;


interface FileUploadProps {
  children?: React.ReactNode;
}

export default function FileUpload({children}: FileUploadProps) {

  return (
    <FileUploadContainer
    >
      <FileUploadImageOuterContainer>
        <FileUploadImageInnerContainer>
          <Image src="/icons/upload.png" width={20} height={20} alt="Icon" />
        </FileUploadImageInnerContainer>
      </FileUploadImageOuterContainer>
      <FileUploadImageText>
        <div>
          <FileUploadImageTextHighlight>Click to upload</FileUploadImageTextHighlight> or drag and drop
        </div>
        <div>SVG, PNG, JPG or GIF (max. 800x400px)</div>
      </FileUploadImageText>
    </FileUploadContainer>
  );
}
