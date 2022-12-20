import React, { createContext, useReducer, createRef} from 'react'
const initialState = {
	urlAdd: '' ,
	urlNumber: 1,
    photoNumber: 0,
	topText: 'Top Text',
	bottomText: 'Bottom Text',
    outsideText: 'Text...',
	size: 30,
	file: 'https://picsum.photos/id/450/600/600' ,
	image: '' ,
    ref: createRef(null),
    outside: false,
}

const AppContext = createContext(initialState);
const { Provider } = AppContext;

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'CHANGE_TOP':
                return {
                    ...state,
                    topText:action.payload,
                }
            case 'CHANGE_BOTTOM':
                return {
                    ...state,
                    bottomText:action.payload,
                }
            case 'CHANGE_OUTSIDE':
                return {
                    ...state,
                    outsideText:action.payload,
                }
            case 'ADD_URL':
                return {
                    ...state,
                    urlAdd: action.payload,
                }
            case 'URL_NUMBER':
                return{
                    ...state,
                    urlNumber:action.payload,
                }
            case 'PHOTO_NUMBER':
                return{
                    ...state,
                    photoNumber:action.payload,
                }
            case 'CHANGE_SIZE':
                return {
                    ...state,
                    size:action.payload,
                }
            case 'ADD_FILE':
                return {
                    ...state,
                    file:action.payload,
                }
            case 'DOWNLOAD_IMAGE':
                return {
                    ...state,
                    image:action.payload,
                }
            case 'MOVE_OUTSIDE':
                return {
                    ...state,
                    outside:!state.outside
                }
            default: return initialState
        }
    }, initialState)
    return <Provider value={{ state, dispatch }}>{children}</Provider>
}
export { AppContext, StateProvider };