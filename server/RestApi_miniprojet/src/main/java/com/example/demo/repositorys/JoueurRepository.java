package com.example.demo.repositorys;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Joueur;



public interface JoueurRepository extends JpaRepository<Joueur,Integer>{
	//Equipe findByName(String nom);
	
	@Query("SELECT  e FROM Joueur e where e.nom like %:nom% ")
    List<Joueur> FindJoueurByName(@Param("nom") String nom);
	
	
	@Query("SELECT  e FROM Joueur e where e.idEqu like %:idEqu% ")
    List<Joueur> FindJoueurByEquipe(@Param("idEqu") String idEqu);
}