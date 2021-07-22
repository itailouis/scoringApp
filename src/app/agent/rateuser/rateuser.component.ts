import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperRequestService } from 'src/app/admin/services/helper-request.service';

@Component({
  selector: 'app-rateuser',
  templateUrl: './rateuser.component.html',
  styleUrls: ['./rateuser.component.css']
})
export class RateuserComponent implements OnInit {

  voicecallid:string;
  grouptotal: number = 0;
  groupTwototal: number = 0;
  groupThreetotal: number = 0;
  oneQuestionOneTotal: number;
  oneQuestionTwoTotal: number;
  oneQuestionThreeTotal: number;
  oneQuestionFourTotal: number;
  oneQuestionFiveTotal: number;
  oneQuestionSixTotal: number;
  oneQuestionSevenTotal: number = 0;
  oneQuestionEightTotal: number = 0;
  oneQuestionNineTotal: number = 0;
  oneQuestionTenTotal: number = 0;
  oneQuestionElevenTotal: number = 0;
  oneQuestionTwiTotal: number = 0;
  oneQuestionThitTotal: number = 0;
  oneQuestionFothTotal: number = 0;
  oneQuestionFitnTotal: number = 0;
  oneQuestionSitnTotal: number = 0;
  oneQuestionSevntTotal: number = 0;

  form;
  constructor(private router: Router, private route: ActivatedRoute, private dataService: HelperRequestService) {

  }

  ngOnInit(): void {
    this.voicecallid = this.route.snapshot.paramMap.get('voicecallid');
    this.grouptotal = 0;
    this.oneQuestionOneTotal = 0;
    this.oneQuestionTwoTotal = 0;
    this.oneQuestionThreeTotal = 0;
    this.oneQuestionFourTotal = 0;
    this.oneQuestionFiveTotal = 0;
    this.oneQuestionSixTotal = 0;

    this.form = new FormGroup({
      questionOne: new FormControl('0'),
      questionTwo: new FormControl('0'),
      questionThree: new FormControl('0'),
      questionFour: new FormControl('0'),
      questionFive: new FormControl('0'),
      questionSix: new FormControl('0'),

      questionSeven: new FormControl('0'),
      questionEight: new FormControl('0'),
      questionNine: new FormControl('0'),
      questionTen: new FormControl('0'),
      questionEleven: new FormControl('0'),
      questionTwelve: new FormControl('0'),
      questionThetne: new FormControl('0'),

      questionFortin: new FormControl('0'),
      questionFiftn: new FormControl('0'),
      questionSixtn: new FormControl('0'),
      questionSentn: new FormControl('0'),




    });
  }

  onItemChangeQuestionOne(value) {
    console.log(" Value is : ", value);
    this.oneQuestionOneTotal = parseInt(value);
    var total = this.oneQuestionOneTotal + this.oneQuestionTwoTotal + this.oneQuestionThreeTotal + this.oneQuestionFourTotal + this.oneQuestionFiveTotal + this.oneQuestionSixTotal;
    this.grouptotal = ((total / 30) * 100);
  }

  onItemChangeQuestionTwo(value) {
    console.log(" Value is : ", value);
    this.oneQuestionTwoTotal = parseInt(value);
    var total = this.oneQuestionOneTotal + this.oneQuestionTwoTotal + this.oneQuestionThreeTotal + this.oneQuestionFourTotal + this.oneQuestionFiveTotal + this.oneQuestionSixTotal;
    this.grouptotal = ((total / 30) * 100);
  }

  onItemChangeQuestionThree(value) {
    console.log(" Value is : ", value);
    this.oneQuestionThreeTotal = parseInt(value);
    var total = this.oneQuestionOneTotal + this.oneQuestionTwoTotal + this.oneQuestionThreeTotal + this.oneQuestionFourTotal + this.oneQuestionFiveTotal + this.oneQuestionSixTotal;
    this.grouptotal = ((total / 30) * 100);
  }

  onItemChangeQuestionFour(value) {
    console.log(" Value is : ", value);
    this.oneQuestionFourTotal = parseInt(value);
    var total = this.oneQuestionOneTotal + this.oneQuestionTwoTotal + this.oneQuestionThreeTotal + this.oneQuestionFourTotal + this.oneQuestionFiveTotal + this.oneQuestionSixTotal;
    this.grouptotal = ((total / 30) * 100);
  }

  onItemChangeQuestionFive(value) {
    console.log(" Value is : ", value);
    this.oneQuestionFiveTotal = parseInt(value);
    var total = this.oneQuestionOneTotal + this.oneQuestionTwoTotal + this.oneQuestionThreeTotal + this.oneQuestionFourTotal + this.oneQuestionFiveTotal + this.oneQuestionSixTotal;
    this.grouptotal = ((total / 30) * 100);
  }

  onItemChangeQuestionSix(value) {
    console.log(" Value is : ", value);
    this.oneQuestionSixTotal = parseInt(value);
    var total = this.oneQuestionOneTotal + this.oneQuestionTwoTotal + this.oneQuestionThreeTotal + this.oneQuestionFourTotal + this.oneQuestionFiveTotal + this.oneQuestionSixTotal;
    this.grouptotal = ((total / 30) * 100);
  }




  onItemChangeQuestionSeven(value) {
    console.log(" Value is : ", value);
    this.oneQuestionSevenTotal = parseInt(value);
    var total = this.oneQuestionSevenTotal + this.oneQuestionEightTotal + this.oneQuestionNineTotal + this.oneQuestionTenTotal + this.oneQuestionElevenTotal + this.oneQuestionTwiTotal + this.oneQuestionThitTotal;
    this.groupTwototal = ((total / 35) * 100);
  }
  onItemChangeQuestionEight(value) {
    console.log(" Value is : ", value);
    this.oneQuestionEightTotal = parseInt(value);
    var total = this.oneQuestionSevenTotal + this.oneQuestionEightTotal + this.oneQuestionNineTotal + this.oneQuestionTenTotal + this.oneQuestionElevenTotal + this.oneQuestionTwiTotal + this.oneQuestionThitTotal;
    this.groupTwototal = ((total / 35) * 100);
  }
  onItemChangeQuestionNine(value) {
    console.log(" Value is : ", value);
    this.oneQuestionNineTotal = parseInt(value);
    var total = this.oneQuestionSevenTotal + this.oneQuestionEightTotal + this.oneQuestionNineTotal + this.oneQuestionTenTotal + this.oneQuestionElevenTotal + this.oneQuestionTwiTotal + this.oneQuestionThitTotal;
    this.groupTwototal = ((total / 35) * 100);
  }
  onItemChangeQuestionTen(value) {
    console.log(" Value is : ", value);
    this.oneQuestionTenTotal = parseInt(value);
    var total = this.oneQuestionSevenTotal + this.oneQuestionEightTotal + this.oneQuestionNineTotal + this.oneQuestionTenTotal + this.oneQuestionElevenTotal + this.oneQuestionTwiTotal + this.oneQuestionThitTotal;
    this.groupTwototal = ((total / 35) * 100);
  }
  onItemChangeQuestionEleven(value) {
    console.log(" Value is : ", value);
    this.oneQuestionElevenTotal = parseInt(value);
    var total = this.oneQuestionSevenTotal + this.oneQuestionEightTotal + this.oneQuestionNineTotal + this.oneQuestionTenTotal + this.oneQuestionElevenTotal + this.oneQuestionTwiTotal + this.oneQuestionThitTotal;
    this.groupTwototal = ((total / 35) * 100);
  }
  onItemChangeQuestionTwelve(value) {
    console.log(" Value is : ", value);
    this.oneQuestionTwiTotal = parseInt(value);
    var total = this.oneQuestionSevenTotal + this.oneQuestionEightTotal + this.oneQuestionNineTotal + this.oneQuestionTenTotal + this.oneQuestionElevenTotal + this.oneQuestionTwiTotal + this.oneQuestionThitTotal;
    this.groupTwototal = ((total / 35) * 100);
  }
  onItemChangeQuestionThetne(value) {
    //console.log(" Value is : ", value);
    this.oneQuestionThitTotal = parseInt(value);
    var total = this.oneQuestionSevenTotal + this.oneQuestionEightTotal + this.oneQuestionNineTotal + this.oneQuestionTenTotal + this.oneQuestionElevenTotal + this.oneQuestionTwiTotal + this.oneQuestionThitTotal;
    console.log("Value is total : ", total);
    this.groupTwototal = ((total / 35) * 100);
  }


  onItemChangeQuestionFortin(value) {
    console.log(" Value is : ", value);
    this.oneQuestionFothTotal = parseInt(value);
    var total = this.oneQuestionFothTotal + this.oneQuestionFitnTotal + this.oneQuestionSitnTotal + this.oneQuestionSevntTotal;
    this.groupThreetotal = ((total / 20) * 100);
  }
  onItemChangeQuestionFiftn(value) {
    console.log(" Value is : ", value);
    this.oneQuestionFitnTotal = parseInt(value);
    var total = this.oneQuestionFothTotal + this.oneQuestionFitnTotal + this.oneQuestionSitnTotal + this.oneQuestionSevntTotal;
    this.groupThreetotal = ((total / 20) * 100);
  }
  onItemChangeQuestionSixtn(value) {
    console.log(" Value is : ", value);
    this.oneQuestionSitnTotal = parseInt(value);
    var total = this.oneQuestionFothTotal + this.oneQuestionFitnTotal + this.oneQuestionSitnTotal + this.oneQuestionSevntTotal;
    this.groupThreetotal = ((total / 20) * 100);
  }
  onItemChangeQuestionSentn(value) {
    console.log(" Value is : ", value);
    this.oneQuestionSevntTotal = parseInt(value);
    var total = this.oneQuestionFothTotal + this.oneQuestionFitnTotal + this.oneQuestionSitnTotal + this.oneQuestionSevntTotal;
    this.groupThreetotal = ((total / 20) * 100);
  }

  sendRatings() {
    var rating = ((this.grouptotal / 3) + (this.groupTwototal / 3) + (this.groupThreetotal / 3)).toFixed(2);

    this.dataService.saveRating({
      point: rating, voicecallid: parseInt(this.voicecallid)

    }).subscribe(
      {
        next: data => {
          console.log(data)
          this.router.navigate([`../agent/home`]);
        },
        error: error => {
          console.log(error)
          // this.router.navigate([`../admin/users`]);
        }
      })
  }

}
