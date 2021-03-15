import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-snack-voting',
  templateUrl: './snack-voting.component.html',
  styleUrls: ['./snack-voting.component.css']
})
export class SnackVotingComponent implements OnInit {

  constructor(private _api: ApiService, private _sto: StoreService ) { }

  private votes = 0;
  private snackArray;
  private snackCount = 0;
  private selectedSnacks = [];

  ngOnInit() {
    if (!this._sto.getVotes()) {
      this.votes = 3;
    } else {
      this.votes = Number(this._sto.getVotes());
    }

    this._api.getData().subscribe(res => {
      this.snackArray = res;
      this.snackCount = Object.keys(this.snackArray).length;
      console.log(this.snackArray);
    });
  }

  vote(snack) {
    console.log(snack);
    if (this.selectedSnacks.length < 3 && this.votes > 0) {
      this.selectedSnacks.push(snack);
      this.votes--;
      this._sto.setVotes(this.votes);
    }
  }

}
