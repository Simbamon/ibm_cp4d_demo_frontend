import React, { Component } from 'react'
import { ClientWrap, ClientTitle, ClientBoxWrapper, ClientBox, Client, ClientPic } from './Client_element'
import { withTranslation } from 'react-i18next';
import Client1KR from '../../images/client1KR.jpg';
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
                                <ClientPic img = {localStorage.getItem('i18nextLng')==="ko" ?Client1KR : Client1EN} alt='discovery workshop'></ClientPic>
                            </Client>
                        </ClientBox>
                    </ClientBoxWrapper>
                </ClientWrap>
            </>
        )
    }
}

export default withTranslation()(Client1)
