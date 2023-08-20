import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Assets/Styles/style.css';
import FileModal from './Components/Modal/FileModal';
import TaskRender from './Components/TaskRender/TaskRender';
import TaskHeader from './Layouts/TaskHeader';

function App() {
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


  return (
    <div className="App">
      <div className="board">
        <div className="column">
          <TaskHeader task='Incomplete' colorClass='half-circle-incomplete mx-1' num='0' />

          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
        </div>


        <div className="column">
          <TaskHeader task='TO DO' colorClass='half-circle-todo mx-1' num='0' />

          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
        </div>


        <div className="column">
          <TaskHeader task='Doing' colorClass='half-circle-doing mx-1' num='0' />

          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
        </div>


        <div className="column">
          <TaskHeader task='Under Review' num='0' />

          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
        </div>


        <div className="column">
          <TaskHeader task='Completed' num='0' />

          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
          <TaskRender fileList={fileList} fileCount={fileCount} setModalShow={setModalShow} />
        </div>
      </div>

      <FileModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
