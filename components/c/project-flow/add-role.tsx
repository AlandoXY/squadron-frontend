import Modal from "@/components/modal";
import React, {useState} from "react";
import Box from "@/components/box";
import Button from "@/components/button";
import Typography from "@/components/typography";
import Input from "@/components/input";
import Dropdown from "@/components/dropdown";
import Textarea from "@/components/textarea";

export default function AddRole({ open, setOpen, handleSubmit, handleCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [preferredSkills, setPreferredSkills] = useState("");
  const [tools, setTools] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [overlapHours, setOverlapHours] = useState("");
  const [location, setLocation] = useState("");
  const [minHours, setMinHours] = useState("");
  const [verify, setVerify] = useState(false);

  const verification = () => {
    setVerify(true);
    if (title && description && rate && requiredSkills && preferredSkills && tools && timeZone && overlapHours && location && minHours) {
      handleSubmit();
    }
  }

  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={630} style={{padding: 0}}>
      <Box vertical style={{padding: 20}}>
        <Typography fontSize="18px" fontWeight={600} color="#111927">Add role</Typography>
        <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Add details about this Squadmate.</Typography>
      </Box>
      <div style={{padding: 20, borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1', backgroundColor: "#F3F4F6", overflowY: "auto", maxHeight: 550}}>
        <Box vertical style={{backgroundColor: "#ffffff", borderRadius: 8, padding: 16}}>
          <Typography color="#111927" fontWeight={500} fontSize={20}>Role details</Typography>
          <Box fullWidth vertical style={{marginTop: 20}}>
            <Typography color="#384250" fontWeight={500} fontSize={15} style={{marginBottom: 8}}>Role title</Typography>
            <Dropdown
              value={title}
              onChange={value => setTitle(value)}
              options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
              prevIcon="/icons/search-lg.png"
              placeholder="Find a role"
              disableInput={false}
              fullWidth />
            {
              verify && !title && <Typography color="#D92D20" fontSize={14} style={{margin: "8px 0"}}>This field is not completed</Typography>
            }
          </Box>
          <Box alignItem="flex-start" style={{marginTop: 10}}>
            <input type="checkbox" />
            <Box vertical style={{marginLeft: 6}}>
              <Typography color="#384250" fontSize={14} fontWeight={500}>Squad Lead</Typography>
              <Typography color="#4D5761" fontSize={14}>This role will be a squad leader.</Typography>
            </Box>
          </Box>
          <Box fullWidth vertical style={{marginTop: 20}}>
            <Typography color="#384250" fontWeight={500} fontSize={15} style={{marginBottom: 8}}>Role description</Typography>
            <Textarea placeholder="What are you looking for in this role?" style={{width: "100%"}} onChange={e => setDescription(e.target.value)}>{description}</Textarea>
            {
              verify && !description && <Typography color="#D92D20" fontSize={14} style={{margin: "8px 0"}}>This field is not completed</Typography>
            }
          </Box>
          <Box fullWidth vertical style={{marginTop: 20}}>
            <Typography color="#384250" fontWeight={500} fontSize={15} style={{marginBottom: 8}}>Hourly rate</Typography>
            <Dropdown
              value={rate}
              onChange={value => setRate(value)}
              options={[{ label: "$80-$90/h", value: "$80-$90/h" }, { label: "$90-$100/h", value: "$90-$100/h" }]}
              placeholder="Select hourly rate"
              disableInput={false}
              fullWidth />
            {
              verify && !rate && <Typography color="#D92D20" fontSize={14} style={{margin: "8px 0"}}>This field is not completed</Typography>
            }
          </Box>
        </Box>
        <Box vertical style={{backgroundColor: "#ffffff", borderRadius: 8, padding: 16, marginTop: 20}}>
          <Typography color="#111927" fontWeight={500} fontSize={20}>Skills</Typography>
          <Box fullWidth vertical style={{marginTop: 20}}>
            <Typography color="#384250" fontWeight={500} fontSize={15} style={{marginBottom: 8}}>Required skills</Typography>
            <Input placeholder="Search skills" fullWidth value={requiredSkills} onChange={e => setRequiredSkills(e.target.value)} />
            {
              verify && !requiredSkills && <Typography color="#D92D20" fontSize={14} style={{margin: "8px 0"}}>This field is not completed</Typography>
            }
          </Box>
          <Box fullWidth vertical style={{marginTop: 20}}>
            <Typography color="#384250" fontWeight={500} fontSize={15} style={{marginBottom: 8}}>Preferred skills</Typography>
            <Input placeholder="Search skills" fullWidth value={preferredSkills} onChange={e => setPreferredSkills(e.target.value)} />
            {
              verify && !preferredSkills && <Typography color="#D92D20" fontSize={14} style={{margin: "8px 0"}}>This field is not completed</Typography>
            }
          </Box>
          <Box fullWidth vertical style={{marginTop: 20}}>
            <Typography color="#384250" fontWeight={500} fontSize={15} style={{marginBottom: 8}}>Tools</Typography>
            <Input placeholder="Search skills" fullWidth value={tools} onChange={e => setTools(e.target.value)} />
            {
              verify && !tools && <Typography color="#D92D20" fontSize={14} style={{margin: "8px 0"}}>This field is not completed</Typography>
            }
          </Box>
        </Box>
        <Box vertical style={{backgroundColor: "#ffffff", borderRadius: 8, padding: 16, marginTop: 20}}>
          <Typography color="#111927" fontWeight={500} fontSize={20}>Talent location & availability</Typography>
          <Box fullWidth style={{marginTop: 20, gap: 20}}>
            <Box vertical style={{flex: 1}}>
              <Typography color="#384250" fontWeight={500} fontSize={15} style={{marginBottom: 8}}>Select time zone</Typography>
              <Dropdown
                value={timeZone}
                onChange={value => setTimeZone(value)}
                options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
                placeholder=""
                disableInput={false}
                fullWidth />
              {
                verify && !timeZone && <Typography color="#D92D20" fontSize={14} style={{margin: "8px 0"}}>This field is not completed</Typography>
              }
            </Box>
            <Box vertical>
              <Typography color="#384250" fontWeight={500} fontSize={15} style={{marginBottom: 8}}>Overlap hours</Typography>
              <Dropdown
                value={overlapHours}
                onChange={value => setOverlapHours(value)}
                options={[{ label: "Alisa Hester", value: "Alisa Hester" }, { label: "Antonio Hidalgo", value: "Antonio Hidalgo  " }]}
                placeholder="0"
                inputWidth="120px"
                disableInput={false} />
              {
                verify && !overlapHours && <Typography color="#D92D20" fontSize={14} style={{margin: "8px 0"}}>This field is not completed</Typography>
              }
            </Box>
          </Box>
          <Box fullWidth vertical style={{marginTop: 20}}>
            <Typography color="#384250" fontWeight={500} fontSize={15} style={{marginBottom: 8}}>Location</Typography>
            <Dropdown
              value={location}
              onChange={value => setLocation(value)}
              options={[{ label: "3 locations selected", value: "3 locations selected" }, { label: "5 locations selected", value: "5 locations selected" }]}
              placeholder="Search location"
              disableInput={false}
              fullWidth />
            {
              verify && !location && <Typography color="#D92D20" fontSize={14} style={{margin: "8px 0"}}>This field is not completed</Typography>
            }
          </Box>
          <Box fullWidth vertical style={{marginTop: 20}}>
            <Typography color="#384250" fontWeight={500} fontSize={15} style={{marginBottom: 8}}>Minimum hours per week</Typography>
            <input type="range" min={0} max={40} step={5} style={{width: "100%"}} value={minHours} onChange={e => setMinHours(e.target.value)} />
            <Box fullWidth justifyContent="space-between">
              <Typography color="#384250">5</Typography>
              <Typography color="#384250">10</Typography>
              <Typography color="#384250">15</Typography>
              <Typography color="#384250">15</Typography>
              <Typography color="#384250">20</Typography>
              <Typography color="#384250">25</Typography>
              <Typography color="#384250">30</Typography>
              <Typography color="#384250">35</Typography>
              <Typography color="#384250">40</Typography>
            </Box>
            {
              verify && !minHours && <Typography color="#D92D20" fontSize={14} style={{margin: "8px 0"}}>This field is not completed</Typography>
            }
          </Box>
        </Box>
      </div>
      <Box justifyContent="flex-end" style={{padding: 20}}>
        <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => handleCancel()}>Cancel</Button>
        <Button color="#111927" fontColor="white" style={{marginLeft: 10}} onClick={() => verification()}>Add role</Button>
      </Box>
    </Modal>
  )
}
