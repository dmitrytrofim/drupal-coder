import { useState } from 'react';

function LangSwitcher() {
 const [toggle, setToggle] = useState('');
 const [ru, setRu] = useState('RU');
 const [en, setEn] = useState('EN');
 const toggleLang = () => {
  setToggle(toggle == '' ? 'j-show' : '');
 };
 const changeLang = () => {
  setRu(ru == 'RU' ? 'EN' : 'RU');
  setEn(en == 'EN' ? 'RU' : 'EN');
  setToggle('');
 };

 return (
  <div className="header__lang lang">
   <button onClick={toggleLang} className={`lang__btn m-main ${toggle}`}>
    {ru}
   </button>
   <button onClick={changeLang} className={`lang__btn m-toggle ${toggle}`}>
    {en}
   </button>
  </div>
 );
}

export default LangSwitcher;
