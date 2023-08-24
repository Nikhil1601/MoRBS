import React from "react";
import { Web3Storage } from "https://cdn.jsdelivr.net/npm/web3.storage/dist/bundle.esm.min.js";
import "../CSS/Retrieve.css";

function Retrieve() {
  function getAccessToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI2Y2Q0MGMzZGNhMzE1ZTlGMmRhYTIyYzJmMWVmNzJFMDcwZDZEODkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY3Nzg4OTEwNzMsIm5hbWUiOiJNb3JiaXVzIn0.zY4C-FU6VzWrXgmuaXAoIWKf2ffIpmze4exVzdVqjFk";
  }

  function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() });
  }

  async function retrieve() {
    const cid = document.getElementById("cid").value;
    const client = makeStorageClient();
    const res = await client.get(cid);
    console.log(`Got a response! [${res.status}] ${res.statusText}`);
    if (!res.ok) {
      alert("File Doesn't exist, check your CID");
    } else {
      alert("File has been opened!");
      window.open("https://" + cid + ".ipfs.w3s.link/", "_blank");
    }
  }

  return (
    <div className="container">
      <div className="link">
        <label htmlFor="cid">CID:</label>
        <input type="text" id="cid" className="input-box"/>
        <button onClick={retrieve} className="retrieve">Retrieve File</button>
      </div>
    </div>
  );
}

export default Retrieve;
