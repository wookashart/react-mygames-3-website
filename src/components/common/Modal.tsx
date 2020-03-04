import React, { Component } from 'react';

// Helpers
import { colors, animation } from '../../styles/variables';

// Components
import Button from './Button';

interface ModalProps {
  children: React.ReactElement;
  title?: string;
  size?: 'xl' | 'md' | 'sm';
  opened: boolean;
  onCloseModal: Function;
}

class Modal extends Component<ModalProps> {
  onModalSubmit = () => {
    return;
  };

  render() {
    const { children, title, size } = this.props;
    return (
      <>
        <div className={`modal-wrapper ${this.props.opened ? 'opened' : ''}`}>
          <div className={`modal-inner size-${size ? size : 'sm'} ${this.props.opened ? 'opened' : ''}`}>
            <div className="modal-title">
              <h3>{title}</h3>
              <button className="modal-close" onClick={() => this.props.onCloseModal()} type="button">
                <span></span>
              </button>
            </div>
            <div className="modal-content">{children}</div>
            <div className="modal-footer">
              <Button title="Zamknij" variant="cancel" onButtonClick={() => this.props.onCloseModal()} type="button" />
              <Button title="Zapisz" onButtonClick={this.onModalSubmit} type="submit" />
            </div>
          </div>
        </div>
        <style jsx>{`
          .modal-wrapper {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: ease-out all ${animation.fast}ms;
          }

          .modal-wrapper.opened {
            display: flex;
            opacity: 1;
            visibility: visible;
          }

          .modal-inner {
            background-color: ${colors.white};
            height: auto;
            max-height: 90%;
            border-radius: 4px;
            border: 1px solid ${colors.ui.default};

            opacity: 0;
            transform: translateY(-40%);
            visibility: hidden;
            transition: ease-out all ${animation.fast}ms;
          }

          .modal-inner.opened {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }

          .modal-title {
            display: flex;
            justify-content: space-between;
            padding: 15px;
            border-bottom: 1px solid ${colors.ui.default};
          }

          .modal-title h3 {
            margin: 0;
            color: ${colors.ui.dark};
          }

          .modal-title button {
            display: block;
          }

          .modal-content {
            padding: 15px;
          }

          .modal-footer {
            padding: 15px;
            display: flex;
            justify-content: flex-end;
          }

          .modal-close {
            width: 30px;
            height: 30px;
            background: transparent;
            border: none;
            position: relative;
            cursor: pointer;
          }

          .modal-close span::before,
          .modal-close span::after {
            content: '';
            height: 5px;
            width: 100%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position: absolute;
            margin: auto;
            background-color: ${colors.ui.default};
            transition: ease-out background ${animation.fast}ms;
          }
          .modal-close span::before {
            transform: rotate(45deg);
          }
          .modal-close span::after {
            transform: rotate(-45deg);
          }

          .modal-close:hover span::before,
          .modal-close:hover span::after {
            background-color: ${colors.ui.dark};
          }

          .size-sm {
            width: 500px;
          }
          .size-md {
            width: 800px;
          }
          .size-xl {
            width: 1000px;
          }
        `}</style>
      </>
    );
  }
}

export default Modal;
