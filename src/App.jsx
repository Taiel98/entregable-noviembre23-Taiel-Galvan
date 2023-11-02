function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [userNombre, setUserName] = useState("");
  const [color, setColor] = useState("");
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeColor = (e) => setColor(e.target.value);
    const validarUserNombre = (userNombre) => {

      const withoutSpaces = userNombre.trim();
    
      if (wihtoutSpaces.length > 2) {
      return true;
      } else {
      return false;
      }
      };
      const validarColor = (color) => {

        const withoutSpaces = color.trim();
    
        if (wihtoutSpaces.length > 5) {
        return true;
        } else {
        return false;
        }
        };

        const onSubmitForm = (e) => {
          e.preventDefault();
  
          const isUsernameValid = validarUserNombre(userNombre);
          const isPasswordValid = validarColor(color);
          
          if (!isPasswordValid || !isUsernameValid) {
          alert("Por favor chequea que la información sea correcta");
          } else {
          <Card nombre={userNombre}/>;
          <Card color={color}/>;
          }
          };   



  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={onSubmitForm}>{/* aqui deberias escribir tu codigo */}
      <input
        type="text"
placeholder="Nombre de usuario"
value={userNombre}
onChange={onChangeUserName}
/>
<input
type="text"
placeholder="Color"
value={color}
onChange={onChangeColor}
/>
<button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
