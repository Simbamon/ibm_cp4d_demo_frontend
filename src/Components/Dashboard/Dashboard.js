import React, { Component } from 'react'
import { DashboardWrap, DashboardTitle } from './Dashboard_element'
import { } from '@material-ui/icons'
import { withTranslation } from 'react-i18next';

export class Dashboard extends Component {
    render() {
        return (
            <>
            <DashboardWrap>
                <DashboardTitle>
                    <h2>대시보드</h2>
                    <p>홈 / 대시보드</p>
                </DashboardTitle>
                
            </DashboardWrap>
                
            </>
        )
    }
}

export default withTranslation()(Dashboard)
