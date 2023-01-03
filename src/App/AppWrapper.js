import styled from 'styled-components'

const AppWrap = styled.div`
    display:flex;
    flex-direction:row;
    column-gap:2rem;
    height:100%;
    width:100%;
    @media only screen and (max-width: 768px){
        flex-wrap:wrap;
        flex-direction:row;
        margin:0 auto;
        justify-content:center;
    }
`
export default AppWrap