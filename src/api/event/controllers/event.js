'use strict';

/**
 * event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::event.event', ({strapi}) => ({
    async findOne(ctx) {
        const {id} = ctx.params;

        const entity = await strapi.db.query('api::event.event').findOne({
            where: { slug: id },
            populate: ['image']
        })

        const sanitizedEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizedEntity);
    }
}));
