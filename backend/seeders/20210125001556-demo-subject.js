'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('subjects', [
    {
     subject_code: 'SENG 11213',
     subject: 'Fundamentals of Computing',
     year: 1,
     semester: 1,
     created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 11223',
      subject: 'Programming Concept',
      year: 1,
      semester: 1,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 12213',
      subject: 'Data Structure And Algoritham',
      year: 1,
      semester: 2,
      created_at: new Date(),
     updated_at: new Date()
    },{
      subject_code: 'SENG 12223',
      subject: 'Object Oriented Programming',
      year: 1,
      semester: 2,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 21222',
      subject: 'Software Construction',
      year: 2,
      semester: 1,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 21233',
      subject: 'Requirement Enginieering',
      year: 2,
      semester: 1,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 22223',
      subject: 'Human Computer Interaction',
      year: 2,
      semester: 2,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 22243',
      subject: 'Mobile Application Development',
      year: 2,
      semester: 2,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 31212',
      subject: 'Software Quality',
      year: 3,
      semester: 1,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 31232',
      subject: 'Software Project Management',
      year: 3,
      semester: 1,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 41262',
      subject: 'Speech Interfaces',
      year: 4,
      semester: 1,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 41242',
      subject: 'Advanced Databases',
      year: 4,
      semester: 1,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 42222',
      subject: 'Usability Engineering',
      year: 4,
      semester: 2,
      created_at: new Date(),
     updated_at: new Date()
    },
    {
      subject_code: 'SENG 42232',
      subject: 'Software Management',
      year: 4,
      semester: 2,
      created_at: new Date(),
     updated_at: new Date()
    },

  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('subjects', null, {});
    
  }
};
