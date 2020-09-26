import React from 'react';
//
export default class MyTable extends React.Component {
    render() {
        const { stocks } = this.props;
        return (
            <table>
                <tbody>
                    {Object.entries(stocks).map(([symbol, symbolValue]) => (<>
                        <tr key={symbol}>
                            <td>
                                {symbol}
                            </td>
                        </tr>
                        {
                            Object.entries(symbolValue).map(
                            ([date, priceObject]) => {
                                const fulldate = new Date(Number(date));
                                return (
                            <tr key={date}>
                                <td>Date: { fulldate.toLocaleDateString("en-CA")}</td>
                                <td>Price: {priceObject.price}$</td>
                                <td>Facebook: {priceObject.Facebook}</td>
                                <td>LinkedIn: {priceObject.LinkedIn}</td>
                                <td>Twitter: {priceObject.Twitter}</td>
                                </tr>)})
                        }
                        </>
                    ))}
            </tbody>
            </table>
        )
    }

}
