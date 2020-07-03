import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, merge } from 'rxjs';

class Todo {
  name: string;
  Sno: string;
  DOB: string;
  gender: string;
  address: string;
  address1: string;
  address2: string;
  state: string;
  city: string;
  pincode: number;
  educationaldetails: string;
  complete: boolean;
}

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements AfterViewInit {

  setting = false;
  buttonName = 'edit';
  hide: any;

  constructor() {
    const todos: Todo[] = [{ Sno: '1', name: 'ravi', DOB: "12-10-15", gender: 'Male', address: 'hyderbad1', address1: 'hyderbad2', address2: 'hyderbad3', state: "telangana", city: "hyderbad", pincode: 500085, educationaldetails: "b.tech", complete: false },
    { Sno: '2', name: 'teja', DOB: "12-10-15", gender: 'Male', address: 'hyderbad1', address1: 'hyderbad2', address2: 'hyderbad3', state: "telangana", city: "hyderbad", pincode: 500085, educationaldetails: "b.tech", complete: false },
    { Sno: '3', name: 'sravani', DOB: "12-10-15", gender: 'Male', address: 'hyderbad1', address1: 'hyderbad2', address2: 'hyderbad3', state: "telangana", city: "hyderbad", pincode: 500085, educationaldetails: "b.tech", complete: false },
    { Sno: '4', name: 'rajesh', DOB: "12-10-15", gender: 'Male', address: 'hyderbad1', address1: 'hyderbad2', address2: 'hyderbad3', state: "telangana", city: "hyderbad", pincode: 500085, educationaldetails: "b.tech", complete: false },
    { Sno: '5', name: 'suresh', DOB: "12-10-15", gender: 'Male', address: 'hyderbad1', address1: 'hyderbad2', address2: 'hyderbad3', state: "telangana", city: "hyderbad", pincode: 500085, educationaldetails: "b.tech", complete: false },];
    this.dataSource = new MatTableDataSource(todos);
  }
  form: FormGroup = new FormGroup({
    Sno: new FormControl(false),
    name: new FormControl(false),
    DOB: new FormControl(false),
    gender: new FormControl(false),
    address: new FormControl(false),
    address1: new FormControl(false),
    address2: new FormControl(false),
    state: new FormControl(false),
    city: new FormControl(false),
    pincode: new FormControl(false),
    educationaldetails: new FormControl(false)
  });

  Sno = this.form.get('Sno');
  name = this.form.get('name');
  DOB = this.form.get('DOB');
  gender = this.form.get('gender');
  address = this.form.get('address');
  address1 = this.form.get('address1');
  address2 = this.form.get('address2');
  state = this.form.get('state');
  city = this.form.get('city');
  pincode = this.form.get('pincode');
  educationaldetails = this.form.get('educationaldetails')

  cbValues;


  /**
   * Control column ordering and which columns are displayed.
   */

  columnDefinitions = [
    { def: 'Sno', label: 'Sno', hide: this.Sno.value },
    { def: 'name', label: 'name', hide: this.name.value },
    { def: 'DOB', label: 'DOB', hide: this.DOB.value },
    { def: 'gender', label: 'gender', hide: this.gender.value },
    { def: 'address', label: 'address', hide: this.address.value },
    { def: 'address1', label: 'address1', hide: this.address1.value },
    { def: 'address2', label: 'address2', hide: this.address2.value },
    { def: 'state', label: 'state', hide: this.state.value },
    { def: 'city', label: 'city', hide: this.city.value },
    { def: 'pincode', label: 'pincode', hide: this.pincode.value },
    { def: 'educationaldetails', label: 'educationaldetails', hide: this.educationaldetails.value },
  ]

  getDisplayedColumns(): string[] {
    return this.columnDefinitions.filter(cd => !cd.hide).map(cd => cd.def);
  }

  dataSource: MatTableDataSource<Todo>;
  ngAfterViewInit() {
    this.sucess()
  }

  sucess() {
    let o1: Observable<boolean> = this.Sno.valueChanges;
    let o2: Observable<boolean> = this.name.valueChanges;
    let o3: Observable<boolean> = this.DOB.valueChanges;
    let o4: Observable<boolean> = this.gender.valueChanges;
    let o5: Observable<boolean> = this.address.valueChanges;
    let o6: Observable<boolean> = this.address1.valueChanges;
    let o7: Observable<boolean> = this.address2.valueChanges;
    let o8: Observable<boolean> = this.state.valueChanges;
    let o9: Observable<boolean> = this.city.valueChanges;
    let o10: Observable<boolean> = this.pincode.valueChanges;
    let o11: Observable<boolean> = this.educationaldetails.valueChanges;

    merge(o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11).subscribe(v => {
      this.columnDefinitions[0].hide = this.Sno.value;
      this.columnDefinitions[1].hide = this.name.value;
      this.columnDefinitions[2].hide = this.DOB.value;
      this.columnDefinitions[3].hide = this.gender.value;
      this.columnDefinitions[4].hide = this.address.value;
      this.columnDefinitions[5].hide = this.address1.value;
      this.columnDefinitions[6].hide = this.address2.value;
      this.columnDefinitions[7].hide = this.state.value;
      this.columnDefinitions[8].hide = this.city.value;
      this.columnDefinitions[9].hide = this.pincode.value;
      this.columnDefinitions[10].hide = this.educationaldetails.value;
      console.log(this.columnDefinitions);
    });
  }

  sor() {
    this.setting = !this.setting

    if (this.setting) {
      this.buttonName = 'Hide'
      console.log(this.setting)
    }
    else {
      this.buttonName = 'edit'
    }
  }
}