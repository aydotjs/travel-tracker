/* 

*/
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Grocery", quantity: 4, packed: false },
  { id: 4, description: "Singlet", quantity: 5, packed: true },
  { id: 5, description: "Underwear", quantity: 20, packed: false },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stat />
    </div>
  );
}
function Logo() {
  return <h1>🌴Far Away💼</h1>;
}
function Form() {
  return <div className="add-form">What do you need for your trip</div>;
}
function PackingList() {
  return (
    <div className="list">
      <ul >
        {initialItems.map((item) => <Item item = {item}/>)}
      </ul>
    </div>
  );
}

function Stat() {
  return (
    <footer className="stats">
      <em>You have X items on your list. You already have X (X%)</em>
    </footer>
  );
}

function Item({item}){
return(<li>
  <span style={item.packed ? {textDecoration : "line-through"} : {}}>{item.quantity} {item.description} </span>
  <button>❎</button>
</li>)
}