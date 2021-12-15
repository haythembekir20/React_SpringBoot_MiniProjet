package com.example.demo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.User;



public interface UserRepository extends JpaRepository<User, Long> {

	User findByUsername(String username);

}