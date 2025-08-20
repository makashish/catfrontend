import React, { useState } from "react";
import Uploader from "../components/Uploader";
import Header from "../components/Header";


const Home = () => {
  const [docUrl, setDocUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    
    <div ><Header/>
      <Uploader setDocUrl={setDocUrl} setIsLoading={setIsLoading} />
      {isLoading && <p></p>}
      {docUrl && (
        <div >
  <p className="doc-text">DOCUMENT READY:</p>
  <a
    href={docUrl}
    download
    target="_blank"
    rel="noopener noreferrer"
    className="download-button"
  >
    Download File
  </a>
</div>
      )}
    </div>
  );
};

export default Home;