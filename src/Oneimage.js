import React from 'react'

const Oneimage = props => {
    const {imageCards} = props
    console.log(imageCards)
    return (
        <div className="image-list">

            <img className="image" src={imageCards.url} alt="Nasa Images"/>
    <h3>Title: {imageCards.title}</h3>
    <p>Explanation: {imageCards.explanation}</p>
    <div className="details">
    <p>Date: {imageCards.date}</p>
    <p>Version: {imageCards['service_version']}</p>
    
    </div>
        </div>
    )
}

export default Oneimage