import React, { Component } from 'react'
import { ClientWrap, ClientTitle, ClientBoxWrapper, ClientBox, Client, ClientPic } from './Client_element'
import { withTranslation } from 'react-i18next';
import Client1KR from '../../images/client2KR.jpg';
import Client1EN from '../../images/client1EN.jpg';

export class Client1 extends Component {
    render() {
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
                                아밂ㅇㄴㄹ
                                <table>
                                <tr>
                                    <th>Company</th>
                                    <th>Contact</th>
                                </tr>
                                <tr>
                                    <td>Alfreds Futterkiste</td>
                                    <td>Maria Anders</td>
                                </tr>
                                <tr>
                                    <td>Centro comercial Moctezuma</td>
                                    <td>Francisco Chang</td>
                                </tr>
                                </table>

                                
                                <table>
                                <tr>
                                    <th>Company</th>
                                    <th>Contact</th>
                                </tr>
                                <tr>
                                    <td>Alfreds Futterkiste</td>
                                    <td>Maria Anders</td>
                                </tr>
                                <tr>
                                    <td>Centro comercial Moctezuma</td>
                                    <td>Francisco Chang</td>
                                </tr>
                                </table>
                                </div>
                                
                                

                            </Client>
                            <Client>
                            </Client>
                        </ClientBox>
                        <ClientBox>
                            asdfdsaf
                        </ClientBox>
                    </ClientBoxWrapper>
                </ClientWrap>
            </>
        )
    }
}

export default withTranslation()(Client1)
