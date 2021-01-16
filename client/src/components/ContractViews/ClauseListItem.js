import React, { Fragment } from 'react';
import "./orderedlist.css"
import Typography from '@material-ui/core/Typography';

export default function ClauseListItem({ article, certificateRef, voteRef, taxRef, pushPullRef, fiduciaryRef }) {

    return (
        <li>
            <Typography component="h1" variant="h6" align="center">
                {article[0].heading}
            </Typography>
            <ol>
                {article.slice(1).map((clause, index) => (
                    <Fragment>
                        {Array.isArray(article[index + 2]) ? (
                            Object.keys(clause)[0] === "pushPullBuyout" ? (
                                <li ref={pushPullRef}>
                                    {console.log("pushPullRef set")}
                                    {Object.values(clause)}
                                    <ol>
                                        {article[index + 2].map((subclause) => (
                                            <li>
                                                {subclause}
                                            </li>
                                        ))}
                                    </ol>
                                </li>
                            ) : (
                                    <li ref={Object.keys(clause)}>
                                        {Object.values(clause)}
                                        <ol>
                                            {article[index + 2].map((subclause) => (
                                                <li>
                                                    {subclause}
                                                </li>
                                            ))}
                                        </ol>
                                    </li>
                                )) : (
                                Array.isArray(clause) === false ? (
                                    Object.keys(clause)[0] === "certificates" ? (
                                        <li ref={certificateRef}>
                                            {console.log("certificateRef set")}
                                            {Object.values(clause)}
                                        </li>
                                    ) : (
                                            Object.keys(clause)[0] === "quorumAndActOfMembersOrCommittee" ? (
                                                <li ref={voteRef}>
                                                    {console.log("voteRef set")}
                                                    {Object.values(clause)}
                                                </li>
                                            ) : (
                                                    Object.keys(clause)[0] === "requiredAnnualTaxDistribution" ? (
                                                        <li ref={taxRef}>
                                                            {console.log("taxRef set")}
                                                            {Object.values(clause)}
                                                        </li>
                                                    ) : (
                                                            Object.keys(clause)[0] === "pushPullBuyout" ? (
                                                                <li ref={pushPullRef}>
                                                                    {console.log("pushPullRef set")}
                                                                    {Object.values(clause)}
                                                                </li>
                                                            ) : (
                                                                    Object.keys(clause)[0] === "scopeOfDutiesOfCoveredPersons" ? (
                                                                        <li ref={fiduciaryRef}>
                                                                            {console.log("fiduciaryRef set")}
                                                                            {Object.values(clause)}
                                                                        </li>
                                                                    ) : (
                                                                            <li>
                                                                                {console.log("no ref set")}
                                                                                {Object.values(clause)}
                                                                            </li>
                                                                        )
                                                                )
                                                        )
                                                )
                                        )
                                ) : null

                            )}
                    </Fragment>
                ))}
            </ol>
        </li>
    )
}