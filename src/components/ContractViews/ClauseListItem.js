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
                    <li>
                        {Array.isArray(clause) ? (
                            <ol>
                                {clause.map((subclause) => (
                                    <li>
                                        {subclause}
                                    </li>
                                ))}
                            </ol>

                        ) : (

                                Object.values(clause)

                            )}
                    </li>
                ))}
            </ol>
        </li>
    )
}