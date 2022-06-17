import { React,  Component } from "react";
import './App.css'

class App extends Component{
    constructor() {
      super()
    
      this.state = {
        title  : 'My React App',
         employeeData : [],
         act : 0 ,
         index : ''
      }
    }
    handleSumbit = (e) =>{
        e.preventDefault();
        let employeeData = this.state.employeeData;
        let firstname = this.refs.txtFirstName.value;
        let lastname = this.refs.txtLastName.value;
        let email = this.refs.txtEmail.value;
        let phone = this.refs.txtPhone.value;
     
        if(this.state.act === 0){
            let newEmployee = {
                "firstname" : firstname ,
                "lastname" : lastname,
                "email" : email,
                "phone" : phone
            }
            employeeData.push(newEmployee);
        }
        else 
        {
            let index = this.state.index;
            employeeData[index].firstname = firstname;
            employeeData[index].lastname = lastname;
            employeeData[index].email = email;
            employeeData[index].phone = phone;
        }

        this.setState({
            employeeData : employeeData,
            act : 0
        })

        this.refs.myform.reset();
    }


    handleEdit = (i) =>{
      let employeeData = this.state.employeeData;
      this.refs.txtFirstName.value = employeeData.firstname;
      this.refs.txtLastName.value = employeeData.lastname;
      this.refs.txtEmail.value = employeeData.email;
      this.refs.txtPhone.value = employeeData.phone;

      this.setState({
        employeeData : employeeData,
        act : 1,
        index : 1
      })
    }


    handleDelete = (i)=>{
        let employeeData = this.state.employeeData;
        employeeData.splice(i,1);
        this.setState({
            employeeData :employeeData
        });
    }

    render(){
        let employeeData = this.state.employeeData;
        return(
            <div className="App">
            <form ref = 'myform' className="myform">
            <h1>{this.state.title}</h1>
              <label>FirstName</label>
              <input type = 'text' ref = 'txtFirstName' placeholder = 'Enter firstname' className="formfield"/>
              <label>LastName</label>
              <input type = 'text' ref = 'txtLastName' placeholder = 'Enter lastname' className="formfield"/>
              <label>Email</label>
              <input type = 'email' ref = 'txtEmail' placeholder = 'Enter email' className="formfield"/>
              <label>Phone number</label>
              <input type = 'number' ref = 'txtPhone' placeholder = 'Enter phone number' className="formfield"/>
              <button className="mybutton" onClick = {e =>this.handleSumbit(e)}>save</button>
            </form>
            <table className="table">
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {
                    employeeData.map((data,i) =>
                        <tr key = {i}>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>
                                <button className="mybutton" onClick ={i=> this.handleEdit(i)} >Edit</button>
                            </td>
                            <td>
                                <button className="mybutton" onClick = {i=> this.handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </table>
            </div>
        )
    }
}

export default App