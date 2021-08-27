import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #181818;
    height: 55px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
`

export const NavLink = styled(Link) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.65rem;
    height: 100%;
    cursor: pointer;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`

export const Profile = styled.div`
    display: flex;
    
`

export const ProfilePic = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    width: 30px;
    border-radius: 50%;
    height: 30px;
    text-decoration: none;
    cursor: pointer;
 
`

export const ProfileName = styled.div`
    margin-left: 8px;
    margin-right: 30px;
    vertical-align: middle;
    display: table;
`