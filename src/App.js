import React from "react";
import logo from "./logo.svg";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        profile={{
          logo,
          name: "Brad",
          type: "Author",
          time: "2 minutes",
          message:
            "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
          nReply: 21,
          upVote: 123,
          downwVote: 0
        }}
      />
    </div>
  );
}

export default App;
