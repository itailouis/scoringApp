import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperRequestService } from '../services/helper-request.service';

@Component({
  selector: 'app-addscoring',
  templateUrl: './addscoring.component.html',
  styleUrls: ['./addscoring.component.css']
})
export class AddscoringComponent implements OnInit {
  users=[];
  formdata;

  error='';
  constructor(private router: Router,private route: ActivatedRoute,private dataService: HelperRequestService) { }
  ngOnInit(): void {
    this.dataService.getAllUsers().subscribe((data: any[])=>{
      console.log(data);
      this.users=data;
     
    });
    this.formdata = new FormGroup({
      title: new FormControl("Voice call 4"),
      user: new FormControl("Select User"),
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])
    
    });

  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formdata.patchValue({
        fileSource: file
      });
    }
  }

  onClickSubmit(data) {
    let formData = new FormData();
    formData.append('file', this.formdata.get('fileSource').value);
    formData.append('user', this.formdata.get('user').value);
    formData.append('title', this.formdata.get('title').value);
    console.log(this.formdata);

    this.dataService.saveCall(formData).subscribe(
      {
        next: data => {
          console.log(data)
          this.router.navigate([`../admin/users`]);
        },
        error: error => {
          console.log(error)

          this.error="something went wrong";
         // this.router.navigate([`../admin/users`]);
        }
      })
  

  }
  

}


