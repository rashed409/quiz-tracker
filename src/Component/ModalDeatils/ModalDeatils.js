import React from 'react';
import './ModalDeatils.css'
const ModalDeatils = ({correctAnswer,id}) => {

    return (
        <div>
              <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Correct Ans:</h3>
                            <p className="py-4">{correctAnswer}</p>
                            <div className="modal-action">
                                <label htmlFor={`my-modal-${id}`} className="btn">Close</label>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default ModalDeatils;