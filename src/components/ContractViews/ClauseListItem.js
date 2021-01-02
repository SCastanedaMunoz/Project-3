import React from 'react';
import "./orderedlist.css"
import Typography from '@material-ui/core/Typography';

export default function ClauseListItem({ article }) {

    return (
        <li>
            <Typography component="h1" variant="h6" align="center">
                {article[0].heading}
            </Typography>
            <ol>
                {article.slice(1).map((clause) => (
                    clause.length > 1 ? (
                        <ol>
                            {clause.map((subclause) => (
                                <li>
                                    {subclause}
                                </li>
                            ))}
                        </ol>

                    ) : (
                            <li>
                                {Object.values(clause)}
                            </li>
                        )
                ))}
            </ol>
        </li>
    )
}