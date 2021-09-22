import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId = '352290173564-okpkhguvofsdpo5nsc6esu5u3epgkioh.apps.googleusercontent.com'

const LogoutButton = ({login, setLogin}) => {

    const onSucces = () => {
        console.log('[Succesfull Logout]')
        setLogin(false)
    }

    return(
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText={"logout"}
                onLogoutSuccess={onSucces}
            />
        </div>
    )
}

export { LogoutButton }