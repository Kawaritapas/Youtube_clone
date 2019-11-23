import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/api';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
state={ videos:[], SelectedVideo:null};

componentDidMount(){
    this.onAcquired("imaginedragons birds");
}

onAcquired=(user)=>{
    youtube.get('/search',{
        params:{
            q:user
        }
    }).then(response=>{
        this.setState({
            videos:response.data.items,
            SelectedVideo:response.data.items[0]        
        });
    });
};
onVideoSelect=(video)=>{
  this.setState({SelectedVideo:video});
};

render(){
    return(
<div className="ui container"> 
    <SearchBar onSubmit={this.onAcquired}/>
    <div className="ui grid">
        <div className="ui row">
            <div className="eleven wide column">
     <VideoDetail video={this.state.SelectedVideo}/>
     </div>
     <div className="five wide column">
    <VideoList  onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
    </div>
    </div>
  </div>
</div> 
 );
}
}
export default App;