import express from 'express'
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const { country, state } = req.query;

    if (!country) { 
        return res.status(400).json({error: "bad request - country is missing"});
    }

    if (!state) { 
        return res.status(400).json({error: "bad request - state is missing"});
    }


    const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
    const universities = await response.json();
    console.log({universities});

    
    const filtered = universities.filter((uni) => {
        return uni['state-province'] === state;
    });

    res.json({status: "ok", universities: filtered});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})