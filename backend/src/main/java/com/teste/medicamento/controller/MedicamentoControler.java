package com.teste.medicamento.controller;

import com.teste.medicamento.entity.Medicamento;
import com.teste.medicamento.service.MedicamentoServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/medicamentos")
public class MedicamentoControler {

    @Autowired
    MedicamentoServiceImpl medicamentoServiceImpl;

    @CrossOrigin
    @RequestMapping(
            value = "",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    public List<Medicamento> getAllMedicamentos() {
        return medicamentoServiceImpl.getAll();
    }

    @CrossOrigin
    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    public Medicamento getMedicamentoById(@PathVariable("id") long id) {
        return medicamentoServiceImpl.getById(id);
    }

    @CrossOrigin
    @RequestMapping(
            value = "",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    public Medicamento addNewMedicamento(@RequestBody Medicamento medicamento) {
        return this.medicamentoServiceImpl.add(medicamento);
    }

    @CrossOrigin
    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    public Medicamento updateMedicamentoById(@PathVariable("id") long id, @RequestBody Medicamento medicamento) {
        return medicamentoServiceImpl.update(id, medicamento);
    }

    @CrossOrigin
    @RequestMapping(
            value = "/{id}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    public void deleteMedicamentoById(@PathVariable("id") long id) {
        medicamentoServiceImpl.delete(id);
    }

    @CrossOrigin
    @RequestMapping(
            value = "/find",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    public List<Medicamento> getAllMedicamentosByTermo(
            @RequestParam("nome") Optional<String> nome,
            @RequestParam("fabricante") Optional<String> fabricante,
            @RequestParam("validade") Optional<Long> validade,
            @RequestParam("preco") Optional<BigDecimal> preco,
            @RequestParam("data_criacao") Optional<Long> data_criacao,
            @RequestParam("data_atualizacao") Optional<Long> data_atualizacao
    ) {
        return medicamentoServiceImpl.getByTermo(nome, fabricante, validade, preco, data_criacao, data_atualizacao);
    }

}