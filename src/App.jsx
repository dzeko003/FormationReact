const title = "Bonjour les gens";
const style = { color: "red", backgroundColor: "blue" };

const todos = [
  "Preparer",
  'Manger',
  "Boire" ,
  "s'amuser"
]

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert(" j'ai cliqué sur le titre");
  };

  return (
    <>
      <Title color="yellow" content="Berenis MASSAMBA"/>
      <Title>hello guys !</Title>
      <input type="text" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ad
        perferendis sequi voluptas cum recusandae dolore alias ratione a
        deleniti minima doloribus eligendi, repudiandae odit. Nostrum temporibus
        voluptate rem natus?
      </p>
      <ul>
        {todos.map(todo => <li key={todo}>{todo}</li>)}
      </ul>
    </>
  );
}


const Title = ({color , content, children}) => {
  return (
    <>
      <h1 style={{color : color}}>{content}</h1>
      <h1 style={{color : color}}>{children}</h1>
    </>
  )
}
export default App;
