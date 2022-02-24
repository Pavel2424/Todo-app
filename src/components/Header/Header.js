import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <img className="header__icon" src="./svg/main.svg" alt="" />
      <h1 className="header__title">Todo App</h1>
      <ul className="explaining">
        <li>The red is delete task</li>
        <li>The green is done task</li>
        <li>The yellow is edit task</li>
      </ul>
    </header>
  );
};
export default Header;
