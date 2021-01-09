import React, { Fragment } from 'react';

function TestPage() {

    const getClauseData = (JSONdata) => {
        return fetch(JSONdata, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(response => response.json())
            .then(JSON => (JSON.results))
    }

    getClauseData("./data/clause-data.json")
        .then(clauses => console.log(clauses))
        .catch(error => console.log(error))

    return (
        <Fragment>
        </Fragment>
    )
}

export default TestPage;