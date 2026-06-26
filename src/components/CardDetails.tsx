import { encryptData } from "../configs";
import { useState } from "react";

const CardDetails = ({ 
    cardType: type, 
    cardNumber: number, 
    cardholderName: name, 
    expirationDate: exp, 
    uiTheme: ui,
}) => {
    const [isPrivacyMode, togglePrivacyMode] = useState(false);
    const {backgroundGradient: bg, textColor} = ui;    
    return (
        <button 
            className="cardContainer" 
            style={{backgroundImage: bg, color: textColor}}
            onClick={() => togglePrivacyMode(mode => !mode)}
        >
            <div className="cardNumber">{isPrivacyMode ? encryptData(number) : number}</div>
            <div className="name">{isPrivacyMode ? encryptData(name) : name}</div>
            <div className="cardType">{type}</div>
        </button>
    )
}

export default CardDetails;