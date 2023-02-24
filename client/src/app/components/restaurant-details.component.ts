import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Restaurant } from '../models';
import { RestaurantService } from '../restaurant-service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit, OnDestroy {

  @ViewChild('image')
  image!: ElementRef

  params$!: Subscription
  rest: Restaurant[] = []

  comment: Comment[] = []

  form!: FormGroup
  values$: any;
  state$: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute
    , private restSvc: RestaurantService,
    private fb: FormBuilder) {}


  ngOnInit(): void {
    this.params$ = this.activatedRoute.params.subscribe(
      params => {
        const restId = params['restaurantId']
        this.restSvc.getRestaurant(restId)
        .then(result => {
          this.rest = result
        })
        .catch(error => {
          console.error('error404' , error)
        })
      }
    )

    this.form = this.createForm()
  }

  processForm() {
    const comment = this.form.value
    // comment.image = this.image.nativeElement.files[0]

    this.restSvc.postComment(comment)
    .then( response => {
      console.info(`Post id: ${response.postId}`)
      this.form = this.createForm()
    })
    .catch( ex => {
      console.error(ex)
    })

    const com = this.form.value
    this.restSvc.savePost(com)
    .then(result => {
      console.info(result)
      this.initForm()
    })
    .catch(e => {
      console.error(e)
    })
  }

  private initForm() {
    this.form = this.createForm()
    if(this.values$) {
      this.values$.unsubscribe()
      this.state$.unsubscribe()
    }
    this.values$ = this.form.valueChanges.subscribe(
      (values) => {
        console.info(values)
      }
    )
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('',[Validators.required, Validators.minLength(3)]),
      rating: this.fb.control<number>(1, [Validators.min(1),Validators.max(5)]),
      text: this.fb.control<string>('',[Validators.requiredTrue])
    })
  }

  ngOnDestroy(): void{

  }
	// TODO Task 4 and Task 5
	// For View 3

}
