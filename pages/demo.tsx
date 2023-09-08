import Button from "@/components/button";
import IconButton from "@/components/icon-button";
import Navbar from "@/components/navbar";
import NavbarItem from "@/components/navbar-item";
import Link from "@/components/link";
import Typography from "@/components/typography";
import VideoPlayer from "@/components/video-player";
import styled from "styled-components";
import Input from "@/components/input";
import React, {useState} from "react";
import Textarea from "@/components/textarea";
import FileUpload from "@/components/file-upload";
import InputToggle from "@/components/input-toggle";
import Dropdown from "@/components/dropdown";
import Pagination from "@/components/pagination";
import Label from "@/components/label";
import Explanation from "@/components/explanation";
import Image from "next/image";
import Message from "@/components/message";

const Title = styled.h2`
  background-color: #333;
  color: white;
  margin: 0;
  padding: 0.5rem 1rem;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Bold = styled.span`
  font-weight: bold;
`;

export default function Demo() {
  const [inputText, setInputText] = useState('');
  const [inputText1, setInputText1] = useState('');
  const [text, setText] = useState('');
  const [text1, setText1] = useState('disabled resize');
  const [checked, setChecked] = useState(false);
  const [dropVal, setDropVal] = useState("");
  const [dropVal1, setDropVal1] = useState("");
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [rate, setRate] = useState("");
  const [page, setPage] = useState(1);
  const [openMessage, setOpenMessage] = useState(false);

  return (
    <div>
      <Title>Buttons</Title>
      <Content>
        <Button>Default</Button>
        <Button color="red">Red Button</Button>
        <Button color="#1976d2" fontColor="#ffffff">Blue Button</Button>
        <Button fullWidth>Full Width Button</Button>
      </Content>
      <Title>Icon Buttons</Title>
      <Content>
        <IconButton icon="/icons/share-07.png" />
        <IconButton icon="/icons/star-01.png" />
        <IconButton icon="/icons/dashboard.png">Dashboard</IconButton>
      </Content>
      <Title>Navbar</Title>
      <Content>
        <Navbar>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/dashboard.png">Dashboard</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/projects.png">Projects</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/wallet.png">Wallet</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/sustainability.png">Sustainability</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/resource.png">Resources</IconButton>
          </NavbarItem>
          <NavbarItem>
            <IconButton width={20} height={20} icon="/icons/perks.png">Perks</IconButton>
          </NavbarItem>
        </Navbar>
      </Content>
      <Title>Link</Title>
      <Content>
        <Link to="https://www.google.com">www.google.com</Link>
        <Link to="https://www.google.com" target="_blank">www.google.com</Link>
      </Content>
      <Title>Typography</Title>
      <Content>
        <Typography>We created Stir to meet your unique needs as a creator, and to help you enhance and grow your business. Stir takes all the innovative ways you make money — like YouTube and Shopify and Patreon and Twitch and Instagram and Facebook and Brand Deals and Anchor — and puts them all in one place.</Typography>
        <Typography component="h2" fontSize="18px">This is a title.</Typography>
      </Content>
      <Title>VideoPlayer</Title>
      <Content>
        <VideoPlayer url={"/videos/video.mp4"} />
      </Content>
      <Title>Input</Title>
      <Content>
        <Row>
          <Input value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <Input value={inputText1} onChange={(e) => setInputText1(e.target.value)} prefixIcon="/icons/link.png" suffixIcon="/icons/check.png" />
        </Row>
      </Content>
      <Title>Textarea</Title>
      <Content>
        <Row>
          <Textarea onChange={(e) => setText(e.target.value)}>{text}</Textarea>
          <Textarea onChange={(e) => setText1(e.target.value)} resize={false}>{text1}</Textarea>
        </Row>
      </Content>
      <Title>File Upload</Title>
      <Content>
        <FileUpload />
      </Content>
      <Title>InputToggle</Title>
      <Content>
        <InputToggle checked={checked} onChange={(e) => setChecked(e.target.checked)} right={
          <div>
            <Bold>Front-End Engineer</Bold>
            <Row>
              <div style={{marginRight: 10}}>30$-50$ /h</div>
              <div style={{marginRight: 10}}>20-25h /week</div>
              <div style={{marginRight: 10}}>Amsterdam, NL</div>
              <div>20/12/23</div>
            </Row>
          </div>
        } />
      </Content>
      <Title>Dropdown</Title>
      <Content>
        <h6>Drop down</h6>
        <Dropdown
          options={[{ label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }]}
          value={dropVal}
          onChange={(value) => setDropVal(value)} />
        <div>
          <h6>Drop down search bar</h6>
          <Dropdown
            options={[{ label: "Alisa Hester", value: "Alisa Hester", icon: "/icons/avatar.png" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  ", icon: "/icons/avatar.png" }]}
            value={dropVal1}
            onChange={(value) => setDropVal1(value)}
            prevIcon="/icons/search-lg.png"
            disableInput={false}
            showSuffixIcon={false} />
        </div>
        <div>
          <h6>Filter</h6>
          <Dropdown
            placeholder="Role"
            options={[{ label: "Admin", value: "Admin" }, { label: "Manager", value: "Manager" }]}
            value={role}
            onChange={(value) => setRole(value)}
            prevIcon="/icons/role.png"
            inputWidth="40px" />
          <Dropdown
            placeholder="Skills"
            options={[{ label: "JavaScript", value: "JavaScript" }, { label: "React", value: "React" }]}
            value={skills}
            onChange={(value) => setSkills(value)}
            prevIcon="/icons/tools.png"
            inputWidth="40px" />
          <Dropdown
            placeholder="Rate"
            options={[{ label: "Dollar", value: "Dollar" }, { label: "Franc", value: "Franc" }]}
            value={rate}
            onChange={(value) => setRate(value)}
            prevIcon="/icons/rate.png"
            inputWidth="40px" />
        </div>
      </Content>
      <Title>Pagination</Title>
      <Content>
        <Pagination page={page} totalSize={100} onChange={(page) => setPage(page)} />
      </Content>
      <Title>Label</Title>
      <Content>
        <h6>Recommended skills</h6>
        <Label>Label</Label>
        <h6>Required skills</h6>
        <Label borderColor="#027A48" fontColor="#027A48">Label</Label>
        <h6>Tools</h6>
        <Label icon="/icons/ps.png">Label</Label>
        <h6>Roles label(角色标签)</h6>
        <Label icon="/icons/user-blue.png" color="#e0effb" fontColor="#45729b" borderColor="#e0effb" borderRadius="0.3rem">Product Manager</Label>
        <h6>Project keywords labe</h6>
        <Label color="#f1f4f4" borderColor="#f1f4f4">E-Commerce</Label>
      </Content>
      <Title>Explanation</Title>
      <Content>
        <Explanation title="Lead role" desc="Explanation about what the lead role">
          <IconButton width={20} height={20} icon="/icons/info.png">click me</IconButton>
        </Explanation>
      </Content>
      <Title>Message</Title>
      <Content>
        <Message open={openMessage} onClose={() => setOpenMessage(false)} color="#724fcc" fontColor="white">Your question has been sent. You will receive a response</Message>
        <Button onClick={() => setOpenMessage(true)}>Open Message</Button>
      </Content>
    </div>
  );
}
