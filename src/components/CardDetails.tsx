const CardDetails = ({ 
    cardType: type, 
    cardNumber: number, 
    cardholderName: name, 
    expirationDate: exp, 
    uiTheme: ui,
}) => {
    const {backgroundGradient: bg, textColor} = ui;
    return (
        <div className="cardContainer" style={{backgroundImage: bg, color: textColor}}>
            <div className="cardNumber">{number}</div>
            <div className="name">{name}</div>
            <div className="cardType">{type}</div>
        </div>
    )
}

export default CardDetails;