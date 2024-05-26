package com.example.demo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface IncidentRepository extends JpaRepository<Incident, Long> {
    List<Incident> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
    List<Incident> findByStatus(Status status);

}
