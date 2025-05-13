package com.meta.agendamento.service;

import com.meta.agendamento.model.Transferencia;
import com.meta.agendamento.repository.TransferenciaRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class TransferenciaService {

    private final TransferenciaRepository repository;

    public TransferenciaService(TransferenciaRepository repository) {
        this.repository = repository;
    }

    public List<Transferencia> listar() {
        return repository.findAll();
    }

    public Transferencia agendar(Transferencia transferencia) {
        LocalDate hoje = LocalDate.now();
        long dias = ChronoUnit.DAYS.between(hoje, transferencia.getDataTransferencia());

        BigDecimal taxa = calcularTaxa(transferencia.getValor(), dias);

        if (taxa == null) {
            throw new RuntimeException("Não há taxa aplicável para a data informada.");
        }

        transferencia.setTaxa(taxa);
        transferencia.setDataAgendamento(hoje);

        return repository.save(transferencia);
    }

    private BigDecimal calcularTaxa(BigDecimal valor, long dias) {
        if (dias == 0) {
            return BigDecimal.valueOf(3.00).add(valor.multiply(BigDecimal.valueOf(0.025)));
        } else if (dias >= 1 && dias <= 10) {
            return BigDecimal.valueOf(12.00);
        } else if (dias >= 11 && dias <= 20) {
            return valor.multiply(BigDecimal.valueOf(0.082));
        } else if (dias >= 21 && dias <= 30) {
            return valor.multiply(BigDecimal.valueOf(0.069));
        } else if (dias >= 31 && dias <= 40) {
            return valor.multiply(BigDecimal.valueOf(0.047));
        } else if (dias >= 41 && dias <= 50) {
            return valor.multiply(BigDecimal.valueOf(0.017));
        } else {
            return null;
        }
    }
}