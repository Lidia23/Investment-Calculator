import { calculateInvestmentResults, formatter } from "../util/investment";


export default function Result({ inputs }) {
    const resultsData = calculateInvestmentResults(inputs);
    const initialInvestment = 
    resultsData[0].valueEndOfYear - 
    resultsData[0].interest - 
    resultsData[0].annualInvestment;
    return (
        <section>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest(Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsData.map((display) => {
                        const totalInterest = display.valueEndOfYear - display.annualInvestment * display.year - initialInvestment;
                        const totalAmountInvested = display.valueEndOfYear - totalInterest;
                        return (
                            <tr key={display.year}>
                                <td>{display.year}</td>
                                <td>{formatter.format(display.valueEndOfYear)}</td>
                                <td>{formatter.format(display.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td> 
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </section>
    );
}