import React, { useContext } from 'react'
import { AppContext } from '../App/AppContext';
import '../App.css'
import TextWrap from './TextWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff} from '@fortawesome/free-solid-svg-icons'

const Text = () => {
    const meme = useContext(AppContext)

    const onIcon = <FontAwesomeIcon icon={faToggleOn} />
    const offIcon = <FontAwesomeIcon icon={faToggleOff} />

    const handleTopText = e => {
        meme.dispatch({ type: 'CHANGE_TOP', payload: e.target.value});
    };

    const handleBottomText = e => {
        meme.dispatch({type:'CHANGE_BOTTOM', payload: e.target.value})
    } 

    const handleSize = e => {
        meme.dispatch({type:'CHANGE_SIZE', payload: e.target.value})
    }

    const handleOutsideText = e => {
        meme.dispatch({type:'CHANGE_OUTSIDE', payload:e.target.value})
    }

    const changeTextPosition = () => {
        meme.dispatch({type:'MOVE_OUTSIDE'})
    } 

    return(
    <TextWrap>
        <h2>Edit your text here</h2>
        <input 
            type="text"
            onChange={handleTopText}
            placeholder="Top Text"
            className="input input--toptext"
        />
        <input
            type="text"
            onChange={handleBottomText}
            placeholder="Bottom Text"
            className="input input--bottomtext"
        />
        <input
            type="text"
            onChange={handleOutsideText}
            placeholder="Text..."
            className="input input--outsidetext"
        />
        <button 
            onClick={changeTextPosition}
            className="button button--textoutside">
            {meme.state.outside? onIcon :offIcon} text outside?
        </button>
        <p>Text size : {meme.state.size}px </p>
        <input 
            type="range" 
            min="10" 
            max="50" 
            value={meme.state.size} 
            onChange={handleSize}
            className="input input--textsize"
        />
    </TextWrap>
    )
}
export default Text