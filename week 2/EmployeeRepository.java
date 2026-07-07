package com.example.handson4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.handson4.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
