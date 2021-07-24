import { Component, OnInit } from '@angular/core';
import { HelperRequestService } from '../services/helper-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: HelperRequestService) { }
 data:any;
 


  ngOnInit(): void {
    this.dataService.getAllRate().subscribe((data: any[])=>{
      console.log(data);
      this.data=data;
     
    }) 
  }


}
