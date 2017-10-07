module.exports = {
    //mongoUri: 'mongodb://localhost/myFirstNode',
    // or use
    mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '966059176863-46gp2h5lcb3itbqt2sijp712qi7afl2d.apps.googleusercontent.com',
        clientSecret: 'OWbKwWFpM_PzXQDENZMpe9Ao',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }


}