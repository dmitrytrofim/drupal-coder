function Partners() {
 let content = [];
 for (let i = 0; i < 3; i++) {
  content.push(
   <>
    <div key={i} className="partners__card">
     <img
      className="partners__card-img"
      src="/assets/img/partner-1.webp"
      alt=""
      loading="lazy"
     />
    </div>
    <div key={i} className="partners__card">
     <img
      className="partners__card-img"
      src="/assets/img/partner-2.webp"
      alt=""
      loading="lazy"
     />
    </div>
    <div key={i} className="partners__card">
     <img
      className="partners__card-img"
      src="/assets/img/partner-3.webp"
      alt=""
      loading="lazy"
     />
    </div>
    <div key={i} className="partners__card">
     <img
      className="partners__card-img"
      src="/assets/img/partner-4.webp"
      alt=""
      loading="lazy"
     />
    </div>
   </>
  );
 }
 return <div className="partners__row">{content}</div>;
}

export default Partners;
