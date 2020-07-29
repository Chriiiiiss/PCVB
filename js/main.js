const team_name_elem = document.querySelector(".teamNameInp")
const submit_button = document.querySelector(".submitButton")
const team_container_elem = document.querySelector(".teamContainer")
let delete_team_elem = document.querySelectorAll(".deleteTeam")
let team_tabs = []

class Team {
    constructor(name,point, placement, opponent, pool) {
        this.name = name
        this.point = point
        this.placement = placement
        this.opponent = opponent
        this.pool = pool
    }
}

let teamPos = 1
let new_team_name = team_name_elem.value

function updateElem() {
    delete_team_elem.forEach(element => {
        element.addEventListener("click", () => {
            element.parentElement.remove()     
        })
    });
}

team_name_elem.addEventListener("input", () => {
    new_team_name = team_name_elem.value
})

// can be refactored below by using innerHTML
// I'll do it if i take my time

submit_button.addEventListener("click", () => {
    const team_elem_div = document.createElement("div")
    team_elem_div.classList.add(`team${teamPos}`)
    team_container_elem.appendChild(team_elem_div)
    const team_elem_span = document.createElement("span")
    team_elem_span.classList.add("teamName")
    const team_elem_delete = document.createElement("div")
    team_elem_delete.classList.add("deleteTeam")
    team_elem_span.textContent = `${new_team_name}`
    team_elem_div.appendChild(team_elem_span)
    team_elem_div.appendChild(team_elem_delete)
    const team_delete_elem = document.createElement("span")
    team_delete_elem.textContent = "-"
    team_elem_delete.appendChild(team_delete_elem)
    delete_team_elem = document.querySelectorAll(".deleteTeam")
    updateElem()
    team_tabs.push(new Team(new_team_name, 0, 0 , []))
    teamPos == 1 ? teamPos = 2 : teamPos = 1
})
