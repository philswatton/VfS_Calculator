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
    return(round(((M*S)**(1/4)+1)**(2/3),2));
}

//Vote Share of Largest Party
function vslp (M, S) {
    return(round(((M*S)**(1/4)+1)**(-1/2),2));
}



/* Page Functionality */

//Function to call caclulations
function calculate(M,S) {
    document.getElementById("enps").innerText = enps(M,S);
    document.getElementById("sslp").innerText = sslp(M,S);
    document.getElementById("enpv").innerText = enpv(M,S);
    document.getElementById("vslp").innerText = vslp(M,S);
}


//Event listeners
window.onload = function(){
    // M and S input sliders
    Sslider = document.getElementById("S-slider");
    Mslider = document.getElementById("M-slider");

    // M and S values
    Sinput = document.getElementById("S-input");
    Minput = document.getElementById("M-input");

    // Set initial values
    update = function() {
        calculate(Mslider.value, Sslider.value);
    }
    update();

    // S slider
    Sslider.addEventListener("input", function() {

        // Set max of M=S
        Mslider.max = Sslider.value;
        Minput.max = Sslider.value;

        // Update value reporters
        Sinput.value = Sslider.value;
        Minput.value = Mslider.value;

        // Update page values
        update();

    });

    // S input
    Sinput.addEventListener("input", function() {

        // Set max of M=S
        Mslider.max = Sinput.value;
        Minput.max = Sinput.value;

        // Update value reporters
        Sslider.value = Sinput.value;
        Minput.value = Mslider.value;

        // Update page values
        update();

    });

    //M slider
    Mslider.addEventListener("input", function() {

        // Update value reporters
        Minput.value = Mslider.value;

        // Update page values
        update();

    });

    //M input
    Minput.addEventListener("input", function() {

        // Update value reporters
        Mslider.value = Minput.value;

        // Update page values
        update();

    });
}
