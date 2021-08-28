import styled from 'styled-components'

export const SideBar = styled.div`
    min-height: calc(100vh - 50px);
    height: 100%;
    width: 220px;
`

export const SidebarWrapper = styled.div `
    padding: 20px;
    color : #555;

`

export const SidebarMenu = styled.div `

`

export const SidebarTitle = styled.p `
    font-size: 0.8rem;
    margin-bottom: 10px;
`

export const SidebarList = styled.ul `
    list-style: none;
    cursor: pointer;
    padding: 1px;
    font-size: 0.8rem;
`

export const SidebarListItem = styled.li `
    padding: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between;
    background-color: yellow;
`