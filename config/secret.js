module.exports = {

  database: 'mongodb://root:desh123@ds011369.mlab.com:11369/ecommerce45',
  port: 5000,
  secretKey: "Arash@$@!#@",
  facebook: {
    clientID: process.env.FACEBOOK_ID || '1057130681017066',
    clientSecret: process.env.FACEBOOK_SECRET || '4dc968053a8223bda57adfd295a2e25a',
    profileFields: ['emails','displayName'],
    callbackURL: 'http://localhost:4000/auth/facebook/callback'
  }
}
