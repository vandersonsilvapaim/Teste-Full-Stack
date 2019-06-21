package com.teste.medicamento.service;

import com.teste.medicamento.entity.Medicamento;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface MedicamentoService {

    public List<Medicamento> getAll();

    public List<Medicamento> getByTermo(final Optional<String> nome,
                                        final Optional<String> fabricante,
                                        final Optional<Long> validade,
                                        final Optional<BigDecimal> preco,
                                        final Optional<Long> data_criacao,
                                        final Optional<Long> data_atualizacao);

    public Medicamento getById(final long id);

    public Medicamento add(final Medicamento medicamento);

    public Medicamento update(final long id, final Medicamento medicamento);

    public void delete(final long id);

}
