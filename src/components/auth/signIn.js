import React from 'react'

export default function signIn() {
    return (
        <>
            <form className={classes.root}>
                <TextField label="First Name" variant="filled" required />
                <TextField label="Last Name" variant="filled" required />
                <TextField label="Email" variant="filled" type="email" required />
                <TextField label="Password" variant="filled" type="password" required />
            </form>
        </>
    )
}
