import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from "./movies";

const movie = data.movies;
var watch = [];


function Star(props) {
  var stars = [];
  for (var i = 0; i < props.num; i++) {
    stars.push(
      <img
        src="https://images.vexels.com/media/users/3/134121/isolated/preview/5ff73adb05d7f1fe47dd49bb1b08affa-star-cartoon-icon-50-by-vexels.png"
        alt="s"
        width="10%"
      />
    );
  }

  return (
    <div>
      {stars}
    </div>);
}


class MovieItemCard extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false,
      willWatch: false
    };
  }
  toggleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };
  
  toggleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  toggleWatch = () => {
    if(!this.state.willWatch){
      watch.push(
        <div>
          <p>{data.title}</p>
          <p>{data.vote_average}</p>
        </div>
      );
      // console.log(watch[0]._self.props.data.title);
    } else{
      console.log("else");
    }

    this.setState({
      willWatch: !this.state.willWatch
    });
  }


  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;


    // console.log({watch});

    console.log("executed");
    return (
      <div class="card">
        
        {
        this.state.show 
        ? 
        <p class="card-text">{overview}</p> 
        : 
        <img className="card-img-top" src={image} alt={title} width="100%" />
        }


        <div class="card-body">
          <h5 className="card-title">{title}</h5>
          <center>
            <Star num={vote_average} /> <br />
          </center>
          <div class="buttons-container">
            <div className="btn-group ">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.toggleShow}
              >
                {this.state.show ? "Hide" : "Show"}
              </button>
              <button
              type="button"
              className={this.state.willWatch ? "btn btn-warning watch" : "btn btn-warning"}
              onClick={this.toggleWatch}
              >
                {this.state.willWatch ? "Unwatch" : "Watch"}
              </button >
              <button
                className={this.state.like ? "btn btn-danger" : "btn btn-success"}
                onClick={this.toggleLike}
              >
                {this.state.like ? "Unlike" : "Like"}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

function Cards(){
  var movies = [];
  for (var i = 0; i < movie.length; i++) {
    movies.push(
      <div>
        <MovieItemCard data={movie[i]} />
      </div>
    );
  }

  return movies;
}



function App() {
  var w = [];
  for(var i = 0; i < watch.length; i++){
    w.push(
      <li>watch[i]._self.props.data.title</li>
    );
  }


  return (
    <div className="parent-all">
      <div className="parentCard">
        <Cards />
      </div>
      <div className="willWatch">
        <ul className="list-group">
          <li className="list-group-item active">Will Watch</li>
            {w}
        </ul>
        
      </div>
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

//TODO:
//Add films to "Will Watch" 
//{78, 51, 143}
