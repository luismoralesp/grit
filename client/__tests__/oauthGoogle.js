const getAccessToken = require('../services');

test('Get authorization', () => {
    expect.assertions(1);
    return getAccessToken(
        {
            "installed": {
                "client_id": "23976511534-rg3nmcggi163b0neulngi22mjq3tbhgg.apps.googleusercontent.com",
                "project_id": "turistory-163314",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://accounts.google.com/o/oauth2/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_secret": "cWlfB2cL9rlD5ihIx_rKjIMx",
                "redirect_uris": [
                    "urn:ietf:wg:oauth:2.0:oob",
                    "http://localhost"
                ]
            }
        },
        "4/AADTVQPQdS7w9-w61jeNAWwhskPlN_zXMOGm39Jhjn37JoMx0eCZb5o")
        .then(auth => {
            expect(auth.res.status).toBe(200)
        })
});