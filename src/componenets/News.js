import React, { Component } from "react";
import Loading from "./Loading";
import Newsitems from "./Newsitems";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "general"
  };

  static propTypes = {
    country: propTypes.string,
    pagesize: propTypes.number,
    category: propTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      articals: [],
      page: 1,
      loading: false,
      totalResults: 0
    };
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6028e593e0c946f39df579b3272c423a&pagesize=${this.props.pagesize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddate = await data.json();
    this.setState({
      articals: this.state.articals.concat(parseddate.articles),
      loading: false
    });
  };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6028e593e0c946f39df579b3272c423a&pagesize=${this.props.pagesize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddate = await data.json();
    this.setState({
      articals: parseddate.articles,
      totalResults: parseddate.totalResults,
      loading: false
    });
  }

  render() {
    return (
    
        <div className="container">
          <h2 className="text-center" style={{ margin: "30px" }}>
            NewsMonkey Headlines - {this.props.title}
          </h2>
          <InfiniteScroll
            dataLength={this.state.articals.length}
            next={this.fetchMoreData}
            hasMore={this.state.articals.length === this.state.totalResults?false:true}
            loader={<Loading />}
          >
            <div className="row">
              {this.state.articals?.map((element, i) => {
                return (
                  <div className="col-md-4 ">
                    <Newsitems
                      key={i}
                      title={element.title ? element.title.slice(0, 45) : ""}
                      desc={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgurl={element.urlToImage}
                      url={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    ></Newsitems>
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
    );
  }
}

export default News;
