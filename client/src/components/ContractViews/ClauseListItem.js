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
                                <li key={index} ref={pushPullRef}>
                                    {Object.values(clause)}
                                    <ol>
                                        {article[index + 2].map((subclause, subindex) => (
                                            <li key={subindex}>
                                                {subclause}
                                            </li>
                                        ))}
                                    </ol>
                                </li>
                            ) : (
                                    <li key={index} ref={Object.keys(clause)}>
                                        {Object.values(clause)}
                                        <ol>
                                            {article[index + 2].map((subclause, subindex) => (
                                                <li key={subindex}>
                                                    {subclause}
                                                </li>
                                            ))}
                                        </ol>
                                    </li>
                                )) : (
                                Array.isArray(clause) === false ? (
                                    Object.keys(clause)[0] === "certificates" ? (
                                        <li key={index} ref={certificateRef}>
                                            {Object.values(clause)}
                                        </li>
                                    ) : (
                                            Object.keys(clause)[0] === "quorumAndActOfMembersOrCommittee" ? (
                                                <li key={index} ref={voteRef}>
                                                    {Object.values(clause)}
                                                </li>
                                            ) : (
                                                    Object.keys(clause)[0] === "requiredAnnualTaxDistribution" ? (
                                                        <li key={index} ref={taxRef}>
                                                            {Object.values(clause)}
                                                        </li>
                                                    ) : (
                                                            Object.keys(clause)[0] === "pushPullBuyout" ? (
                                                                <li key={index} ref={pushPullRef}>
                                                                    {Object.values(clause)}
                                                                </li>
                                                            ) : (
                                                                    Object.keys(clause)[0] === "scopeOfDutiesOfCoveredPersons" ? (
                                                                        <li key={index} ref={fiduciaryRef}>
                                                                            {Object.values(clause)}
                                                                        </li>
                                                                    ) : (
                                                                            <li key={index}>
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