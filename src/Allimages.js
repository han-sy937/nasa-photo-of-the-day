import React, {useState, useEffect} from "react"
import axios from 'axios'
import Oneimage from './Oneimage'

const Allimages = () => {

    const [imageCards, setImageCards] = useState([])
    // console.log (imageCards)
  
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=rNwT3O4VbhwFIWLiHfyiRjcCDrLQnph6NYMCDbG0')
        .then(res => {
        //   console.log(res)
          setImageCards(res.data)
        })
        .catch(err => {
          console.log("the data was not returned")
        })
    }, [])

    return (
        
<div className="imageCard">
    <Oneimage
        imageCards={imageCards}
    />
    
    </div>
                )
}

export default Allimages;