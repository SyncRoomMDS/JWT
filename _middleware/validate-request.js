module.exports = validateRequest;

function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // Inclusion des erreurs
        allowUnknown: true, // Propriétés inconnues tolérées
        stripUnknown: true // Propriétés inconnues retirées
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}