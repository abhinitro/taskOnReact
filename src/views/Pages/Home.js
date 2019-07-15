import React, { Component } from 'react'
import {Row,Col ,Input} from 'reactstrap';

import {getDefaultUserData,serchByKeywords} from '../../actions'
import ListView from '../Helpers/ListView';

export default class Home extends Component {


   constructor(props){

    super(props);

    this.state={
        list:[],
        page:0,
        search:"",
        trigger_modal:0
     }

    this.setNewArrayOfState=this.setNewArrayOfState.bind(this);
   }



   /***
    * this function is used to maintain the state of list and list is collection of
    * users 
    * @param {Array of Object} list
    * @param {boolean} flag it is used for trigger the modal on enter if name is not found
    * 
    * 
    */
   setNewArrayOfState=(list,flag=false)=>{
     
    localStorage.setItem("user_list",JSON.stringify(list))

    if(flag){
      this.setState({list:list,search:"",trigger_modal:0})

    }else{
      this.setState({list:list})

    }
   }




   /**
    * Lifecycle method
    * 
    */ 
    async componentDidMount(){
       let data=await getDefaultUserData()
       this.setState({list:data})
      
     }


    /**
     * this is function is used to search people by name you can when you type some proper name
     * it does n't work like %Like% in sql just match with full name it can be upper and lower
     * 
     */

     searchByKeywords=(e)=>{
     
      e.preventDefault();

      if(e.target.value!==""){
        let newList=serchByKeywords(e.target.value)
        if(newList.length > 0){
          this.setState({list:newList,search:e.target.value,trigger_modal:e.keyCode})
        }else{
          
            this.setState({trigger_modal:e.keyCode,search:e.target.value,list:[]})
        }
        
      }else{
        this.setState({list:JSON.parse(localStorage.getItem("user_list")),trigger_modal:e.keyCode,search:e.target.value})
      }
   

     }



  render() {

    return (
    <div className="task_wrapper" >
     <Row>
      <Col md={{ size: 12 }} >
      <div className="panel">
      <div className="panel-body">The FriendList</div>
      </div>
      </Col>
      
     
      <Col md={{ size: 12 }} className="postion_from_top">
      
      <div ><Input type="text" placeholder="Type the name of a friend" name="search"   onKeyUp={this.searchByKeywords}></Input></div>
      
      </Col>
     
     <ListView list={this.state.list} setNewArrayOfState={this.setNewArrayOfState} search={this.state.search}  trigger_modal={this.state.trigger_modal}></ListView>


      </Row>
             
        
      </div>
    )
  }
}
