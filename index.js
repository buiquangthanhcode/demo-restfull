// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import ActorRouter from './routes/Actor.route.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Đăng ký tuyến API
app.use(ActorRouter);

app.get("/", (req, res) => {
    // console.log(req);
    res.send("hello");
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Máy chủ đang lắng nghe tại cổng ${port}`);
});
