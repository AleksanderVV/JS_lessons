import { Component } from 'react';
import './employees-add-form.css';
import './employees-add-form.scss'

class EmployeesAddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        salary: '',
        classNameInputs: 'form-control new-post-label'
      }
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

export default EmployeesAddForm;