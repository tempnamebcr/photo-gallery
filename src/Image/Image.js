import React, {useState, useContext, useEffect } from 'react'
import { AppContext } from '../AppContext';
import axios from 'axios'
import '../App.css';
import ImageWrap from './ImageWrapper';
import DragMove from './DragMove';

const Image = () => {

  const meme = useContext(AppContext)
  //destructuring
  const state = meme.state
  const [outside, size, urlAdd, bottomText, topText, outsideText, file, ref, urlNumber] = [state.outside, state.size, state.urlAdd, state.bottomText, state.topText, state.outsideText, state.file, state.ref, state.urlNumber]

  //Movable text
  const [translateTop, setTranslateTop] = useState({
    x: 0,
    y: 0
  });

  const handleDragMoveTop = (e) => {
    setTranslateTop({
      x: translateTop.x + e.movementX,
      y: translateTop.y + e.movementY
    });
  };

  const [translateBottom, setTranslateBottom] = useState({
    x: 0,
    y: 0
  });

  const handleDragMoveBottom = (e) => {
    setTranslateBottom({
      x: translateBottom.x + e.movementX,
      y: translateBottom.y + e.movementY
    });
  };

  const [translateOutside, setTranslateOutside] = useState({
    x: 0,
    y: 0
  });
  
  const handleDragMoveOutside = (e) => {
    setTranslateOutside({
      x: translateOutside.x + e.movementX,
      y: translateOutside.y + e.movementY
    });
  };

  useEffect(() => {
    axios
    .get('https://api.imgflip.com/get_memes')
    .then(res => {
      meme.dispatch({type:'ADD_URL', payload:(res.data)})
    })
    .catch(err => {
      console.log(err) 
    },[])
  })

  return(
  <ImageWrap ref={ref}>
    <div id={outside ? 'outside' : ''}>
      {outside
      ? <DragMove onDragMove={handleDragMoveOutside}>
          <p
            className="outsideText"
            style={{fontSize:`${size}px`,transform: `translateX(${translateOutside.x}px)  translateY(${translateOutside.y}px)`}}>
          {outsideText} 
          </p>
        </DragMove>
      : null }
    </div>
    <article className="refwrap" >
      <div id="refference" >
        {urlAdd 
        ? <img  
            src={file? file : urlAdd.data.memes[urlNumber].url}
            className="meme" 
            alt="invalid url"
          /> 
        : null}
        {outside 
        ? null 
        : <DragMove onDragMove={handleDragMoveTop}> 
            <p 
              className="top text" 
              style={ { fontSize: `${size}px`, transform: `translateX(${translateTop.x}px) translateY(${translateTop.y}px)`} }>
            {topText}
            </p>
          </DragMove>}
        {outside 
        ? null 
        : <DragMove onDragMove={handleDragMoveBottom}>
            <p 
              className="bot text" 
              style={ { fontSize: `${size}px`, transform: `translateX(${translateBottom.x}px)  translateY(${translateBottom.y}px)`} }>
            {bottomText}
            </p>
          </DragMove>} 
      </div>
    </article>
  </ImageWrap>
    )
}
export default Image