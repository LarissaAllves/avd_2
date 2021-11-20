import logoImg from "../../assets/evento.png";
import includeImg from "../../assets/plus.svg";

import { useState } from "react";
import { Container, Content } from "./styles";
import { Modal } from "../Modal";

export function Header() {
  const [modal, setModal] = useState(false);

  function handleOpenModal() {
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="Logo" />

          <button
            type="button"
            className="react-modal-include"
            onClick={handleOpenModal}
          >
            <img src={includeImg} alt="Incluir informações"></img>
          </button>
        </Content>
      </Container>
      {modal && <Modal onClose={handleCloseModal} />}
    </>
  );
}
