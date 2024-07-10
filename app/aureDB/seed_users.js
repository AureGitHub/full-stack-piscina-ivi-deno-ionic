
import {aureDB} from "../../dep/deps.ts"
import entities from "./entities/entities.ts";
import { TC_MovimientoTipo, TC_UserRole, TC_UserEstado } from "../enums.ts";
import userBusiness from "../business/user.ts";
import client from "./client.ts";

// const client = new Client('postgresql://aure:jas11jas11@postgresql-118326-0.cloudclusters.net:18718/ttec-euromillones_TEST?schema=public');
// await client.connect();

const entityUser = new aureDB(client, entities, 'User');


const ususFromAcces = [

  { id:135, nombre:'Jose Aurelio de Sande Villarroel', usu:'jdesande',  activo:1, correoExterno: 'aure.desande@gmail.com', saldo: '4.5000'} ,
  { id:1, nombre:'Alberto Alonso Alonso', usu:'aalonso ',  activo:1, correoExterno: '', saldo: '7.4500'} ,
  { id:2, nombre:'Alberto Aranzueque González', usu:'aaranzue ',  activo:0, correoExterno: '', saldo: '0.0000'} ,
  { id:3, nombre:'Alberto Encinas Escobar', usu:'aencinas ',  activo:1, correoExterno: '', saldo: '13.2600'} ,
  { id:4, nombre:'Alberto Zani Fernández', usu:'azani ',  activo:1, correoExterno: '', saldo: '13.3000'} ,
  { id:5, nombre:'Alejandro Olazabal Bourdet', usu:'aolazaba ',  activo:0, correoExterno: '', saldo: '0.4900'} ,
  { id:6, nombre:'Alfred Ernest Rinaldi', usu:'aernest ',  activo:1, correoExterno: '', saldo: '8.4000'} ,
  { id:7, nombre:'Alvaro Robles Fernández', usu:'arobles ',  activo:1, correoExterno: '', saldo: '13.6600'} ,
  { id:8, nombre:'Ana Belén Jiménez González', usu:'ajimene1 ',  activo:1, correoExterno: '', saldo: '2.8900'} ,
  { id:9, nombre:'Ana Mª Arevalo De La Cruz', usu:'aarevalo ',  activo:0, correoExterno: '', saldo: '-0.0100'} ,
  { id:10, nombre:'Cayetana Cermeño Barona', usu:'ccermeno ',  activo:0, correoExterno: '', saldo: '-0.0100'} ,
  { id:11, nombre:'Carlos Navarrete', usu:'Cnavarre',  activo:0, correoExterno: 'carlosnavec@gmail.com', saldo: '-0.0100'} ,
  { id:12, nombre:'Cristina Retuerta León', usu:'cretuert ',  activo:1, correoExterno: '', saldo: '10.9500'} ,
  { id:13, nombre:'Cristina Rodrigo Serrano', usu:'crodrig1 ',  activo:1, correoExterno: '', saldo: '14.8900'} ,
  { id:14, nombre:'David Cepedal Fernández', usu:'dcepedal ',  activo:0, correoExterno: '', saldo: '0.9000'} ,
  { id:15, nombre:'David Sainz Mera', usu:'dsainz ',  activo:1, correoExterno: '', saldo: '10.2400'} ,
  { id:16, nombre:'Diego Morano Lobo', usu:'DiegoMorano',  activo:0, correoExterno: 'diegomorano@auna.com', saldo: '0.0000'} ,
  { id:17, nombre:'Elena Pacheco González', usu:'epacheco ',  activo:1, correoExterno: '', saldo: '10.6500'} ,
  { id:18, nombre:'Elena Sánchez Arribas', usu:'esanche2 ',  activo:1, correoExterno: '', saldo: '4.5100'} ,
  { id:19, nombre:'Eusebio Cruz García', usu:'ecruz ',  activo:1, correoExterno: '', saldo: '5.4600'} ,
  { id:20, nombre:'Fernando Blanco Oroz', usu:'fblanco1 ',  activo:0, correoExterno: 'byterider2006@gmail.com', saldo: '0.5500'} ,
  { id:21, nombre:'Fernando Javier Merelo Rueda', usu:'fmerelo ',  activo:1, correoExterno: '', saldo: '22.5600'} ,
  { id:22, nombre:'Francisco José Sánchez Amador', usu:'fsanche1 ',  activo:0, correoExterno: 'horconboy@gmail.com', saldo: '0.2700'} ,
  { id:23, nombre:'Gabriel Pérez Sánchez', usu:'gperez3 ',  activo:1, correoExterno: '', saldo: '7.8700'} ,
  { id:24, nombre:'Gonzalo de Luis Martínez', usu:'gdeluis ',  activo:1, correoExterno: '', saldo: '11.6000'} ,
  { id:25, nombre:'Guillermo Cenjor Rodríguez', usu:'gcenjor ',  activo:0, correoExterno: '', saldo: '0.7300'} ,
  { id:26, nombre:'Ismael Hernandez', usu:'IsmaelHern',  activo:1, correoExterno: 'ismael.hernandez.fernandez@madrid.org', saldo: '3.9100'} ,
  { id:27, nombre:'Javier Castrillón Bodas', usu:'jcastril ',  activo:1, correoExterno: '', saldo: '2.9500'} ,
  { id:28, nombre:'Jesús Manuel Montero Gullón', usu:'jmonter2 ',  activo:1, correoExterno: '', saldo: '6.5000'} ,
  { id:29, nombre:'Jesus Ros Selgas', usu:'jros ',  activo:0, correoExterno: '', saldo: '-0.0100'} ,
  { id:30, nombre:'Jesus Gonzalez', usu:'JesusGonzalez',  activo:1, correoExterno: 'jesus.gonzalez@cultura.gob.es', saldo: '12.9500'} ,
  { id:31, nombre:'Jose Carlos Juara Palomino', usu:'jjuara ',  activo:1, correoExterno: '', saldo: '13.7600'} ,
  { id:32, nombre:'José Francisco Gómez Martín', usu:'jgomez4 ',  activo:1, correoExterno: 'jfran.gomez@gmail.com', saldo: '10.0200'} ,
  { id:33, nombre:'José Ignacio Paños Fernandez', usu:'jpanos ',  activo:1, correoExterno: '', saldo: '3.3200'} ,
  { id:34, nombre:'José Manuel Romero Ibañez', usu:'jromero4',  activo:0, correoExterno: '', saldo: '-0.0100'} ,
  { id:35, nombre:'José Miguel Garrido Ballesteros', usu:'jgarrid1 ',  activo:1, correoExterno: '', saldo: '7.9500'} ,
  { id:36, nombre:'Juan Mª Blanco Llorente', usu:'jblanco3 ',  activo:1, correoExterno: 'jblancollorente@gmail.com', saldo: '18.8900'} ,
  { id:37, nombre:'Julio Fajardo Lazo', usu:'jfajardo ',  activo:0, correoExterno: 'fajardoju@hotmail.com', saldo: '0.0000'} ,
  { id:38, nombre:'Karina Zetel', usu:'kzetel ',  activo:1, correoExterno: '', saldo: '16.0500'} ,
  { id:39, nombre:'Laura Vega', usu:'Laura Vega',  activo:0, correoExterno: 'voyasalirenagrosfera@hotmail.com', saldo: '-0.0100'} ,
  { id:40, nombre:'Lidia Solís Conde', usu:'lsolis ',  activo:1, correoExterno: '', saldo: '5.4800'} ,
  { id:41, nombre:'Lorenzo Retuerta León', usu:'lretuert ',  activo:1, correoExterno: '', saldo: '10.9500'} ,
  { id:42, nombre:'Luis Martín Romero', usu:'lmartin4 ',  activo:0, correoExterno: '', saldo: '-0.0100'} ,
  { id:43, nombre:'Mª  Victoria García Martín', usu:'mgarci10 ',  activo:1, correoExterno: '', saldo: '5.5100'} ,
  { id:44, nombre:'Mª Jesús González de la Rosa', usu:'mgonza17 ',  activo:1, correoExterno: '', saldo: '7.6200'} ,
  { id:45, nombre:'Mª José Zamarreño Bueno', usu:'mzamarre ',  activo:1, correoExterno: '', saldo: '2.1400'} ,
  { id:46, nombre:'Mª Luisa Pérez Ayuso', usu:'mperez2 ',  activo:0, correoExterno: 'mperezayuso@gmail.com', saldo: '0.0000'} ,
  { id:47, nombre:'Mª Soledad Martínez Cerezo', usu:'mmarti14 ',  activo:1, correoExterno: '', saldo: '29.2600'} ,
  { id:48, nombre:'Manuel Francisco Cuadra García', usu:'mcuadra ',  activo:1, correoExterno: '', saldo: '8.4500'} ,
  { id:49, nombre:'Manuel Martínez Miralles', usu:'mmarti13 ',  activo:0, correoExterno: 'manumm11@hotmail.com', saldo: '0.7400'} ,
  { id:50, nombre:'María Francia Hernández', usu:'mfrancia ',  activo:1, correoExterno: '', saldo: '4.4800'} ,
  { id:51, nombre:'Mercedes Vacas Merino', usu:'mvacas ',  activo:1, correoExterno: 'mercedesvacas@gmail.com', saldo: '9.5300'} ,
  { id:52, nombre:'Miguel Angel Poveda Mañosa', usu:'mpoveda ',  activo:0, correoExterno: '', saldo: '0.4800'} ,
  { id:53, nombre:'Miguel Morales García', usu:'mmorale1 ',  activo:0, correoExterno: '', saldo: '0.3900'} ,
  { id:54, nombre:'Nekane Zabaleta Erostarbe', usu:'nzabalet',  activo:1, correoExterno: 'nekane.zabaleta@gmail.com', saldo: '15.3600'} ,
  { id:55, nombre:'Nuria Serra Ramiro', usu:'nserra ',  activo:1, correoExterno: 'nuserra@gmail.com', saldo: '21.5000'} ,
  { id:56, nombre:'Oscar Serna Serna', usu:'oserna ',  activo:0, correoExterno: '', saldo: '0.0000'} ,
  { id:57, nombre:'Pelayo Rey Rodríguez', usu:'prey ',  activo:1, correoExterno: '', saldo: '15.9500'} ,
  { id:58, nombre:'Pilar Pato Garrudo', usu:'ppato ',  activo:1, correoExterno: '', saldo: '27.1200'} ,
  { id:59, nombre:'Roberto Colomo Romero', usu:'rcolomo ',  activo:0, correoExterno: '', saldo: '-0.0100'} ,
  { id:60, nombre:'Rocío Molina Utrera', usu:'rmolina ',  activo:1, correoExterno: '', saldo: '2.9500'} ,
  { id:61, nombre:'Ruben Acero Herreros', usu:'racero ',  activo:0, correoExterno: '', saldo: '-0.0100'} ,
  { id:62, nombre:'Sara Recio García', usu:'srecio ',  activo:1, correoExterno: '', saldo: '7.5500'} ,
  { id:63, nombre:'Silvia Rodríguez Solano', usu:'srodrig1 ',  activo:1, correoExterno: '', saldo: '8.9500'} ,
  { id:64, nombre:'Susana Fernandez', usu:'Susana Fernandez',  activo:0, correoExterno: 'sufers.es@gmail.com', saldo: '0.1500'} ,
  { id:65, nombre:'Vanesa Ormeño Elvar', usu:'vormeno ',  activo:0, correoExterno: '', saldo: '0.2700'} ,
  { id:66, nombre:'Vanessa Rodríguez de la Rosa', usu:'vrodrig3 ',  activo:1, correoExterno: '', saldo: '8.9600'} ,
  { id:67, nombre:'Víctor Gómez Gálvez', usu:'vgomez1 ',  activo:1, correoExterno: '', saldo: '2.8300'} ,
  { id:68, nombre:'Vanessa Baeza', usu:'Vanessa Baeza',  activo:1, correoExterno: 'ismael1.hernandez.fernandez@madrid.org', saldo: '3.9800'} ,
  { id:69, nombre:'Belen Muñoz', usu:'bmunoz1',  activo:0, correoExterno: '', saldo: '-0.0100'} ,
  { id:70, nombre:'Eva Serrano', usu:'eserrano',  activo:1, correoExterno: '', saldo: '6.9700'} ,
  { id:71, nombre:'Jose Javier Martín Carnes', usu:'jmartin6',  activo:0, correoExterno: '', saldo: '0.0000'} ,
  { id:72, nombre:'Mª Angeles Gómez Leira', usu:'mgomez3',  activo:0, correoExterno: '', saldo: '0.0000'} ,
  { id:73, nombre:'Carlos Alvarez Beringola', usu:'calvare5',  activo:0, correoExterno: '', saldo: '0.6800'} ,
  { id:74, nombre:'Mª Carmen Martín Soria', usu:'mmarti11',  activo:1, correoExterno: '', saldo: '12.7300'} ,
  { id:75, nombre:'Juan Pablo González Mier', usu:'jgonza34',  activo:0, correoExterno: '', saldo: '0.2100'} ,
  { id:76, nombre:'Jose Luis Moreno Barriga', usu:'jmoreno4',  activo:0, correoExterno: '', saldo: '0.6000'} ,
  { id:77, nombre:'Miguel Ángel Fernández López', usu:'mferna27',  activo:0, correoExterno: 'miguelangel.mfernandez@gmail.com', saldo: '0.4400'} ,
  { id:78, nombre:'Salvador Manuel Ronda Gomez', usu:'sronda',  activo:1, correoExterno: '', saldo: '10.0800'} ,
  { id:79, nombre:'Francisco Borja Carmona Castaño', usu:'fcarmona',  activo:0, correoExterno: '', saldo: '0.7400'} ,
  { id:80, nombre:'Rubén Martínez García', usu:'rmarti17',  activo:0, correoExterno: '', saldo: '0.0000'} ,
  { id:81, nombre:'Beatriz López López', usu:'blopez5',  activo:0, correoExterno: 'beitaninfa@hotmail.com', saldo: '0.9200'} ,
  { id:82, nombre:'Javier Martín Roncero', usu:'jmarti39',  activo:0, correoExterno: 'jmarti135@gmail.com', saldo: '0.0800'} ,
  { id:83, nombre:'Susana Laso', usu:'slaso',  activo:1, correoExterno: '', saldo: '30.6100'} ,
  { id:84, nombre:'Mª José Fernández Sanjuán', usu:'mferna10',  activo:1, correoExterno: '', saldo: '6.5000'} ,
  { id:85, nombre:'Alejandro García Perez', usu:'agarci42',  activo:0, correoExterno: '', saldo: '0.0000'} ,
  { id:86, nombre:'Ignacio Valdivia Herrero', usu:'ivaldivi',  activo:1, correoExterno: '', saldo: '44.8800'} ,
  { id:87, nombre:'Ruben Rubio Iniesta', usu:'rrubio4',  activo:1, correoExterno: '', saldo: '44.8800'} ,
  { id:88, nombre:'Mª Soledad Pérez Pérez', usu:'mperez39',  activo:0, correoExterno: '', saldo: '0.5100'} ,
  { id:89, nombre:'Victor Astorga Acevedo', usu:'vastorga.ext',  activo:0, correoExterno: 'victorastace@hotmail.com', saldo: '0.6100'} ,
  { id:90, nombre:'Angel Alvarez Cabrera', usu:'aalvare9',  activo:1, correoExterno: 'angealv@gmail.com', saldo: '9.2100'} ,
  { id:91, nombre:'Alvaro Sobrino Molina', usu:'asobrin1.ext',  activo:0, correoExterno: 'alvaro.sobrinom@gmail.com', saldo: '0.4100'} ,
  { id:92, nombre:'Raul De Frutos', usu:'rdefruto',  activo:0, correoExterno: '', saldo: '0.1800'} ,
  { id:93, nombre:'Sonia Rebollo Andrés', usu:'srebollo',  activo:0, correoExterno: '', saldo: '0.2600'} ,
  { id:94, nombre:'Rosa María Villalba Conde', usu:'rvillalb',  activo:0, correoExterno: '', saldo: '0.8500'} ,
  { id:95, nombre:'Mª Milagros Redondo González', usu:'mredondo',  activo:1, correoExterno: '', saldo: '17.6500'} ,
  { id:96, nombre:'Abraham de la Iglesia Cotillo', usu:'aiglesia',  activo:1, correoExterno: '', saldo: '28.7000'} ,
  { id:97, nombre:'Carlos García Rodríguez', usu:'cgarcia2',  activo:1, correoExterno: '', saldo: '7.0300'} ,
  // { id:98, nombre:'Alfredo García Calero', usu:'agarci37',  activo:0, correoExterno: '', saldo: '0.4100'} ,
  { id:99, nombre:'Manuel Vizcaíno Serrano', usu:'mvizcain',  activo:0, correoExterno: '', saldo: '0.7300'} ,
  { id:100, nombre:'Rafael Gómez Del Prado', usu:'rgomez6',  activo:1, correoExterno: '', saldo: '23.0400'} ,
  { id:101, nombre:'Pedro Villacañas Landrove', usu:'pvillaca',  activo:0, correoExterno: '', saldo: '0.0000'} ,
  { id:102, nombre:'Raul Gomez Gonzalez', usu:'rgomez8',  activo:0, correoExterno: 'rguacamayo@yahoo.es', saldo: '0.4800'} ,
  { id:103, nombre:'Sergio Crespo Granjo', usu:'scrg',  activo:0, correoExterno: '', saldo: '0.6700'} ,
  { id:104, nombre:'Agustín Pérez Vicente', usu:'aperez11',  activo:0, correoExterno: 'agus_perez2002@yahoo.es', saldo: '0.3100'} ,
  { id:105, nombre:'Marta Lopez De Zuazo Sanchez', usu:'mlopez16',  activo:1, correoExterno: '', saldo: '15.0600'} ,
  { id:106, nombre:'Esther Escudero Bayle', usu:'eescude1',  activo:1, correoExterno: '', saldo: '15.0600'} ,
  { id:107, nombre:'Gerardo Castañer Villaluenga', usu:'gcastane',  activo:1, correoExterno: '', saldo: '20.9500'} ,
  { id:108, nombre:'Isabela Almansa De Lara', usu:'ialmansa',  activo:1, correoExterno: '', saldo: '15.9500'} ,
  { id:109, nombre:'Yolanda Fernandez Sanmames', usu:'yfs',  activo:1, correoExterno: '', saldo: '8.7000'} ,
  { id:110, nombre:'Eduardo Murillo Peñacoba', usu:'emurillo',  activo:1, correoExterno: '', saldo: '9.5800'} ,
  { id:111, nombre:'Rafael Zamora Salido', usu:'rzamora2',  activo:1, correoExterno: '', saldo: '11.8400'} ,
  { id:112, nombre:'Beatriz Domenech Collado', usu:'bdc',  activo:1, correoExterno: '', saldo: '29.8100'} ,
  { id:113, nombre:'Cristina Delgado Carrasco', usu:'cdc',  activo:1, correoExterno: '', saldo: '33.3400'} ,
  { id:114, nombre:'Maria Del Mar Ruiz Granados', usu:'mruiz10',  activo:1, correoExterno: '', saldo: '6.9200'} ,
  { id:115, nombre:'Montserrat Diaz Molina', usu:'mdiaz6',  activo:1, correoExterno: '', saldo: '23.5200'} ,
  { id:116, nombre:'Raul Redondo Moriano', usu:'rrem',  activo:1, correoExterno: '', saldo: '24.3300'} ,
  { id:117, nombre:'Esteban Martinez Blazquez', usu:'emartine',  activo:1, correoExterno: '', saldo: '18.3500'} ,
  { id:118, nombre:'Milagros Vicente Tomas', usu:'mvicent1',  activo:1, correoExterno: '', saldo: '24.0800'} ,
  { id:119, nombre:'Rocio Benavente Rubio', usu:'rbenaven',  activo:1, correoExterno: '', saldo: '19.0800'} ,
  { id:120, nombre:'Seises Lopez, Juan Carlos', usu:'jcsl',  activo:1, correoExterno: '', saldo: '12.6600'} ,
  { id:121, nombre:'Alfredo Garcia Calero', usu:'agarci37',  activo:1, correoExterno: '', saldo: '4.7200'} ,
  { id:122, nombre:'Claudia Amoros Martinez', usu:'camoros',  activo:1, correoExterno: '', saldo: '4.7200'} ,
  { id:123, nombre:'Jose Luis Nieto Martin', usu:'jlnm',  activo:1, correoExterno: '', saldo: '5.2900'} ,
  { id:124, nombre:'Alberto Garcia Rico', usu:'agarc113',  activo:1, correoExterno: '', saldo: '15.2900'} ,
  { id:125, nombre:'Bernardo Jara De Pedraza', usu:'bjara',  activo:1, correoExterno: '', saldo: '5.2900'} ,
  { id:126, nombre:'Maria Angela Garcia Roque', usu:'magr',  activo:1, correoExterno: '', saldo: '10.2900'} ,
  { id:127, nombre:'Carlos Garcia Giner', usu:'cgarci90',  activo:1, correoExterno: '', saldo: '5.2900'} ,
  { id:128, nombre:'Mikel Cañamares Edo', usu:'mcanamar',  activo:1, correoExterno: '', saldo: '5.2900'} ,
  { id:129, nombre:'Petra Plaza Ruiz Peinado', usu:'pplaza',  activo:1, correoExterno: '', saldo: '15.2900'} ,
  { id:130, nombre:'German Garcia-Carpintero Nuñez De Arenas', usu:'ggarciac',  activo:1, correoExterno: '', saldo: '16.1900'} ,
  { id:131, nombre:'Jose Esteban Lopez', usu:'jesteban',  activo:1, correoExterno: '', saldo: '11.7800'} ,
  { id:132, nombre:'Ignacio Lopez Garcia', usu:'ilopez23',  activo:0, correoExterno: '', saldo: '0.3200'} ,
  { id:133, nombre:'Isabel Galan Gomez', usu:'igalan',  activo:1, correoExterno: '', saldo: '8.3400'} ,
  { id:134, nombre:'Jose Damian Fernandez Francisco', usu:'jferna11',  activo:1, correoExterno: '', saldo: '8.0200'} ,
];



const transaction = client.createTransaction("tr_create_users");

try{
  await transaction.begin();
  ususFromAcces.forEach(async usu => {
    const data =  {
      id: usu.id,
      name : usu.nombre.trim(),
      email : usu.correoExterno ? usu.correoExterno : usu.usu.trim() + '@tragsa.es',
      password:'111111',
      roleid: TC_UserRole.normal,
      estadoid : !usu.activo? TC_UserEstado.baja : TC_UserEstado.activo,
      saldo: 0
     };
  
     await entityUser.create({data,tr :  transaction});
     const saldo = parseFloat(usu.saldo.replace(',','.')) ;
     await userBusiness.CambiarSaldo(usu.id,0,saldo,TC_MovimientoTipo.inicial,null,null,transaction);
    });


    await entityUser.update({
      where: {id : 135 },
      data: {
        id: 135,
        email:'aure.euromillones@gmail.com',
        roleid : TC_UserRole.god,
        estadoid: TC_UserEstado.activo,
        password: '111111'
      },
      tr :  transaction

    });

    await transaction.commit();
}
catch(err){
  transaction.rollback(); 
  throw err;
}