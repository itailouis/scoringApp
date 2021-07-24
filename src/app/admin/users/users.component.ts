import { Component, OnInit } from '@angular/core';
import { HelperRequestService } from '../services/helper-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[];

  constructor(private dataService: HelperRequestService) { }

  ngOnInit(): void {
    this.dataService.getAllUsers().subscribe((data: any[])=>{
      console.log(data);
      this.users=data;
     
    }) 

  }

  userAction(id:number,action:string){
    this.dataService.setUserStatus(id,action).subscribe((data: any)=>{
      console.log(data)

      this.dataService.getAllUsers().subscribe((data: any[])=>{
        console.log(data);
        this.users=data;
       
      }) 
     
    }) 

  }

}
