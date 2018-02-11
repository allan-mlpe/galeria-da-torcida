import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  teamsMockUrl: string = "assets/mock/teams-mock.json";
  teams;

  ngOnInit() {
    this.http.get(this.teamsMockUrl).subscribe(
      data => {
        this.teams = data;
        console.log(this.teams);
      },
      error => {
        console.log(error);
      }
    )
  }

}
