import { Amostra } from "../model/Amostra.js";

import {
    cadastrar,
    listar,
    buscarPorIndice,
    deletar,
    atualizar
} from "../repository/amostraRepository.js";


export function cadastrarAmostra(req, res) {
    const { codigo, material, origem, resultado } = req.body;

    const amostra = new Amostra(codigo, material, origem, resultado);

    cadastrar(amostra);

    res.status(201).json(amostra);
}


export function listarAmostra(req, res) {
    const amostras = listar();

    res.status(200).json(amostras);
}


export function atualizarAmostra(req, res) {
    const indice = Number(req.params.indice);

    const amostra = buscarPorIndice(indice);

    if (!amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada."
        });
    }

    const { codigo, material, origem, resultado } = req.body;

    if (codigo !== undefined) {
        amostra.codigo = codigo;
    }

    if (material !== undefined) {
        amostra.material = material;
    }

    if (origem !== undefined) {
        amostra.origem = origem;
    }

    if (resultado !== undefined) {
        amostra.resultado = resultado;
    }

    atualizar(indice, amostra);

    res.status(200).json(amostra);
}


export function buscarAmostra(req, res) {
    const indice = Number(req.params.indice);

    const amostra = buscarPorIndice(indice);

    if (!amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada"
        });
    }

    res.status(200).json(amostra);
}


export function deletarAmostra(req, res) {
    const indice = Number(req.params.indice);

    const amostra = buscarPorIndice(indice);

    if (!amostra) {
        return res.status(404).json({
            mensagem: "Amostra não encontrada"
        });
    }

    deletar(indice);

    res.status(204).send();
}