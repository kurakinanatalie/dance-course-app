const Datastore = require('@seald-io/nedb');
const path = require('path');

const coursesDB = new Datastore({ filename: './data/courses.db', autoload: true });
const classesDB = new Datastore({ filename: './data/classes.db', autoload: true });
const bookingsDB = new Datastore({ filename: './data/bookings.db', autoload: true });

function clearAndSeed() {
  coursesDB.remove({}, { multi: true }, () => {
    classesDB.remove({}, { multi: true }, () => {
      bookingsDB.remove({}, { multi: true }, () => {
        seedCoursesAndClasses();
      });
    });
  });
}

function seedCoursesAndClasses() {
  const courses = [
    {
      _id: "4jF67Rt0LOZbFlTs",
      name: "Ballet Improver",
      description: "A course for those who have some experience in dancing. In this course we will dance more and learn more complex movements. It will be even more fun and hotter.",
      price: "1200",
      startDate: "2025-06-02",
      endDate: "2025-09-30",
      type: "weekly"
    },
    {
      _id: "GZbqq3ZK3AAkxXL7",
      name: "Ballet Taster",
      description: "Not sure if ballet is for you? Come to our weekend short courses and try your hand at dancing.",
      price: "100",
      startDate: "2025-04-26",
      endDate: "2025-05-11",
      type: "weekend"
    },
    {
      _id: "w9xj82TktXCchaGn",
      name: "Ballet Beginner",
      description: "The course is suitable for beginner adults who want to try themselves in ballet. No previous experience is required. We will teach you all the basics of ballet dancing. It will be fun!",
      price: "1000",
      startDate: "2025-05-01",
      endDate: "2025-09-01",
      type: "weekly"
    }
  ];

  const classes = [
    {
      _id: "GcTFjiplLm7foGst",
      courseId: "w9xj82TktXCchaGn",
      dateTime: "2025-05-20T09:00",
      location: "Paisley"
    },
    {
      _id: "KaUL1jsAIFwUf9BS",
      courseId: "GZbqq3ZK3AAkxXL7",
      dateTime: "2025-06-02T09:00",
      location: "Paisley"
    },
    {
      _id: "z0BHAas8w6hjYyrN",
      courseId: "GZbqq3ZK3AAkxXL7",
      dateTime: "2025-06-25T17:20",
      location: "Paisley"
    }
  ];

  const bookings = [
    {
      _id: "GvOaDUy7IX8y7pLE",
      type: "class",
      classId: "KaUL1jsAIFwUf9BS",
      name: "Nataliia2",
      email: "kurakina.natalie2@gmail.com",
      date: new Date()
    },
    {
      _id: "LfhEPOEPtHTklxrW",
      type: "class",
      classId: "KaUL1jsAIFwUf9BS",
      name: "Nataliia2",
      email: "kurakina.natalie2@gmail.com",
      date: new Date()
    },
    {
      _id: "U6QVazAAVP2xiaue",
      type: "course",
      courseId: "GZbqq3ZK3AAkxXL7",
      name: "Nataliia3",
      email: "kurakina.natalie3@gmail.com",
      date: new Date()
    },
    {
      _id: "YtRqluBJfXxCpHKT",
      type: "class",
      classId: "z0BHAas8w6hjYyrN",
      name: "Nataliia4",
      email: "kurakina.natalie4@gmail.com",
      date: new Date()
    },
    {
      _id: "lvqdfaqmFtjSxd6H",
      type: "class",
      classId: "GcTFjiplLm7foGst",
      name: "Nataliia",
      email: "kurakina.natalie@gmail.com",
      date: new Date()
    }
  ];

  coursesDB.insert(courses, () => {
    console.log('✅ Courses seeded');
    classesDB.insert(classes, () => {
      console.log('✅ Classes seeded');
      bookingsDB.insert(bookings, () => {
        console.log('✅ Bookings seeded');
        console.log('🌱 Seed completed');
      });
    });
  });
}

clearAndSeed();
