package com.teste.medicamento.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "TB_MEDICAMENTO")
public class Medicamento {

    @Column(name = "CO_SEQ_ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "NO_NOME", nullable = true, length = 255)
    private String nome;

    @Column(name = "NO_FABRICANTE", nullable = true, length = 255)
    private String fabricante;

    @Column(name = "DT_VALIDADE", nullable = true)
    private Long validade;

    @Column(name = "NU_PRECO", nullable = true)
    private BigDecimal preco;

    @Column(name = "DT_DATA_CRIACAO", nullable = true)
    private Long data_criacao;

    @Column(name = "DT_DATA_ATUALIZACAO", nullable = true)
    private Long data_atualizacao;

    protected Medicamento() {
    }

    public static Medicamento builder(final Medicamento medicamento) {
        Medicamento new_medicamento = new Medicamento();
        new_medicamento.setData_atualizacao(medicamento.getData_atualizacao());
        new_medicamento.setData_criacao(medicamento.getData_criacao());
        new_medicamento.setPreco(medicamento.getPreco());
        new_medicamento.setValidade(medicamento.getValidade());
        new_medicamento.setFabricante(medicamento.getFabricante());
        new_medicamento.setNome(medicamento.getNome());
        return new_medicamento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public Long getValidade() {
        return validade;
    }

    public void setValidade(Long validade) {
        this.validade = validade;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public Long getData_criacao() {
        return data_criacao;
    }

    public void setData_criacao(Long data_criacao) {
        this.data_criacao = data_criacao;
    }

    public Long getData_atualizacao() {
        return data_atualizacao;
    }

    public void setData_atualizacao(Long data_atualizacao) {
        this.data_atualizacao = data_atualizacao;
    }
}