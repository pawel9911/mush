import React, { useState } from 'react';
// useEffect
import Modal from 'react-bootstrap/Modal';
import Newsletter from './newsletter';
import LogoWhite from '../img/Logo-white.png';

const NewsletterModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShow(true)
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size='lg'
        centered
        keyboard={false}
      >
        <Modal.Header closeButton className='border-0'>
                    <img src={LogoWhite} alt='logo Mush' className='img-fluid' width={80}/>
        </Modal.Header>
        <Modal.Body>
          <Newsletter/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewsletterModal;