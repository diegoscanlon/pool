document.getElementById("direction").setAttribute("required", "required");

function update_plan_options() {
    // Get the selected value from the "direction" select element
    var direction = document.getElementById("direction").value;

    // Hide all div elements related to plan options
    var divs = document.querySelectorAll("#dorm-selection, #airport-selection, #dorm-time-selection, #dorm-date-selection, #flight-number-input, #flight-date-selection");
    divs.forEach(function (div) {
        div.style.display = "none";
    });

    // Show the relevant div elements and set them as required
    if (direction === "toairport") {
        document.getElementById("dorm-selection").style.display = "block";
        document.getElementById("airport-selection").style.display = "block";
        document.getElementById("dorm-time-selection").style.display = "block";
        document.getElementById("dorm-date-selection").style.display = "block";

        document.getElementById("dormID").setAttribute("required", "required");
        document.getElementById("airportID").setAttribute("required", "required");
        document.getElementById("from_dorm_time").setAttribute("required", "required");
        document.getElementById("dormTime").setAttribute("required", "required");

        document.getElementById("flight_number").removeAttribute("required");
        document.getElementById("flight_date").removeAttribute("required");
    } else if (direction === "toschool") {
        document.getElementById("flight-number-input").style.display = "block";
        document.getElementById("flight-date-selection").style.display = "block";

        document.getElementById("flight_number").setAttribute("required", "required");
        document.getElementById("flight_date").setAttribute("required", "required");

        document.getElementById("dormID").removeAttribute("required");
        document.getElementById("airportID").removeAttribute("required");
        document.getElementById("from_dorm_time").removeAttribute("required");
        document.getElementById("dormTime").removeAttribute("required");
    }
}

// Listen for changes in the "direction" select element
document.getElementById("direction").addEventListener("change", update_plan_options);

// Call the function initially to set the initial state
update_plan_options();

// Dorm options
// Dorm options
// Dorm options

// Define a mapping of schools to dorm options
const schoolDormOptions = {
    Brown: ["Andrews Hall", "Gregorian Quad", "Machado House"],
    Caltech: ["Avery House", "Bechtel Residence", "Blacker House", "Braun House", "Dabney House", "Fleming House", "Lloyd House", "Page House", "Ricketts House", "Venerable House"],
    Chicago: ["Burton Judson", "North", "iHouse", "Max P", "South", "Snell-Hitchcock", "Woodlawn"],
    Columbia: ["Carman Hall", "Furnald Hall", "Hartley Hall", "John Jay Hall", "Wallach Hall", "Broadway Hall", "Ruggles Hall", "Watt Hall", "McBain Hall", "Carlton Arms", "47 Claremont"],
    Cornell: ["Barbara McClintock", "Clara Dickson", "Court-Kay-Bauer", "High Rise #5", "Hu Shih", "Jameson", "Low Rise #6", "Low Rise #7", "Mary Donlon", "Mews", "Ruth Bader Ginsburg"],
    Dartmouth: ["Allen House", "Channing Cox", "East Wheelock House"],
    Duke: ["Craven", "Crowell", "Edens", "Few", "Keohane", "Kilgo", "Wannamaker", "Swift", "Hallows"],
    Emory: ["Fleming", "Elizer", "Murdy", "Haygood", "JRC", "Mods"],
    Georgetown: ["Alumni Square", "Arrupe", "Copley", "Darnall", "Harbin", "Henle", "Kennedy", "LXR", "McCarthy", "Nevils", "New South", "Reynolds", "Ida Ryan & Isaac", "Townhouses", "Village A", "Village C East", "Villace C West"],
    Harvard: ["Crimson", "Elm", "Ivy", "Oak", "Adams", "Cabot", "Currier", "Dunster", "Eliot", "Kirkland", "Leverett", "Lowell", "Mather", "Pforzheimer", "Quincy", "Winthrop"],
    // Add other schools and their respective dorm options here
};

