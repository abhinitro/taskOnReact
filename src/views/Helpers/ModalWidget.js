import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Input } from 'reactstrap';

class ModalWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      gender:0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setStateFromInput = this.setStateFromInput.bind(this);
  }

  setStateFromInput(e){

    let obj={};
    obj[e.target.name]=e.target.value;
    this.setState(obj)

  }

  handleSubmit=(e)=>{
   e.preventDefault();

   console.log(this.props)
   let userList=JSON.parse(localStorage.getItem("user_list"));
   let obj={name:this.props.search,gender:this.state.gender,description:"",is_fav:false}
   userList.push(obj);

   this.props.setNewArrayOfState(userList,true)



  }
 

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>Add New User</ModalHeader>
          <ModalBody>

            <Input type="select" name="gender" onChange={this.setStateFromInput}>
            <option value={0}>Male</option>
            <option value={1}>Female</option>
            </Input>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Add</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalWidget;