import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { Database , ref , onValue } from "@angular/fire/database";

@Component({
  selector: 'app-vip-customers',
  templateUrl: './vip-customers.component.html',
  styleUrls: ['./vip-customers.component.scss']
})
export class VipCustomersComponent implements OnInit , AfterViewInit {
  displayedColumns:string[] = [];
  ELEMENT_DATA: any[] =[];
  DATA: any[] = [];
  ROW!:any;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private router:Router, private spinner: NgxSpinnerService, private Database:Database) {
  }

  ngOnInit(): void {
    this.VIPCustomers();
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

  VIPCustomers() {
    this.spinner.show();
    this.displayedColumns = [];
    this.dataSource = new MatTableDataSource<any>([]);
    this.ELEMENT_DATA = [];
    this.DATA = [];
    const starCountRef = ref(this.Database, 'vip');
    onValue(starCountRef, (snapshot) => {
      if(snapshot.exists()) {
        this.spinner.hide();
        const data = snapshot.val();
        this.displayedColumns = [];
        this.dataSource = new MatTableDataSource<any>([]);
        this.ELEMENT_DATA = [];
        this.DATA = [];
        for (var key in data) {
          if (!data.hasOwnProperty(key)) continue;
          let obj = data[key];
          this.ELEMENT_DATA.push(obj);
        }
        for(let i = 0; i<Object.keys(this.ELEMENT_DATA[0]).length; ++i) {
          this.displayedColumns.push(Object.keys(this.ELEMENT_DATA[0])[i]);
        }
        for(let i = 0; i < this.ELEMENT_DATA.length; ++i) {
          const object = {
            area           : this.ELEMENT_DATA[i].area,
            carModel       : this.ELEMENT_DATA[i].carModel,
            carPlateNumber : this.ELEMENT_DATA[i].carPlateNumber,
            cityName       : this.ELEMENT_DATA[i].cityName,
            id             : this.ELEMENT_DATA[i].id,
            name           : this.ELEMENT_DATA[i].name,
            password       : this.ELEMENT_DATA[i].password,
            status         : this.ELEMENT_DATA[i].status,
            telephone      : this.ELEMENT_DATA[i].telephone,
            vin            : this.ELEMENT_DATA[i].vin
          }
          this.DATA.push(object);
        }
        this.dataSource = new MatTableDataSource<any>(this.DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      else {
        this.spinner.hide();
        this.displayedColumns = [];
        this.dataSource = new MatTableDataSource<any>([]);
        this.ELEMENT_DATA = [];
        this.DATA = [];
      }
    });
  }
  EmergencyRequests() {
    this.router.navigate(["/emergency"]);
  }
  EmergencyHistory() {
    this.router.navigate(["/emergency-history"]);
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
