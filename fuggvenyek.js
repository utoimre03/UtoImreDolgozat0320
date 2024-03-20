export function FilmOsszeallit(lista) {
    let txt = "<ul>"
    for (let index = 0; index < lista.length; index++) {
       txt += `<div class="kivalasztott">
                <ul>
                    <li>${lista[index].cim},
                        ${lista[index].ev},
                        ${lista[index].ertekeles},
                        ${lista[index].foszereplo}</li>
                </ul>
            </div>`
    }
    //txt = "</ul>"
    return txt
}