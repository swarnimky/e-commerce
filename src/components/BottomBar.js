import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const BottomBar = () => {
  const [password, setPassword] = useState("");

  const userPrompt = () => {
    let pass = prompt("Please enter your code");
    setPassword(pass);
  };
  useEffect(() => {
    if (password !== "cool" && password.length > 0)
      alert("Ah! Incorrect code , Please retry");
  }, [password]);

  return (
    <Card style={{ textAlign: "center" }}>
      {password === "cool" ? (
        <a
          href="https://ietenotes.wapka.site/"
          target="_blank"
          rel="noreferrer"
        >
          Voila! on clicking here you'll enter a website based out of HTML & CSS{" "}
        </a>
      ) : (
        <p style={{ cursor: "pointer" }} onClick={() => userPrompt()}>
          Click here to enter code to get a link here for viewing College
          website build by Sky's
        </p>
      )}
    </Card>
  );
};

export default BottomBar;
