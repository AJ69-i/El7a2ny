import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { Database , ref , onValue , set , remove , push } from "@angular/fire/database";
import {  Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-offline-days-home',
  templateUrl: './offline-days-home.component.html',
  styleUrls: ['./offline-days-home.component.scss']
})
export class OfflineDaysHomeComponent implements OnInit {
  CalenderDate!:any;
  dates:any[] = [];
  GetDates:any[] = [];
  DATES:any[] = [];
  ObjectNames:string[] = [];
  DateRangeStart!:any;
  DateRangeEnd!:any;
  DatesPickerRange:any[] = [];
  Counter:number = 0;
  StartDateValue!:string;
  EndDateValue!:string;
  DateValue!:any;
  constructor(private Database:Database, private router:Router, private spinner:NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.getDates();
  }
  getDate(datepicker:any) {
    this.dates.push(moment(datepicker.value).format('YYYY-MM-DD'));
  }
  sendDate() {
    this.DateValue = "";
    for(let i = 0; i < this.dates.length; ++i) {
      push(ref(this.Database , 'Busydates/'), {
        date : this.dates[i],
        type : "Home"
      });
    }
    this.dates = [];
  }
  getDateRangeStart(event:any) {
    this.DateRangeStart = (moment(event.target.value).format('YYYY-MM-DD'));
  }
  getDateRangeEnd(event:any) {
    this.DateRangeEnd = (moment(event.target.value).format('YYYY-MM-DD'));
  }
  sendDateRange() {
    this.StartDateValue = "";
    this.EndDateValue = "";
    const startDate = new Date(this.DateRangeStart);
    const endDate = new Date(this.DateRangeEnd);
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      this.DatesPickerRange.push((moment(date).format('YYYY-MM-DD')));
    }
    for(let i = 0; i < this.DatesPickerRange.length; ++i) {
      push(ref(this.Database , 'Busydates/'), {
        date : this.DatesPickerRange[i],
        type : "Home"
      });
    }
    this.DatesPickerRange = [];
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
  getDates() {
    this.GetDates = [];
    this.DATES = [];
    this.ObjectNames = [];
    const starCountRef = ref(this.Database,'Busydates');
    onValue(starCountRef, (snapshot) => {
      if(snapshot.exists()) {
        const data = snapshot.val();
        this.GetDates = [];
        this.DATES = [];
        this.ObjectNames = [];
        this.spinner.hide();
        for (var key in data) {
          this.ObjectNames.push(key);
          if (!data.hasOwnProperty(key)) continue;
          let obj = data[key];
          if(obj?.type == "Home") {
            this.DATES.push(moment(obj?.date).format("MMM Do YY"));
          }
        }
      }
    });
  }
  deleteDates() {
    remove(ref(this.Database,'Busydates'));
    this.getDates();
  }
  deleteDate(id:any) {
    remove(ref(this.Database,"Busydates/" + this.ObjectNames[id]));
    this.getDates();
  }
}
