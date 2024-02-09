import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { Database , ref , onValue , set } from "@angular/fire/database";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emergency-history',
  templateUrl: './emergency-history.component.html',
  styleUrls: ['./emergency-history.component.scss']
})
export class EmergencyHistoryComponent implements OnInit , AfterViewInit {
  displayedColumns:string[] = [];
  ELEMENT_DATA: any[] =[];
  DATA: any[] = [];
  ObjectNames:string[] = [];
  ROW!:any;
  Note:FormGroup = new FormGroup ({
    note : new FormControl(null)
  });

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router:Router, private spinner: NgxSpinnerService, private Database:Database) {
  }

  ngOnInit(): void {
    this.EmergencyHistory();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  EmergencyHistory() {
    this.spinner.show();
    this.displayedColumns = [];
    this.dataSource = new MatTableDataSource<any>([]);
    this.ELEMENT_DATA = [];
    this.DATA = [];
    this.ObjectNames = [];
    const starCountRef = ref(this.Database, 'deletedEmergencyUsers');
    onValue(starCountRef, (snapshot) => {
      if(snapshot.exists()) {
        this.spinner.hide();
        const data = snapshot.val();
        this.displayedColumns = [];
        this.dataSource = new MatTableDataSource<any>([]);
        this.ELEMENT_DATA = [];
        this.DATA = [];
        this.ObjectNames = [];
        for (var key in data) {
          this.ObjectNames.push(key);
          if (!data.hasOwnProperty(key)) continue;
          let obj = data[key];
          this.ELEMENT_DATA.push(obj);
        }
      }
      else {
        this.spinner.hide();
        this.displayedColumns = [];
        this.dataSource = new MatTableDataSource<any>([]);
        this.ELEMENT_DATA = [];
        this.DATA = [];
        this.ObjectNames = [];
      }
      for(let i = 0; i < this.ELEMENT_DATA.length; ++i) {
        for(let j = 0; j < Object.keys(this.ELEMENT_DATA[i]).length; ++j) {
          if(Object.keys(this.ELEMENT_DATA[i])[j] != "user") {
            this.displayedColumns.push(Object.keys(this.ELEMENT_DATA[i])[j]);
          }
        }
      }
      this.displayedColumns = this.displayedColumns.filter((value, index, array)=> {
        return array.indexOf(value) === index;
      });
      for(let i = 0; i<Object.keys(this.ELEMENT_DATA[0]?.user).length; ++i) {
        this.displayedColumns.push(Object.keys(this.ELEMENT_DATA[0]?.user)[i])
      }
      this.displayedColumns.push("Note");
      console.log(this.displayedColumns);
      for(let i = 0; i < this.ELEMENT_DATA.length; ++i) {
        const object = {
          latitude       : this.ELEMENT_DATA[i]?.latitude,
          longitude      : this.ELEMENT_DATA[i]?.longitude,
          area           : this.ELEMENT_DATA[i]?.user?.area,
          carModel       : this.ELEMENT_DATA[i]?.user?.carModel,
          carPlateNumber : this.ELEMENT_DATA[i]?.user?.carPlateNumber,
          cityName       : this.ELEMENT_DATA[i]?.user?.cityName,
          id             : this.ELEMENT_DATA[i]?.user?.id,
          name           : this.ELEMENT_DATA[i]?.user?.name,
          password       : this.ELEMENT_DATA[i]?.user?.password,
          status         : this.ELEMENT_DATA[i]?.user?.status,
          telephone      : this.ELEMENT_DATA[i]?.user?.telephone,
          vin            : this.ELEMENT_DATA[i]?.user?.vin,
          note           : this.ELEMENT_DATA[i]?.note,
        }
        this.DATA.push(object);
      }
      this.dataSource = new MatTableDataSource<any>(this.DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  SaveNote(Note:FormGroup , element:any) {
    if(Note.valid) {
      let index = this.DATA.findIndex (
        (obj)=> {return (obj.note == element.note && obj.id == element.id && obj.latitude == element.latitude && obj.longitude == obj.longitude && obj.area == element.area &&
          obj.carModel == element.carModel && obj.carPlateNumber == element.carPlateNumber && obj.cityName == element.cityName && obj.name == element.name &&
          obj.password == element.password && obj.status == element.status && obj.telephone == element.telephone && obj.vin == element.vin);});
          set(ref(this.Database , "deletedEmergencyUsers/" + this.ObjectNames[index]), {
            latitude       : element.latitude,
            longitude      : element.longitude,
            user           : {
              id             : element.id,
              area           : element.area,
              carModel       : element.carModel,
              carPlateNumber : element.carPlateNumber,
              cityName       : element.cityName,
              name           : element.name,
              password       : element.password,
              status         : element.status,
              telephone      : element.telephone,
              vin            : element.vin
            },
            note           : Note.value.note,
          });
          Note.reset();
          this.EmergencyHistory();
        }
      }
  EmergencyRequests() {
    this.router.navigate(["/emergency"]);
  }
  MaintenanceBookingRequests() {
    this.router.navigate(["/maintenance-booking-requests"]);
  }
  MaintenanceBookingRequestsHistory() {
    this.router.navigate(["/maintenance-booking-requests-history"]);
  }
  AmendmentRequests() {
    this.router.navigate(["/amendment-requests"]);
  }
  AmendmentRequestsHistory() {
    this.router.navigate(["/amendment-requests-history"]);
  }
  VIPCustomers() {
    this.router.navigate(["/vip-customers"]);
  }
  CustomersData() {
    this.router.navigate(["/customers-data"]);
  }
  UsersHistory() {
    this.router.navigate(["/users-history"]);
  }
  OfflineDaysHome() {
    this.router.navigate(["/offline-days-home"]);
  }
  OfflineDaysWorkshop() {
    this.router.navigate(["/offline-days-workshop"]);
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}


