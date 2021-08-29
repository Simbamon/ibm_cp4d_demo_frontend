import React, { Component } from 'react'
import { DashboardWrap, DashboardTitle, BoxInfo, BoxItem } from './Dashboard_element'
import { ArrowDownward } from '@material-ui/icons'
import { withTranslation } from 'react-i18next';

export class Dashboard extends Component {
    render() {
        return (
            <>
            <DashboardWrap>
                <DashboardTitle>
                    <h2>대시보드</h2>
                    <p>홈 / 대시보드</p>

                    <BoxInfo>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>
                                <p>Total Clients</p>
                                <p>8764</p>
                                <ArrowDownward /><span>15.3%</span>
                                <p>compared to last month</p>
                                </div>
                                <p>adsfsadfsdaf</p>
                            </div>
                            
                        </BoxItem>
                        <BoxItem>
                            <p>Total Clients</p>
                            <p>8764</p>
                            <ArrowDownward /><span>15.3%</span>
                            <p>compared to last month</p>
                        </BoxItem>
                        <BoxItem>
                            <p>Total Clients</p>
                            <p>8764</p>
                            <ArrowDownward /><span>15.3%</span>
                            <p>compared to last month</p>
                        </BoxItem>
                        <BoxItem>
                            <p>Total Clients</p>
                            <p>8764</p>
                            <ArrowDownward /><span>15.3%</span>
                            <p>compared to last month</p>
                        </BoxItem>
                    </BoxInfo>
                </DashboardTitle>
                
            </DashboardWrap>
                
            </>
        )
    }
}

export default withTranslation()(Dashboard)
