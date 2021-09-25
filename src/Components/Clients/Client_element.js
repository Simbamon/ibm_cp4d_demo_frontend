import styled from 'styled-components'

export const ClientWrap = styled.div`
    background-color: #F3F3F4;
    min-height: calc(100vh - 50px);
    height: 100%;
    padding: 25px;
`

export const ClientTitle = styled.div`
    padding: 10px;
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 1.7rem;
`

export const ClientBoxWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
`

export const ClientBox = styled.div`
    flex: 1;
    margin : 10px;
    padding: 15px;
    height: 100%;
    border-radius: 10px;
    white-space: nowrap;
    background-color: white;
    box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.36);
`

export const Client = styled.div`
    display: flex;
    
`

export const ClientPic = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    width: 150px;
    border-radius: 10%;
    height: 150px;
    text-decoration: none;
 
`