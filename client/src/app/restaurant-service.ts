import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { PostResponse, Restaurant, Comment } from './models';

// const BACKEND = 'http://localhost:8080'

@Injectable()
export class RestaurantService {


	// on = new Subject<void>()

	// onSearchResults = new Subject<Restaurant[]>()
	// onSearchQuery = new Subject<string>()

	constructor(private http: HttpClient){}

	// TODO Task 2 
	// Use the following method to get a list of cuisines
	// You can add any parameters (if any) and the return type 
	// DO NOT CHNAGE THE METHOD'S NAME
	public getCuisineList(): Promise<Restaurant[]> {
		
		return lastValueFrom(
			this.http.get<Restaurant[]>('/api/cuisine')
		)

		// Implememntation in here

		
	}

	// TODO Task 3 
	// Use the following method to get a list of restaurants by cuisine
	// You can add any parameters (if any) and the return type 
	// DO NOT CHNAGE THE METHOD'S NAME
	public getRestaurantsByCuisine(cuisine: string): Promise<Restaurant[]> {

		return lastValueFrom(
			this.http.get<Restaurant[]>(`/api/${cuisine}/restaurants`)
		)
		// Implememntation in here

		// this.onSearchQuery.next(cuisine)
		// const params = new HttpParams().set("cuisine",cuisine)
		// return firstValueFrom(
		// 	this.http.get<Restaurant[]>(`${BACKEND}/api/cuisine`,{params})
		// ).then(results => {
		// 	this.onSearchResults.next(results)
		// 	return results
		// })	

	}
	
	// TODO Task 4
	// Use this method to find a specific restaurant
	// You can add any parameters (if any) 
	// DO NOT CHNAGE THE METHOD'S NAME OR THE RETURN TYPE
	
	public getRestaurant(restId: string): Promise<Restaurant[]> {
		// Implememntation in here
		return lastValueFrom(
			this.http.get<Restaurant[]>(`/api/cuisines/${restId}/details`)
		)
	}

	// TODO Task 5
	// Use this method to submit a comment
	// DO NOT CHANGE THE METHOD'S NAME OR SIGNATURE
	
	public postComment(comment: Comment): Promise<PostResponse> {

		const form = new FormData()
		form.set("name", comment.name)
		form.set("rating", comment.rating.toString())
		form.set("text", comment.text)
		form.set("restaurantId", comment.restaurantId)

		
		return firstValueFrom(
			this.http.post<PostResponse>('/post',form)
		)

	// 	// Implememntation in here

	}

	savePost(com: Comment): Promise<Comment> {

		const payload = new HttpParams()
		.set("name", com.name)
		.set("rating", com.rating)
		.set("text", com.text)
		.set("restaurantId",com.restaurantId)

		const headers = new HttpHeaders()
		.set("Content-Tpye", "application/x-www-form-urlencoded")
		.set("Accept", "application/json")

		return firstValueFrom(
			this.http.post<Comment>('/api/cpmments', payload.toString(),{headers})
		)

	}
}
