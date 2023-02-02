import { ModalWindow, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = element => {
    if (element.code === 'Escape' || element.currenTarget !== element.target) {
      this.props.closeModal();
      return;
    }
  };

  render() {
    const { tags, modalImg } = this.props;
    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModalWindow>
          <img src={modalImg} alt={tags} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
