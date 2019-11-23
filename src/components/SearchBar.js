import React from 'react';


class SearchBar extends React.Component{
    state={user:''};

 onSubmitInput=event=>{
      event.preventDefault();
      this.props.onSubmit(this.state.user);
};

onChangeInput=(event)=>{
 return this.setState({user:event.target.value});
};
render(){
    return(
        <div className="ui segment" style={{marginTop:'10px'}}>
            <form onSubmit={this.onSubmitInput}  className="ui form" >
            <div className="field">
             <label>Video App By Tapas</label>
             <input type='text' placeholder='Search Videos...' value={this.state.user}  onChange={this.onChangeInput} />
            </div>
            </form>
        </div>
    );
    }
    }

export default SearchBar;