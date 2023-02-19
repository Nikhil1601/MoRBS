import React, { useState } from 'react';
import { Web3Storage } from 'https://cdn.jsdelivr.net/npm/web3.storage/dist/bundle.esm.min.js'
import "../CSS/Store.css";
import DynamicTable from './DynamicTable';

var idno=0;
function Store() {
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState(null);
  const [data, setData] = useState([]);
  function getAccessToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI2Y2Q0MGMzZGNhMzE1ZTlGMmRhYTIyYzJmMWVmNzJFMDcwZDZEODkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY3Nzg4OTEwNzMsIm5hbWUiOiJNb3JiaXVzIn0.zY4C-FU6VzWrXgmuaXAoIWKf2ffIpmze4exVzdVqjFk";
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
  }

  async function storeFile() {
    const client = makeStorageClient();
    const cid = await client.put([file]);
    console.log('Stored file with cid:', cid);
    setCid(cid);
    setData([{hashkey:cid}]);
    idno++;
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  return (
    <div className="container">
      <div className="link">
        <input type="file" onChange={handleFileChange} className="input-box"/>
        <button onClick={storeFile} className="upload">Upload</button>
        {/* {cid && <p>File stored with cid: {cid}</p>} */}
      </div>
      <br />
      <div>
        <DynamicTable data={data} />
      </div>
    </div>
  );
}

export default Store;