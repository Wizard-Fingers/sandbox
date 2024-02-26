import React, { useState } from "react";
import Title from "./components/Title";

export default function SignatureApp() {
  const [name, setName] = useState("Signature");
  const [date, setDate] = useState("Date");

  const handelNameChange = (e) => {
    setName(e.target.value);
  };

  const handelDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.35em 0",
  };
  document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "DoB" : date} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "60vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handelDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handelNameChange}
        />
      </footer>
    </div>
  );
}
