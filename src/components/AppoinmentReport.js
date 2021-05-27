
const React = require('react')

class AppoinmentReport extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    render() {
        return (
            <div>jskjkslk</div>
        );
    }
}
// module.exports = AppoinmentReport
export default AppoinmentReport


// import React from 'react'

// function AppoinmentReport() {
//     return (<div>
//         <h1>Appoinment Report</h1>

//     </div>)
// }
// export default AppoinmentReport
