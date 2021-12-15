package com.example.demo.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Role;


public interface RoleRepository extends JpaRepository<Role, Long> {
	Role findByRole(String role);
}
