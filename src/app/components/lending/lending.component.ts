import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.scss']
})
export class LendingComponent implements OnInit {
  barwidth:number=25;
  countryList:string[]=[
    'India',
    'USA',
    'Germany'
  ];
  durationList:string[]=[
    '1 week',
    '2 week',
    '3 week',
  ];
  selectedCountry:string='';
  selectedDuration:string='';
  startDate:string='';
  endDate:string='';
  selectedCourse:string='';
  result:any;
  constructor() { }

  ngOnInit(): void {
  }

  next(value:string=''){
    
    if(value){
      this.selectedCourse='';
      this.selectedCourse=value;
    }
    if(this.barwidth<100){
      this.barwidth=this.barwidth + 25;
    }
    if(this.barwidth === 100){
      this.result={
        country: this.selectedCountry,
        course:this.selectedCourse,
        duration: this.selectedDuration,
        start_date: this.startDate,
        end_date: this.endDate,
       }
    }
  }

  previous(){
    if(this.barwidth>25){
      this.barwidth=this.barwidth-25;
    }
  }
  
  submit(){

  }

}
