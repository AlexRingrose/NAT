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
      // Sort votes in descending vote count
      this.snackArray = this.snackArray.sort((a, b) => b.votes - a.votes);

      this.snackCount = Object.keys(this.snackArray).length;
      console.log(this.snackArray);
    });
  }

  vote(snack) {
    if ( ! ( this.selectedSnacks.length < 3 && this.votes > 0)) {
      alert('You have voted for three snacks this month. Please wait until next month.');
    } else if (this.isUniqueVote(snack)) {
      this.selectedSnacks.push(snack);

      // Sort the selected list alphanumerically by product name.
      // The list appends the brand name infront of the product name.
      // Not sure if this is correct or I should have sorted by the brandname.
      const alphaSort = (a, b) => a.product.localeCompare(b.product, 'en', { numeric: true});
      this.selectedSnacks.sort(alphaSort);

      this.votes--;
      this._sto.setVotes(this.votes);
      this._api.setData(snack.id);
    } else {
      alert('You have already voted for this snack');
    }
  }

  isUniqueVote(vote) {
    if (this.selectedSnacks.some( snack => snack.id === vote.id)) {
      return false;
    }
    return true;
  }

}
