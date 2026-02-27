import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'myfirstapp';
  num:number=23;
  isUnchange=false;

  dayOfWeek:string='Monday';


  myfun(){
alert('hello');
console.log("weclome");
  }
  items=['item 1','item 2'];
  
user={
  name:'',email:''
};
submitted=false;
onSubmit()
{
  this.submitted=true
}  }

