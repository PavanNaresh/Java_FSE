package com.cognizant.springlearn1.controller;

import com.cognizant.springlearn1.model.Country;
import com.cognizant.springlearn1.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    // GET all countries - returns JSON by default
    @GetMapping
    public List<Country> getAllCountries() {
        return countryService.getAllCountries();
    }

    // GET country by code - returns JSON or XML based on Accept header
    @GetMapping("/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        return countryService.getCountryByCode(code);
    }
}
