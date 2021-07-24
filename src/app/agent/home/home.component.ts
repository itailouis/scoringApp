import { Component, OnInit } from '@angular/core';
import { HelperRequestService } from 'src/app/admin/services/helper-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: HelperRequestService) { }
  call:any;



  ngOnInit(): void {
    this.dataService.getMyRate().subscribe((data: any[])=>{
      console.log(data);
      this.call=data;
     
    }) 
  }

}
