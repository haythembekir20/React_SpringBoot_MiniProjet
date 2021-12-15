package com.example.demo.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.Equipe;

public interface EquipeRepository extends JpaRepository<Equipe,Integer>{
	//Equipe findByName(String nom);
	
	 @Query("SELECT DISTINCT e.nom FROM Equipe e")
	    List<String> getEquipeUnique();
}
