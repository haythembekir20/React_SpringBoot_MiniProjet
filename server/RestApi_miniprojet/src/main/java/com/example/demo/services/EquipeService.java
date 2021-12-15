package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Equipe;
import com.example.demo.repositorys.EquipeRepository;

@Service
public class EquipeService {
	 @Autowired
	    private EquipeRepository equiperepository;

	    public Equipe saveEquipe(Equipe equipe) {
	        return equiperepository.save(equipe);
	    }

	    public List<Equipe> saveEquipes(List<Equipe> equipes) {
	        return equiperepository.saveAll(equipes);
	    }

	    public List<Equipe> getEquipes() {
	        return equiperepository.findAll();
	    }

	    public Equipe getEquipeById(int id) {
	        return equiperepository.findById(id).orElse(null);
	    }
/*
	    public Equipe getEquipeByName(String nom) {
	        return equiperepository.findByName(nom);
	    } */

	    public void deleteEquipe(int id) {
	    	equiperepository.deleteById(id);
	        
	    }

	    public Equipe updateEquipe(Equipe equipe) {
	    	Equipe existingProduct = equiperepository.findById(equipe.getId()).orElse(null);
	        existingProduct.setNom(equipe.getNom());
	        existingProduct.setDescription(equipe.getDescription());
	       
	        return equiperepository.save(existingProduct);
	    }
	    public List<String> getEquipeUnique() {
			return equiperepository.getEquipeUnique();
		}
}
