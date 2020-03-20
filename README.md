## **Travel Ireland** 
## Table of Contents
1. [**UX**](#user-experience)
    - [**User Stories**](#user-stories)
    - [**Strategy**](#Strategy)
     [**Scope**](#scope)
     [**Structure**](#structure)
     [**Skeleton**](#skeleton)
     [**Structure**](#strucuture)
    - [**Surface**](#surfacec)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)
    - [**Validators**](#validators)
    - [**Compatibility**](#compatibility)
    - [**Known Issues**](#known-issues)

5. [**Deployment**](#deployment)
    - [**Local Deployment**](#local-deployment)
    - [**Remote Deployment**](#remote-deployment)

6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Code**](#code)
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

 # Technologies Used
 # Testing
 # Deoplyment
 # Credits/Media
 # Acknowledgements

 `class`