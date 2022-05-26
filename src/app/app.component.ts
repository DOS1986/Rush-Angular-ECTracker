import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface CATEGORIES {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'EC-TRACKER';
  private data: any = [];
  private corsHeaders: HttpHeaders;
  Categories: CATEGORIES[] = [];

  constructor(private http: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    });
  }

  getData() {
    const url = 'https://localhost:5001/Category';
    this.http.get(url, { headers: this.corsHeaders }).subscribe((res) => {
      this.data = res;
      this.Categories = this.data;
    });
  }

  ngOnInit(): void {
    this.getData();
  }
}
