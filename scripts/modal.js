
function createModal(){
    const divModal = document.createElement("div")
    const form = document.createElement("form")
    const divHeader = document.createElement("div")
    const h2 = document.createElement("h2")
    const buttonClose = document.createElement("button")
    const p = document.createElement("p")
    const label = document.createElement("label")
    const input = document.createElement("input")
    const buttonSubmit = document.createElement("button")

    divModal.classList = "modalWrapper"
    h2.innerText = "Recuperar Senha"
    buttonClose.innerText = "X"
    buttonClose.classList = "buttonClose"
    p.innerText = "Insira o e-mail cadastrado, e enviaremos um código para realizar a alteração da senha"
    label.for = "email"
    label.innerText = "E-mail"
    input.type = "email"
    input.placeholder ="Digite seu e-mail cadastrado..."
    buttonSubmit.type = "submit"
    buttonSubmit.innerText = "Enviar"

    divModal.append(form)
    form.append(divHeader, p, label, input, buttonSubmit)
    divHeader.append(h2, buttonClose)

    return divModal
}

function showModal(){
    const main = document.querySelector("main")
    const buttonModal = document.querySelector(".recoverPassword")

    buttonModal.addEventListener("click", (event)=>{
        event.preventDefault()
        const modal = createModal()
        main.append(modal)

        closeModal()
    })

}

function closeModal(){
    const close = document.querySelector(".buttonClose")
    const divModal = document.querySelector(".modalWrapper")

    close.addEventListener("click", ()=>{
        divModal.remove()
    })
}

showModal()

