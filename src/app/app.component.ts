import { Component } from '@angular/core';
import { EmplService } from './empl.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dtas:EmplService){}


  title = 'Meherdip_neaon Changes 1';
  serch_element:Text;
  getsdata(serch_element){
    console.log(serch_element)
    this.dtas.dataapi(serch_element).subscribe(res=>{
      console.log(res)
    })
  }
}
