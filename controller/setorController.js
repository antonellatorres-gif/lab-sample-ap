import { Setor } from "../model/Setor.js";

import {   cadastrar,listar,buscarPorIndice,deletar,atualizar} from "../repository/setorRepository.js";


export function cadastrarSetor(req, res) {
    const { nome, sigla, responsavel, ramal } = req.body;

    const setor = new Setor(nome, sigla, responsavel, ramal);

    cadastrar(setor);

    res.status(201).json(setor);
}


export function listarSetor(req, res) {
    const setores = listar();

    res.status(200).json(setores);
}


export function atualizarSetor(req, res) {
    const indice = Number(req.params.indice);

    const setor = buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    const { nome, sigla, responsavel, ramal } = req.body;

    if (nome !== undefined) {
        setor.nome = nome;
    }

    if (sigla !== undefined) {
        setor.sigla = sigla;
    }

    if (responsavel !== undefined) {
        setor.responsavel = responsavel;
    }

    if (ramal !== undefined) {
        setor.ramal = ramal;
    }

    atualizar(indice, setor);

    res.status(200).json(setor);
}


export function buscarSetor(req, res) {
    const indice = Number(req.params.indice);

    const setor = buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    res.status(200).json(setor);
}


export function deletarSetor(req, res) {
    const indice = Number(req.params.indice);

    const setor = buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    deletar(indice);

    res.status(204).send();
}