import React from 'react';

import Container from '@material-ui/core/Container';

import copyright from '../Copyrights/copyrights';

function footer(props)
{
    return (
        <footer className={props.classes.footer}>
                <Container maxWidth="sm">
                    {
                        copyright({
                            website: props.website
                        })
                    }
                </Container>
        </footer>
    )
}

export default footer;