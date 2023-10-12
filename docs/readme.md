# PlantMomma App

The app purpose is to keep collection of user plants with their respective descriptions.
It should facilitate taking care of plants. 
The app will run on mobile.

# Methodology

## React
React will be used in the most standard way. It will be combined with the following tools:

### Typescript

### styled-components
All the components will be styled with styled-components.

### Vite

## Backend
The backend will be implemented using Typescript and deployed as lambda functions on AWS.

## Plant Collection
The plant collection will be consumed from iloveplants.com

# Requirements

## Functional Requirements

Ability to create a collection of plants with respective information on how to take care of them.
Ability to add, edit and remove each plant.
Ability to browse through the owned plant collection.

### REQ.1 User should be presented to screen where they can add a new plant

The app home screen will be the starting point for user and will present 
"Add to collection" button. Clicking it will open Add new plant view.

### REQ.2 User must be able to Save a new plant within the collection

After clicking "Add to collection" button, user will be presented to "Add new plant view".
User has to fill up the fields and click "Save" button in order to create new plant item.

The new plant item:
- must be persisted on the database with unique ID.
- will appear on the home screen view, below "Add to collection" button
- will receive its own "Plant detail view"

### REQ.3 User must be able to Edit a plant from their collection

Single plant view will contain "Edit" button. Clicking the button will open 
"Edit mode view".
Edit mode view will contain the same fields as in "Save a new plant" view.

### REQ.4 User must be able to Remove a plant from their collection

"Edit plant view" will contain "Remove" button. Clicking "Remove" button will remove item from
the collection.

The removed item:
- must be removed from database 
- must be removed from the home screen view
- will have removed "Plant detail view"

## Non-functional Requirements

What needs to happen so the above requirements are met along with laws and regulations.

### Cheap cloud deployment

### The system must save data locally for a first PoC

#### Risks

The risk of the data loss is acknowledged and is accepted for a first PoC. 
Users will be informed of the limitations of the system and will circumvent it 
by not cleaning the cookies.

As a mitigation procedure the storage of data will be executed by a separate 
component which will later be replaced by a cloud solution.

# Proof Of Concept

## First iteration

- [ ] Implement home screen with static list of plants
- [ ] When clicking on a plant should redirect to a detail page, using a static plant as template

## Second iteration

- [ ] Create plant creation screen
- [ ] Persist plant on local db

## Third iteration

- [ ] On the home screen list plants from the local db instead

## Fourth iteration

- [ ] In the home screen view, clicking on a plant should redirect to "Plant detail view",
  using a data from local db
- [ ] Allow user to edit the plant

## Fifth iteration

- [ ] Allow user to remove plant from the collection

## PoC results and feedback

- [ ] Implement a Proof Of Concept (PoC)
- [ ] Collect feedback from users
- [ ] Create a list of likes, dislikes and improvements

# Architecture

Not necessary for a PoC. But for further implementations an architectural 
diagram of components and deployment will be required.

## Frontend

The frontend architecture will consist of styled ReactJS components implemented using Typescript.
The persistence will be done in a file named `persistence.ts` which all components that 
handle data must use.
This file will change in future versions to persist the data in the cloud.

## Data architecture

The data will be stored as one big simple JSON with the following fields:

```json
{
  "userID": "string",
  "plants": [
    {
      "plantID": "string",
      "name": "string",
      "image": "string",
      "watering": "string",
      "spraying": "string",
      "light": "string",
      "soil": "string",
      "fertilizer": "string"
    },
    {
      "plantID": "string",
      "name": "string",
      "image": "string",
      "watering": "string",
      "spraying": "string",
      "light": "string",
      "soil": "string",
      "fertilizer": "string"
    }
  ]
}
```

### Data access

The JSON will be read and persisted as a big block.