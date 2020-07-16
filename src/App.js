import React, {useState, useEffect} from "react";
import "./App.css";
import styled from 'styled-components'
import axios from 'axios'
import Allimages from './Allimages'

const HeaderStyle = styled.div`

margin: 0 auto;
// border: 1px solid red;

.header{
  background-color: #614f87;
  text-align: center;
  padding: 2%;
  margin: 0;

  h1{
    color: #D4D7E0;
    font-size: 2.2rem;
  }
}

.imageCard{
  margin: 0 auto;
  border: 1 px solid red;
}
  
`


function App() {

  const [imageCards, setImageCards] = useState([])
    // console.log (imageCards)
  
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=RhGn0zxXPCzXOj1liQnjxMBWxeHgbn1D9MTWhp7Q')
        .then(res => {
        //   console.log(res)
          setImageCards(res.data)
        })
        .catch(err => {
          console.log("the data was not returned")
        })
    }, [])

  return (
    <HeaderStyle className="App">
          <div className="header">
            <h1>
              Nasa Image of The Day
            </h1>
          </div>
          
          <div className="imageCard">
            <Allimages
                imageCards={imageCards}
            />
          </div>

    </HeaderStyle>
  );
}

export default App;
