import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  patient = this.formBuilder.group({
    names: ['', [Validators.required]],
  })
  Drug = this.formBuilder.group({
    names: ['', [Validators.required]],
  })
  Prescriber = this.formBuilder.group({
    names: ['', [Validators.required]],
  })

  retail = this.formBuilder.group({
    names: ['', [Validators.required]],
    names1: ['', [Validators.required]],
    names2: ['', [Validators.required]],
    names3: ['', [Validators.required]],
    names4: ['', [Validators.required]],
    names5: ['', [Validators.required]],
    names6: ['', [Validators.required]],
    names7: ['', [Validators.required]],
    names8: ['', [Validators.required]],
    names9: ['', [Validators.required]],
    names10: ['', [Validators.required]],
    names11: ['', [Validators.required]],
    names12: ['', [Validators.required]],
    names13: ['', [Validators.required]],
    names14: ['', [Validators.required]],
  })

  retails = this.formBuilder.group({
    names99: ['', [Validators.required]],
    names98: ['', [Validators.required]],
    names97: ['', [Validators.required]],
    names96: ['', [Validators.required]],
    names95: ['', [Validators.required]],
    names94: ['', [Validators.required]],
    names93: ['', [Validators.required]],
    names92: ['', [Validators.required]],
    names91: ['', [Validators.required]],
    names90: ['', [Validators.required]],
    names89: ['', [Validators.required]],
    names88: ['', [Validators.required]],
  })

  ngOnInit() {
  }

}
