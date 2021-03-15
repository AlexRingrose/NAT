import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-localstorage';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  key = 'votesKey';
  constructor(private _sto: LocalStorageService) { }

  setVotes(count) {
    this._sto.set(this.key, count);
  }

  getVotes(){
    return this._sto.get(this.key);
  }
}
