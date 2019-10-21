import { Injectable } from '@angular/core';
import { HOTEL } from './hotel-mockup';
import { Hotel } from './hotel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  getHotel(): Observable<Hotel[]>{
    return of(HOTEL);
  }

}
