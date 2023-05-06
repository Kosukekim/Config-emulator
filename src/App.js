import React, { useEffect, useState } from "react";
import "./App.css"
// git access token at 5/6 "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"
function FileUploader({ onFileLoad }) {
  function handleFileChange(event) {
    const file = event.target.files[0];
    if(file === undefined) {
      onFileLoad(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      onFileLoad(e.target.result);
    };
    reader.readAsText(file);
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

function FileViewer({ fileContents }) {
  const defaultLineValues = {"TEST_ITEM1":"TRUE","TEST_ITEM2":"TRUE","TEST_DONT_EXIST":"FOO","TEST_IPADDRESS":"172.0.0.1","TEST_SUBNETMASK":"255.255.0.0","TEST_DEFAULTGATEWAY":"172.0.0.254"};
  const [lineValues, setLineValues] = useState({});

  function handleChange(event,itemName) {
    console.log(event.target.value+" "+itemName);
    const newLineValues = {...lineValues};
    newLineValues[itemName] = event.target.value;
    setLineValues(newLineValues);
  };
  
  useEffect(() => {
    const newLineValues = {...defaultLineValues};
    if(fileContents===null) {
      setLineValues(newLineValues);
      return;
    }
      const lines = fileContents.split("\n");
    for(let i = 0;i < lines.length;i++){
      const itemName = lines[i].split("=")[0];
      if(newLineValues[itemName]) newLineValues[itemName] = lines[i].split("=")[1];
    }
    setLineValues(newLineValues);
    console.log("newlinevalue is set "+newLineValues["TEST_IPADDRESS"]);
  }, [fileContents]);
  return(
    <>
      <div className="itemContainers">
        {Object.keys(lineValues).map((itemName,index)=>(
          <div className="itemWrapper" key={itemName}>
            <div className="itemNameBox">
              <span className="itemNameBoxText">{itemName}</span>
            </div>
            <div className="itemValueBox" key={index}>
              <input className="itemValueBoxText" type="text" value={lineValues[itemName]} onChange={(event) => handleChange(event,itemName)}/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function App() {
  const [fileContents, setFileContents] = useState(null);
  const handleFileLoad = (fileContents) => {
    setFileContents(fileContents);
  };

  return (
    <div>
      <h1>Upload a Text File</h1>
      <FileUploader onFileLoad={handleFileLoad} />
      <FileViewer fileContents={fileContents} />
    </div>
  );
}

export default App;