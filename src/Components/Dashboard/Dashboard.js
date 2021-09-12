import React, { Component } from 'react'
import { DashboardWrap, DashboardTitle, BoxInfo, BoxItem, BoxTrend, TopFive, TopFiveBox, 
         Client, ClientPic, ClientName, Purchase, Predict, PieChart } from './Dashboard_element'
import { ArrowDownward, ArrowUpward, Person, ShowChart, QuestionAnswer, Assignment } from '@material-ui/icons'
import { withTranslation } from 'react-i18next';
import { FiberManualRecord } from '@material-ui/icons'
import Client1KR from '../../images/client1KR.jpg';
import Client2KR from '../../images/client2KR.jpg';
import Client3KR from '../../images/client3KR.jpg';
import Client4KR from '../../images/client4KR.jpg';
import Client5KR from '../../images/client5KR.jpg';
import Client1EN from '../../images/client1EN.jpg';
import Client2EN from '../../images/client2EN.jpg';
import Client3EN from '../../images/client3EN.jpg';
import Client4EN from '../../images/client4EN.jpg';
import Client5EN from '../../images/client5EN.jpg';



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
                                <caption>{t('table.1')}</caption>
                                <tr>
                                    <th>{t('table.2')}</th>
                                    <th>{t('table.3')}</th>
                                    <th>{t('table.4')}</th>
                                    <th>{t('table.5')}</th>
                                    <th>{t('table.6')}</th>
                                    <th>{t('table.7')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1024</td>
                                    <td>
                                        <Client>
                                            <ClientPic img = {localStorage.getItem('i18nextLng')==="ko" ?Client1KR : Client1EN} alt='discovery workshop'></ClientPic>
                                            <ClientName>
                                                <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                                    <p style = {{fontSize: "0.85rem"}}>{t('client.1')}</p>
                                                </div>
                                            </ClientName>
                                        </Client>
                                    </td>
                                    <td>{t('client.1e')}</td>
                                    <td>주택담보</td>
                                    <td>
                                        <Purchase>
                                            <FiberManualRecord style = {{paddingRight: "5px", color: "#23BF08", fontSize: "small"}} />
                                        </Purchase>
                                        <Purchase>
                                            {t('table.8')}
                                        </Purchase>
                                    </td>
                                    <td>
                                        <Predict>{t('table.10')}</Predict>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1031</td>
                                    <td>
                                        <Client>
                                            <ClientPic img = {localStorage.getItem('i18nextLng')==="ko" ?Client2KR : Client2EN} alt='discovery workshop'></ClientPic>
                                            <ClientName>
                                                <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                                    <p style = {{fontSize: "0.85rem"}}>{t('client.2')}</p>
                                                </div>
                                            </ClientName>
                                        </Client>
                                    </td>
                                    <td>{t('client.2e')}</td>
                                    <td>저축보험</td>
                                    <td>
                                        <Purchase>
                                            <FiberManualRecord style = {{paddingRight: "5px", color: "#23BF08", fontSize: "small"}} />
                                        </Purchase>
                                        <Purchase>
                                            {t('table.8')}
                                        </Purchase>
                                    </td>
                                    <td>
                                        <Predict>{t('table.10')}</Predict>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1055</td>
                                    <td>
                                        <Client>
                                            <ClientPic img = {localStorage.getItem('i18nextLng')==="ko" ?Client3KR : Client3EN} alt='discovery workshop'></ClientPic>
                                            <ClientName>
                                                <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                                    <p style = {{fontSize: "0.85rem"}}>{t('client.3')}</p>
                                                </div>
                                            </ClientName>
                                        </Client>
                                    </td>
                                    <td>{t('client.3e')}</td>
                                    <td>연금보험</td>
                                    <td>
                                        <Purchase>
                                            <FiberManualRecord style = {{paddingRight: "5px", color: "#E83E8C", fontSize: "small"}} />
                                        </Purchase>
                                        <Purchase>
                                            {t('table.9')}
                                        </Purchase>
                                    </td>
                                    <td>
                                        <Predict>{t('table.10')}</Predict>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1202</td>
                                    <td>
                                        <Client>
                                            <ClientPic img = {localStorage.getItem('i18nextLng')==="ko" ?Client4KR : Client4EN} alt='discovery workshop'></ClientPic>
                                            <ClientName>
                                                <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                                    <p style = {{fontSize: "0.85rem"}}>{t('client.4')}</p>
                                                </div>
                                            </ClientName>
                                        </Client>
                                    </td>
                                    <td>{t('client.4e')}</td>
                                    <td>자녀보험</td>
                                    <td>
                                        <Purchase>
                                            <FiberManualRecord style = {{paddingRight: "5px", color: "#23BF08", fontSize: "small"}} />
                                        </Purchase>
                                        <Purchase>
                                            {t('table.8')}
                                        </Purchase>
                                    </td>
                                    <td>
                                        <Predict>{t('table.10')}</Predict>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1729</td>
                                    <td>
                                        <Client>
                                            <ClientPic img = {localStorage.getItem('i18nextLng')==="ko" ?Client5KR : Client5EN} alt='discovery workshop'></ClientPic>
                                            <ClientName>
                                                <div style = {{display: "table-cell", verticalAlign: "middle"}}>
                                                    <p style = {{fontSize: "0.85rem"}}>{t('client.5')}</p>
                                                </div>
                                            </ClientName>
                                        </Client>
                                    </td>
                                    <td>{t('client.5e')}</td>
                                    <td>연금보험</td>
                                    <td>
                                        <Purchase>
                                            <FiberManualRecord style = {{paddingRight: "5px", color: "#E83E8C", fontSize: "small"}} />
                                        </Purchase>
                                        <Purchase>
                                            {t('table.9')}
                                        </Purchase>
                                    </td>
                                    <td>
                                        <Predict>{t('table.10')}</Predict>
                                    </td>
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
