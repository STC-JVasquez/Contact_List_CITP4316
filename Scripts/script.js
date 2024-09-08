document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        const contactList = document.getElementById('contactList');

        //create a new list item for the contact
        const list = document.createElement('list');
        list.textContent = `${name} - ${phone}`;

        //add the list item to the contact list
        contactList.appendChild(list);

        //clear the form inputs
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    }
});