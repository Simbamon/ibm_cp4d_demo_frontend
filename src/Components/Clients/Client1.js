import React, { Component } from 'react'
import { ClientWrap, ClientTitle, ClientBoxWrapper, ClientBox, Client, ClientPic, ClientInfo, ClientBox2 } from './Client_element'
import { withTranslation } from 'react-i18next';
import Client1KR from '../../images/client1KR.jpg';
import Client1EN from '../../images/client1EN.jpg';

export class Client1 extends Component {
    render() {

        const { t } = this.props;

        return (
            <>
                <ClientWrap>
                    <ClientTitle>
                        Client
                    </ClientTitle>
                    <ClientBoxWrapper>
                        <ClientBox>
                            <Client>
                                <div>
                                <ClientPic img = {localStorage.getItem('i18nextLng')==="ko" ?Client1KR : Client1EN} alt='discovery workshop'></ClientPic>
                                {t('client.1')}
                                <ClientInfo>
                                <thead>
                                    <caption>개인 정보</caption>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Customer ID:</td>
                                        <td>1024</td>
                                    </tr>
                                    <tr>
                                        <td>나이:</td>
                                        <td>36세</td>
                                    </tr>
                                    <tr>
                                        <td>결혼 여부:</td>
                                        <td>미혼</td>
                                    </tr>
                                    <tr>
                                        <td>주소:</td>
                                        <td>서울특별시 송파구</td>
                                    </tr>
                                    <tr>
                                        <td>직업:</td>
                                        <td>간호사</td>
                                    </tr>
                                    <tr>
                                        <td>최종학력:</td>
                                        <td>학사</td>
                                    </tr>
                                    <tr>
                                        <td>선호 연락수단:</td>
                                        <td>이메일</td>
                                    </tr>
                                </tbody>
                                
                                </ClientInfo>
                                <ClientInfo>
                                <thead>
                                    <caption>재정 프로필</caption>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>연봉:</td>
                                        <td>48,000,000원</td>
                                    </tr>
                                    <tr>
                                        <td>자가보유:</td>
                                        <td>있음</td>
                                    </tr>
                                    <tr>
                                        <td>월세:</td>
                                        <td>895,000원</td>
                                    </tr>
                                    <tr>
                                        <td>신용점수:</td>
                                        <td>668점</td>
                                    </tr>
                                    <tr>
                                        <td>신용등급:</td>
                                        <td>3등급</td>
                                    </tr>
                                    <tr>
                                        <td>관심종목:</td>
                                        <td>자금 확보</td>
                                    </tr>
                                </tbody>
                                
                                </ClientInfo>
                                </div>
                                
                                

                            </Client>
                        </ClientBox>
                        <ClientBox2>
                            asdfdsaf
                        </ClientBox2>
                    </ClientBoxWrapper>
                </ClientWrap>
            </>
        )
    }
}

export default withTranslation()(Client1)
