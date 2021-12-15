package com.slim.users.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.slim.users.entities.Role;
import com.slim.users.entities.User;
import com.slim.users.repos.RoleRepository;
import com.slim.users.repos.UserRepository;
@Transactional
@Service
public class UserServiceImpl implements UserService{
@Autowired
UserRepository userRep;
@Autowired
RoleRepository roleRep;
@Autowired
BCryptPasswordEncoder bCryptPasswordEncoder;
@Override
public User saveUser(User user) {
user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
return userRep.save(user);
}
@Override
public User addRoleToUser(String username, String rolename) {
User usr = userRep.findByUsername(username);
Role r = roleRep.findByRole(rolename);
usr.getRoles().add(r);
return usr;
}
@Override
public Role addRole(Role role) {
return roleRep.save(role);
}
@Override
public User findUserByUsername(String username) {
return userRep.findByUsername(username);
}
@Override
public List<User> findAllUsers() {
	return userRep.findAll();
}

}
