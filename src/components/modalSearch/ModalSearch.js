import { Button, Modal } from "react-bootstrap";
import React from "react";
import { ListMovies } from "../listMovies/ListMovies";
import { CardSearch } from "../cardSearch/CardSearch";

export const ModalSearch = ({ modalIsOpen, setIsOpen, search }) => {
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
            {search.length > 0 ? (
              search.map((movieSearch) => {
                return <CardSearch movieSearch={movieSearch} />;
              })
            ) : (
              <div class="col-md-12 col-lg-12 text-center mt-5">
                <h1>Pelicuna no encontrada</h1>
                <h1>
                  <i class="bi bi-emoji-frown"></i>
                </h1>
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
