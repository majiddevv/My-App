import "../App.css";
import image2 from "../backgound.jpg";
import Navbar from "./Nav";

function NavbarBootstrap() {
  let name = "Majid";
  let age = 27;

  function handleClick() {
    alert("Button Clicked!");
    document.querySelector(".ab").style.backgroundColor = "lightblue";
    document.querySelector(".ab").style.color = "darkblue";
    document.querySelector(".bb").innerHTML = "Button Clicked! Majid";
    document.querySelector(".bb").style.textAlign = "center";
  }

  return (
    <div className="ab">
      <h1 className="bb">
        Welcome to My App My Name is {name} and my age is {age}
      </h1>
      <p>This is my first React app.</p>
      <p>I hope you like it!</p>
      <p>Feel Free to Explore and Modify</p>
      <p>Happy Coding!</p>
      <p>
        Check out this <a href="https://www.react.dev">React Documentation</a>{" "}
        for more information.
      </p>
      <button onClick={handleClick}>Click Me!</button>
      <img src={image2} alt="background" width={100} height={100} />

      <Navbar />
    </div>
  );
}

export default NavbarBootstrap;
