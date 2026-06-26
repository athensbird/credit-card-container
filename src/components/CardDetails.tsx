const CardDetails = ({ 
    cardType: type, 
    cardNumber: number, 
    cardholderName: name, 
    expirationDate: exp, 
    uiTheme: ui,
}) => {
    return (
        <div className="cardContainer">
            <div>{number}</div>
            <div>{name}</div>
            <div>{exp}</div>
        </div>
    )
}

export default CardDetails;