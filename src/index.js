import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import data from "./movies";

const movie = data.movies;

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

  return stars;
}


class MovieItemCard extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
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
  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
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
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.toggleShow}
            >
              {this.state.show ? "Hide" : "Show"}
            </button>

            <button
              className={this.state.like ? "btn btn-danger" : "btn btn-success"}
              onClick={this.toggleLike}
            >
              {this.state.like ? "Unlike" : "Like"}
            </button>
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
  return (
    <div className="parentCard">
      <Cards />
    </div>);
}

ReactDOM.render(<App />, document.getElementById("root"));
