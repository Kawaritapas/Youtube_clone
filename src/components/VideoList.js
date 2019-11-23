import React from 'react';
import VideoItem from './VideoItem';


const VideoList =(props)=>{
const RenderedList= props.videos.map(video=>{
return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} vid={video} />;
});
return(
    <div className="ui relaxed divided list">
    {RenderedList}
    </div>
);


}
export default VideoList;