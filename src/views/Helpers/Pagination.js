import React, { PureComponent } from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


export default class PaginationWidget extends PureComponent {


   

   /**
    * 
    * @param {Integer} param 
    */
   moveReq(param){
    this.props.setPageAndPageSize(this.props.pageNum+param)
   }

   /**
    * @param {Integer} i it is used to move the page number 
    * 
    */
    
    moveToPage=(i)=>{
     this.props.setPageAndPageSize(i);
   }


   /**
    * All the no of pages is comes from this function it contains two parameter from props
    * pageNum it is current page number
    * pageList it is total no of pages in current page
    * 
    */

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
              this.props.pages > 0 ?(<div className="pagination-list"><Pagination aria-label="Page navigation example">
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
