
$ = (query) => document.querySelector(${query});
const botao = $(#b1);
const email = $(#email);
const password = $(#password);


botao.addEventListener('click', async () => {
    const elementos = getElementos();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(elementos);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch("http://http://localhost:8001/api/users", requestOptions);
    insertRow(await response.json());

})
