import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '352290173564-okpkhguvofsdpo5nsc6esu5u3epgkioh.apps.googleusercontent.com';

const LoginButton = () => {
    const onSucces = (result) => {
        console.log('[Login succes] current user: ', result.profileObj)
    }

    const onFailure = (result) => {
        console.log('[Login failed result', result)
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText={'Login'}
                onSuccess={onSucces}
                onFailure={onFailure}
                style={{margin: 10}}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export { LoginButton }
