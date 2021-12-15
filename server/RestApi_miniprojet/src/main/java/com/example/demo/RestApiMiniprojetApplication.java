package com.example.demo;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.services.UserService;

@SpringBootApplication
public class RestApiMiniprojetApplication {
	@Autowired
	UserService userService ; 
	
	@Bean
	BCryptPasswordEncoder getBCE() {
	   return new BCryptPasswordEncoder();
	}
	

	public static void main(String[] args) {
		SpringApplication.run(RestApiMiniprojetApplication.class, args);
	}
	/*
	@PostConstruct
	void init_users() {
		
		userService.addRole(new Role(null, "ADMIN"));
		userService.addRole(new Role(null, "USER"));
		
		userService.saveUser(new User(null, "haythem", "123", true, null));
		userService.saveUser(new User(null, "ali", "123", true, null));
		userService.saveUser(new User(null, "saleh", "123", true, null));
		userService.saveUser(new User(null, "admin", "123", true, null));
		userService.addRoleToUser("ali", "USER");
		userService.addRoleToUser("bekir", "USER");
		userService.addRoleToUser("saleh", "USER");
		userService.addRoleToUser("admin", "ADMIN");
	}
	
	*/
	

}
