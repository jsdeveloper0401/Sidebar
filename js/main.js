const ticket = document.getElementById("ticket");
const products = document.getElementById("product");
const main = document.getElementById("main");
const mainContent = document.getElementById("main-content");

products.addEventListener("click", () => {
    const fetchUsers = async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const users = await res.json();
            return users;
        } catch (error) {
            console.log(error);
        }
    };

    const createTable = async () => {
        const users = await fetchUsers();
        const tableBody = document.getElementById("table-body");

        users.forEach((user, index) => {
            const row = tableBody.insertRow();
            row.innerHTML = `
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.phone}</td>
          <td>${user.email}</td>
          <td>${user.website}</td>
          <td>${user.address.city}, ${user.address.street}, ${
                user.address.suite
            }</td>
          <td>${user.company.name}</td>
        `;
        });
    };
    createTable();
});

ticket.addEventListener("click", (e) => {
    e.preventDefault(); 
    const ticketInfo = document.querySelectorAll(".container");
    main.innerHTML = "";
    ticketInfo.forEach((element) => {
        main.appendChild(element.cloneNode(true));
    });
});
