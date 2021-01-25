import subjectRepository from "../repositories/subjectRepository";

class SubjectService{

    addSubject(requestBody){    //remove after the project
        const {subjectCode,subject} = requestBody;
        const body = {
            subject_code: subjectCode,
            subject: subject
        }
        return subjectRepository.addSubject(body); 
    }

    addSubjectByUserId(requestBody){
        const {userId,subjectId} = requestBody; //remove after the project created

        const body = {
            user_id: userId,
            subject_id: subjectId,
        }

        return subjectRepository.addSubjectByUserId(body);
    }

    fetchSubjectByUserIdAndYear(userId,year){
        return subjectRepository.fetchSubjectByUserIdAndYear(userId,year);
    }

    addSubjectResult(id,requestBody){
        const {result} = requestBody;
        const body = {
            result : result
        }

        return subjectRepository.updateResult(id,body);
    }

    getStudentSubjectByStudentNoAndYear(year,requestBody){
        const {studentNo} = requestBody;
        return subjectRepository.getStudentSubjectByStudentNoAndYear(year,studentNo);
    }

}

const subjectService = new SubjectService();
export default subjectService;