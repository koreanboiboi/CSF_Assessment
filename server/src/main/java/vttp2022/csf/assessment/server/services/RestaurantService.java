package vttp2022.csf.assessment.server.services;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vttp2022.csf.assessment.server.models.Comment;
import vttp2022.csf.assessment.server.models.Restaurant;
import vttp2022.csf.assessment.server.repositories.MapCache;
import vttp2022.csf.assessment.server.repositories.RestaurantRepository;

@Service
public class RestaurantService {

	@Autowired
	private RestaurantRepository restaurantRepo;

	@Autowired
	private MapCache mapCache;

	// TODO Task 2 
	// Use the following method to get a list of cuisines 
	// You can add any parameters (if any) and the return type 
	// DO NOT CHNAGE THE METHOD'S NAME
	public List<Restaurant> getCuisines() {
		// Implmementation in here

		return this.getCuisines(20,0);
		
	}

	public List<Restaurant> getCuisines(int limit, int skip) {
		return restaurantRepo.getCuisines(limit,skip);
	}



	// TODO Task 3 
	// Use the following method to get a list of restaurants by cuisine
	// You can add any parameters (if any) and the return type 
	// DO NOT CHNAGE THE METHOD'S NAME
	public List<Restaurant> getRestaurantsByCuisine(String cuisine) {
	// 	// Implmementation in here

	return restaurantRepo.getRestaurantsByCuisine(cuisine);
		
	}

	// // TODO Task 4
	// // Use this method to find a specific restaurant
	// // You can add any parameters (if any) 
	// // DO NOT CHNAGE THE METHOD'S NAME OR THE RETURN TYPE
	public Optional<Restaurant> getRestaurant(String restaurantId) {

		Optional<Restaurant> opt = restaurantRepo.getRestaurant(restaurantId);
		if(opt.isEmpty())
		return Optional.empty();

		Restaurant rest = opt.get();
		rest.setAddress("");
		rest.setName("name");
		rest.setCuisine("cuisine");
		rest.setRestaurantId("restaurantId");
		// Implmementation in here
		
		return Optional.of(rest);
	}

	// TODO Task 5
	// Use this method to insert a comment into the restaurant database
	// DO NOT CHNAGE THE METHOD'S NAME OR THE RETURN TYPE
	public void addComment(Comment comment) {
		// Implmementation in here

		// Optional<Comment> opt = restaurantRepo.getRestaurant(comment.getRestaurantId());
		// if(opt.isEmpty())
		// return Optional.empty();

		ObjectId objectId = restaurantRepo.addComment(comment);

		return;
		// return Optional.of(res)		
	}
	//
	// You may add other methods to this class
}
