# Test Cases for Saucedemo website

## TS.1 Login and Authentication

### TC.1.1 Verify Login Page UI Elements Loaded
1. Navigate to `https://www.saucedemo.com/`
2. Observe that the following elements are present:
   1. “Sauce Labs” logo
   2. Username input field
   3. Password input field
   4. Login button
   4. Accepted Usernames and Password panel

**Expected result:**
- All listed elements are displayed on the page

---

### TC.1.2 Verify Successful Login with Valid Credentials
1. Navigate to `https://www.saucedemo.com/`
2. Enter **Username:** `standard_user`
3. Enter **Password:** `secret_sauce`
4. Click **Login** button
5. Wait for navigation to `/inventory.html`

**Expected result:**
- Inventory items are visible

---

### TC.1.3 Verify Login Fails with Incorrect Password
1. Navigate to `https://www.saucedemo.com/`
2. Enter **Username:** `standard_user`
3. Enter **Password:** `wrong_password`
4. Click **Login** button
5. Observe error banner

**Expected result:**
- Error banner text “Epic sadface: Username and password do not match any user in this service”

---

### TC.1.4 Verify Login Fails with Incorrect Username
1. Navigate to `https://www.saucedemo.com/`
2. Enter **Username:** `wrong_user`
3. Enter **Password:** `secret_sauce`
4. Click **Login** button
5. Observe error banner

**Expected result:**
- Error banner text “Epic sadface: Username and password do not match any user in this service”

---

### TC.1.5 Verify Login Fails When No Credentials Provided
1. Navigate to `https://www.saucedemo.com/`
2. Click **Login** button
3. Observe error banner

**Expected result:**
- Error banner text “Epic sadface: Username is required”

---

### TC.1.6 Verify Login Fails When No Username Provided
1. Navigate to `https://www.saucedemo.com/`
2. Enter **Password:** `secret_sauce`
3. Click **Login** button
4. Observe error banner

**Expected result:**
- Error banner text “Epic sadface: Username is required”

---

### TC.1.7 Verify Login Fails When No Password Provided
1. Navigate to `https://www.saucedemo.com/`
2. Enter **Username:** `standard_user`
3. Click **Login** button
4. Observe error banner

**Expected result:**
- Error banner text “Epic sadface: Password is required”

---

### TC.1.8 Verify Locked Out User Cannot Login
1. Navigate to `https://www.saucedemo.com/`
2. Enter **Username:** `locked_out_user`
3. Enter **Password:** `secret_sauce`
4. Click **Login** button
5. Observe error banner

**Expected result:**
- Error banner text “Epic sadface: Sorry, this user has been locked out.”

---

### TC.1.9 Verify Unauthenticated Access to Inventory Redirects to Login
1. Open browser and navigate directly to `https://www.saucedemo.com/inventory.html`
2. Observe behavior

**Expected result:**
- Redirect back to `https://www.saucedemo.com/`
- Error banner text "Epic sadface: You can only access '/inventory.html' when you are logged in."

---

## TS.2 Inventory page

### TC.2.1 Verify Inventory Page Static Elements Are Loaded
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Navigate to the inventory page
2. Verify that the hamburger menu icon is visible
3. Verify that the Swag Labs logo is visible
4. Verify that the shopping cart icon is visible
5. Verify that the footer text (“© Sauce Labs. All Rights Reserved.”) is visible

**Expected result:**
- All listed static elements appear on the inventory page

### TC.2.2 Verify Inventory Items Display Correctly
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on the inventory page

1. Count the total number of products displayed.
2. For each product displayed, verify that its name, image, and price are visible.

**Expected result:**
- At least 6 products displayed
- Each shows name, image, and price

---

### TC.2.3 Verify Product Detail Page Loads Correctly
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on the inventory page

1. Click on any product name
2. Verify that the product detail view appears
3. Verify that the product’s title, image, description, and price are visible
4. Verify that a Back to products button is present

**Expected result:**
- The product detail page is displayed.
- The product’s title, image, description, and price are visible.
- A Back to products button is present.

---

### TC.2.4 Verify Navigation to Product Detail by Clicking Image
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on the inventory page

1. Click on any product image
2. Verify that the product detail view appears
3. Verify that the product’s title, image, description, and price are visible
4. Verify that a Back to products button is present

**Expected result:**
- The product detail page is displayed.
- The product’s title, image, description, and price are visible.
- A Back to products button is present.

---

### TC.2.5 Verify Back to Products Functionality
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on the inventory page

1. Click on any product name or image to load its detail view
2. Click **Back to products** button

**Expected result:**
- Navigate back to inventory page
- Inventory items visible

---

### TC.2.6 Verify Sorting By Name A to Z
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on the inventory page

1. Open the sort dropdown menu
2. Select the “Name (A to Z)” option
3. Observe the order of product names displayed on the inventory page

**Expected result:**
- Product names appear in alphabetical order from A to Z

---

### TC.2.7 Verify Sorting By Name Z to A
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on the inventory page

1. Open the sort dropdown menu
2. Select the “Name (Z to A)” option
3. Observe the order of product names displayed on the inventory page

**Expected result:**
- Product names appear in reverse alphabetical order from Z to A

---

### TC.2.8 Verify Sorting By Price Low to High
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on the inventory page

1. Open the sort dropdown menu
2. Select the “Price (low to high)” option
3. Observe the order of product names displayed on the inventory page

**Expected result:**
- Product prices appear in ascending order from lowest to highest

---

### TC.2.9 Verify Sorting By Price High to Low
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on the inventory page

1. Open the sort dropdown menu
2. Select the “Price (high to low)” option
3. Observe the order of product names displayed on the inventory page

**Expected result:**
- Product prices appear in descending order from highest to lowest

---

<!-- ### TC.2.9. INVENTORY_SEARCH_FILTER_BY_URL
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Navigate to `https://www.saucedemo.com/inventory.html?sort=az`
2. Capture first three `.inventory_item_name` values

**Expected result:**
- Items displayed sorted A → Z (matches TC.2.5)

--- -->

<!-- ### TC.2.10. CUSTOM_URL_ITEM_DETAIL_ACCESS
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Navigate to `https://www.saucedemo.com/inventory-item.html?id=5`

**Expected result:**
- Product detail page for item with ID=5 displayed

--- -->

### TC.2.10 Verify Hamburger Menu Functionality
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on the inventory page

1. Click the hamburger menu icon
2. Verify that the sidebar menu slides in and displays the options:
   - All items
   - About
   - Logout
   - Reset App State
3. Click the X (close) button in the sidebar
4. Verify that the sidebar menu slides out and is no longer visible

**Expected result:**
- Sidebar opens when the hamburger icon is clicked, showing “All Items,” “About,” “Logout,” and “Reset App State.”
- Sidebar closes when the X button is clicked, returning focus to the inventory page.

---

### TC.2.11 Verify Twitter Link in Footer
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Scroll down to the bottom of the inventory page to reveal the footer
2. Click the **Twitter** icon in the footer

**Expected result:**
- A new tab to the Sauce Labs Twitter page opens 

---

### TC.2.12 Verify Facebook Link in Footer
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Scroll down to the bottom of the inventory page to reveal the footer
2. Click the **Facebook** icon in the footer

**Expected result:**
- A new tab to the Sauce Labs Facebook page opens 

---

### TC.2.13 Verify LinkedIn Link in Footer
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Scroll down to the bottom of the inventory page to reveal the footer
2. Click the **LinkedIn** icon in the footer

**Expected result:**
- A new tab to the Sauce Labs LinkedIn page opens

---

### TC.2.14 Verify About Link in Hamburger Menu
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click the **hamburger menu** icon
2. Click **About** link

**Expected result:**
- Navigate to `https://saucelabs.com/`

---

## TS.3 Cart Operations

### TC.3.1 Verify Adding Single Product to Cart from Inventory
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on first product card
2. Observe the shopping cart badge

**Expected result:**
- The shopping cart icon appears with a badge that shows “1”

---

### TC.3.2 Verify Removing Product from Cart on Inventory Page
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on first product card
2. Click **Remove** on the same product
3. Observe the shopping cart badge


**Expected result:**
- The shopping cart icon appears without any badge

---

### TC.3.3 Verify Adding Multiple Products to Cart
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on first two product cards
2. Observe the shopping cart badge after each add action

**Expected result:**
- After adding 2 products, badge shows “2”

---

### TC.3.4 Verify Cart Persistence on Page Refresh
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Add any product to the cart
2. Click the cart icon to navigate to the cart page
3. Refresh the browser

**Expected result:**
- The same product(s) remain listed in the cart after the page refresh.

---

### TC.3.5 Verify Cart Page Displays Correct Items
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Add 3 distinct products to the cart
2. Click the cart icon to navigate to the cart page
3. For each item in the cart, note its product name

**Expected result:**
- The cart page lists exactly the three products that were added

---

### TC.3.6 Verify Adding Product to Cart from Detail Page
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** 

1. Click on any product to open its detail view
2. Click **Add to cart** within the detail view
3. Observe the shopping cart badge

**Expected result:**
- The cart badge increments by 1

---

### TC.3.7 Verify Removing Product from Cart on Detail Page
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click on any product to open its detail view
2. Click **Add to cart** within the detail view
3. Click **Remove** in the same detail view
4. Observe the shopping cart badge

**Expected result:**
- Badge decrements or disappears

---

### TC.3.8 Verify Continue Shopping from Cart Page
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Add at least one product to the cart
2. Click the cart icon to navigate to the cart page
3. Click **Continue Shopping** button

**Expected result:**
- The user is taken back to the inventory page
- The same product(s) remain listed in the cart after the page refresh.

---

### TC.3.9 Verify Removing Product from Cart on Cart Page
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on any product
2. Click the cart icon to navigate to the cart page
1. Click **Remove** on the product listed in the cart
2. Observe the shopping cart icon area

**Expected result:**
- The removed product no longer appears on the cart page

---

<!-- ### TC.3.10. CLICK_PRODUCT_IMAGE_ON_INVENTORY
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on `/inventory.html`

1. Click on a product image (`.inventory_item_img`)

**Expected result:**
- Navigate to corresponding product detail page

---

### TC.3.11. INVENTORY_ITEM_NAMES_CLICK_NAVIGATE
**Preconditions:**
- User is logged in as **standard_user / secret_sauce** and on `/inventory.html`

1. Click on a product name (`.inventory_item_name`)

**Expected result:**
- Navigate to corresponding product detail page

--- -->

## TS.4 Checkout

### TC.4.1 Verify Checkout Button Disabled or Redirects When Cart Is Empty
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**
- No products have been added to the cart

1. Click the **Cart** icon to navigate to the cart page
2. Observe whether the Checkout button is enabled or disabled
3. Click **Checkout** button

**Expected result:**
- If the Checkout button is disabled, it cannot be clicked.
- If the Checkout button is enabled, clicking it immediately returns the user to the cart page with an on-screen message or indicator stating “Your cart is empty.”

---

### TC.4.2 Verify Complete Checkout with Valid Information
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on any product
2. Click the **Cart** icon to navigate to the cart page
3. Click the **Checkout** button
4. Fill **First Name:** Vardenis
5. Fill **Last Name:** Pavardenis
6. Fill **Postal Code:** 12345
7. Click **Continue** to navigate to the Checkout: Overview page
8. Verify that the correct product name and price appear in the order summary
9. Click **Finish** to complete the purchase

**Expected result:**
- The **Checkout: Complete** page displays the message “THANK YOU FOR YOUR ORDER.”
- A **Back Home** button is visible on the page.

---

### TC.4.3 Verify Error Message When First Name Is Missing
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on any product
2. Click the **Cart** icon to navigate to the cart page
3. Click the **Checkout** button
4. Leave **First Name** blank
5. Fill **Last Name** Pavardenis
6. Fill **Postal Code** 12345
7. Click **Continue**

**Expected result:**
- Error banner text “Error: First Name is required”

---

### TC.4.4 Verify Error Message When Last Name Is Missing
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on any product
2. Click the **Cart** icon to navigate to the cart page
3. Click the **Checkout** button
4. Fill **First Name** Vardenis
5. Leave **Last Name** blank
6. Fill **Postal Code** 12345
7. Click **Continue**

**Expected result:**
- Error banner text “Error: Last Name is required”

---

### TC.4.5 Verify Error Message When Postal Code Is Missing
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on any product
2. Click the **Cart** icon to navigate to the cart page
3. Click the **Checkout** button
4. Fill **First Name** Vardenis
5. Fill **Last Name** Pavardenis
6. Leave **Postal Code** blank
7. Click **Continue**

**Expected result:**
- Error banner text “Error: Postal Code is required”

---

### TC.4.6 Verify Cancel Button on Checkout: Your Information Returns to Cart
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on any product
2. Click the **Cart** icon to navigate to the cart page
3. Click the **Checkout** button to navigate to the **Checkout: Your Information** page
4. Click **Cancel**

**Expected result:**
- The user is returned to the cart page.
- The previously added product(s) remain in the cart.

---

### TC.4.7 Verify Cancel Button on Checkout: Overview Returns to Inventory
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on any product
2. Click the **Cart** icon to navigate to the cart page
3. Click the **Checkout** button to navigate to the **Checkout: Your Information** page
4. Fill **First Name**, **Last Name**, and **Postal Code** with valid data
5. Click **Continue** to navigate to the **Checkout: Overview** page
6. Click **Cancel**

**Expected result:**
- The user is redirected to the inventory page.
- The previously added product remain in the cart.

---

### TC.4.8 Verify Back Home Button After Completing Checkout
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on any product
2. Click the **Cart** icon to navigate to the cart page
3. Click the **Checkout** button to navigate to the **Checkout: Your Information** page
4. Fill **First Name**, **Last Name**, and **Postal Code** with valid data
5. Click **Continue** to navigate to the **Checkout: Overview** page
6. Click **Finish** to complete the purchase and navigate to the **Checkout: Complete** page
7. Click the **Back Home** button

**Expected result:**
- The user is redirected to the inventory page.
- The shopping cart is empty

---

## TS.5 Logout and Session Management

### TC.5.1 Verify Logout From Inventory Page
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click the **hamburger menu** icon
2. Click **Logout**

**Expected result:**
- The user is redirected to the login page
- The login form is visible

---

### TC.5.2 Verify Logout From Cart Page
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click the **Cart** icon to navigate to the cart page
2. Click the **hamburger menu** icon
3. Click **Logout**

**Expected result:**
- The user is redirected to the login page 

---

### TC.5.3 Verify Logout From Checkout: Your Information Page
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click the **Cart** icon to navigate to the cart page
2. Click **Checkout** to navigate to the **Checkout: Your Information** page
3. Click the **hamburger menu** icon
4. Click **Logout**

**Expected result:**
- The user is redirected to the login page 

---

### TC.5.4 Verify Logout From Checkout: Overview Page
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click the **Cart** icon to navigate to the cart page
2. Click **Checkout** to navigate to the **Checkout: Your Information** page
3. Fill **First Name**, **Last Name**, and **Postal Code** with valid data
4. Click **Continue** to navigate to the **Checkout: Overview** page
5. Click the **hamburger menu** icon
6. Click **Logout**

**Expected result:**
- The user is redirected to the login page

---

### TC.5.5 Verify Back Button Behavior After Logout
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click the **hamburger menu** icon
2. Click **Logout**
3. After logout, click browser **Back** button

**Expected result:**
- The user remains on the login page (cannot navigate back into the application)
- Error banner text "Epic sadface: You can only access '/inventory.html' when you are logged in."

---


### TC.5.6 Verify Cart Persists After Logout
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Click **Add to cart** on any product
2. Click the **hamburger menu** icon
3. Click **Logout**
4. Log in again as **standard_user / secret_sauce**
5. Click the Cart icon to navigate to the cart page

**Expected result:**
- The previously added product remains listed in the cart
- The cart icon displays the correct badge count for that product

---

## TS.6 Negative & Edge Case Scenarios

### TC.6.1 Verify Emoji Only in Name Fields
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Add any product to the cart and go to `/checkout-step-one.html`  
2. Enter `🚀🔥😊` into **First Name**  
3. Enter `🎉💥😜` into **Last Name**  
4. Enter `12345` into **Zip/Postal Code**  
5. Click **Continue**  

**Expected result:**  
- A validation error banner appears (e.g. “Error: First Name contains invalid characters”)  
- The user remains on the **Checkout: Your Information** page  

---

### TC.6.2 Verify Whitespace Only in Input Fields
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Add any product to the cart and go to `/checkout-step-one.html`  
2. Enter three spaces into **First Name**  
3. Enter three spaces into **Last Name**  
4. Enter three spaces into **Zip/Postal Code**  
5. Click **Continue**  

**Expected result:**  
- A validation error banner appears (e.g. “Error: First Name is required”)  
- The user remains on the **Checkout: Your Information** page  

---

### TC.6.3 Verify Overly Long Strings Are Rejected
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Add any product to the cart and go to `/checkout-step-one.html`  
2. Paste a 300-character string into **First Name**  
3. Paste a 300-character string into **Last Name**  
4. Paste a 20-character string into **Zip/Postal Code**  
5. Click **Continue**  

**Expected result:**  
- A validation error banner appears (e.g. “Error: First Name exceeds maximum length”)  
- The user remains on the **Checkout: Your Information** page without layout break  

---

### TC.6.4 Verify Non-Numeric Postal Codes Are Rejected
**Preconditions:**
- User is logged in as **standard_user / secret_sauce**

1. Add any product to the cart and go to `/checkout-step-one.html`  
2. Fill **First Name** and **Last Name** with valid text 
3. Enter `ABC-@#%` into **Zip/Postal Code**   
4. Click **Continue**  

**Expected result:**  
- A validation error banner appears (e.g. “Error: Postal Code must be numeric”)  
- The user remains on the **Checkout: Your Information** page  