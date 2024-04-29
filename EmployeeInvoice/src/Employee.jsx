import React, { Component } from "react";
import Invoice from "./Invoice";

class Employee extends Component {
    render() {
        return(<>
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>Employee Name :</td>
                        <td>
                            <input type="text" name="ename"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Designation :</td>
                        <td>
                            <input type="text" name="desg"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Salary :</td>
                        <td>
                            <input type="number" name="salary"></input>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" value="PrintInvoice"></input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
        </>)
    }
}
export default Employee;