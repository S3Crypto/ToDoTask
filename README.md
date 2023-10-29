<B>Todos Application</B>
This is a simple Todos application that allows users to manage their tasks by adding new tasks, marking tasks as completed, and viewing lists of pending and completed tasks.

Features:
Add New Todo: Users can add new tasks to their list.
Mark as Completed: Tasks can be marked as completed once they are done.
View Tasks: Tasks are categorized into 'Pending' and 'Completed', making it easier to manage.
Technologies:
React: For building the user interface.
Redux: For state management.
TypeScript: For adding static types.
Redux Thunk: For handling asynchronous actions.
Getting Started:
Prerequisites:
Ensure you have Node.js and npm (Node Package Manager) installed on your machine. If not, you can download and install them from the official website.

Installation:
Clone the repository:

bash
Copy code
git clone [YOUR REPOSITORY URL]
cd [YOUR REPOSITORY NAME]
Install the dependencies:

Copy code
npm install
Start the application:

sql
Copy code
npm start
This will start the application and open it in your default browser. By default, it will run on http://localhost:3000, unless you've set up a different port.

Usage:
On the main page, you'll see two sections: 'Pending Tasks' and 'Completed Tasks'.
Use the 'Add Todo' button or section to add new tasks.
Click on a task to mark it as completed or pending.
Troubleshooting:
Issue: todos.filter is not a function
Solution: Ensure that the todos state in Redux is initialized as an empty array. Check your API response and Redux reducers to make sure the data structure is correct.
Contributing:
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.
