# OntoLearn – A/L ICT Learning Assistant

**Student Name:** Sanjula Athapaththu  
**Student ID:** FGS/MSc/CS/2025/011

## Demonstration Video

The demonstration video showing the working features of the OntoLearn mobile application is available below:

[Watch the OntoLearn Demonstration Video](https://drive.google.com/file/d/1lS4sfImBuqldKRQBQZsyi127a8koWwhP/view?usp=drive_link)

## 1. App Purpose

OntoLearn is a mobile learning assistant designed to support students studying
Sri Lankan Advanced Level (A/L) Information and Communication Technology (ICT).

The application provides learning resources, saved learning concepts, question
and answer navigation, application-state monitoring, and local learning
reminders.

The current version is a prototype with hard-coded learning content. The
ontology and knowledge graph will be integrated in a future version.

## 2. Technologies Used

- React Native
- Expo
- Expo Router
- JavaScript
- React Hooks
- Expo Notifications
- Android / Expo Go

## 3. Application Screens

### 1. Home

The Home screen introduces the OntoLearn application and displays:

- Application title
- A/L ICT learning assistant description
- App state
- Ask Your Question button

The screen also uses the React Native `AppState` API to detect application
state changes.

### 2. Resources

The Resources screen displays A/L ICT learning resources using a `FlatList`.

Example learning topics include:

- Data Representation
- Computer Networks
- Database Management
- Internet and Web
- Programming

Users can:

- View resources
- Save resources
- Filter resources using a modal
- Navigate to resource details

### 3. Saved

The Saved screen displays resources that the user has saved.

Saved resources are managed using shared React state through a custom
`SavedContext`.

Users can also remove resources from the saved list.

### 4. Profile

The Profile screen provides a button to send a local learning reminder.

When the user presses the button, the application requests notification
permission and sends a local notification.

### 5. Ask Question

The Ask Question screen allows the user to enter an A/L ICT question.

The screen demonstrates navigation from the question screen to the answer
screen.

### 6. Answer

The Answer screen displays a sample answer and provides a Back button to
return to the previous screen.

### 7. Resource Details

The Resource Details screen displays detailed information about a selected
learning resource.

This screen is part of a nested Stack navigation structure.

## 4. React Native Components

The application demonstrates the required React Native components.

### View

`View` is used throughout the application to structure screen layouts and
group interface elements.

### Text

`Text` is used to display:

- Titles
- Descriptions
- Resource information
- Application status
- Answers
- Button labels

### Image

The Home screen uses the `Image` component to display the A/L ICT learning
assistant image.

### Pressable

`Pressable` is used for interactive buttons such as:

- Ask Your Question
- Get Answer
- Save
- Remove from Saved
- View Details
- Back
- Send Learning Reminder

### FlatList

`FlatList` is used in the Resources and Saved screens to efficiently render
lists of learning resources.

### Modal

A `Modal` is used in the Resources screen to provide resource filtering.

## 5. State Management

The application uses React state management with `useState`.

Shared saved-resource state is implemented using:

```text

