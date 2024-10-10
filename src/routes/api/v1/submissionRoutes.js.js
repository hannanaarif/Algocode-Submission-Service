const { createSubmission } = require("../../../controllers/submissionController");

async function submissionRoutes(fastify,options){
    fastify.get('/',createSubmission);
}

module.exports=submissionRoutes;