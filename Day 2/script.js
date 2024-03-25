document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('addCustomer');
    const customerList = document.getElementById('customerList');
    const customerForm = document.getElementById('customerForm');

    addBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const membership = document.getElementById('membership').value;

        const li = document.createElement('li');
        li.textContent = `Name: ${name}, Contact: ${contact}, Membership: ${membership}`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            customerList.removeChild(li);
        };
        
        li.appendChild(deleteBtn);
        customerList.appendChild(li);

        // Clear the form
        customerForm.reset();
    });
});
