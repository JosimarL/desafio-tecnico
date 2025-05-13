package com.meta.agendamento.controller;

import com.meta.agendamento.model.Transferencia;
import com.meta.agendamento.service.TransferenciaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/transferencias")
public class TransferenciaController {

    private final TransferenciaService service;

    public TransferenciaController(TransferenciaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Transferencia> listar() {
        return service.listar();
    }

    @PostMapping
    public Transferencia agendar(@RequestBody Transferencia transferencia) {
        return service.agendar(transferencia);
    }
}