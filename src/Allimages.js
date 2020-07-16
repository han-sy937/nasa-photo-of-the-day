import React from "react"
import styled from 'styled-components'

const StyleImages = styled.div`
// border: 1px solid red;
background-color: #D4D7E0;
width: 100%;
// height: 100vh;
margin: 0 auto;
padding: 5%;

.img{
  margin: 0 auto;
}


h3{
  font-family: 'Roboto', serif;
  font-size: 3.2rem;
  color: #EB910A;
  margin: 0 auto;
  padding: 2%;
}

.explanation{
  margin: 0 auto;
  width: 70%;
  font-family: 'Roboto', serif;
  font-size: 1.2rem;
  color: #362A51;
  line-height: 1.9rem;
}

.details{
  font-family: 'Roboto', serif;
  font-size: 1.8rem;
  color: #362A51;
}

`

const Allimages = props => {
  const {imageCards} = props
    console.log(imageCards)
    

    return (
        
    <StyleImages className="image-list">
      <div className="image">
      <img src={imageCards.url} alt="Nasa Images"/>
      </div>
      
      <h3>Title: {imageCards.title}</h3>
        <div className="details">
          <p>Date: {imageCards.date}</p>
          <p>Version: {imageCards['service_version']}</p>
        </div>
      <p className="explanation">Explanation: {imageCards.explanation}</p>
        
    </StyleImages>
                
    )
}

export default Allimages;