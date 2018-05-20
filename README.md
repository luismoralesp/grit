# Grit web client
## Installation
    npm install
## Run test
 1. Go to [link](https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&response_type=code&client_id=23976511534-rg3nmcggi163b0neulngi22mjq3tbhgg.apps.googleusercontent.com&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob)
 2. Login with google and authorize app
 3. Copy generated code
 4. Go to  **__tests__** folder and select file **oauthGoogle.js**
 5. In line 20, replace old code the new code
 6. In console select the project folder and type **npm test**

> **Important:** The generated code can be only used one time, you can generate a new code follow previous steps.
