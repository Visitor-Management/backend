const firebase = require('firebase-admin')
const serviceAccount = require('../keys/visitor-259b9-firebase-adminsdk-cyi0t-52676b6fa2.json')

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
}

const firebaseApp = firebase.initializeApp({
  credential: firebase.credential.cert(params),
  storageBucket: 'gs://visitor-259b9.appspot.com',
})

const visitorImageBucket = firebaseApp.storage().bucket()

module.exports = { firebaseApp, visitorImageBucket }
