import React from 'react'

function First() {
    return (
        <>
            <h1>Login With UAEPASS</h1>
            <button><a href='https://stg-id.uaepass.ae/idshub/authorize?response_type=code&client_id=sandbox_stage&scope=urn:uae:digitalid:profile:general&state=HnlHOJTkTb66Y5H&redirect_uri=http://localhost:3000/3&acr_values=urn:safelayer:tws:policies:authentication:level:low '>Click Here To Login</a></button>

        </>
    )
}

export default First