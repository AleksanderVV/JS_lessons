import { Component } from 'react';
import './employees-add-form.css';
import './employees-add-form.scss'

class EmployeesAddForm extends Component {
    state = {
        name: '',
        salary: '',
        classNameInputs: 'form-control new-post-label'
      }

    onValueChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
    }

    onSubmit = (e) => {
      e.preventDefault();

      if(this.state.name !== '' && this.state.salary !== ''){
        this.props.onAddEmployee(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })      
      }
    }

    static onLog = () => {
      console.log('Log')
    }

    static onLogin = 'Hello';

    render() {
      const {name, salary} = this.state;

      return (
        <div className="app-add-form"
              onSubmit={this.onSubmit}>
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className={this.state.classNameInputs}
                    placeholder="Как его зовут?"
                    name='name'
                    value={name}
                    onChange={this.onValueChange} />
                <input type="number"
                    className={this.state.classNameInputs}
                    placeholder="З/П в $?"
                    name='salary'
                    value={salary}
                    onChange={this.onValueChange} />
                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
    }
}

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.onLogin);

export default EmployeesAddForm;