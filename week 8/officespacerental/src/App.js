import "./App.css";

function App() {
  // Office Object
  const office = {
    name: "DBS Business Center",
    rent: 55000,
    address: "Chennai",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
  };

  // List of Office Spaces
  const officeList = [
    {
      id: 1,
      name: "DBS Business Center",
      rent: 55000,
      address: "Chennai",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    },
    {
      id: 2,
      name: "Tech Park Office",
      rent: 75000,
      address: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=900",
    },
    {
      id: 3,
      name: "Startup Hub",
      rent: 45000,
      address: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900",
    },
  ];

  return (
    <div className="App">
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Single Office */}
      <h2>Featured Office</h2>

      <img src={office.image} alt="Office Space" />

      <h3>Name: {office.name}</h3>

      <h3
        style={{
          color: office.rent < 60000 ? "red" : "green",
        }}
      >
        Rent: ₹{office.rent}
      </h3>

      <h3>Address: {office.address}</h3>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item) => (
        <div key={item.id} className="office-card">
          <img src={item.image} alt={item.name} />

          <h3>{item.name}</h3>

          <h3
            style={{
              color: item.rent < 60000 ? "red" : "green",
            }}
          >
            Rent: ₹{item.rent}
          </h3>

          <h3>Address: {item.address}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;