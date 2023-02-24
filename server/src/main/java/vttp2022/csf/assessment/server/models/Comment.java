package vttp2022.csf.assessment.server.models;

import org.bson.Document;

import jakarta.json.Json;
import jakarta.json.JsonObject;

// Do not modify this class
public class Comment {
	private String name;
	private int rating;
	private String restaurantId;
	private String text;

	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return this.name;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
	public int getRating() {
		return this.rating;
	}

	public void setRestaurantId(String restaurantId) {
		this.restaurantId = restaurantId;
	}
	public String getRestaurantId() {
		return this.restaurantId;
	}

	public void setText(String text) {
		this.text = text;
	}
	public String getText() {
		return this.text;
	}

	public Document toDocument() {
		Document document = new Document();
		document.put("C_id",restaurantId);
		document.put("name",name);
		document.put("rating",rating);
		document.put("C_text",text);

		return document;

	}


	public JsonObject toJson() {
		return Json.createObjectBuilder()
				.add("name",name)
				.add("rating", rating)
				.add("text", text)
				.add("restaurantId", restaurantId)
				.build();
	}

	public static Comment create (Document doc) {
		Comment comment = new Comment();
		comment.setRestaurantId(doc.getString("c_id"));
		comment.setName(doc.getString("name"));
		comment.setRating(doc.getInteger("rating"));
		comment.setText(doc.getString("c_text"));
		return comment;
	}

}
