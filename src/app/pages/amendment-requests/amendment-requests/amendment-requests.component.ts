import { AfterViewInit , Component , ViewChild , OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Database , ref , onValue , remove , set , update } from "@angular/fire/database";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-amendment-requests',
  templateUrl: './amendment-requests.component.html',
  styleUrls: ['./amendment-requests.component.scss']
})
export class AmendmentRequestsComponent implements OnInit , AfterViewInit {
  displayedColumns:string[] = [];
  ELEMENT_DATA: any[] =[];
  DATA: any[] = [];
  ObjectNames:string[] = [];
  durationInSeconds:number = 5;
  ROW!:any;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private router:Router , private Database:Database , private spinner:NgxSpinnerService) {

  }
  ngOnInit(): void {
    this.AmendmentRequests();
}
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if(this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
AmendmentRequests() {
  this.spinner.show();
  this.displayedColumns = [];
  this.dataSource = new MatTableDataSource<any>([]);
  this.ELEMENT_DATA = [];
  this.DATA = [];
  this.ObjectNames = [];
  const starCountRef = ref(this.Database, 'carEditRequest');
  onValue(starCountRef, (snapshot) => {
    if(snapshot.exists()) {
      this.spinner.hide();
      const data = snapshot.val();
      const starCountRefCounts = ref(this.Database, 'counts/carEditRequest/length');
      onValue(starCountRefCounts , (snapshot) => {
        if(snapshot.exists()) {
          const carEditRequestLength = snapshot.val();
          if(Object.keys(data).length > carEditRequestLength) {
            for(let i = Object.keys(data).length; i > carEditRequestLength; --i) {
              Notification.requestPermission().then((permission)=> {
                if(permission === "granted") {
                    new Notification("Car Edit" , {
                        body  : "New Car Edit Request !",
                        image : "https://aj69-i.github.io/El7a2ny/assets/img/logo.webp",
                        icon  : "https://aj69-i.github.io/El7a2ny/assets/img/logo.webp",
                    });
                }
                else {
                    alert("permission is denied");
                }
            });
            }
            update(ref(this.Database, "counts/" + "carEditRequest") , {
              length: Object.keys(data).length
            });
          }
        }
      });
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
        if(Object.keys(this.ELEMENT_DATA[0])[i] != "user") {
          this.displayedColumns.push(Object.keys(this.ELEMENT_DATA[0])[i])
        }
      }
      for(let i = 0; i<Object.keys(this.ELEMENT_DATA[0]?.user).length; ++i) {
        this.displayedColumns.push(Object.keys(this.ELEMENT_DATA[0]?.user)[i])
      }
      this.displayedColumns.push("Done");
      for(let i = 0; i < this.ELEMENT_DATA.length; ++i) {
        const object = {
          budge          : this.ELEMENT_DATA[i]?.budge,
          describition   : this.ELEMENT_DATA[i]?.describition,
          area           : this.ELEMENT_DATA[i]?.user?.area,
          carModel       : this.ELEMENT_DATA[i]?.user?.carModel,
          carPlateNumber : this.ELEMENT_DATA[i]?.user?.carPlateNumber,
          cityName       : this.ELEMENT_DATA[i]?.user?.cityName,
          id             : this.ELEMENT_DATA[i]?.user?.id,
          name           : this.ELEMENT_DATA[i]?.user?.name,
          password       : this.ELEMENT_DATA[i]?.user?.password,
          status         : this.ELEMENT_DATA[i]?.user?.status,
          telephone      : this.ELEMENT_DATA[i]?.user?.telephone,
          vin            : this.ELEMENT_DATA[i]?.user?.vin
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
delete(element:any) {
  let index = this.DATA.findIndex (
    (obj)=> {return (obj.id == element.id && obj.budge == element.budge && obj.describition == obj.describition && obj.area == element.area &&
      obj.carModel == element.carModel && obj.carPlateNumber == element.carPlateNumber && obj.cityName == element.cityName && obj.name == element.name &&
      obj.password == element.password && obj.status == element.status && obj.telephone == element.telephone && obj.vin == element.vin);});
      set(ref(this.Database , "deletedCarEditRequestUsers/" + this.ObjectNames[index]), {
        budge          : element.budge,
        describition   : element.describition,
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
        }
      });
      remove(ref(this.Database, "carEditRequest/" + this.ObjectNames[index]));
      this.AmendmentRequests();
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
  this.router.navigateByUrl("/", { replaceUrl: true });
}
}
