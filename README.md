## 1 Signature App

replace the code in the App.js file with:

`import "./App.css";
import SignatureApp from "./projects/01Signature-app/SignatureApp";

function App() {
return (

<div className="App">
<SignatureApp />
</div>
);
}

export default App;
`
explanation:

The component imports React and useState hook from the React library, as well as a component called Title from a local file ./components/Title.

Inside the component function, two state variables name and date are declared using the useState hook. The initial values for these states are set to "Signature" and "Date", respectively.

Two functions handelNameChange and handelDateChange are defined to handle changes in the input fields for name and date. These functions update the corresponding state variables (name and date) with the new values entered by the user.

An inline CSS style inputStyle is defined to style the input fields.

The background color of the body is set to #eee.

The component returns JSX code representing the UI of the signature application. It includes:

Two instances of the Title component, one for displaying the name and another for displaying the date. The text prop of the Title components is set to the name and date state variables, respectively.
A paragraph element with some Lorem Ipsum text.
A footer element containing two input fields: one for entering the date (type="date") and another for entering the name (type="text"). These input fields are bound to the date and name state variables, respectively, and trigger the handelDateChange and handelNameChange functions when their values change.
