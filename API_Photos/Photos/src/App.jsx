import { useState, useEffect } from 'react'
import { Photos } from './components/Photos';
import './App.css'

function App() {

  const [photosId,setPhotosId] = useState(1)
  const [photos,setPhotos] = useState([]);
  
  const handlePreview = () =>{
    if(photosId>1){
      setPhotosId(photosId-1)
    }
  }
  const handleNext = () =>{
    if(photosId<5000){
    setPhotosId(photosId+1);
    }
  }

  useEffect(()=>{
    getPhotosRange(photosId,2)
  },[photosId])

  const getPhotosRange = async (startId, count) => {
    try {
      const responses = await Promise.all(
        Array.from({ length: count }, (_, i) =>
          fetch(`https://jsonplaceholder.typicode.com/photos/${startId + i}`)
        )
      );

      const data = await Promise.all(responses.map((response) => response.json()));

      const photosArray = data.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.url,
      }));

      setPhotos(photosArray);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };
  return (
    <div className="App">
        <div className="photos-container">
          {photos.map(photo=>
            <Photos key={photo.id} img={photo.url} txt={photo.title}/>
          )}
        </div>
        <div className="btns">
          <button onClick={handlePreview}>Preview</button>
          <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default App
