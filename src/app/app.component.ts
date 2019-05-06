import { Component } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vlocity';
   columnDefs = [
        {headerName: 'Likes', field: 'Likes' },
        {headerName: 'Dislikes', field: 'Dislikes' }
    ];
  list:any;
  names:any[]=[];
  rowData: any;
  contacts:any[]=[];
  name:any;
  searchText:any;
  source:string;
  isclicked:boolean;
  details:string;
  data:any;
   likes:any
  dislikes:any
  count:number=0;
  rating:any;
  starRating:any;
  constructor(private contactService: ContactsService) {

  this.contactService.getContacts()
  .subscribe(res=>{
  this.contacts=res;
  this.data=res.People;
  this.data.forEach(n=>{
    this.names.push(n.name);
  });

  });
  console.log("name"+this.names)
  }

 /* getLikes(likes){
    if(likes==undefined){
       this.rowData.likes='';
    }
    else{
    likes.forEach(element=>{
      this.rowData.likes=element;

    });
    }
  }
    getDislikes(dislikes){
    if(dislikes==undefined){
     this.rowData.dislikes='';
  }
  else{
    dislikes.forEach(element=>{
      this.rowData.dislikes=element;
    });
    }
  }*/
  showDetails(event):void{
  this.list=[{}];
    this.name=event.target.innerText;
    this.data.forEach(element=>{
    if(element.name==this.name){
    this.source=element.img;
    this.details=element.Description;
    this.rating=element.rating;
    this.likes=element.Likes;
    this.dislikes=element.Dislikes;

    var index=0;
    this.likes.forEach((item,i, arr) =>{ debugger;
        this.dislikes.forEach((el, n, arr2)=>{
       if(this.likes.length>=this.dislikes.length && i==n){
         this.list[index] = {
            'Likes' : item,
            'Dislikes' : el

        }
        }
        else if(this.likes.length>this.dislikes.length && i>n){
         this.list[index] = {
            'Likes' : item,
            'Dislikes' : ''

        }
        }
        if(this.likes.length<this.dislikes.length && i<n){
         this.list[index] = {
            'Likes' : '',
            'Dislikes' : el

        }
        }




        });
    index++;
    });


    this.rowData=this.list;
    console.log(this.list);

    //this.getLikes( this.likes);
    // this.getDislikes(this.dislikes);
    this.isclicked=true;
    this.starRating = this.rating*20;
    }
    })
  }
//    myFunction(value) {
//   this.data.forEach(element=>{
//   if(element.name==value){
//       this.contacts.People=element;
//       return true;
//   }
//   });

// }
}
