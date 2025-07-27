export function WelcomePage() {
  function myName() {
    return "Majid";
  }

  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>My name is {myName()}.</p>
    </div>
  );
}

export function EXitPage() {
  return (
    <div>
      <h1>Exit Page</h1>
    </div>
  );
}
