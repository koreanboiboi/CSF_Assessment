import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Restaurant } from './models';
import { RestaurantService } from './restaurant-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // rest: Restaurant[] = []
  // // sub$!: Subscription

  // constructor(private restSvc: RestaurantService){}

  ngOnInit(): void{
   
  }

  // getList() {
  //   this.restSvc.getCuisineList()
  //   .then(() => {
  //     console.info('get cuisine list')
  //   })
  // }

}
