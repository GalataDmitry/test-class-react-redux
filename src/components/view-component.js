import React from "react"

const ViewComponent = ({quote}) => {

    const {
        ticker,
        exchange,
        price,
        change,
        change_percent,
        dividend,
        last_trade_time
    } = quote

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>{ticker}</div>
            <div>{exchange}</div>
            <div>{price}</div>
            <div>{change}</div>
            <div>{change_percent}</div>
            <div>{dividend}</div>
            <div>{last_trade_time}</div>
        </div>
    )
}

export default ViewComponent