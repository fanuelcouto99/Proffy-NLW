const { subjects, weekdays, getSubject, convertHoursToMinutes, redirectTimeOut } = require('./database/utils/format');
const Database = require('./database/db');

// Funções para retornar o caminho dos arquivos html
function pageLanding(req, res) {
    return res.render("index.html");
}

//Enviando o objeto proffys para a pagina, para ser usado na inserção dos dados
async function pageStudy(req, res) {
    // Pegando os dados enviados da pagina pelo botão FILTRAR
    const filters = req.query;

    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", { filters, subjects, weekdays });
    }

    // Converter horas em minutos
    const timeToMinutes = convertHoursToMinutes(filters.time);

    // Criando query para consulta no banco de dados
    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = '${filters.subject}'
    `;

    // Caso haja erro na hora da consulta ao banco de dados
    try {
        const db = await Database;
        const proffys = await db.all(query);

        // Pegando o código da materia para ser exibido o nome na tela
        proffys.map((proffy) => {
            proffy.subject = getSubject(proffy.subject);
        })

        return res.render('study.html', { proffys, subjects, filters, weekdays });
    } catch (error) {
        console.log(error);
    }
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html", { subjects, weekdays });
}

async function saveClasses(req, res) {
    const createProffy = require('./database/createProffy');

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    }

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    }

    // Mapeando todos os valores e retornando
    const classScheduleValues = req.body.weekday.map((weekday, index) => {
        return {
            weekday: weekday,
            time_from: convertHoursToMinutes(req.body.time_from[index]),
            time_to: convertHoursToMinutes(req.body.time_to[index])
        }
    });

    try {
        const db = await Database;
        await createProffy(db, { proffyValue, classValue, classScheduleValues });

        // let queryString = "?subject=" + req.body.subject;
        // queryString += "&weekday=" + req.body.weekday[0];
        // queryString += "&time=" + req.body.time_from[0];
        
        // return res.redirect("/study" + queryString);
        return res.redirect("/page-sucess");
    } catch (error) {
        console.log(error);
    }
}

function pageSucess(req, res) {
    return res.render("page-sucess.html");
}

module.exports = { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSucess };