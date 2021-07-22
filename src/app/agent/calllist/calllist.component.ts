import { Component, OnInit } from '@angular/core';
import { HelperRequestService } from 'src/app/admin/services/helper-request.service';

@Component({
  selector: 'app-calllist',
  templateUrl: './calllist.component.html',
  styleUrls: ['./calllist.component.css']
})
export class CalllistComponent implements OnInit {
  callList=[];
  constructor(private dataService: HelperRequestService) { }

  ngOnInit(): void {
    this.dataService.getAllCall().subscribe((data: any[])=>{
      console.log(data);
      this.callList=data;
     
    }) 

  }

}
