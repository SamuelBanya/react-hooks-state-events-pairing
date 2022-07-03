import video from "../data/video.js";
import React, { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [videoInfo, setVideoInfo] = useState(video);
  const [commentsVisible, setCommentsVisible] = useState("false");

  function handleUpVotes() {
    console.log("handleUpVotes() called");

    setVideoInfo({
      ...videoInfo,
      upvotes: videoInfo["upvotes"] + 1,
    });
  }

  function handleDownVotes() {
    console.log("handleDownVotes() called");

    setVideoInfo({
      ...videoInfo,
      downvotes: videoInfo["downvotes"] + 1,
    });
  }

  function handleHideComments() {
    console.log("handleHideComments() called");
    setCommentsVisible(!commentsVisible);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video["embedUrl"]}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video["title"]}</h1>
      <p>
        {video["views"]} Views | Uploaded {video["createdAt"]}
      </p>
      <button onClick={handleUpVotes}>{videoInfo["upvotes"]}👍</button>
      <button onClick={handleDownVotes}>{videoInfo["downvotes"]}👎</button>
      <br />
      <br />
      <button onClick={handleHideComments}>Hide Comments</button>
      <hr />
      <h1>{video["comments"].length} Comments</h1>
      {commentsVisible ? (
        video["comments"].map((comment) => (
          <>
            <h3 key={comment["id"]}>{comment["user"]}</h3>
            <p key={comment["id"]}>{comment["comment"]}</p>
          </>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
