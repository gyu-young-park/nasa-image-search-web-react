import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchInfo from '../SearchInfo/SearchInfo.js'
import './SearchContainerCss.css'
import * as api from '../../../lib/api.js';


export default class SearchContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      word : '',
      list : [],
      number : 0
    }
    this.handleChangeSearchWord = this.handleChangeSearchWord.bind(this);
    this.loadNasaImage = this.loadNasaImage.bind(this);
    this.sliceContent = this.sliceContent.bind(this);
    this.loadNasaVidio = this.loadNasaVidio.bind(this);
  }
  handleChangeSearchWord(value){
    this.setState({
      word : value,
      number : 0
    },function(){
      this.loadNasaImage(this.state.word);
    })
  }

  sliceContent(content){
    try{
      if(content.length > 80){
        content = content.substring(0,80);
        return content += "...";
      }else{
        return content
      }
    }catch(e){
      console.log(e)
    }
  }

  loadNasaVidio = async (data) => {
    try{
      const res = await api.getJSON(data);
      for(let i = 0; i < res.data.length; i++){
        let url = res.data[i];
        var splited = url.split('.')
        if(splited[splited.length-1] === "mp4"){
          return url
        }
      }
    }catch(e){
      console.log(e)
    }
  }

  loadNasaAudio = async (data) => {
    try{
      const res = await api.getJSON(data);
      for(let i = 0; i < res.data.length; i++){
        let mp3 = res.data[i];
        var splited = mp3.split('.')
        console.log(splited)
        if(splited[splited.length-1] === "mp3"){
          return mp3
        }
      }
    }catch(e){
      console.log(e)
    }
  }

  loadNasaImage = async (data) => {
    try {
      const res = await api.getNasaImage(data,this.props.filter.toLowerCase());
      var tmp = [];
      console.log(this.state.number)
      res.data.collection.items.slice(this.state.numebr,this.state.number+6).map((val, i) => {
        if(val.data[0].media_type === "image"){
          var content = this.sliceContent(val.data[0].description)
          var titles = this.sliceContent(val.data[0].title)
          tmp.push({src : val.links[0].href, title : titles , content : content, url : val.links[0].href})
        }
        //video , audio는 aync 문제가 존재 이 부분을 해결하도록 하자,
        else if(val.data[0].media_type === "video"){
          this.loadNasaVidio(val.href).then((url) => {
            var content = this.sliceContent(val.data[0].description)
            var titles = this.sliceContent(val.data[0].title)
            tmp.push({src : val.links[0].href, title : titles , content : content, url : url});
            this.setState({
              list : tmp,
              number : this.state.number + 1
            })
          })
        }
        else if(val.data[0].media_type === "audio"){
          console.log(val)
          this.loadNasaAudio(val.href).then((mp3) => {
            var content = this.sliceContent(val.data[0].description)
            var titles = this.sliceContent(val.data[0].title)
            tmp.push({src : `https://images-assets.nasa.gov/image/ARC-2003-AC03-0036-11/ARC-2003-AC03-0036-11~thumb.jpg`, title : titles , content : content, url : mp3});
            this.setState({
              list : tmp,
              number : this.state.number + 1
            })
          })
        }

        //console.log(val.links[0].href);
      })
      if(this.props.filter.toLowerCase() === "image"){
        this.setState({
          list : tmp,
          number : this.state.number + 5
        })
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount(){
    this.loadNasaImage("index")
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // 언마운트 될때에, 스크롤링 이벤트 제거
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    // IE에서는 document.documentElement 를 사용.
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    // 스크롤링 했을때, 브라우저의 가장 밑에서 50정도 높이가 남았을때에 실행하기위함.
    if (scrollHeight - innerHeight - scrollTop < 30) {
      console.log("Almost Bottom Of This Browser");
      this.loadNasaImage(this.state.word)
    }
  };

  render() {
      const mapToInfo = (data) => {
        return data.map((val, i) =>{
          return (<SearchInfo
            src={val.src}
            title={val.title}
            content={val.content}
            url={val.url}
            />);
        })
      }
     return (
       <div>
         <div class="search-container d-flex justify-content-center">
           <SearchBar name="searchBar" handleChangeSearchWord ={this.handleChangeSearchWord}/>
         </div>
           <div className="d-flex flex-wrap justify-content-around">
             {mapToInfo(this.state.list)}
          </div>
       </div>
     );
  };
};
