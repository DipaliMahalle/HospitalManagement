import React from 'react'
import axios from 'axios';


export default class AddTiming extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/adityaBirlaHospitalBranch`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div>
                { this.state.persons.map((person) => (<div>
                    <table>
                        {
                            [{ "name": "Branch Name", prop: "branchName", bgcolor: "#4053bf" },
                            { "name": "Branch facility", prop: "branchFacility", bgcolor: "#4053bf" },
                            { "name": "Contact No.", prop: "branchContactNo", bgcolor: "#4053bf" },
                            { "name": "Email Id", prop: "branchEmail", bgcolor: "#4053bf" },
                            { "name": "City", prop: "branchCity", bgcolor: "#4053bf" },
                            { "name": "State", prop: "branchState", bgcolor: "#4053bf" }
                            ].map(
                                (row) =>
                                (<thead><tr>
                                    <th bgcolor={row.bgcolor}>{row.name}</th>
                                    <td> {person[row.prop]}</td>
                                </tr></thead>))
                        }

                    </table>
                </div>))}
            </div>
        )
    }
}













// function AddTiming() {
//     {
//         var num1;
//         var num2;
//         const pyrimid = [];

//         for (num1 = 1; num1 <= 5; num1++) {
//             for (num2 = num1; num2 >= 1; num2--) {
//                 pyrimid.push(num2)
//             }
//             pyrimid.push("  ")
//         }
//         return <div style={{ display: 'flex', flexDirection: "row" }}>{pyrimid.map((p) => <div>{p}</div>)
//         }</div >
//     }
//     //     var evenNo = " ";
//     //     var num;

//     //     for (num = 1; num <= 20; num++) {
//     //         if (num % 2 === 0) {
//     //             evenNo = evenNo + num + " ";
//     //         }
//     //     }
//     //     return <div>Prime Numbers :{evenNo}</div>
//     // }


//     // return <div>{pyrimid}</div>



//     // var i = 0;
//     // var num = 0;
//     // const primeNumbers = [];

//     // for (i = 1; i <= 100; i++) {
//     //     var counter = 0;
//     //     for (num = i; num >= 1; num--) {
//     //         if (i % num == 0) {
//     //             counter = counter + 1;
//     //         }
//     //     }
//     //     if (counter == 2) {

//     //         primeNumbers.push(i);


//     //         // primeNumbers = primeNumbers + i + " ";
//     //     }
//     // }

//     // return <div>{primeNumbers.map((prime) => <div>{prime}</div>)}</div>



//     // return (<div style={{ height: "140px", width: "80px", backgroundColor: "red", borderRadius: "40px" }}>
//     //     <div>


//     //     </div>

//     // </div>)

// }
// export default AddTiming
