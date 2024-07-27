import { useState, useEffect } from "react";

export function ActivityFinder() { // Fetches a random activity
    const [participants, setParticipants] = useState(1);
    const [activity, setActivity] = useState('');

/*    useEffect(() => {
        fetch('https://www.boredapi.com/api/activity?' + 'participants=' + participants)    //appends numberof participants as parameter - selected by user below
            .then(response => response.json())  //fetch returns a promise which resolves to a response
            .then(json => {
                setActivity(json.activity);  //response returns another promise which is solved to parsed JSON data
            });                                         //the activity is extracted fromthe data and passed to setActivity useState 
    }, [participants]);         //participants is the dependency here. The fetch function will run whenever [participants] changes
*/

    useEffect(() => {
        fetch('https://www.boredapi.com/api/activity?' + 'participants=' + participants)
            .then(response => response.json())
            .then(json => {
                setActivity(json.activity);
            });
    }, [participants]);

    return (
        <div className="ActivityFinder componentBox">
            <h3>Activity Finder</h3>
            <label>Choose number of participants:
                <select value={participants}
                    onChange={e => setParticipants(parseInt(e.target.value))}>
                    <option>1</option><option>2</option><option>3</option>
                </select>
            </label>
            <div><strong>Suggested Activity: </strong>{activity}</div>
        </div>
    )
}
// ++ Reference https://www.boredapi.com/documentation and add a
// new dropdown to suggest an activity based on type