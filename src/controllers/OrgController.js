const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const orgs = await connection('orgs').select('*');
        return response.json(orgs);
    },

    async create(request, response){
        const { name, email, phone, city, state, website } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('orgs').insert({
            id,
            name,
            email,
            phone,
            city,
            state,
            website,    
        });
    
        return response.json({ id });
    },

    async delete(request, reponse){
        const org_id = request.headers.authorization;

        if (!org_id){
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('incidents').where('org_id', org_id).delete();
        await connection('orgs').where('id', org_id).delete();

        return reponse.status(204).send();
    }
};