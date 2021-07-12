import { Button, Modal } from "react-bootstrap";
import React from "react";
import { ListMovies } from "../listMovies/ListMovies";
import { CardSearch } from "../cardSearch/CardSearch";

export const ModalSearch = ({ modalIsOpen, setIsOpen }) => {
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (

    <Modal
      contentClassName="modal-search"
      centered
      size="lg"
      show={modalIsOpen}
      onHide={closeModal}
    >
      <Modal.Body>
          <div class="row">
          <div class="col-md-12 col-lg-12">

            <CardSearch />
            <CardSearch />
            <CardSearch />
            
            </div>

            </div>

      </Modal.Body>
    </Modal>

  );
};
