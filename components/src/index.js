import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  // istoto so const App=function(){}
  return (
    <div className="ui containers comments">
      <ApprovalCard>
        <div style={{ textAlign: "center" }}>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 12:06 PM"
          content="Welp i hope this works"
          profPic={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Alex"
          timeAgo="Today at 03:25 AM"
          content="Yo can anyone help me"
          profPic={faker.image.cats()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Jane"
          timeAgo="Yesterday at 16:59 PM"
          content="I like this one"
          profPic={faker.image.cats()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
