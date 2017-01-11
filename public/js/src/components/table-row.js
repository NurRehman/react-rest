import React from "react";

export default React.createClass({
    render: function() {
        var item = this.props.item;

        return (
            <tr>
                <td>
                    {item.securityName}
                </td>
                <td>
                    {item.description}
                </td>
                <td>
                    {item.currency}
                </td>
                <td>
                    {item.yearsRemaining}
                </td>
                <td>
                    {item.benchmarkSecurityDescription}
                </td>
                <td>
                    {item.bidSpreadVsBenchmark}
                </td>
                <td>
                    {item.bidSpreadVsGocCurve}
                </td>
                <td>
                    {item.bidSpreadVs3mCdor}
                </td>
                <td>
                    {item.bidSpreadVs3mUsdl}
                </td>
                <td>
                    {item.readableTimestamp}
                </td>
                <td>
                    <button type="button" className="btn btn-danger btn-xs"><span class="glyphicon glyphicon-calendar"></span></button>
                </td>
            </tr>
        );
    }
});