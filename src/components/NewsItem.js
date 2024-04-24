import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
        <div className="my-3">
        <div className="card" style={{width: "18rem" }}>
        <img src={!imageUrl?"https://library.ceu.edu/wp-content/uploads/news-2444778_960_720.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body p-3 bg-info bg-opacity-10 border border-info border-top-0 rounded-end">
                <h5 className="card-title text-white">{title}</h5>
                <p className="card-text text-white">{description}</p>
                <a  rel="noreferrer" href={newsUrl} target="_blank"  className="btn btn-sm btn-warning">More Info</a>
            </div>
        </div>
    </div>
    )
  }
}



export default NewsItem
