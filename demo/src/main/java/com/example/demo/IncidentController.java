package com.example.demo;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/incidents")
public class IncidentController {
    private final IncidentService service;

    public IncidentController(IncidentService service) {
        this.service = service;
    }

    @PostMapping
    public Incident createIncident(@RequestBody Incident incident) {
        return service.createIncident(incident);
    }

    @GetMapping
    public List<Incident> getIncidents(@RequestParam LocalDateTime startDate, @RequestParam LocalDateTime endDate) {
        return service.getIncidentsByDateRange(startDate, endDate);
    }

    @GetMapping("/pending")
    public List<Incident> getPendingIncidents() {
        return service.getPendingIncidents();
    }

    @GetMapping("/attended")
    public List<Incident> getAttendedIncidents() {
        return service.getAttendingIncidents();
    }



    @PutMapping("/attend")
    public List<Incident> attendIncidents(@RequestBody AttendRequest request) {
        return service.updateIncidentsToAttended(request.getIds(), request.getObservation());
    }


}

class AttendRequest {
    private List<Long> ids;
    private String observation;

    // Getters and Setters
    public List<Long> getIds() {
        return ids;
    }

    public void setIds(List<Long> ids) {
        this.ids = ids;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observation) {
        this.observation = observation;
    }
}
