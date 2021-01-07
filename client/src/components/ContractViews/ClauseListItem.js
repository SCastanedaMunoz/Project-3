import React, { Fragment } from 'react';
import "./orderedlist.css"
import Typography from '@material-ui/core/Typography';

export default function ClauseListItem({ article }) {

    return (
        <li>
            <Typography component="h1" variant="h6" align="center">
                {article[0].heading}
            </Typography>
            <ol>
                {article.slice(1).map((clause, index) => (
                    <Fragment>
                        {Array.isArray(article[index + 2]) ? (
                            <li>
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
                                Array.isArray(clause) === false ? (
                                    <li>
                                        {Object.values(clause)}
                                    </li>
                                ) : null

                            )}
                    </Fragment>
                ))}
            </ol>
        </li>
    )
}