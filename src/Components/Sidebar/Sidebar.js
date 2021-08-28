import React, { Component } from 'react'
import { SideBar, SidebarWrapper, SidebarMenu, SidebarTitle, SidebarList, SidebarListItem } from './Sidebar_element'
import { Dashboard, AssignmentInd, DesktopMac, KeyboardArrowRight } from '@material-ui/icons'

export class Sidebar extends Component {
    render() {
        return (
            <>
                <SideBar>
                    <SidebarWrapper>
                        <SidebarMenu>
                            <SidebarTitle>Navigation</SidebarTitle>
                            <SidebarList>
                                <SidebarListItem>
                                    <div style= {{display: "flex", alignItems: "center"}}>
                                        <Dashboard style = {{paddingRight: "10px"}}/>
                                        대시보드
                                    </div>
                                    <KeyboardArrowRight />
                                </SidebarListItem>
                                <SidebarListItem>
                                    <div style= {{display: "flex", alignItems: "center"}}>
                                        <AssignmentInd style = {{paddingRight: "10px"}}/>
                                        클라이언트
                                    </div>
                                    <KeyboardArrowRight />
                                </SidebarListItem>
                                <SidebarListItem>
                                    <div style= {{display: "flex", alignItems: "center"}}>
                                        <DesktopMac style = {{paddingRight: "10px"}}/>
                                        COA 머신러닝
                                    </div>
                                    <KeyboardArrowRight />
                                </SidebarListItem>
            
                            </SidebarList>
                        </SidebarMenu>
                    </SidebarWrapper>
                </SideBar>
                
            </>
        )
    }
}

export default Sidebar
