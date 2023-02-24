package vttp2022.csf.assessment.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import vttp2022.csf.assessment.server.models.Restaurant;
import vttp2022.csf.assessment.server.services.RestaurantService;

@Controller
@RequestMapping(path = "/api")
public class RestaurantController {
    
    @Autowired
    private RestaurantService restSvc;

    @GetMapping(path="/{cuisine}/restaurants")
    @ResponseBody
    public ResponseEntity<String> getList(@PathVariable String cuisine){

        List<Restaurant> restaurant = restSvc.getRestaurantsByCuisine(cuisine);
        JsonArrayBuilder arrBuilder = Json.createArrayBuilder();
        restaurant.stream()
        .forEach(v -> {
            arrBuilder.add(v.toJson());
        });

        return ResponseEntity.ok(arrBuilder.build().toString());
    }


    @GetMapping(path="/cuisine")
    @ResponseBody
    public ResponseEntity<String> getList( 
        @RequestParam(defaultValue="20") int limit, @RequestParam(defaultValue="0") int offset) 
        {
        List<Restaurant> rest = restSvc.getCuisines(limit,offset);
        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
        rest.stream()
        .forEach(v -> {
            arrayBuilder.add(v.toJson());
        });
    
        return ResponseEntity.ok(arrayBuilder.build().toString());
  
        // JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
        // restSvc.getCuisines().stream()
        // .forEach(v -> {
        //     arrayBuilder.add(v.toJson());
        // });

        // return ResponseEntity.ok(arrayBuilder.build().toString());
  
    }

    
}
