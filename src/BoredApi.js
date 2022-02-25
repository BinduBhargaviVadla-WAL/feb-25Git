import { useState, useEffect } from "react";
import axios from "axios";

function BoredApi() {
    const [item, setItem] = useState({ activity: "", type: "", participants: 1, price: 0, link: "", key: "8033599", accessibility: 0 });
    useEffect(() => {
        axios.get("https://www.boredapi.com/api/activity").then((res) => {
            console.log(res.data);
            setItem(res.data);
        }).catch(function (error) {
            alert(error);
        });
    }, []);
    return (
        <div className="borderApi">
            <h1>Bored API</h1>
            <div className="tableApi">
                <table>
                    <tr>
                        <th className="apiHeader">Key</th>
                        <th></th>
                        <th className="apiHeader">Value</th>
                    </tr>
                    <tr>
                        <th className="text-dark">Activity</th>
                        <td>:</td>
                        <td>{item.activity}</td>
                    </tr>
                    <tr>
                        <th className="text-dark">Type</th>
                        <td>:</td>
                        <td>{item.type}</td>
                    </tr>
                    <tr>
                        <th className="text-dark">Participants</th>
                        <td>:</td>
                        <td>{item.participants}</td>
                    </tr>
                    <tr>
                        <th className="text-dark">Price</th>
                        <td>:</td>
                        <td>{item.price}</td>
                    </tr>
                    <tr>
                        <th className="text-dark">Link</th>
                        <td>:</td>
                        <td>{item.link}</td>
                    </tr>
                    <tr>
                        <th className="text-dark">Key</th>
                        <td>:</td>
                        <td>{item.key}</td>
                    </tr>
                    <tr>
                        <th className="text-dark">Accessibility</th>
                        <td>:</td>
                        <td>{item.accessibility}</td>
                    </tr>
                </table>
            </div>

        </div>
    );
}
export default BoredApi;