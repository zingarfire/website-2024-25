function sonoAnagrammi(parola1, parola2) {

    let parola1Clean = parola1.replace(/\s+/g, '').tolowercase()
    let parola2Clean = parola2.replace(/\s+/g, '').tolowercase()
    console.log(parola1Clean,parola2Clean)
}

let p1 = "Tgg   TTT"
let p2 = "    TTVvvv"

console.log(sonoAnagrammi(p1, p2));