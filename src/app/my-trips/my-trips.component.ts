import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {
  private trips;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/userInfo').subscribe(res => {
      this.trips = res["trips"];
    });
  }
  
  formatDate(dateString: string){
    return new Date(dateString).toLocaleString();
  }

}
