import React, {Component} from 'react';

class PhoneForm extends Component {

    state = {
        name: '',
        phone: '',
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state)
    }

    render() {
        return (
            <form>
                <input
                    name={"name"}
                    placeholder={"이름"}
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <input
                    name={"phone"}
                    placeholder={"전화번호"}
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button onClick={this.handleSubmit}>등록</button>
                <div>
                    {this.state.name} {this.state.phone}
                </div>

            </form>
        );
    }
}

export default PhoneForm;