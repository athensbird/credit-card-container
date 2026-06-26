import { encryptData } from "../configs";

const CardDetails = ({ 
    cardType: type, 
    cardNumber: number, 
    cardholderName: name, 
    expirationDate: exp, 
    uiTheme: ui,
    isPrivacyMode = false,
    togglePrivacy,
}) => {
    const {backgroundGradient: bg, textColor} = ui;    
    return (
        <button 
            className="cardContainer" 
            style={{backgroundImage: bg, color: textColor}}
            onClick={togglePrivacy}
        >
            <div className="cardNumber">{isPrivacyMode ? encryptData(number) : number}</div>
            <div className="name">{isPrivacyMode ? encryptData(name) : name}</div>
            <div className="cardType">{type}</div>
        </button>
    )
}

export default CardDetails;