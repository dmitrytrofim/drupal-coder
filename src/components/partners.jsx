import { v4 as uuidv4 } from 'uuid';

function Partners() {
 let content = [];
 for (let i = 0; i < 4; i++) {
  content.push(
   <div key={uuidv4()} className="partners__card">
    <img
     className="partners__card-img"
     src="./assets/img/partner-1.webp"
     alt=""
    />
   </div>,
   <div key={uuidv4()} className="partners__card">
    <img
     className="partners__card-img"
     src="./assets/img/partner-2.webp"
     alt=""
    />
   </div>,
   <div key={uuidv4()} className="partners__card">
    <img
     className="partners__card-img"
     src="./assets/img/partner-3.webp"
     alt=""
    />
   </div>,
   <div key={uuidv4()} className="partners__card">
    <img
     className="partners__card-img"
     src="./assets/img/partner-4.webp"
     alt=""
    />
   </div>
  );
 }
 return <div className="partners__row">{content}</div>;
}

export default Partners;
