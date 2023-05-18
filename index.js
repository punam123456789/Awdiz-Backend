import express from "express";
import {Punam ,Kunal,Anu,Madhuri} from './controllers/All-Controllers.js';

const app = express();
app.get('/punam', Punam);
app.get('/kunal', Kunal);
app.get('/anu', Anu);
app.get('/madhuri',Madhuri);

// app.post();
// app.patch();
// app.put();
// app.delete();




app.listen(8000);//port