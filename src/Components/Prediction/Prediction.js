// import React, { Component } from 'react'

// export class Prediction extends Component {
    
//     async componentDidMount() {
//         const test = await fetch('/token')
//         const resp = await test.json()
//         const cp4d_token = resp.access_token
//         console.log(cp4d_token)
//         const data = { token: cp4d_token, url: "<YOUR_ML_ENDPOINT_GOES_HERE>" }
//         console.log(data)

//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         }

//         const response = await fetch('/test', options)
//         const qwer = await response.json()
//         console.log(qwer)
//     }

//     render() {
//         return (
//             <>
                
//             </>
//         )
//     }
// }

// export default Prediction
