// =======================================
// TypeScript-like Interface (for understanding)
// interface User {
//    id: number;
//    name: string;
//    email: string;
// }
// =======================================
// API Layer (Async Programming)
const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "Venkat", email: "venkat@gmail.com" },
                        { id: 2, name: "Ashwanth", email: "ashwanth@gmail.com" },
                        { id: 3, name: "Kethan", email: "kethan@gmail.com" },
                        { id: 4, name: "Suresh", email: "suresh@gmail.com" },
                        { id: 5, name: "Ramesh", email: "ramesh@gmail.com" },
                        { id: 6, name: "Hari", email: "hari@gmail.com" },
                        { id: 7, name: "Raju", email: "raju@gmail.com" },
                        { id: 8, name: "Vijay", email: "vijay@gmail.com" },
                        { id: 9, name: "Ajay", email: "ajay@gmail.com" },
                        { id: 10, name: "Sanjay", email: "sanjay@gmail.com" }

                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}
