module.exports = async function (db, { proffyValue, classValue, classScheduleValues }) {
    // Inserindo dados na tabela Proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys ( 
            name, 
            avatar, 
            whatsapp,
            bio
        ) VALUES ( 
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );    
    `);

    // Recebendo o ultimo ID cadrastado
    const proffy_id = insertedProffy.lastID;

    // Inserir dados da tabela classes
    const insertedClass = await db.run(`
        INSERT INTO classes ( 
            subject,
            cost, 
            proffy_id
        ) VALUES ( 
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `);

    const class_id = insertedClass.lastID;

    // Inserir dados na tabela classSchedule mapeando todos os itens do classScheduleValues
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule ( 
                class_id,
                weekday,
                time_from, 
                time_to
            ) VALUES ( 
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `);
    });

    // Executando a inserção de todos os valores do classScheduleValues
    await Promise.all(insertedAllClassScheduleValues);

}