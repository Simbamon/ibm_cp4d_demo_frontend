import React, { Component } from 'react'
import { DashboardWrap, DashboardTitle, BoxInfo, BoxItem, BoxTrend, TopFive, TopFiveBox, 
         Client, ClientPic, ClientName, Purchase, PieChart } from './Dashboard_element'
import { ArrowDownward, ArrowUpward, Person, ShowChart, QuestionAnswer, Assignment } from '@material-ui/icons'
import { withTranslation } from 'react-i18next';
import imageEN from '../../images/clientEN.jpg';
import imageKR from '../../images/clientKR.jpg';

export class Dashboard extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
            <DashboardWrap>
                
                <DashboardTitle>
                <h1>Dashbaord</h1>
                </DashboardTitle>
                <BoxInfo>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey"}}>{t('dashboard.1')}</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>8,764</h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "lightblue"}}>
                                            <p style={{fontSize: "0.6rem", color: "blue", marginLeft: "2px"}}>15.3%</p>
                                            <ArrowUpward  style={{fontSize: "0.7rem", color: "blue", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>{t('dashboard.6')}</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#00A6FF", margin:"0px 5px"}}>
                                    <Person style={{color: "#FFF", fontSize: "4.2rem"}}/>
                                </div>
                                
                            </div>
                        </BoxItem>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey"}}>{t('dashboard.2')}</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>{t('dashboard.5')}</h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "lightblue"}}>
                                            <p style={{fontSize: "0.6rem", color: "blue", marginLeft: "2px"}}>8.61%</p>
                                            <ArrowUpward  style={{fontSize: "0.7rem", color: "blue", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>{t('dashboard.6')}</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#28A745", margin:"0px 5px"}}>
                                    <ShowChart style={{color: "#FFF", fontSize: "4.2rem", textAlign: "center"}}/>
                                </div>
                                
                            </div>
                        </BoxItem>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey"}}>{t('dashboard.3')}</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>122</h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "pink"}}>
                                            <p style={{fontSize: "0.6rem", color: "red", marginLeft: "2px"}}>3.57%</p>
                                            <ArrowDownward  style={{fontSize: "0.7rem", color: "red", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>{t('dashboard.6')}</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#DC3545", margin:"0px 5px"}}>
                                    <QuestionAnswer style={{color: "#FFF", fontSize: "4.2rem"}}/>
                                </div>
                            </div>
                        </BoxItem>
                        <BoxItem>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <div style={{margin: "0 0 0 5px"}}>
                                    <p style={{fontSize: "0.85rem", color: "grey"}}>{t('dashboard.4')}</p>
                                    <h1 style={{fontSize: "1.7rem", margin: "7px 0px 7px 0px"}}>1,521</h1>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <BoxTrend style={{backgroundColor: "lightblue"}}>
                                            <p style={{fontSize: "0.6rem", color: "blue", marginLeft: "2px"}}>12.9%</p>
                                            <ArrowUpward  style={{fontSize: "0.7rem", color: "blue", marginLeft: "2px", marginRight: "1px"}}/>
                                        </BoxTrend>
                                        <p style={{fontSize: "0.6rem", color: "grey", marginLeft: "5px"}}>{t('dashboard.6')}</p>
                                    </div>
                                </div>
                                <div style={{borderRadius: "5px", backgroundColor: "#FFC107", margin:"0px 5px"}}>
                                    <Assignment style={{color: "#FFF", fontSize: "4.2rem"}}/>
                                </div>
                                
                            </div>
                        </BoxItem>
                    </BoxInfo>
                    <TopFive>
                        
                        <TopFiveBox>
                            
                            <thead>
                                <h1>asdfadsf</h1>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>클라이언트</th>
                                    <th>Email</th>
                                    <th>최근 오퍼된 상품</th>
                                    <th>구매여부</th>
                                    <th>Predict</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1024</td>
                                    <td>
                                        <Client>
                                            {/* <img src={localStorage.getItem('i18nextLng')==="en" ?imageEN : imageKR}/> */}
                                            <ClientPic img = {localStorage.getItem('i18nextLng')==="en" ?imageEN : imageKR} alt='discovery workshop'></ClientPic>
                                            <ClientName>
                                                <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                                    <p style = {{fontSize: "0.85rem"}}>{t('navbar.1')}</p>
                                                </div>
                                            </ClientName>
                                        </Client>
                                    </td>
                                    <td>example@example.com</td>
                                    <td>주택담보</td>
                                    <td>
                                        비구매
                                    </td>
                                    <td>
                                        <Purchase>
                                            <div style = {{backgroundColor: "red"}}>
                                                예측하기
                                            </div>
                                            
                                        </Purchase>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1031</td>
                                    <td>adsf</td>
                                    <td>example@example.com</td>
                                    <td>저축보험</td>
                                    <td>비구매</td>
                                    <td>afdsaf</td>
                                </tr>
                                <tr>
                                    <td>1055</td>
                                    <td>adsf</td>
                                    <td>example@example.com</td>
                                    <td>연금보험</td>
                                    <td>구매</td>
                                    <td>afdsaf</td>
                                </tr>
                                <tr>
                                    <td>1202</td>
                                    <td>adsf</td>
                                    <td>example@example.com</td>
                                    <td>자녀보험</td>
                                    <td>구매</td>
                                    <td>afdsaf</td>
                                </tr>
                                <tr>
                                    <td>1729</td>
                                    <td>adsf</td>
                                    <td>example@example.com</td>
                                    <td>연금보험</td>
                                    <td>Not Purchased</td>
                                    <td>afdsaf</td>
                                </tr>
                                
                                
                            </tbody>
                        </TopFiveBox>
                        <PieChart>

                        </PieChart>
                    </TopFive>

            </DashboardWrap>
                
            </>
        )
    }
}

export default withTranslation()(Dashboard)
