export function MouseClicker() {
  function handleClick(event) {
    console.log(event.currentTarget.name);
  }

  function handleImageClick(event) {
    event.stopPropagation();
    console.log(event.target.src);
  }

  return (
    <button name="one" onClick={handleClick}>
      <img
        src="https://img.freepik.com/vettori-gratuito/vettore-di-gradiente-del-logo-colorato-uccello_343694-1365.jpg?semt=ais_rp_progressive&w=740&q=80"
        height={24}
        width={24}
        onClick={handleImageClick}
      />
      Click Me!
    </button>
  );
}
