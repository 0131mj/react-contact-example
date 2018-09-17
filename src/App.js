import React, { Component } from 'react';
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 3;
  state = {
    information: [
        {
            id:0,
            name:'홍길동',
            phone: '010-000-0900'
        },
        {
            id:1,
            name:'김길동',
            phone: '010-000-0901'
        },{
            id:2,
            name:'이길동',
            phone: '010-000-0903'
        },
    ],
    keyword:'',
  };

  handleChange = (e) => {
      this.setState({
          ...this.state,
          keyword:e.target.value
      })
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
        information:information.concat(Object.assign({},data,
          {id: this.id++
        }))
    })
  };

  handleRemove = (id) => {
      const {information} = this.state;
      this.setState({
          information : information.filter(info => info.id !==id)
      })
  };

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
        information: information.map(
            info => {
                if( info.id === id){
                    return {
                        id,
                        ...data,
                    }
                }
                return info;
            }
        )
    })
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
          <input 
             type="text"
             value={this.state.keyword}
             onChange={this.handleChange}
             placeholder="검색..."
          />
        <PhoneInfoList
            data={this.state.information.filter(
                info => info.name.indexOf(this.state.keyword)> -1
            )}
            onRemove={this.handleRemove}
            onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
