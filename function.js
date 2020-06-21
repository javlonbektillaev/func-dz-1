let name = prompt('vvdite vashe imya')
let now = +prompt('vvdite nineshniy god')
let born = +prompt('vvdite god vashego rojdeniya')
function vozrast() {
let skolkoLet = now - born
    return name + ', вам ' + skolkoLet + 'лет'
}
console.log(vozrast());
