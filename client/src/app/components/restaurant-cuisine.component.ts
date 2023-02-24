import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Restaurant } from '../models';
import { RestaurantService } from '../restaurant-service';

@Component({
  selector: 'app-restaurant-cuisine',
  templateUrl: './restaurant-cuisine.component.html',
  styleUrls: ['./restaurant-cuisine.component.css']
})
export class RestaurantCuisineComponent implements OnInit, OnDestroy {
	

  cuisines: Restaurant[] =[]
	// TODO Task 3
	// For View 2

  params$!: Subscription

  constructor(
    private restSvc: RestaurantService,
    private router: Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.params$ = this.activatedRoute.params.subscribe(

      params => {
        const cuisine = params['cuisine']
        this.restSvc.getRestaurantsByCuisine(cuisine)
        .then( result => {
          this.cuisines = result
        })
        .catch(error => {
          console.error(error)
        })
      }
    )

  }

  ngOnDestroy(): void {
    this.params$.unsubscribe()
  }

}
