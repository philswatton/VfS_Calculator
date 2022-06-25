/* VfS Formulae */

// round to n decimal places
function round (x, n) {
    return(Math.round(x * 10**n)/10**n);
}

//Effective Number of Parties, Seats
function enps (M, S) {
    return(round((M*S)**(1/6),2));
}

//Seat Share of Largest Party
function sslp (M, S) {
    return(round((M*S)**(-1/8),2));
}

//Effective Number of Parties, Votes
function enpv (M, S) {
    return(round(((M*S)**(1/4))**(2/3),2));
}

//Vote Share of Largest Party
function vslp (M, S) {
    return(round(((M*S)**(1/4))**(-1/2),2));
}



/* Page Functionality */

//Update function
function calculate(M,S) {
    document.getElementById("enps").innerText = enps(M,S);
    document.getElementById("sslp").innerText = sslp(M,S);
    document.getElementById("enpv").innerText = enpv(M,S);
    document.getElementById("vslp").innerText = vslp(M,S);
}

//Event listeners
window.onload = function(){
    // M and S input sliders
    S = document.getElementById("S");
    M = document.getElementById("M");

    // M and S values
    Sval = document.getElementById("S-value");
    Mval = document.getElementById("M-value");

    // Set initial values
    update = function() {
        calculate(M.value, S.value);
    }
    update();

    // S slider
    S.addEventListener("input", function() {
        // Set max of M=S
        document.getElementById("M").max = S.value;

        // Update value reporter
        Sval.innerText = S.value;
        Mval.innerText = M.value;

        // Update page values
        update();
    });

    // M slider
    M.addEventListener("input", function() {

        // Update value reporter
        Mval.innerText = M.value;

        // Update page values
        update();
    });
}
