package com.example.demo.services;

import com.example.demo.entity.Role;
import com.example.demo.entity.User;

public interface UserServiceInter {
	User saveUser(User user);

	User findUserByUsername(String username);

	Role addRole(Role role);

	User addRoleToUser(String username, String rolename);
}
