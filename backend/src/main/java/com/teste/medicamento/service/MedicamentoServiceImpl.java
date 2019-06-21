package com.teste.medicamento.service;

import com.teste.medicamento.dao.MedicamentoDao;
import com.teste.medicamento.entity.Medicamento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class MedicamentoServiceImpl implements MedicamentoService {

    @Autowired
    MedicamentoDao medicamentoDao;

    @Override
    public List<Medicamento> getAll() {
        return this.medicamentoDao.findAll();
    }

    @Override
    public List<Medicamento> getByTermo(final Optional<String> nome, final Optional<String> fabricante, final Optional<Long> validade, final Optional<BigDecimal> preco, final Optional<Long> data_criacao, final Optional<Long> data_atualizacao) {
//        Multimap<String, Object> termos = ArrayListMultimap.create();
        List<Medicamento> medicamentos = new ArrayList<>();

        if (nome.isPresent()) {
            final String _nome = nome.get();
            medicamentos.addAll(this.medicamentoDao.findByName(_nome));
        }else
        if (fabricante.isPresent()) {
            final String _fabricante = fabricante.get();
            medicamentos.addAll(this.medicamentoDao.findByFabricante(_fabricante));
        }else
        if (validade.isPresent()) {
            final long _validade = validade.get();
            medicamentos.addAll(this.medicamentoDao.findByValidade(_validade));
        }else
        if (preco.isPresent()) {
            final BigDecimal _preco = preco.get();
            medicamentos.addAll(this.medicamentoDao.findByPreco(_preco));
        }else
        if (data_criacao.isPresent()) {
            final long _data_criacao = data_criacao.get();
            medicamentos.addAll(this.medicamentoDao.findByDataCriacao(_data_criacao));
        }else
        if (data_atualizacao.isPresent()) {
            final long _data_atualizacao = data_atualizacao.get();
            medicamentos.addAll(this.medicamentoDao.findByDataAtualizacao(_data_atualizacao));
        }

        return medicamentos;
    }

    @Override
    public Medicamento getById(final long id) {
        Assert.notNull(id, "O ID fornecido não deve ser nulo!");
        return this.medicamentoDao.findById(id).get();
    }

    @Override
    public Medicamento add(final Medicamento medicamento) {
        Assert.notNull(medicamento, "O Medicamento fornecido não deve ser nulo!");
        medicamento.setData_criacao(new Date().getTime());
        medicamento.setData_atualizacao(new Date().getTime());
        return this.medicamentoDao.saveAndFlush(Medicamento.builder(medicamento));
    }

    @Override
    public Medicamento update(final long id, final Medicamento medicamento) {
        Assert.notNull(id, "O ID fornecido não deve ser nulo!");
        Assert.notNull(medicamento, "O Medicamento fornecido não deve ser nulo!");
        final Optional<Medicamento> opt = this.medicamentoDao.findById(id);
        Assert.notNull(opt.get(), "O Medicamento não foi encontrado !");
        medicamento.setData_atualizacao(new Date().getTime());
        return this.medicamentoDao.saveAndFlush(medicamento);
    }

    @Override
    public void delete(final long id) {
        Assert.notNull(id, "O ID fornecido não deve ser nulo!");
        this.medicamentoDao.deleteById(id);
    }

}
