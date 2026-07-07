package com.cognizant.springlearn1.service;

import com.cognizant.springlearn1.model.Country;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    private List<Country> countryList = new ArrayList<>();

    public CountryService() {
        countryList.add(new Country("IN", "India", "New Delhi"));
        countryList.add(new Country("US", "United States", "Washington D.C."));
        countryList.add(new Country("GB", "United Kingdom", "London"));
        countryList.add(new Country("FR", "France", "Paris"));
        countryList.add(new Country("JP", "Japan", "Tokyo"));
    }

    public List<Country> getAllCountries() {
        return countryList;
    }

    public Country getCountryByCode(String code) {
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }
}
