document.write(`<h1>Estadisticas centro médico ñuñoa</h1><hr>`)

var radiologia = [
{hora: "11:00",especialist: "IGNACIO SCHULZ",paciente: "FRANCISCA ROJAS",rut: "9878782-1",prevision: "FONASA"},
{hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE"},
{hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE"},
{hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA"},
{hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA"},
];
var traumatologia = [
    {hora:"08:00",especialista:"MARIA PAZ ALTUZARRA",paciente:"PAULA SANCHEZ",rut:"15554774-5",prevision:"FONASA"},
    {hora:"10:00",especialista:"RAUL ARAYA",paciente:"ANGÉLICA NAVAS",rut:"15444147-9",prevision:"ISAPRE"},
    {hora:"10:30",especialista:"MARIA ARRIAGADA", paciente :"ANA KLAPP",rut:"17879423-9",prevision:"ISAPRE"},
    {hora:"11:00",especialista:"ALEJANDRO BADILLA", paciente:"FELIPE MARDONES",rut:"1547423-6",prevision:"ISAPRE"},
    {hora:"11:30",especialista:"CECILIA BUDNIK", paciente:"DIEGO MARRE",rut:"16554741-K",prevision:"FONASA"},
    {hora:"12:00",especialista:"ARTURO CAVAGNARO", paciente:"CECILIA MENDEZ",rut:"9747535-8",prevision:"ISAPRE"},
    {hora:"12:30",especialista:"ANDRES KANACRI",  paciente:"MARCIAL SUAZO",rut:"11254785-5",prevision:"ISAPRE"},
];
var dental = [
    {hora:"08:30",especialista:"ANDREA ZUÑIGA",paciente:"MARCELA RETAMAL",rut:"11123425-6",prevision:"ISAPRE"},
    {hora:"11:00",especialista:"MARIA PIA ZAÑARTU",paciente:"ANGEL MUÑOZ",rut:"9878789-2",prevision:"ISAPRE"},
    {hora:"11:30",especialista:"SCARLETT WITTING", paciente :"MARIO KAST",rut:"7998789-5",prevision:"FONASA"},
    {hora:"13:00",especialista:"FRANCISCO VON TEUBER", paciente:"KARIN FERNANDEZ",rut:"18887662-k",prevision:"FONASA"},
    {hora:"13:30",especialista:"EDUARDO VIÑUELA", paciente:"HUGO SANCHEZ",rut:"17665461-4",prevision:"FONASA"},
    {hora:"14:00",especialista:"RAQUEL VILLASECA", paciente:"ANA SEPULVEDA",rut:"14441281-0",prevision:"ISAPRE"},
]

document.write(`<p> Cantidad de atenciones para Radiología: <b>${radiologia.length}</b>.</p>`)
document.write(`<p> Cantidad de atenciones para Traumatología: <b>${traumatologia.length}</b>.</p>`)
document.write(`<p> Cantidad de atenciones para Dental: <b>${dental.length}</b>.</p>`)
document.write(`<br>`)
document.write(`<h4> Primera y última atención Radiología</h4>`)
document.write(`<p>Primera atención : ${radiologia[0].rut} - ${radiologia[0].prevision} | Última atención ${radiologia[4].rut} - ${radiologia[4].prevision}</p>`)
document.write(`<h4> Primera y última atención Traumatología</h4>`)
document.write(`<p>Primera atención : ${traumatologia[0].rut} - ${traumatologia[0].prevision} | Última atención ${traumatologia[4].rut} - ${traumatologia[4].prevision}</p>`)
document.write(`<h4> Primera y última atención Dental</h4>`)
document.write(`<p>Primera atención : ${dental[0].rut} - ${dental[0].prevision} | Última atención ${dental[5].rut} - ${dental[5].prevision}</p>`)
