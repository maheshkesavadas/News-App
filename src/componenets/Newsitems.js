import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, desc, imgurl, url, date, author,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style= {{left:'90%',top:'-2%'}}>
            {source}
          </span>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center pull-right">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text">
              by {!author ? "Unknown" : author} on {" "}
              {new Date(date).toGMTString()}
            </p>
            <a href={url} className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
