package com.example.demo;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class IncidentService {
    private final IncidentRepository repository;

    public IncidentService(IncidentRepository repository) {
        this.repository = repository;
    }

    public Incident createIncident(Incident incident) {
        incident.setStatus(Status.PENDING);
        incident.setCreatedAt(LocalDateTime.now());
        return repository.save(incident);
    }

    public List<Incident> getIncidentsByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        return repository.findByCreatedAtBetween(startDate, endDate);
    }

    public List<Incident> getPendingIncidents() {
        return repository.findByStatus(Status.PENDING);
    }

    public List<Incident> getAttendingIncidents() {
        return repository.findByStatus(Status.ATTENDED);
    }


    public List<Incident> updateIncidentsToAttended(List<Long> ids, String observation) {
        List<Incident> incidents = repository.findAllById(ids);
        incidents.forEach(incident -> {
            incident.setStatus(Status.ATTENDED);
            incident.setObservation(observation);
            incident.setAttendedAt(LocalDateTime.now());
        });
        return repository.saveAll(incidents);
    }
}
