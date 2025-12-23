import "./App.css";

function App() {
  const notifications = [
    "New Message Received",
    "Your Order has been shipped",
    "Password Changed Successfully!",
  ];

  return (
    <>
      <div>
        <h2>Notifications</h2>

        {notifications.length === 0 ? (
          <p>No Notifications</p>
        ) : (
          <ul>
            {notifications.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
