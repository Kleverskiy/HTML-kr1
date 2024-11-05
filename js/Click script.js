const node_for_click = document.getElementById("for_click")

function find_edit(){
    document.getElementsByTagName('div')[4].innerText='Kirsanov'
    document.getElementsByTagName('div')[5].innerText='Nikita'
}

node_for_click.addEventListener("click",find_edit)
