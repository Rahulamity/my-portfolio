import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>Attention Required!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <h3>Here is my portfolio!</h3>
                    <p>I am looking for job change!!</p>
                    <p>
                        I've extensive knowledge of React js, HTML, JavaScript, CSS and Redux!
                    </p>
                    <p>
                        Since my childhood, i love art and design. I always design stuff with my unique point of views.
                        I am looking for the job in the field so that i can get opportunity to design alog with coding.
                        Below i am providing my github link so anyone can review some of my projects i've developed.
                    </p>
                </div>
                <div className='lower-section'>
                    <a onClick={closeModal} className='modal-btn btn-red'>
                        Close
                    </a>
                    <a
                        href="https://github.com/Rahulamity"
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        Github
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;
