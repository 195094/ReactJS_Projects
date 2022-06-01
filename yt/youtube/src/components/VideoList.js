import React from "react";
import VideotItem from "./VideoItem";
const VideoList = ({ videos, onVideoSelect }) => {
  // props.videos
  const renderedList = videos.map((video) => {
    return (
      <VideotItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
