import { Container, Content } from "./styles";
import closeImg from "../../assets/close.svg";
import React, { useState } from "react";

import api from "../../services/api";

interface IModalProps {
  onClose: () => void;
}

export function Modal({ onClose }: IModalProps) {
  const [evento, setEvento] = useState("");
  const [local, setLocal] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const dados = {
      nomeevento: evento,
      local,
      diasemana: data,
      horario: hora,
    };

    console.log({ dados });

    await api.post("/events", dados);
    onClose();
  }

  return (
    <Container className="react-modal-overlay">
      <Content className="react-modal-content">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-control">
            <h2>Cadastrar Informações</h2>
            <label htmlFor="">Evento</label>
            <input
              type="text"
              placeholder="Digite o nome do Evento"
              value={evento}
              onChange={(e) => setEvento(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Local</label>
            <input
              type="text"
              placeholder="Digite o Local do Evento"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Data do Evento</label>
            <input
              type="text"
              placeholder="Digite a data do evento"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">Horário</label>
            <input
              type="time"
              placeholder="Horário do Evento"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </div>

          <button type="submit">Enviar</button>

          <button type="button" className="react-modal-close" onClick={onClose}>
            <img src={closeImg} alt="Fechar" />
          </button>
        </form>
      </Content>
    </Container>
  );
}
