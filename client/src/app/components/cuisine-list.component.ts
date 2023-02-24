import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { Restaurant } from '../models';
import { RestaurantService } from '../restaurant-service';

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrls: ['./cuisine-list.component.css']
})

export class CuisineListComponent implements OnInit{

	// TODO Task 2
	// For View 1

  cuisines: Restaurant[] =[]

  // sub$!: Subscription

  // listForm!: FormGroup

  // @Output()
  // onClicked = new Subject<Restaurant>()

  // @Input()
  // listNames = ''


  constructor(private restSvc: RestaurantService, private fb: FormBuilder) {}

  ngOnInit(): void {

    this.restSvc.getCuisineList()
    .then(result => {
      console.info('>>> list of cuisine', result)
      this.cuisines = result
    })
    .catch(error => {
      console.error('error?' , error)
    })

    // this.createForm()
    // this.getList()
    
  }

  // private createForm(): FormGroup {
  //   return this.fb.group({
  //     cuisine: this.fb.control('')
  //   })
  // }

  // ngOnDestroy(): void {


  //   // this.sub$.unsubscribe()
  // }

  getList(){
    
    // const names = this.listForm.get('cuisine')?.value
    // this.restSvc.getCuisineList()
    // .then(result => {
    //   console.info('>>> list of cuisine', result)
    //   this.cuisine = result
    // })
    // .catch(error => {
    //   console.error('error?' , error)
    // })

    // const names: Restaurant = {
    //   name: this.listNames
    // }
    // this.onClicked.next(names)

  }

}
