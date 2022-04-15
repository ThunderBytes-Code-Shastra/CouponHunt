# CouponHunt

## Problem Identified
- There is no scarcity in the number of promotional offers and deals received by potential customers. Simultaneously, a very small fraction of these offers actually end up being redeemed at the company. Thus, there exists a vast divide between the supply and demand. We sought to systematically identify the issues behind this and provide an easy to use and highly effective solution to this.
- Due to the sheer number of offers, users are unable to obtain the deals which are actually relevant to them.
- A lot of the users either don’t satisfy the offer’s eligibility criteria or the offers end up expiring by the date of redemption, thus increasing user frustration.
- Similarly, companies do not seem to have an effective model in place to attract users due to the sheer wastage of advertisement resources on uninterested users.

## Objective and Identified Solutions
- Our objective was to create a system that provided users with maximum savings based on their bank name, card type, received messages as well as the physical pamphlets in their possession.
- We proceeded to obtain the most relevant details by making a tool to periodically scrape the corresponding banking websites and obtain the coupon details based on the entered user data.
- This database was supplemented by efficient mongodb query, and indexing to sort data based on the discount amount and expiry data.
- The easy-to-use and feature-filled CouponHunt app was built to make swiping the best deals as pleasant as possible.
- The ability to scrape messages to obtain relevant offers based on NLP has been built into the app.
- The app also contains an OCR scanner to similarly obtain offer details and reminders through NLP

## Technology Stack
- React Native
- Node JS
- Redux
- React Native Text Recognition
- Flask
- Spacy - NER
- LXML library
- Docker

## Technical Framework
- The scraping framework has been built using python due to its extensive support for data handling.
- The URLs of the numerous banking website offer pages has been scraped using the XPath of the relevant offer details on each page.
- This data is periodically fed into the database residing in the server, every 24 hours.
- MongoDB has been used due to its versatility since the numerous permutations of changes in offer details during periodic updation and their scraping availability makes a relational database more complicated to manage.
- Crontab has been used for periodic database updation due to its simplicity and reliability
- The CouponHunt app has been built using React Native, due to its portability and the sheer number of libraries it has support for.
- The OCR scanner has been implemented using the react native text recognition API.
- NLP to obtain the offer details has been obtained using NER.

## User Interface
<p align="center">
  <b> Login Screen </b> <br />
  <img align="center" width="40%" height="650" src="https://user-images.githubusercontent.com/71400881/163563944-94be1bcb-b143-46c9-9a87-d186f24d70e5.png">
</p>

<br />
<p align="center">
  <b> Signup Screen </b> <br />
  <img align="center" width="40%" height="650" src="https://user-images.githubusercontent.com/71400881/163563951-44a82eb7-767d-4d51-b736-219a7092513f.png">
</p>

<br />
<p align="center">
  <b> Home Screen </b> <br />
  <img align="center" width="40%" height="650" src="https://user-images.githubusercontent.com/71400881/163563952-f85af84e-4d52-4871-9744-a90bdfd3d308.png">
</p>

<br />
<p align="center">
  <b> All Categories Screen </b> <br />
  <img align="center" width="40%" height="650" src="https://user-images.githubusercontent.com/71400881/163563959-b16d5b5d-53be-4621-802f-4f5f026c299e.png">
</p>

<br />
<p align="center">
  <b> Coupons Screen </b> <br />
  <img align="center" width="40%" height="650" src="https://user-images.githubusercontent.com/71400881/163563963-d21cfe30-af8e-4d96-9cb2-129360f67f9c.png">
</p>

<br />
<p align="center">
  <b> Coupon Details Screen </b> <br />
  <img align="center" width="40%" height="650" src="https://user-images.githubusercontent.com/71400881/163563962-0a7413ea-0a6e-4feb-bb50-11ec2af359ce.png">
</p>

<br />
<p align="center">
  <b> OCR Detection Screen </b> <br />
  <img align="center" width="40%" height="650" src="https://user-images.githubusercontent.com/71400881/163563948-a5856020-a610-4f7f-8528-57dc34f30ac1.png">
</p>

<br />
<p align="center">
  <b> Add Card Screen </b> <br />
  <img align="center" width="40%" height="650" src="https://user-images.githubusercontent.com/71400881/163563956-53620a6f-54d8-42e4-bbfc-a8ff8e3d606f.png">
</p>
