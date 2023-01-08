import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const BottomBar = () => {
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  const userPrompt = () => {
    let pass = prompt("Please enter your code");
    setPassword(pass);
  };
  useEffect(() => {
    if (password !== "cool" && password !== null && password.length > 0)
      alert(
        `Ah! Incorrect code , Please retry again , ${3 - count} chance left `
      );
    setCount(count + 1);
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
      ) : count < 4 ? (
        <p style={{ cursor: "pointer" }} onClick={() => userPrompt()}>
          Click here to enter code to get a link here for viewing College
          website build by Sky's
        </p>
      ) : (
        <p> uh oh! You've exhausted your tries. Try again later.</p>
      )}
    </Card>
  );
};

export default BottomBar;
