import FileUploader from "./components/Upload";
import "./App.css";

function App() {
  const handleFileUpload = (fileContent) => {
    console.log(fileContent);
  };

  return (
    <>
      <h1>Hubbi Challenge</h1>
      <div className="card">
        <FileUploader onFileUpload={handleFileUpload} />
      </div>
    </>
  );
}

export default App;
