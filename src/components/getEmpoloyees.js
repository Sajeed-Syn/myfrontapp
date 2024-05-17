import React from "react";
import ReactDom from 'react-dom';

class GetEmployees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }
    componentDidMount() {
        fetch("https://empwebapiservice.azurewebsites.net/api/employee")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              employees: result
            });
          }
        );
    }
    render() {
        return (
            <div>
                <h2>Employees Details White...</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              
              </tr>
  ))}
                    </tbody>
                </table>
            </div>
        );
        
    }
}
export default GetEmployees