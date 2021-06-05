import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { create } from 'domain';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userList = [];
  filteredUserList: Observable<string[]>;
  reasonList = ['Project', 'On Site', 'Other'];
  osList = ['Windows', 'Mac', 'Linux'];
  softwareList = ['Postman', 'Node JS', 'VS Code'];
  request;
  requestForm = this.fb.group({
    user: this.fb.control('', Validators.required),
    reason: this.fb.control('', Validators.required),
    otherReason: this.fb.control('', Validators.required),
    os: this.fb.control('', Validators.required),
    software: this.fb.array([]),
    otherSoftware: this.fb.array([]),
  });

  get user() {
    return this.requestForm.get('user');
  }
  get reason() {
    return this.requestForm.get('reason');
  }
  get otherReason() {
    return this.requestForm.get('otherReason');
  }
  get os() {
    return this.requestForm.get('os');
  }
  get software() {
    return this.requestForm.get('software') as FormArray;
  }

  get otherSoftware() {
    return this.requestForm.get('otherSoftware') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get userlist
    this.httpClient
      .get(`${environment.baseURL}/users`)
      .subscribe((data: any) => {
        this.userList = data;
        // this.filteredUserList = data;
      });

    // filter auto complete userlist
    this.filteredUserList = this.user.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    // reason other reason
    this.reason.valueChanges.subscribe((val) => {
      if (val !== 'Other') {
        this.otherReason.disable();
      } else {
        this.otherReason.enable();
      }
    });

    // fetch data by id
    this.activatedRoute.params.subscribe((params) => {
      const id = <string>params['id'];
      if (id != 'new') {
        // Load api from backend
        this.httpClient
          .get(`${environment.baseURL}/it-requests/${id}`)
          .subscribe((data: any) => {
            this.request = data;
            console.log(data);

            const {
              user,
              reason,
              otherReason = '',
              os,
              software,
              otherSoftware,
            } = data;

            this.requestForm.patchValue({
              user,
              reason,
              otherReason,
              os,
              // software: this.fb.array([...software]),
              // otherSoftware: this.fb.array([...otherSoftware]),
            });
            if (reason !== 'Other') {
              this.otherReason.disable();
            }
            software.forEach((element) => {
              const elementFormControl: FormControl = this.fb.control(element);
              this.software.push(elementFormControl);
            });

            otherSoftware.forEach((element) => {
              const elementFormControl: FormControl = this.fb.control(element);
              this.otherSoftware.push(elementFormControl);
            });

            console.log(this.requestForm.value);
          });
      }
    });
  }

  private _filter(value: string): string[] {
    // const filterValue = value.toLowerCase();

    // return this.userList.filter((option) =>
    //   option.toLowerCase().includes(filterValue)
    // );

    const filterValue = value.toLowerCase();

    return this.userList.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );

    // return this.userList.filter((option) =>
    //   new RegExp(value, 'i').test(option)
    // );
  }

  onCheckChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.software.push(new FormControl(event.source.value));
    } else {
      let i: number = 0;
      this.software.controls.forEach((item: FormControl) => {
        if (item.value === event.source.value) {
          this.software.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  contains(software) {
    let contains = false;
    for (let i = 0; i < this.software.controls.length; i++) {
      const element = this.software.controls[i];
      if (element.value === software) {
        contains = true;
        break;
      }
    }
    // console.log(software, contains);
    return contains;
  }

  addSoftware() {
    let otherSoftwareFormControl: FormControl = this.fb.control('');

    this.otherSoftware.push(otherSoftwareFormControl);
  }

  deleteSoftware(i: number) {
    this.otherSoftware.removeAt(i);
  }

  save() {
    console.log(this.requestForm.value);
    console.log(this.request);

    if (this.request) {
      this.update();
    } else {
      this.create();
    }
  }

  create() {
    this.httpClient
      .post(`${environment.baseURL}/it-requests`, this.requestForm.value)
      .subscribe((data) => {
        console.log(data);

        this.router.navigate(['/api-populate']);
      });
  }

  update() {
    this.httpClient
      .put(`${environment.baseURL}/it-requests/${this.request.id}`, {
        ...this.requestForm.value,
        id: this.request.id,
      })
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/api-populate']);
      });
  }
}
