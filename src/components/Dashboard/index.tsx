//Crie um componente Dashboard para listar as informações nome do evento,
//local, dia da semana e horário, deverá ser listado num formato de post (como o
//  instagram) e na parte inferior ter o botão de Excluir, Like e Dislike

import { Container } from "./styles";
import likeImg from "../../assets/gostar.png";
import dislikeImg from "../../assets/dislike.png";
import closeImg from "../../assets/outcome.svg";
import api from "../../services/api";
import { useEffect, useState } from "react";

interface ITransaction {
  id: string;
  nomeevento: string;
  local: string;
  diasemana: string;
  horario: string;
  like: number;
  dislike: number;
}

export function Dashboard() {
  const [events, setEvents] = useState<ITransaction[]>([]);
  useEffect(() => {
    api.get("/events").then((response) => setEvents(response.data));
  }, []);

  async function handleLike(id: string) {
    await api.post("/events/like/" + id);
    api.get("/events").then((response) => setEvents(response.data));
  }

  async function handleDislike(id: string) {
    await api.post("/events/dislike/" + id);
    api.get("/events").then((response) => setEvents(response.data));
  }

  async function deleteEvent(id: string) {
    await api.delete(`/events/${id}`);
    api.get("/events").then((response) => setEvents(response.data));
  }

  console.log({ events });

  return (
    <Container>
      {events.map((event) => (
        <div key={event.id} className="event">
          <p>
            <strong>Nome do Evento:</strong> {event.nomeevento}
          </p>
          <p>
            <strong>Local:</strong> {event.local}
          </p>
          <p>
            <strong>Dia da semana:</strong> {event.diasemana}
          </p>
          <p>
            <strong>Horário:</strong> {event.horario}
          </p>

          <div className="like-box">
            <p>
              <strong>Like:</strong> {event.like || 0}
            </p>
            <p>
              <strong>Dislike:</strong> {event.dislike || 0}
            </p>
          </div>

          <div className="button-container">
            <button type="button">
              <img
                src={likeImg}
                alt="Like"
                onClick={() => {
                  handleLike(event.id);
                }}
              />
            </button>

            <button>
              <img
                src={dislikeImg}
                alt="Dislike"
                onClick={() => {
                  handleDislike(event.id);
                }}
              />
            </button>

            <button>
              <img
                src={closeImg}
                alt="Excluir"
                onClick={() => {
                  deleteEvent(event.id);
                }}
              />
            </button>
          </div>
        </div>
      ))}
    </Container>
  );
}
