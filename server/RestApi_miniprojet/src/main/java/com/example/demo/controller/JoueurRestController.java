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

import com.example.demo.entity.Joueur;
import com.example.demo.services.JoueurService;

@CrossOrigin
@RestController
public class JoueurRestController {
	    
	    @Autowired
	    private JoueurService joueurservice;

	    @PostMapping("api/addJoueur")
	    public Joueur addJoueur(@RequestBody Joueur joueur) {
	        return joueurservice.saveJoueur(joueur);
	    }

	    @PostMapping("api/addJoueurs")
	    public List<Joueur> addJoueurs(@RequestBody List<Joueur> Joueurs) {
	        return joueurservice.saveJoueurs(Joueurs);
	    }

	    @GetMapping("user/Joueurs")
	    public List<Joueur> findAllJoueurs() {
	        return joueurservice.getJoueurs();
	    }

	    @GetMapping("user/joueurById/{id}")
	    public Joueur findJoueurById(@PathVariable int id) {
	        return joueurservice.getJoueurById(id);
	    }
	    @GetMapping("api/joueurByName/{nom}")
	    public List<Joueur> findJoueurByName(@PathVariable String nom) {
	        return joueurservice.FindJoueurByName(nom);
	    }
	    
	    @GetMapping("api/joueurByEquipe/{idEqu}")
	    public List<Joueur> findJoueurByEquipe(@PathVariable String idEqu) {
	        return joueurservice.FindJoueurByEquipe(idEqu);
	    }

	    /*
	    @GetMapping("/equipe/{name}")
	    public Equipe findEquipeByName(@PathVariable String nom) {
	        return equipeservice.getEquipeByName(nom);
	    }
	    */

	    @PutMapping("api/updatejoueur")
	    public Joueur updateJoueur(@RequestBody Joueur joueur) {
	        return joueurservice.updateJoueur(joueur);
	    }

	    @DeleteMapping("api/deletejoueur/{id}")
	    public void deleteJoueur(@PathVariable int id) {
	         joueurservice.deleteJoueur(id);
	    }
}
