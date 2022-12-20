import React, { useContext} from 'react'
import { AppContext } from '../AppContext';
import '../App.css';
import ButtonsWrap from './ButtonsWrapper';
import * as htmlToImage from "html-to-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUpload, faDownload} from '@fortawesome/free-solid-svg-icons'


const Buttons = () => {
    const meme = useContext(AppContext)

    //Font awesome icons
    const trashIcon = <FontAwesomeIcon icon={faTrash} />
    const uploadIcon = <FontAwesomeIcon icon={faUpload} />
    const downloadIcon = <FontAwesomeIcon icon={faDownload} />

    const download = (image, { name = "download", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = takeSS(extension, name);
        a.click();
    }
    const takeSS = async (node) => {
        const dataURI = await htmlToImage.toJpeg(node);
        return dataURI;
      };

    const getImage = () => takeSS(meme.state.ref.current).then(download)
    
    const handleFile = e => {
        meme.dispatch({type:'ADD_FILE', payload:URL.createObjectURL(e.target.files[0])})
    }

    const handleRandomImage = e => {
        meme.dispatch({type:'PHOTO_NUMBER', payload:(Math.floor(Math.random()*800))})
        meme.dispatch({type:'ADD_FILE', payload:'https://picsum.photos/id/'+ meme.state.photoNumber +'/600/600'})
    }

    const handlePicture = e => {
        meme.dispatch({type:'URL_NUMBER', payload:(Math.floor(Math.random()*99))})
        meme.dispatch({type:'ADD_FILE', payload:''})
    }

    const handleDelete = e => {
        meme.dispatch({type:'ADD_FILE',payload:''})
    }

    
    return(
        <ButtonsWrap>
            <h2>Change the photos here</h2>
            <p>Generate a photo from the internet</p>
            <button 
                onClick={handlePicture}
                className="button button--change--picture">
                Funny random picture
            </button>
            <button
                onClick={handleRandomImage}
                className="button button--change--picture">
                Nature random picture
            </button>
            <p>Or upload your own</p>
            <input 
                type="file" 
                onChange={handleFile} 
                onClick={(event)=> { event.target.value = null}} 
                id="inputfile"
            />
            <label 
                htmlFor="inputfile">
                {uploadIcon} Select...
            </label>
            <button 
                onClick={handleDelete}
                className="button button--delete">
                {trashIcon} Delete file
            </button>
            <button 
                onClick={getImage}
                className="button button--download">
                {downloadIcon} Download
            </button>
        </ButtonsWrap>
    )
}
export default Buttons