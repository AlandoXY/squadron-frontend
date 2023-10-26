import Typography from "@/components/typography";
import Button from "@/components/button";
import Modal from "@/components/modal";
import React, {useRef} from "react";
import Box from "@/components/box";
import AvatarEditor from 'react-avatar-editor'

export default function SelectProfileCover({ open, setOpen, handleSubmit, photo }) {

  const editor = useRef(null);

  const getImageUrl = async () => {
    const dataUrl = editor.current.getImage().toDataURL()
    const result = await fetch(dataUrl)
    const blob = await result.blob()

    return window.URL.createObjectURL(blob)
  }

  const handleSave = async () => {
    const imageURL = await getImageUrl()
    handleSubmit(imageURL)
    setOpen(false)
  }

  return (
    <Modal open={open} closeButton handleClose={() => setOpen(false)} width={560}>
      <Typography fontSize="18px" fontWeight={600} color="#111927">Profile photo</Typography>
      <Typography color="#4D5761" fontSize="14px" style={{marginTop: 5}}>Upload a 1600 x 480px image for best results.</Typography>
      <div style={{padding: "20px 0", margin: "20px 0", borderTop: '1px solid #e1e1e1', borderBottom: '1px solid #e1e1e1'}}>
        <Box justifyContent="center">
          <AvatarEditor
            ref={editor}
            image={photo}
            width={430}
            height={430}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1.2}
            rotate={0}
            borderRadius={250}
          />
        </Box>
      </div>
      <Box fullWidth justifyContent="flex-end">
        <Button color="white" style={{border: '1px solid #D2D6DB'}} onClick={() => setOpen(false)}>Change photo</Button>
        <Button color="#4B48EC" fontColor="white" style={{marginLeft: 10}} onClick={() => handleSave()}>Save photo</Button>
      </Box>
    </Modal>
  )
}
