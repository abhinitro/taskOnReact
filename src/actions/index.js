import collection from "./../userData"



/***
 * this actions is used to get the list of the users from localStorage 
 * 
 */

export const getDefaultUserData=()=>{
let checkCollectionExist=localStorage.getItem("user_list")
if(typeof checkCollectionExist !=undefined && checkCollectionExist !=null && checkCollectionExist.length > 0){
   return JSON.parse(checkCollectionExist);
 }else{
    localStorage.setItem("user_list",JSON.stringify(collection))
    return collection;

 }


}

/***
 * this actions is used to search the users from the list  
 * @param{search} string type of variable
 */

export const serchByKeywords=(search)=>{
 
   let list=[];
   let userData=JSON.parse(localStorage.getItem("user_list"))
   for(let i=0;i<userData.length;i++){
  
      if(userData[i].name.toLowerCase()===search.toLowerCase()){

         list.push(userData[i]);
      }
   }
return list;

}