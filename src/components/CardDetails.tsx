import { encryptData } from "../configs";
import { cardIcons } from "../assets/cardIcons";
import { useState } from "react";
import { ReactSVG } from "react-svg";

const CardDetails = ({ 
    cardType: type, 
    cardNumber: number, 
    cardholderName: name, 
    expirationDate: exp, 
    uiTheme: ui,
}) => {
    const [isPrivacyMode, togglePrivacyMode] = useState(false);
    const {backgroundGradient: bg, textColor} = ui;    
    const iconUrl = cardIcons.find(card => card.network === type)?.url;
    return (
        <button 
            className="cardContainer" 
            style={{backgroundImage: bg, color: textColor}}
            onClick={() => togglePrivacyMode(mode => !mode)}
        >
            <div className="cardNumber">{isPrivacyMode ? encryptData(number) : number}</div>
            <div className="name">{isPrivacyMode ? encryptData(name) : name}</div>
            <div className="cardType">
                <ReactSVG
                    src={iconUrl}
                    beforeInjection={(svg) => svg.classList.add('icon')}
                    title={type}
                />
            </div>
        </button>
    )
}

export default CardDetails;