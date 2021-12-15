package com.slim.users.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.slim.users.entities.Role;
public interface RoleRepository extends JpaRepository<Role, Long> {
Role findByRole(String role);
}