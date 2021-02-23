const Route= require(`app.js`)
const route= app()


route.get(`/`, (req,res)(
    res.send(`hello world`)
))
route.listen(3000)
