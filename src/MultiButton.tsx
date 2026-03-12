export function MultiButton() {
  function buttonClick(event) {
    console.log(event.target.name);
  }
  return (
    <div>
      <button name="one" onClick={buttonClick}>
        Button1
      </button>
      <button name="two" onClick={buttonClick}>
        Button2
      </button>
      <button name="three" onClick={buttonClick}>
        Button3
      </button>
    </div>
  );
}
