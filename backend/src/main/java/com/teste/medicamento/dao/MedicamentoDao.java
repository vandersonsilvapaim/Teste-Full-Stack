package com.teste.medicamento.dao;

import com.teste.medicamento.entity.Medicamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository("medicamentoDao")
public interface MedicamentoDao extends JpaRepository<Medicamento, Long> {

    @Override
    public Medicamento saveAndFlush(final Medicamento medicamento);

    @Query("SELECT m FROM Medicamento m WHERE LOWER(m.nome) like CONCAT('%', LOWER(:nome), '%')")
    public List<Medicamento> findByName(@Param("nome") final String nome);

    @Query("SELECT m FROM Medicamento m WHERE LOWER(m.fabricante) like CONCAT('%', LOWER(:fabricante), '%')")
    public List<Medicamento> findByFabricante(@Param("fabricante") final  String fabricante);

    @Query("SELECT m FROM Medicamento m WHERE m.validade = :validade ")
    public List<Medicamento> findByValidade(@Param("validade") final long validade);

    @Query("SELECT m FROM Medicamento m WHERE m.preco = :preco ")
    public List<Medicamento> findByPreco(@Param("preco") final BigDecimal preco);

    @Query("SELECT m FROM Medicamento m WHERE m.data_criacao = :data_criacao ")
    public List<Medicamento> findByDataCriacao(@Param("data_criacao") final long data_criacao);

    @Query("SELECT m FROM Medicamento m WHERE m.data_atualizacao = :data_atualizacao ")
    public List<Medicamento> findByDataAtualizacao(@Param("data_atualizacao") final long data_atualizacao);
}
