import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

export class Client1 extends Component {
    render() {
        return (
            <>
                test
            </>
        )
    }
}

export default withTranslation()(Client1)
