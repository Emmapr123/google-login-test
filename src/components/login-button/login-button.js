import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { RefreshTokenSetup } from '../refresh-token-setup/refresh-token-setup';

const clientId = '352290173564-okpkhguvofsdpo5nsc6esu5u3epgkioh.apps.googleusercontent.com';

const LoginButton = ({setLogin}) => {

    const onSucces = (result) => {
        console.log('[Login succes] current user: ', result.profileObj)
        RefreshTokenSetup(result)
        setLogin(true)
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
