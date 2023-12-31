import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./style.css";

// eslint-disable-next-line react/prop-types
const FileUploader = ({ onFileUpload = () => {} }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileContent = reader.result;
        onFileUpload(fileContent);
      };

      reader.readAsText(acceptedFiles[0]);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".txt",
  });

  return (
    <div
      {...getRootProps()}
      className={isDragActive ? "dropzone-active" : "dropzone"}
    >
      <input {...getInputProps()} accept=".txt" />
      {isDragActive ? (
        <p>Arraste e solte o arquivo aqui</p>
      ) : (
        <p>
          Arraste e solte um arquivo .txt aqui, ou clique para selecionar o
          arquivo
        </p>
      )}
    </div>
  );
};

export default FileUploader;
