## **Travel Ireland** 

Travel Ireland is a travel diary created to encourage travel lovers around Ireland on one of the most stunning countries in the world. 

This site makes use of the Google Maps API to allow travel lovers filter by hotels, restaurants and things to do in each county in Ireland.  

Ireland is one of the most undiscovered gems, with the rugged mountains, and practically untouched countryside. The aim of this site is to show users the beauty of this country and the gems that lie within. 

---

## Table of Contents
1. [**UX**](#user-experience)
    - [**User Stories**](#user-stories)
    - [**Strategy**](#strategy)
    - [**Scope**](#scope)
    - [**Structure**](#structure)
    - [**Skeleton**](#skeleton)
    - [**Surface**](#surface)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)

5. [**Deployment**](#deployment)

6. [**Credits**](#credits)
    - [**Acknowledgements**](#acknowledgements)
---
 ## **User Experience**
---
### **User stories**

As a travel lover, I want to:

- Hear about the site owners experience on travelling in Ireland

- Search by city in Ireland and filter these by places to stay, eat and things to Deoplyment

- View a list of options in a table and find out more information on these places

As a site owner, I want to 
- Make known the reasons to visit Ireland

- Share my story on travelling Ireland with links to all my relevant social media sites.

## **Strategy**
My goal of this site is to create a simple, visually appealing website to help travel lovers discover the hidden gems in Ireland by utilising the Google Maps API and Google Maps Documentation. 

## **Scope**
To provide potential customers with information on hotels, restaturats and things to do in Ireland. 

## **Structure**
The main structure of this website involves three main sections, the landing page, the My Story section and the Recommendations section. 

The navbar appears when the user scrolls beyond the main landing images and is then stick, creating a smooth expeirence for each user.  Users can click on the "Let's Go" button, which using the `scroll-behavior: smooth` command CSS, to create an overall smooth expeirence for user on scrolling. 
On smaller screens, the navbar collapses using Bootstrap, to a unique hamburger style icon, using a plane flying around the globe.  When that icon is clicked, a dropdown menu with centered text is opened, allowing the user to navigate through the site. 

The landing page text has a shadow to make it stand out and a Serif style font, which compliments the two sans-serif fonts that are used through the remainder of the site. 

The images contain the Bootstrap `img-thumbnail` class to ensure both responsiveness and the shadow that accompanies the bootstrap class. 

To ensure clarity in the filter images, I added a `:hover` pulsating animation, which encourages users to search by their activity filter on the map, and ensures users know how to serch by their filters. 

When a user searches for an activity and city, then a table appears with a list of all activities in the area selected.  

The map automatically zooms in to the selected city. If a city is not selected and a filter is, then it will drop pins by default to the centre of the country.  
 
 ## **Skeleton**
This website is structure over one page, using Google Maps API. 

The page is split into three core sections. 

These are the wireframes, which include both the desktop and mobile view for each section.
 1. [Landing Page](wireframes/Landing-Page.png)
 2. [My Story](wireframes/My-Story/png)
 3. [Recommendations](wireframes/Recommendations.png)

## **Surface**

The colour scheme for this project was quite minimalistic, involving browns and a salmon colour.  This compliemented the main landing image, of a sunset and the filter sections.

The colours used were:

![Colour Scheme](https://github.com/ClaireLally8/TravelDiary/blob/master/assets/images/Color-Scheme.PNG)

The site makes use of three key fonts : 
   
    - Source Code Pro 

    - Montserrat
    
    - Playfair Display SC
--- 
 # Features

## **Existing Features**

**Landing Page**
- This is the first section a user sees upon coming onto the pages.  Users a presented with a landing image the size of the screen and a button, when clicking will bring them to the My Story section. 

**My Story**
- This section gives a breakdown of the site owners experience travelling and why the page came to exist.  It shares their experience travelling around the country after leaving their job. 

- The section is split into three images, covering What Travel Ireland is, Who the owner is and How it came to be. 

- Beneath each image, is a short paragraph addressing the sections. 

**Recommendations**
 - This section has three core components.
    - Filters.  Three images filtering by places to eat, sleep and activities to do. The images pulsate when hovered on to help users negotiate the filters.
    - Search & Table.  A user input field that has a autocomplete generate by Google, allowing users to filter their city search.  Limited within Ireland.
    - Google Maps image with markers on the filters activity. 

**Other Features**

Some of the other features on the site include the footer, with social media links, when hovered their colour changes.

Navbar that appears & disappears when a user scrolls on the Landing page image.

## **Features Left to Implement**

- Wishlist page where users can add places they want to visit to a table & tick them off as they visit these places.

- Upload section where users can upload their own images of their adventures around Ireland.

- Contact section where users can get in touch with the site owner to share their recommendations on places to visit.

- More interactivity on the map - allow users to click on a section and it filters the hotels, restuaurants or things to do within that area clicked on the map. 

---

 # Technologies Used

 - HTML

- CSS

- Javascript

- JQuery

- [Bootstrap](https://getbootstrap.com/)

 
Also made use of

---

- [Font Awesome](fontawesome.com)

- [Flat Icon](https://www.flaticon.com/)

- [Google Fonts](https://fonts.google.com/)

- [Animista](https://animista.net/)

- [HTML Validator](https://validator.w3.org/)

- [CSS Validator](https://validator.w3.org/)

- Testing with Chrome DevTools

- Learned from [W3schools](https://www.w3schools.com/)

---

 # Testing

Manual tests were conducted throughout the creation of this site. 

--- 

**Validators**

--- 
- HTML

    - W3C HTML Validator: 

        - Document checkig on HTML. No errors or warnings to show.

- CSS

    - W3C CSS Validator
        - The W3C Validator displayed an error with font size spelt incorrectly.  This issue was resolve and no errors followed on from this. 

- JavaScript
    - JShint

        -  **Metrics**

        - There are 18 functions in this file.

        - Function with the largest signature take 2 arguments, while the median is 0.

        -   Largest function has 25 statements in it, while the median is 2.5.

        - The most complex function has a cyclomatic complexity value of 7 while the median is 1.

        - One undefined variable 
            - `google`

- Other Testing

    - Testing during section construction was done primarily with Chrome DevTools, making sure each element works correctly and optimally, including responsiveness across devices. For navbar, I tested the functionality of all links, including the site brand. I also tested the color change of links to hover and toggle and collapse functioning in small devices. 

    - A small amount of user tests were conducted to ensure that the site was sufficiently user friendly and all users were satisfied with the overall experience of using hte website. 

---

 # Deoplyment

**Deployment To Github Pages**

- In my account GitHub website, I selected Repositories

- I selected TravelDiary from the GitHub Dashboard.

- I navigated to Settings and to the GitHub Pages section.

- From the Source section, I clicked on the drop-down menu and selected Master Branch.

- Once Master Branch is selected, the page has been automatically refreshed, with a detailed ribbon display GitHub Source Saved Pages indicating the successful implementation.

The live link can be found here - https://clairelally8.github.io/TravelDiary/

**PLEASE NOTE**

Allow a few minutes to pass before opening your newly deployed link! Clicking this link too quickly may result in a failure to build the site, causing an Error 404 page instead.

**Local Deployment**

 - To run locally, you can do one of the following two options 
    
    - Clone the repository using the `git clone https://github.com/clairelally8/traveldiary.git` command

    - Download the zip file, unzip and run it in your favourite local IDE (such as VS Code)


 # Credits
 
 **Media**

 - All images of Ireland used on this page were taken from Google Images.

- The icons used for the footer were taken from Font Awesome.

- The burger menu icon on the mobile view navbar page was taken from Flat Icon.

- Google Maps API documentation was used in the creation of the Script for this site. 

# Acknowledgements

 - To create this website, I used many resources, like Stack Overflow, the wonderful Bootstrap and of course, every new programmers bible, W3 Schools.

- The Keyframes for the Animation on the landing page was taken from [Animista](https://animista.net/)

- Google Maps API Documentation assisted in the creation of the Javascript for this site. 