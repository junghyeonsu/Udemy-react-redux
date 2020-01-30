import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyA6Opq2IDLDdzs_e8GI9nckDAnwX-Q1_aA";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
    };

    YTSearch({key : API_KEY, term:'무한도전'},(videos) => {
      this.setState({ videos });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
