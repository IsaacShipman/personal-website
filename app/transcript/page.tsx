// pages/pdf-viewer.js

import React from "react";

const transcript = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <iframe
        src="/resume/transcript.pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default transcript;
