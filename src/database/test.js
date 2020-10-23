const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "Fanuel Manhaes Couto",
        avatar: "https://avatars3.githubusercontent.com/u/29618289?s=460&u=4047ded64cbeaa37483d405922d2c4a47a15e1d7&v=4",
        whatsapp: "22999888777555444",
        bio: "Instrutor de programação WEB com JS"
    };

    classValue = {
        subject: 4,
        cost: "400"
    };

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 840
        }
    ];

    // Chamando função para criar os dados no banco
    // await createProffy(db, { proffyValue, classValue, classScheduleValues });

    // Consultar todos os proffys
    // const selectedProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectedProffys);
    
    // Consultar as classes de um professor e trazer os dados dele
    // const selectClassAndProffys = await db.all(`
    //     SELECT classes.*, proffys.* 
    //     FROM proffys
    //     JOIN classes ON (classes.proffy_id = proffys.id)
    //     WHERE classes.proffy_id = 1
    // `);
    // console.log(selectClassAndProffys);

    // Consultar proffys em determinado dia e hora
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= 920
        AND class_schedule.time_to > 800
    `);
    console.log(selectClassesSchedules);
});