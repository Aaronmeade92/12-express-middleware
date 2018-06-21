'use strict';

import requireAll from 'require-directory';
const models = requireAll(module, '../models');

export default (req, res, next) => {
    try{
        let model = req && req.params && req.params.model;
        console.log(model, 'model!!!!!');
        console.log(models, 'models!!!!!!!');
        if(model && models[model] && models[models].default) {
            req.model = models[model].default;
            next();
        } else {throw 'Model Not Found'}
    } catch(e){
        throw e;
    }
};