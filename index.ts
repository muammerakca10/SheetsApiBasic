import express from 'express';
import {google} from 'googleapis'

const app = express();



app.use((req: express.Request, res: express.Response, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });

app.get('/', async (req : express.Request, res : express.Response) => {
    const auth = new google.auth.GoogleAuth({
        keyFile : "credentials.json",
        scopes : "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient()
    console.log(client);

    const googleSheets = google.sheets({version : "v4" , auth : auth})  /// HATA VEREBILIR auth tipinden dolayi

    const metaData = await googleSheets.spreadsheets.get({
        auth,

    })
})


app.listen(6000, ()=>{
    console.log("Listening 6000");
} )