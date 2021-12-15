package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Equipe;
import com.example.demo.services.EquipeService;
@RestController
@CrossOrigin
public class EquipeRestController {

    @Autowired
    private EquipeService equipeservice;

    @PostMapping("api/addEquipe")
    public Equipe addEquipe(@RequestBody Equipe product) {
        return equipeservice.saveEquipe(product);
    }

    @PostMapping("addEquipes")
    public List<Equipe> addEquipes(@RequestBody List<Equipe> Equipes) {
        return equipeservice.saveEquipes(Equipes);
    }

    @GetMapping("user/equipes")
    public List<Equipe> findAllProducts() {
        return equipeservice.getEquipes();
    }
    @GetMapping("user/equipesunique")
    public List<String> findAllUniqueProducts() {
        return equipeservice.getEquipeUnique();
    	
    	
    }
    

    @GetMapping("/user/equipeById/{id}")
    public Equipe findEquipeById(@PathVariable int id) {
        return equipeservice.getEquipeById(id);
    }

    /*
    @GetMapping("/equipe/{name}")
    public Equipe findEquipeByName(@PathVariable String nom) {
        return equipeservice.getEquipeByName(nom);
    }
    */

    @PutMapping("/api/update")
    public Equipe updateProduct(@RequestBody Equipe product) {
        return equipeservice.updateEquipe(product);
    }

    @DeleteMapping("/api/delete/{id}")
    public void deleteEquipe(@PathVariable int id) {
         equipeservice.deleteEquipe(id);
    }
}
