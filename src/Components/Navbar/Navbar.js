import React, { Component } from 'react'
import {Nav, NavLink, NavMenu, ProfilePic, Profile, ProfileName} from './Navbar_element'
import { Email, NotificationsNoneOutlined, ExpandMore, Search } from '@material-ui/icons'

export class Navbar extends Component {
    render() {
        return (
            <>
                <Nav>
                    <NavLink>
                        <h1>TITLE</h1>
                    </NavLink>
                    <NavMenu>
                        <NavLink>
                            <Search />
                        </NavLink>
                        <NavLink>
                            <NotificationsNoneOutlined />
                        </NavLink>
                        <NavLink>
                            <Email />
                        </NavLink>
                        <NavLink>
                            <Profile>
                                <ProfilePic img = {require('../../images/profile_pic.png').default} alt='discovery workshop'></ProfilePic>
                                <ProfileName>
                                    <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                        <p style = {{fontSize: "0.85rem"}}>홍길동</p>
                                        <p style = {{fontSize: "0.65rem"}}>Admin</p>
                                    </div>
                                    <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                        <ExpandMore style = {{paddingLeft: "5px", fontSize: "1.1rem"}} />
                                    </div>
                                </ProfileName>
                            </Profile>
                        </NavLink>
                    </NavMenu>
                </Nav>
            </>
        )
    }
}

export default Navbar
