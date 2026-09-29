// Select room from room card

function selectRoom(roomName, roomPrice) {

    // Select dropdown
    let room = document.getElementById("room");

    // Set selected room
    room.value = roomName;

    // Display price
    document.getElementById("price").innerHTML =
        "₹" + roomPrice;

    // Calculate total
    calculateTotal();

    // Scroll to booking section
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}


// Update price when room is selected

function updatePrice() {

    let room = document.getElementById("room");

    let selectedOption =
        room.options[room.selectedIndex];

    let price =
        selectedOption.getAttribute("data-price");

    if (price == null) {
        price = 0;
    }

    document.getElementById("price").innerHTML =
        "₹" + price;

    calculateTotal();
}


// Calculate total amount

function calculateTotal() {

    let room =
        document.getElementById("room");

    let selectedOption =
        room.options[room.selectedIndex];

    let price =
        selectedOption.getAttribute("data-price");

    let nights =
        document.getElementById("nights").value;

    if (price == null) {
        price = 0;
    }

    if (nights == "" || nights < 1) {
        nights = 1;
    }

    let total = price * nights;

    document.getElementById("total").innerHTML =
        "₹" + total;
}


// Booking form

document.getElementById("bookingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
        document.getElementById("customerName").value;

    let email =
        document.getElementById("email").value;

    let room =
        document.getElementById("room").value;

    let nights =
        document.getElementById("nights").value;

    let total =
        document.getElementById("total").innerHTML;


    // Display booking confirmation

    let message =
        document.getElementById("bookingMessage");

    message.style.display = "block";

    message.innerHTML =

        "<h3>Booking Successful! 🎉</h3>" +

        "<p>Thank you, <b>" + name + "</b>.</p>" +

        "<p>Email: " + email + "</p>" +

        "<p>Room: <b>" + room + "</b></p>" +

        "<p>Nights: <b>" + nights + "</b></p>" +

        "<p>Total Amount: <b>" + total + "</b></p>" +

        "<p>Your room has been reserved.</p>";


    // Clear form

    document.getElementById("bookingForm").reset();

    document.getElementById("price").innerHTML = "₹0";

    document.getElementById("total").innerHTML = "₹0";

});