import express from "express"

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true }));    

let studentList = [{
    id: 1,
    name: "Rudra"
}, {
    id: 2,
    name: "krishna"
}];

app.get("/", (req, res) => {
    res.render("index", { studentList })
});

app.get("/add", (req, res) => {

    res.render("add")
})

app.post("/add", (req, res)=>{

    const { name } = req.body;

    const newStudent = {
        id: new Date().getTime(),
        name
    };

    studentList.push(newStudent);

    res.redirect("/");

});

const port = 5000;

app.listen(port, (err) => {
    if (err) {
        console.log("error");
    }
    console.log(`This Page is Loading..${port}`);
});