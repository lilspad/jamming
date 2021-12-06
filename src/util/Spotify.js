let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return;
        }

        // check for access token match
        const accessToken = window.location.href.match(/access_token=([^&]*)/);
        const expiredInMatch = window.location.href.match(/expires_in=([^&]*)/)
    }
}

export default Spotify;