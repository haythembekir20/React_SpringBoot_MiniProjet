package com.example.demo.services;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repositorys.RoleRepository;
import com.example.demo.repositorys.UserRepository;



@Transactional
@Service
public class UserService implements UserServiceInter {
	@Autowired
	UserRepository userRep;
	@Autowired
	RoleRepository roleRep;
	
	//@Autowired
	//BCryptPasswordEncoder PasswordEncoder;

	public User saveUser(User user) {
		//user.setPassword(PasswordEncoder.encode(user.getPassword()));
		//user.setPassword(PasswordEncoder.encode(user.getPassword()));
	return userRep.save(user);
	}

	public User addRoleToUser(String username, String rolename) {
		User usr = userRep.findByUsername(username);
		Role r = roleRep.findByRole(rolename);
		usr.getRoles().add(r);
		return usr;
	}

	public Role addRole(Role role) {
		return roleRep.save(role);
	}

	public User findUserByUsername(String username) {
		return userRep.findByUsername(username);
	}
}
