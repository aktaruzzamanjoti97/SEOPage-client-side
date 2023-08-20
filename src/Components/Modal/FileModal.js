import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function FileModal(props) {

    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleUpload = async () => {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);
  
        try {
          await axios.post('https://seopage-server-side.onrender.com/upload', formData);
          console.log('File uploaded successfully');
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }
    };
  
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className='d-flex justify-content-between'>
            <h3>Please Upload file</h3>
            <Button onClick={props.onHide}>X</Button>
          </div>
  
          <input type="file" onChange={handleFileChange} className='pt-4' />
          <div className='my-2'>
            <Button variant='btn btn-success' onClick={handleUpload}>Upload</Button>
          </div>
  
        </Modal.Body>
      </Modal>
    );
  }

export default FileModal