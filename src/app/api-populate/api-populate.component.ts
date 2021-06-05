import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-populate',
  templateUrl: './api-populate.component.html',
  styleUrls: ['./api-populate.component.css'],
})
export class ApiPopulateComponent implements OnInit {
  requestList;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchRequests();
  }

  fetchRequests() {
    this.httpClient.get(`${environment.baseURL}/it-requests`).subscribe(
      (data) => (this.requestList = data),
      (e) => console.error(e)
    );
  }

  delete(id) {
    this.httpClient
      .delete(`${environment.baseURL}/it-requests/${id}`)
      .subscribe((data) => {
        this.fetchRequests();
      });
  }
}
