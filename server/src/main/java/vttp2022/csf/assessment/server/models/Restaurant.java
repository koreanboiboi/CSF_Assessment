package vttp2022.csf.assessment.server.models;

import org.bson.Document;

import jakarta.json.Json;
import jakarta.json.JsonObject;

// Do not modify this class
public class Restaurant {
	
	private String restaurantId;
	private String name;
	private String cuisine;
	private String address;
	private LatLng coordinates;
	private String mapUrl;

	public void setRestaurantId(String restaurantId) {
		this.restaurantId = restaurantId;
	}
	public String getRestaurantId() {
		return this.restaurantId;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return this.name;
	}

	public void setCuisine(String cuisine) {
		this.cuisine = cuisine;
	}
	public String getCuisine() {
		return this.cuisine;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	public String getAddress() {
		return this.address;
	}

	public void setCoordinates(LatLng coordinates) {
		this.coordinates = coordinates;
	}
	public LatLng getCoordinates() {
		return this.coordinates;
	}

	public void setMapURL(String mapUrl) {
		this.mapUrl = mapUrl;
	}
	public String getMapURL() {
		return this.mapUrl;
	}


	public JsonObject toJson() {

		return Json.createObjectBuilder()
		.add("_id", restaurantId)
		.add("name", name)
		.add("address", address)
		// .add("coordinates", (JsonValue) coordinates)
		.add("mapUrl",mapUrl)
		.build();
	}

	public static Restaurant create (Document doc) {
		Restaurant rest = new Restaurant();
		rest.setRestaurantId(doc.getString("_id"));
		rest.setName(doc.getString("name"));
		rest.setCuisine(doc.getString("cuisine"));
		rest.setAddress(doc.getString("address"));
		// rest.setCoordinates(doc.("coordinates"));
		rest.setMapURL(doc.getString("mapUrl"));

		return rest;
	}
}
