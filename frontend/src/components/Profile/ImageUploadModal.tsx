import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import * as React from 'react';
import { uploadProfilePhoto } from '../../api/authApi';

export interface IImageUploadModalProps {
    open: boolean,
    changeProfilePhoto: (image: string) => void,
    onClose: () => void
}

export default function ImageUploadModal (props: IImageUploadModalProps) {
  const [imageUrl, setImageUrl] = React.useState<string>()
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [file, setFile] = React.useState<File>()

  // open file input when user clicks to select image button
  const handleSelect = () => {
    inputRef.current?.click()
  }

  // show image preview when user selects an image
  const handleFileChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      setImageUrl(reader.result as string)
    }
    reader.readAsDataURL(file)
    setFile(file)
  }, [])

  // close modal and reset selected image
  const handleClose = React.useCallback(() => {
    setImageUrl(undefined)
    props.onClose()
  }, [props])

  // send image to server and update profile image and close modal
  const handleUpload = React.useCallback(() => {
    if (!file) return
    uploadProfilePhoto(file).then(res => {
      props.changeProfilePhoto(res.data.image)
      handleClose()
    })
  }, [file, handleClose, props])

  return (
    <Dialog open={props.open} onClose={handleClose} fullWidth>
        <DialogTitle>Profile Image Upload</DialogTitle>
        <DialogContent >
          <DialogContentText style={{marginBottom: 10}}>
            Select profile image from your computer
          </DialogContentText>
          <div className='flex justify-center items-center mb-10'>
            { imageUrl && <img src={imageUrl} alt="profile" /> }
          </div>
          <Button onClick={handleSelect} fullWidth variant="contained" size="large">Select</Button>
          <input onChange={handleFileChange} ref={inputRef} type="file" hidden />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpload}>Upload</Button>
        </DialogActions>
      </Dialog>

  );
}
