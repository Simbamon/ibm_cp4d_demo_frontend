import React, { Component } from 'react'
import {Nav, NavLink, NavMenu, ProfilePic, Profile, ProfileName} from './Navbar_element'
import { Email, NotificationsNoneOutlined, ExpandMore, Search } from '@material-ui/icons'
import { withTranslation } from 'react-i18next';


export class Navbar extends Component {
    render() {
        const { t } = this.props; 
        return (
            <>
                <Nav>
                    <NavLink to="/">
                        <h1>TITLE</h1>
                    </NavLink>
                    <NavMenu>
                        <NavLink>
                            <Search />
                        </NavLink>
                        <NavLink to="/notification">
                            <NotificationsNoneOutlined />
                        </NavLink>
                        <NavLink to="/email">
                            <Email />
                        </NavLink>
                        <NavLink>
                            <Profile>
                                <ProfilePic img = {require('../../images/profile_pic.png').default} alt='discovery workshop'></ProfilePic>
                                <ProfileName>
                                    <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                        <p style = {{fontSize: "0.85rem"}}>{t('test.1')}</p>
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

export default withTranslation()(Navbar)