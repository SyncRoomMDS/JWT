const jwt = require('express-jwt');
const { secret } = require('config.json');
const db = require('_helpers/db');

module.exports = authorize;

function authorize() {
    return [
        // Authentification du token JWT et récupération de sa version décodée
        jwt({ secret, algorithms: ['HS256'] }),

        async (req, res, next) => {
            // Récupération de l'ID utilisateur
            const user = await db.User.findByPk(req.user.sub);

            // Vérification de l'existence de l'utilisateur
            if (!user)
                return res.status(401).json({ message: 'Unauthorized' });

            // Authorisation approuvée
            req.user = user.get();
            next();
        }
    ];
}