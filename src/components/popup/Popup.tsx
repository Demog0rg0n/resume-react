import React from 'react'
import "../../components/popup/popup.css"

type popupProps = {
    children: JSX.Element,
    state: boolean,
    handler: React.Dispatch<React.SetStateAction<boolean>>,
    popupClass: string
}



const Popup: React.FC<popupProps> = ({children, state, handler, popupClass}) => {

    function closePopup() {
        handler(false)
        document.body.classList.remove("overflow-hidden")
    }

    return (
        <div 
            className={state? "popup-wrapper visible":"popup-wrapper not-visible"}
            onClick={() => closePopup()}
        >
            <div className={popupClass} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Popup
