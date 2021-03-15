import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-snack-voting',
  templateUrl: './snack-voting.component.html',
  styleUrls: ['./snack-voting.component.css']
})
export class SnackVotingComponent implements OnInit {

  constructor(private _api: ApiService) { }

  private votes = 3;
  private snackArray;
  private snackCount = 0;

  ngOnInit() {
    this._api.getData().subscribe(res => {
      this.snackArray = res;
      this.snackCount = Object.keys(this.snackArray).length;
      console.log(this.snackArray);
    });
  }

}
