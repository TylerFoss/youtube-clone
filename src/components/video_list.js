import React from "react";
import VideoListItem from "./video_list_item";
// in a functional Component props is an argument

const VideoList = (props) =>{
const videoItems =  props.videos.map((video) => {
    return( <VideoListItem
    key={video.etag}
    video={video}
    onVideoSelect={props.onVideoSelect}
    />
    )
  });
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};


export default VideoList;
