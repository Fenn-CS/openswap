# The crypto exchange platform
## 1. INTRODUCTION
### 1.1 PURPOSE

The purpose of this platform is to enable and facilitate the purchase, sale, and transfer of cryptocurrencies where participants can freely choose who to sell to or buy from depending on their proposed rates.

### 1.2 DOCUMENT CONVENTIONS

<table>
<tr>
    <td>DB</td>
    <td>Database </td>
  </tr>
  <tr>
    <td>MYSQL</td>
    <td>Structured Query Language</td>
  </tr>
  <tr>
    <td>ER</td>
    <td>Entity Relationship</td>
  </tr>
</table>

### 1.3 INTENDED AUDIENCE AND READING SUGGESTIONS

This project is an open-source project, and it is free for anybody who wishes to sell and buy crypto.

### 1.4 PROJECT SCOPE

Crypto swap is a peer-to-peer cryptocurrency marketplace where buyers and sellers are connected for business, This platform provides a variety of rates for crypto sellers and well-secured payment methods, 
Crypto-swae project we have chosen Vb.Net language for its more interactive support.


## OVERALL DESCRIPTION
### 2.1 PRODUCT PERSPECTIVE

The crypto-swap trading system stores the following information.

- Sellers details
    - The history of all transactions made by a seller
    - The available balance of the seller account 
    - The phone number and email address of a seller 
- Buyers details 
    - The history of all transactions made by a buyer
    - The available balance of the buyer’s account 
    - The phone number and email address of a seller
    - A legal document of a buyer ( ID, passport, drivers linens )

- Moderator details 
    - The history of all transactions made by a moderator
    - The phone number and email address of a moderator
    - A legal document of a buyer ( ID, passport, drivers linens )

This information may be used for keeping the records of the customer for any emergency or for any other kind of information.

### 2.2 PRODUCT FEATURES

The major features of the crypto-swap database system as shown in below entity-relationship model (ER model) 

### 2.3 USER CLASS and CHARACTERISTICS

Users of the system should be able to retrieve information from the database such as  
- best rate trader
- the fastest trader
- the most reliable trader 

The system will support three types of users, Seller, Buyer, and Moderator.
A seller will have access to sellers functions, while a buyer will have access to both the seller and the buyer function. A Moderator will have access to the moderator functions. The users should be able to do the following functions:


<table>
<tr>
    <td rowspan="10">SELLERS</td>
    <td></td>
        <tr><td>see a list of buyers</td></tr>
        <tr><td>choose which buyer to sell my coins to</td></tr>
        <tr><td>make sure the buyer is fast in trading</td></tr>
        <tr><td>see if a buyer is online</td></tr>
        <tr><td>speak with the buyer</td></tr>
        <tr><td>send alert to the system that buyer is not attending to my trade</td></tr>
        <tr><td>withdraw money from my account to my mtn or orange wallet</td></tr>
        <tr><td>get notification when a buyer response to my trade</td></tr>
        <tr><td>give feedback after a trade</td></tr>      
</tr>
<tr>
    <td rowspan="12">BUYERS</td>
    <tr><td>get a notification if a seller opens a new trade</td></tr>
        <tr><td>set my rate</td></tr>
        <tr><td>see other buyers rate </td></tr>
        <tr><td>report a seller if he is wasting my time</td></tr>
        <tr><td>block a seller if he is not legit</td></tr>
        <tr><td>deactivate my offers if I am not online</td></tr>
        <tr><td>get notification each time a new seller opens a trade</td></tr>
        <tr><td>set my rules that a seller should read before accepting to trade with me</td></tr>
        <tr><td>get reviews from sellers</td></tr>
        <tr><td>give me feedback after each trade</td></tr>
        <tr><td>open dispute</td></tr>
</tr>
<tr>
    <td rowspan="7">MODERATOR</td>
    <tr><td>see all chats</td></tr>
        <tr><td>get notification each time a dispute is open</td></tr>
        <tr><td>award dispute</td></tr>
        <tr><td>delete a user</td></tr>
        <tr><td>check if a buyer is qualified to buy</td></tr>
        <tr><td>Set a transaction time frame</td></tr>
</tr>
</table>
