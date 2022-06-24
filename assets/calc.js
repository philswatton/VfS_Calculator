/* VfS Formulae */

//Effective Number of Parties, Seats
function enps (M, S) {
    return((M*S)^(1/6))
}

//Seat Share of Largest Party
function sslp (M, S) {
    return((M*S)^(-1/8))
}

//Effective Number of Parties, Votes
function enpv (M, S) {
    return(((M*S)^(1/4))^(2/3))
}

//Vote Share of Largest Party
function enpv (M, S) {
    return(((M*S)^(1/4))^(-1/2))
}



/* Page Functionality */
