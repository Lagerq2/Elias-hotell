document.getElementById("bookingForm").addEventListener("submit", function(e) {
    
    const name = document.querySelector('input[name="name"]').value;
    const checkin = document.querySelector('input[name="checkin"]').value;
    const checkout = document.querySelector('input[name="checkout"]').value;

    const booking = {
        name: name,
        checkin: checkin,
        checkout: checkout
    };

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));
});