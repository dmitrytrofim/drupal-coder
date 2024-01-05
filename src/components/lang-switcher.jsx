import { useState } from 'react';

function LangSwitcher() {
 const [toggle, setToggle] = useState('');
 const toggleLang = () => {
  setToggle(toggle == '' ? 'j-show' : '');
 };

 return (
  <div className="header__lang lang">
   <button onClick={toggleLang} className={`lang__btn m-main ${toggle}`}>
    RU
   </button>
   <button className={`lang__btn m-toggle ${toggle}`}>EN</button>
  </div>
 );
}

export default LangSwitcher;
