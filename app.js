function formsubmit() {
    var x;
    x = confirm("Calculate CGPA?");
    if (x) {
        calcgpa();
    }
    return false;
}

function addbox(x) {

    // var event = document.event.onkeyPress;
    // var key = event.keyCode || event.which;
    // alert(key);

    if (isNaN(x) && x.length > 0) { alert("Number of courses must be a number"); return }
    if (x.length > 0 && x != 0) {
        var boxes = document.getElementById("boxes");
        boxes.innerHTML = "";

        var a, b, c, d, e, f, g, h, m;

        for (m = 1; m <= x; m++) {
            a = document.createElement("fieldset"); a.class = "fieldset";
            b = document.createElement("label");
            c = document.createTextNode("COURSE CODE:");
            d = document.createTextNode("UNIT:");
            e = document.createTextNode("SCORE:");

            f = document.createElement("input");
            f.type = "text";
            f.id = f.value = f.name = "code" + m;

            g = document.createElement("input");
            g.type = "text";
            g.id = g.value = g.name = "unit" + m;

            h = document.createElement("input");
            h.type = "text";
            h.id = h.value = h.name = "score" + m;


            b.appendChild(c); //text to label
            b.appendChild(f); //input(course code) to label
            a.appendChild(b); //label to current fieldset

            b.appendChild(d); //text to label
            b.appendChild(g); //input(course unit) to label
            a.appendChild(b); //label to current fieldset

            b.appendChild(e); //text to label
            b.appendChild(h); //input(score) to label
            a.appendChild(b); //label to current fieldset



            boxes.appendChild(a); //current fieldset to legend with id=boxes
        }
    }

}


function calcgpa() {
    var form = document.getElementById("courseform");
    var i, cgpa, c, s, u, totalUnitsAccumulated = totalUnitsTaken = 0;
    var numberOfBoxes = form.box.value;
    if (error(numberOfBoxes)) {
        if (isNaN(numberOfBoxes) || numberOfBoxes.length == 0) { alert("Number of courses must be a number"); return }
        for (i = 1; i <= numberOfBoxes; i++) {
            c = document.getElementById("code" + i).value;
            s = document.getElementById("score" + i).value;
            u = document.getElementById("unit" + i).value;
            totalUnitsAccumulated += scoreInUnitsType5(s, u);
            totalUnitsTaken += Math.floor(u);
        }
        //after getting totalunits accumulated and taken, we compute cgpa
        cgpa = totalUnitsAccumulated / totalUnitsTaken;
        alert(cgpa);

    }
    function error(x) {
        for (i = 1; i <= numberOfBoxes; i++) {
            c = document.getElementById("code" + i).value;
            s = document.getElementById("score" + i).value;
            u = document.getElementById("unit" + i).value;
            if ((s > 100) || (s < 0) || isNaN(s)) { alert("Score" + i + " must be a number between 0 and 100"); return false; }
            if ((s > 100) || (s < 0) || isNaN(s)) { alert("Score" + i + " must be a number between 0 and 100"); return false; }
        }
        return true;
    }
    function scoreInUnitsType5(score, unit) {
        if (score >= 70) { return 5 * unit; }
        if (score >= 60) { return 4 * unit; }
        if (score >= 50) { return 3 * unit; }
        if (score >= 40) { return 2 * unit; }
        if (score >= 30) { return 1 * unit; }
        else { return 0 * unit; }
    }
}

