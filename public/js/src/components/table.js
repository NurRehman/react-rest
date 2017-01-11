import React from "react";
import request from "browser-request";
import _ from "underscore";
import TableRow from "./table-row";

function fetchItemsFromPage(component, page) {
    return request({ url: "https://gist.githubusercontent.com/espinet/922527b7ea1606127f7dba413a911937/raw/245370f480934a50eb3fa68891fc9476cce894e2/secondary-levels.json", qs: { page }, json: true }, (error, response, body) => {
        component.setState(_.extend({ step: "list" }, body.secondaryLevels));
    });
}

export default React.createClass({
    getInitialState: function() {
        return {
            items: [],
            step: "list"
        };
    },
    componentDidMount: function() {
        fetchItemsFromPage(this, 1);
    },
    render: function() {
        
        return (
            <div class="table-responsive">
                <h3>Secondary Levels</h3>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th>Issuer</th>
                            <th>Issue Description</th>
                            <th>Currency</th>
                            <th>Years Remaining</th>
                            <th>Benchmark</th>
                            <th>Goc Curve</th>
                            <th>3M CDOR</th>
                            <th>3M USDL</th>
                            <th>Updated</th>
                            <th></th>
                        </tr>
                        {this.state.items.map(item => (<TableRow item={item}/>))}
                    </tbody>
                </table>
            </div>
        );
    }
});
