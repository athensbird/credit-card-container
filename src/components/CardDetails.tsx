import { encryptData } from "../configs";
import { cardIcons } from "../assets/cardIcons";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { Card } from "../type";

const CardDetails = ({ 
    cardType: type, 
    cardNumber: number, 
    cardholderName: name, 
    expirationDate: exp, 
    uiTheme: ui,
}: Card) => {
    const [isPrivacyMode, togglePrivacyMode] = useState(false);
    const {backgroundGradient: bg, textColor} = ui;    
    const iconUrl = cardIcons.find(card => card.network === type)?.url;
    return (
        <button 
            className="cardContainer" 
            aria-pressed="false"
            aria-live="polite"
            style={{backgroundImage: bg, color: textColor}}
            onClick={() => togglePrivacyMode(mode => !mode)}
        >
            <div className="cardNumber" aria-describedby="card number">{isPrivacyMode ? encryptData(number) : number}</div>
            <div className="name" aria-describedby="cardholder name">{isPrivacyMode ? encryptData(name) : name}</div>
            <div className="cardType" aria-activedescendant="card type">
                <ReactSVG
                    src={iconUrl}
                    beforeInjection={(svg) => svg.classList.add('icon')}
                    title={type}
                    desc="card logo"
                />
            </div>
        </button>
    )
}

export default CardDetails;