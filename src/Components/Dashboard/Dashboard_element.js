import styled from 'styled-components'

export const DashboardWrap = styled.div`
    background-color: #F3F3F4;
    min-height: calc(100vh - 50px);
    height: 100%;
    padding: 25px;
`

export const DashboardTitle = styled.div`

`

export const BoxInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
`

export const BoxItem = styled.div`
    flex: 1;
    margin : 10px;
    padding: 15px;
    border-radius: 10px;
    white-space: nowrap;
    background-color: white;
    box-shadow: 13px 15px 55px -13px rgba(0,0,0,0.36);
`

export const BoxTrend = styled.div`
    display: flex;
    align-items: center;
    padding: 3px;
    border-radius: 3px;
`