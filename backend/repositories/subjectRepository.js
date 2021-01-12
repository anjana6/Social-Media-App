const Subject = require('../models').subjects;
const UserSubject = require('../models').user_subjects;
const User = require('../models').users;

class SubjectRepository{

    addSubject(body){ // remove after the project
        return Subject.create(body);
    }

    addSubjectByUserId(body){
        return UserSubject.create(body); //remove after the project
    }

    async fetchSubjectByUserIdAndYear(userId,year){
       return User.findOne({
            include: [{
                model: Subject,
                as: 'subjects',
                through: { where: { year: year } }
            }],
            where: {
                id: userId
            }
        })
    }

    updateResult(id,body){
        return UserSubject.update(body,{
            where: {
                id: id
            }
        })
    }
}

const subjectRepository = new SubjectRepository();
export default subjectRepository;