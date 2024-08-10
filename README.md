# drug-web-app
A React.js-based application that allows users to search for drugs by name, view a list of matching drugs, and navigate to a detail page for each drug. The application utilizes the RxNorm API to fetch drug data and provides an intuitive, responsive user interface.

# Features
Live Search: As users type in the search bar, the application fetches and displays a list of matching drugs in real-time.
Search Icon Interaction: The search icon responds to clicks with a visual animation and triggers navigation to the most relevant drug.
Scrollable List: The list of drugs is scrollable, ensuring a clean and user-friendly interface, even with a large number of results.
Responsive Navigation: Clicking on a drug name or the search icon navigates the user to a detailed page for that specific drug.

# Technologies Used
React.js: For building the user interface.
RxNorm API: To fetch drug data based on user input.
CSS: For styling the components, including animations and responsive design.
React Router: For handling navigation between pages.

# Installation

1. Clone the repository:

git clone https://github.com/yourusername/drug-web-app.git
cd drug-web-app

2. Clone the repository:

npm install

3. Run the application:

npm start

The application should now be running on http://localhost:3000.

# Usage

1. Search for a Drug:
Begin typing the name of a drug in the search bar.
The application will display a list of drugs that match the input.

2.View Drug Details:
Click on the drug name in the list to navigate to the drug's detail page.
Alternatively, click the search icon to automatically navigate to the most relevant drug.

3. Customizing the Search:
The search is case-insensitive and matches drug names based on the user's input.

# Code Overview

# 1.Search Component (Search.js):

State Management:
data: Stores the fetched drug data.
filterdata: Stores the filtered list of drugs based on user input.
search: Tracks the user's search input.
isClicked: Tracks whether the search icon has been clicked for UI feedback.

2.API Fetching:
The component fetches data from the RxNorm API when the user types in the search bar.

Event Handlers:
keyTyped: Updates the search state with the user's input.
handleIconClick: Animates the search icon and navigates to the first drug in the list.
handleDrugClick: Navigates to the selected drug's detail page.

# 2.Styling (Search.css):

1.Search Bar:
Styled to include padding, borders, and rounded corners for a clean look.

2.Drug List:
The drug list is scrollable with a max height, ensuring the UI remains compact.

Navigation:
React Router:
Used to navigate between the search results page and the drug detail page.

# Customization
Styling:
You can customize the look and feel of the application by editing the Search.css file.
API Endpoint:
The API endpoint in the Search.js file can be changed to point to a different data source if needed.

# Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

# License
This project is licensed under the MIT License.

# Contact
If you have any questions or feedback, feel free to contact the project maintainer at [dkgawde14@gamil.com].
