import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperRequestService } from '../services/helper-request.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  formdata;

  constructor(private router: Router,private route: ActivatedRoute,private dataService: HelperRequestService) {

  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl("angular"),
      firstname: new FormControl("firstname"),
      lastname: new FormControl("lastname"),
      email: new FormControl("email@gmail.com"),
      password: new FormControl("password"),
      role: new FormControl("role"),
    });
  }

  onClickSubmit(data) {
    
    this.dataService.saveUser(data).subscribe(
      {
        next: data => {
          console.log(data)
          this.router.navigate([`../admin/users`]);
        },
        error: error => {
          console.log(error)
         // this.router.navigate([`../admin/users`]);
        }
      })
  };

}
