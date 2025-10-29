import { useEffect, useState } from 'react';
import s from './Modal.module.scss';

export const Modal = ({ objectModal, toggleModal }) => {
  const [isAllergyOpen, setIsAllergyOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === 'Escape') {
        if (isAllergyOpen) setIsAllergyOpen(false);
        else toggleModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isAllergyOpen, toggleModal]);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      if (isAllergyOpen) setIsAllergyOpen(false);
      else toggleModal();
    }
  };

  return (
    <div className={s.backdrop} onClick={handleBackdrop} role="dialog" aria-modal="true">
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        {/* ваш контент карточки */}
        <h2 className={s.itemTitle}>{objectModal.title}</h2>
        <h3 className={s.itemPrice}>{objectModal.price}</h3>
        <div className={s.itemText}>{objectModal.text}</div>
        <img src={objectModal.src} alt="" className={s.imgSize} />

        <div className={s.actions}>
          <button className={s.btn} onClick={() => setIsAllergyOpen(true)}>Алергени</button>
          
        </div>

        {isAllergyOpen && (
          <div
            className={s.innerBackdrop}
            onClick={(e) => e.currentTarget === e.target && setIsAllergyOpen(false)}
          >
            <div className={s.smallModal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
              <button
                className={s.closeSmall}
                onClick={() => setIsAllergyOpen(false)}
                aria-label="Закрити"
              >
                {/* крестик как иконка */}
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M18.3 5.7a1 1 0 0 0-1.4-1.4L12 9.17 7.1 4.3a1 1 0 1 0-1.4 1.4L10.83 12l-5.13 5.1a1 1 0 0 0 1.4 1.4L12 14.83l4.9 4.87a1 1 0 0 0 1.4-1.4L13.17 12l5.13-5.1z" />
                </svg>
              </button>

              {/* внутри — только allergy */}
              <p className={s.allergyText}>{objectModal.allergy}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
