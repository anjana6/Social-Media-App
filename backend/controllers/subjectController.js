import subjectService from "../services/subjectService";
import resHelper from "../utils/Helpers/resHelper";

class SubjectController{

    async addSubject(req,res){       //remove after the project
        
        try {
            await subjectService.addSubject(req.body);
            resHelper.created(res)
        } catch (error) {
            resHelper.serverFailing(res,error.message);
        }
    }

    async addSubjectByUserId(req,res){  // remove after the project
        try {
            await subjectService.addSubjectByUserId(req.body);
            resHelper.updated(res);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }

    async fetchSubjectByUserIdAndYear(req,res){
        try {
            const userId = req.params.userId;
            const year = req.params.year;
            const subjects = await subjectService.fetchSubjectByUserIdAndYear(userId,year);
            console.log(subjects)
            resHelper.responseData(res,subjects);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }

    async addSubjectResult(req,res){
        try {
            const id = req.params.id;
            await subjectService.addSubjectResult(id,req.body);
            resHelper.updated(res)
        } catch (error) {
            resHelper.serverFailing(res,error.message)    
        }
    }

    async fetchStudentSubjectByStudentNoAndYear(req,res){
        try {
           
            const year = req.params.year;
            console.log('uuuuuuuuuuuu',year)
            const subject = await subjectService.getStudentSubjectByStudentNoAndYear(year,req.body);
            console.log(subject);
            resHelper.responseData(res,subject);
        } catch (error) {
            resHelper.serverFailing(res,error.message)
        }
    }

}

const subjectController = new SubjectController();
export default subjectController;