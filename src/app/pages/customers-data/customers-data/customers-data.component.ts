import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Database , ref , onValue , remove , set } from "@angular/fire/database";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-customers-data',
  templateUrl: './customers-data.component.html',
  styleUrls: ['./customers-data.component.scss']
})
export class CustomersDataComponent implements OnInit , AfterViewInit {
  displayedColumns:string[] = [];
  ELEMENT_DATA: any[] =[];
  DATA: any[] = [];
  ObjectNames:string[] = [];
  ROW!:any;
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router:Router, private Database:Database, private spinner: NgxSpinnerService) {
  }
  ngOnInit(): void {
    this.CustomersData();
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
CustomersData() {
  this.spinner.show();
  this.displayedColumns = [];
  this.dataSource = new MatTableDataSource<any>([]);
  this.ELEMENT_DATA = [];
  this.DATA = [];
  this.ObjectNames = [];
  const starCountRef = ref(this.Database, 'users');
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
      for(let i = 0; i<Object.keys(this.ELEMENT_DATA[0]).length; ++i) {
        this.displayedColumns.push(Object.keys(this.ELEMENT_DATA[0])[i])
      }
      this.displayedColumns.push("Actions");
      for(let i = 0; i < this.ELEMENT_DATA.length; ++i) {
        const object = {
          area           : this.ELEMENT_DATA[i]?.area,
          carModel       : this.ELEMENT_DATA[i]?.carModel,
          carPlateNumber : this.ELEMENT_DATA[i]?.carPlateNumber,
          cityName       : this.ELEMENT_DATA[i]?.cityName,
          id             : this.ELEMENT_DATA[i]?.id,
          name           : this.ELEMENT_DATA[i]?.name,
          password       : this.ELEMENT_DATA[i]?.password,
          status         : this.ELEMENT_DATA[i]?.status,
          telephone      : this.ELEMENT_DATA[i]?.telephone,
          vin            : this.ELEMENT_DATA[i]?.vin
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
      this.ObjectNames = [];
    }
  });
}
  Change(element:any) {
   let index = this.DATA.findIndex(
    (obj)=> {return (obj.id == element.id && obj.area == element.area && obj.carModel == element.carModel && obj.carPlateNumber == element.carPlateNumber &&
      obj.cityName == element.cityName && obj.name == element.name && obj.password == element.password && obj.status == element.status &&
      obj.telephone == element.telephone && obj.vin == element.vin);});
      if(element?.status.trim().toLowerCase() == "vip") {
        remove(ref(this.Database, "vip/" + this.ObjectNames[index]));
        element.status = "normal";
        this.CustomersData();
      }
        else if(element?.status.trim().toLowerCase() === "normal") {
          element.status = "vip";
          set(ref(this.Database , "vip/" + this.ObjectNames[index]), {
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
          });
          this.CustomersData();
        }
        set(ref(this.Database , "users/" + this.ObjectNames[index]), {
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
        });
        this.CustomersData();
      }
      Delete(element:any) {
        let index = this.DATA.findIndex(
        (obj)=> {return (obj.id == element.id && obj.area == element.area && obj.carModel == element.carModel && obj.carPlateNumber == element.carPlateNumber &&
          obj.cityName == element.cityName && obj.name == element.name && obj.password == element.password && obj.status == element.status &&
          obj.telephone == element.telephone && obj.vin == element.vin);});
          set(ref(this.Database , "deletedUsers/" + this.ObjectNames[index]), {
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
          });
          remove(ref(this.Database, "users/" + this.ObjectNames[index]));
          this.CustomersData();
        }
  UsersHistory() {
    this.router.navigate(["/users-history"]);
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
  VIPCustomers() {
    this.router.navigate(["/vip-customers"]);
  }
  OfflineDaysHome() {
    this.router.navigate(["/offline-days-home"]);
  }
  OfflineDaysWorkshop() {
    this.router.navigate(["/offline-days-workshop"]);
  }
  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("/", { replaceUrl: true });
  }
}

