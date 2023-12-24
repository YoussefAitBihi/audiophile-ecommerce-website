# Audiophile e-commerce website

**Table of contents:**
* [Overview](#overview)
* [Challenge](#challenge)
* [Technologies](#technologies)
* [Workflow](#workflow)
* [Setup](#setup)
* [Usage](#usage)
* [Contributing](#contributing)
* [Author](#author)

## Overview
Audiophile Ecommerce is a multi-page e-commerce platform where users can shop for speakers, earphones, headphones, and other audio equipment.

## Challenge
Users should be able to:
* Add/Remove products from the cart
* Edit product quantities in the cart
* Fill in all fields in the checkout
* Receive form validations if fields are missed or incorrect during checkout
* See correct checkout totals depending on the products in the cart
* Shipping always adds $50 to the order
* VAT is calculated as 20% of the product total, excluding shipping
* See an order confirmation modal after checking out with an order summary
* View the optimal layout for the app depending on their device's screen size
* See hover states for all interactive elements on the page
* Bonus: Keep track of what's in the cart, even after refreshing the browser (localStorage could be used for this if you're not building out a full-stack app)

## Technologies
* React
* React Router DOM
* Redux and Redux Toolkit
* Framer Motion
* CSS Modules
* SASS

## Workflow
1. Project Setup: Initialize the React app using Vite and install the necessary dependencies.
2. Folder Structure: Organize files into components, containers, Redux-related files, styles, and services.
3. Implementing UI: Create components, and utilize CSS Modules and SASS for styling.
4. Routing Setup: Configure routes using React Router DOM to end up to an SPA.
5. Integrating with Supabase: Connect and interact with Supabase BaaS for data handling.
6. Redux Integration: Set up Redux store, reducers, and actions for state management.
7. Testing: Write unit and integration tests using Jest and React Testing Library.
8. Git & Version Control: Utilize Git for version control and follow a branching strategy.
9. CI/CD & Deployment: Set up Continuous Integration/Continuous Deployment for automation.
10. Documentation: Ensure code documentation and create a comprehensive README.

## Setup
1. Clone the project using `npm clone https://github.com/YoussefAitBihi/audiophile-ecommerce-website.git`
2. Install all dependencies using `npm install`

## Usage
1. Start the development server using `npm start`
2. Access the application at `http://localhost:5173/`

## Contributing
If you want to contribute to this project, please follow the guidelines.

## Author
[Youssef Ait Bihi](https://github.com/YoussefAitBihi/)
