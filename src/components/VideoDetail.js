import React from 'react';
const VideoDetail=(props)=>{
if(!props.video){
    return<div>Loading...</div>
}

const videod=`https://www.youtube.com/embed/${props.video.id.videoId}`;
return(
    <div>
        <div className="ui embed">
        <iframe 
        width="560"
         height="315" 
         src={videod} 
         frameborder="0" 
         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        </div>
    <div className="ui segment">
<h4 className="ui header">{props.video.snippet.title}</h4>
<p>{props.video.snippet.description}</p>
</div>
</div>
);
}
export default VideoDetail;