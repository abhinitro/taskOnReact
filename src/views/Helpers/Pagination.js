import React, { PureComponent } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


export default class PaginationWidget extends PureComponent {


   


   moveReq(param){


    if(this.props.pageNum+param > this.props.pages){
        this.props.setPageAndPageSize(this.props.pages)

    }else{

        this.props.setPageAndPageSize(this.props.pageNum+param)

    }

   }

    moveToPage=(i)=>{

      
     this.props.setPageAndPageSize(i);

    }

   getPagination(){
   
    let pageList=this.props.pages;
    let pageNum=this.props.pageNum;

    let htmlList=[];

    for(let i=0;i<pageList;i++){
       
       
            htmlList.push( <PaginationItem active={i===pageNum?true:false} >
                <PaginationLink  onClick={(e)=>{
                    e.preventDefault();
                    this.moveToPage(i)}}>
                {i+1}
                </PaginationLink>
              </PaginationItem>)
    
    }
    return htmlList;




   }


  render() {
    return (
      <div>
          { 
              this.props.pages > 0 ?(<div><Pagination aria-label="Page navigation example">
      <PaginationItem disabled>
        </PaginationItem>
        <PaginationItem disabled={this.props.pageNum===0?true:false}>
          <PaginationLink previous  
           onClick={ (e)=>{
            e.preventDefault()
            this.moveReq(-1);
        }
          
          

        } 
          />
        </PaginationItem>
       { this.getPagination()}
        <PaginationItem disabled={this.props.pageNum+1===this.props.pages?true:false}>
          <PaginationLink next onClick={ (e)=>{
              e.preventDefault()
              this.moveReq(1);
          }
            
          } />
        </PaginationItem>
        
              </Pagination></div>):"Loading..."
    
    }
        
      </div>
    )
  }
}
