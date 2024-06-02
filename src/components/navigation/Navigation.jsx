import NavigationLinks from "./NavigationLinks";
import zlogo from "../../assets/images/zlogo.png";
export default function Navigation() {
  return (
    <header className='header'>
      <nav className='navigation'>
        <div className='wrapper'>
          <div className='navigation-content'>
            <a href='/'>
              <img className='navigation-image' src={zlogo} alt='zlogo' />
            </a>
            <NavigationLinks />
          </div>
        </div>
      </nav>
    </header>
  );
}
