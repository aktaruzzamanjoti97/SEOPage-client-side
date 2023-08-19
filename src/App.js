import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './App.css';

const initialTasks = {
  todo: [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
  ],
  progress: [
    { id: 3, title: 'Task 3' },
  ],
  incomplete: [
    { id: 4, title: 'Task 4' },
  ],
  doing: [],
  completed: [
    { id: 5, title: 'Task 5' },
  ],
};

function MyVerticallyCenteredModal(props) {

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


function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalShow, setModalShow] = React.useState(false);

  const [fileCount, setFileCount] = useState(0);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    // Fetch the number of uploaded files from the backend
    const fetchFileCount = async () => {
      try {
        const response = await axios.get('https://seopage-server-side.onrender.com/file-count');
        setFileCount(response.data.count);
      } catch (error) {
        console.error('Error fetching file count:', error);
      }
    };

    const fetchFileList = async () => {
      try {
        const response = await axios.get('https://seopage-server-side.onrender.com/file-list');
        setFileList(response.data.files);
      } catch (error) {
        console.error('Error fetching file list:', error);
      }
    };

    fetchFileCount();
    fetchFileList();
  }, [fileCount, fileList]);


  const renderTasks = (column) => {
    return (
      <div className="card">
        <div className=" d-flex justify-content-between">
          <div className='d-flex'>
            <div class="avatar">
              <img src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
            </div>
            <h6 className='my-1 mx-1'>Client name</h6>
          </div>
          <div className='d-flex'>
            <div class="avatar">
              <img src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
            </div>
            <h6 className='my-1 mx-1'>Nafis</h6>
          </div>
        </div>

        <div>
          {fileList.map((file, index) => (
            <div key={index} className='d-flex my-2'>
              <i class="fa-solid fa-book mx-2"></i>

              {file.name} ({file.extension})
            </div>
          ))}
        </div>

        <div>
          <div className="d-flex justify-content-around">
            <div class="avatar mx-1">
              <img src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
            </div>
            <div class="avatar mx-1">
              <img src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt="" />
            </div>
            <div className='mx-1' style={{ backgroundColor: 'lightgray', borderRadius: '50%' }}>
              <div className='my-1'><span className='shortFont'>12+</span></div>
            </div>
            <div className='mx-1'>
              <i class="fa-regular fa-comments mt-2"></i>
              <span className='shortFont'>15</span>
            </div>
            <div className='mx-1' onClick={() => setModalShow(true)}>
              <i class="fa-solid fa-link mt-2"></i>
              <span className='shortFont'>{fileCount}</span>
            </div>
            <div className='mx-1'>
              <i class="fa-solid fa-calendar mt-2"></i>
              <span className='shortFont ms-1'>30-10-2023</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="board">
        <div className="column">
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <div class="half-circle-incomplete mx-1"></div>
              <h4>Incomplete</h4>
            </div>
            <h4 className='totalCount'>
              0
            </h4>
          </div>
          {renderTasks('todo')}
          {renderTasks('todo')}
          {renderTasks('todo')}
          {renderTasks('todo')}
          {renderTasks('todo')}

        </div>
        <div className="column">
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <div class="half-circle-todo mx-1"></div>
              <h4>TO DO</h4>
            </div>
            <h4 className='totalCount'>
              0
            </h4>
          </div>

          {renderTasks('progress')}
          {renderTasks('progress')}
          {renderTasks('progress')}
          {renderTasks('progress')}
          {renderTasks('progress')}
        </div>
        <div className="column">
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <div class="half-circle-doing mx-1"></div>
              <h4>Doing</h4>
            </div>
            <h4 className='totalCount'>
              0
            </h4>
          </div>
          {renderTasks('incomplete')}
          {renderTasks('incomplete')}
          {renderTasks('incomplete')}
          {renderTasks('incomplete')}
          {renderTasks('incomplete')}
        </div>
        <div className="column">
          <div className="d-flex justify-content-between">
            <h4>Under Review</h4>
            <h4 className='totalCount'>
              0
            </h4>
          </div>
          {renderTasks('doing')}
          {renderTasks('doing')}
          {renderTasks('doing')}
          {renderTasks('doing')}
        </div>
        <div className="column">
          <div className="d-flex justify-content-between">
            <h4>Completed</h4>
            <h4 className='totalCount'>
              0
            </h4>
          </div>
          {renderTasks('completed')}
          {renderTasks('completed')}
          {renderTasks('completed')}
          {renderTasks('completed')}
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
