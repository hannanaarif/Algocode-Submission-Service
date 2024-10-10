const SubmissionProducer=require('../producers/submissionQueueProducer');
class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository=submissionRepository;
    }

    async pingCheck() {
        return 'pong'
    }

    async addSubmission(submission){
        const submission=this.submissionRepository.createSubmission(submission);
        if(!submission){
            throw {message:"Not able to create submission"};
        }
        const response=await SubmissionProducer(submission);
        return {queueResponse:response,submission};
    }
}

module.exports = SubmissionService;