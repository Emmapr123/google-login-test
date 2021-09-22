import React from 'react'

const RefreshTokenSetup = (result) => {

    let refreshTiming = (result.tokenObj.expires_in || 3600 - 5 * 60) * 1000

    const refreshToken = async() => {
        const newAuthRes = await result.reloadAuthResponse()
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000
        console.log('new Auth Res', newAuthRes)
        console.log('new auth token', newAuthRes.id_token)
        setTimeout(refreshToken, refreshTiming)
    }
    setTimeout(refreshToken, refreshTiming)
}

export { RefreshTokenSetup }