import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  hideNavBottom$: BehaviorSubject<boolean> = new BehaviorSubject(false);


  HideNavBottom(data:boolean){
    this.hideNavBottom$.next(data);
  }
}
