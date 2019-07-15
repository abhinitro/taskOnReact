import React, { Component } from 'react'
import {Row,Col ,Button} from 'reactstrap';
import Modal from './ModalWidget';
import PaginationWidget from './Pagination';


export default class ListView extends Component {


   constructor(props){
    super(props);

    this.state={
      modal: false,
      page:0,
      pageSize:2


    }
    this.toggle = this.toggle.bind(this);
    this.updateTheList=this.updateTheList.bind(this);
    this.addToFavourite=this.addToFavourite.bind(this);
    this.deleteTheUser=this.deleteTheUser.bind(this);

    this.setPageAndPageSize=this.setPageAndPageSize.bind(this)
   }

   toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }




  componentWillReceiveProps(){

    console.log(this.props.trigger_modal)
    if(this.props.trigger_modal===13){
      this.toggle()
    }
  }
  


   deleteTheUser=(index)=>{

    let list=this.props.list;
    let newArray=[];

    for(let i=0;i<list.length;i++){

      if(i!==index){
        newArray.push(list[i]);
        
      }

    }
    this.props.setNewArrayOfState(newArray)
    

   } 


addToFavourite=(index)=>{

  let list=this.props.list;

  if(list[index].is_fav){
    list[index].is_fav=false;

  }else{
    list[index].is_fav=true;

  }

  
  this.props.setNewArrayOfState(list)  
  

}


setPageAndPageSize(page){

  this.setState({page:page})

}




   updateTheList=(list)=>{

    let html=[];
    let limit=this.state.pageSize;
    let skip=this.state.page*limit;

    let startIndex=skip;

    let lastIndex=list.length;
     if(lastIndex > limit+skip){
       lastIndex=limit+skip;
     }


    for(let i=startIndex;i<lastIndex;i++){

      console.log(list[i].is_fav===false?"fa fa-star-o":"fa fa-star")
        html.push(

            <Col md={{ size: 12 }}  >
            <Row className="list-view">
                <Col md={{ size: 4 }}>
                <span className="user_title">{list[i].name}</span>
                <p className="user_description">{ list[i].gender===0?'Male':'Female' }</p>
                </Col>
      
                <Col md={{ size: 8 }} className="set-button">
                 <Button className="btn btn-default" onClick={(e)=>{
                   e.preventDefault();
                   this.addToFavourite(i)
                 }}><i className={ list[i].is_fav===false?"fa fa-star-o":"fa fa-star"}></i></Button> 
                 <Button className="btn btn-default" onClick={(e)=>{
                    e.preventDefault()
                   this.deleteTheUser(i)
                 }
                   
                   }><i className="fa fa-trash"></i></Button> 
      
                </Col>
      
               
                
                </Row>      
            
            </Col>
    
    
        )
    }

    
   
    return html;

   }



  render() {

    let list=this.props.list;
    return (
      <div>

          {

          this.updateTheList(list)

          }
         

         <PaginationWidget pages={Math.ceil(list.length/this.state.pageSize)}  setPageAndPageSize={this.setPageAndPageSize} pageNum={this.state.page} ></PaginationWidget>
         <Modal modal={this.state.modal}  toggle={this.toggle} search={this.props.search}   setNewArrayOfState={this.props.setNewArrayOfState} ></Modal>

    
         </div>
    )
  }
}
