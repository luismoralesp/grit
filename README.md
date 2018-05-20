# grit

## Cliente web Grit
### Pruebas
Para las pruebas se uso **Jest**, libreria proporcionada por *Facebook*, esto nos permitirá trabajar de la mano con **mocha** y realizar pruebas a nivel de componentes **ReactJs**.
Para ejecutar las pruebas tenemos que ubicarnos en la carpeta **client** del repositorio y ejecutar el siguiente comando.

    npm test

#### Oauth 2 con Google
Se realizaron pruebas con el servicio de Oauth de google, para ellos se tiene que acceder a una cuenta de google [aquí](https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=23976511534-db9c8280tq0moimdqbdr1ajn2dl582ch.apps.googleusercontent.com&as=XOIDlM7YdR_H61a4SOo29g&approval_state=!ChQtWkowMUFwNWtLQUU5d2k1WWlKYRIfb3pEMGswSTRUbzBRVUEyYUd3VDlRSndnNmdEaE54WQ%E2%88%99AB8iHBUAAAAAWwLe06FcFxN2PMPbTi_hBBVUxfnBXbBG&xsrfsig=AHgIfE-NCsV0K-7Y_O-mE4jQQm-VqMR1AQ&flowName=GeneralOAuthFlow) y copiar el código generado por google.
Luego de tener el código tiene que reemplazar el código usado en la prueba, en la carpeta **__tests__** archivo **oauthGoogle.js** linea 20.

> **nota:** Esto es necesario para tener una authorización válida, porque los códigos de autorización son de un solo uso y son generados
> por cada cuenta de usuario a traves de una interfaz de google.
