const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const dadoExterno = req.query.dadoExterno
    console.log('dadoExterno', dadoExterno)
    const valorResponse = `Você me enviou: ${dadoExterno}`
    res.send(valorResponse);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Debugger listening on ws: http://localhost:/${port}`)
})