# POC - Persistence of Data in the Form

This Proof of Concept (POC) demonstrates the persistence of data in a form, even when the internet connection is lost. When the connection is restored, the data that was previously saved will be retrieved and used to populate the form automatically. The data is identified by a unique identifier, which in this POC is the email.

## Features

- Offline Form Filling: Start filling out the form even without an internet connection.
- Data Persistence: The entered data is automatically saved locally, ensuring it is not lost during connection outages.
- Automatic Data Retrieval: When the internet connection is reestablished, the saved data is retrieved and used to populate the form fields.
- Unique Identifier: The email serves as the unique identifier for identifying and retrieving the persisted data.

## Technologies Used

- Typescript (ReactJS) + TailwindCSS
- Local Storage: A browser API used to store and retrieve data locally.

## Usage

1. Clone the repository:

```shell
git clone https://github.com/kameiaky/form-persistent-poc.git
```

2. Open the project folder:

```shell
cd your-repo
```
3. Install the dependencies

```shell
npm install
```
4. Start the project and filling out the form fields, even without an internet connection.

```shell
npm run dev
```
5. If the connection is lost, don't worry! The entered data will be saved locally.
6. When the internet connection is restored, the saved data will automatically populate the form fields.

## Limitations

- This POC focuses on the client-side implementation and assumes the use of modern web browsers with support for Local Storage.
- The form data is stored locally on the user's device, and no data synchronization with a server or across multiple devices is implemented.
- Security considerations such as data encryption, validation, and sanitization are not addressed in this POC. These aspects should be carefully evaluated and implemented in a production-ready solution.

## License
This project is licensed under the MIT License.