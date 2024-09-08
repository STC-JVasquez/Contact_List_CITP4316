document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        const contactList = document.getElementById('contactList');

        //create a new list item for the contact
        const li = document.createElement('li');
        li.textContent = `${name} - ${phone}`;

        //add the list item to the contact list
        contactList.appendChild(li);

        //clear the form inputs
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    }
});