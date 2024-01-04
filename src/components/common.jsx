import PropsTypes from 'prop-types';

export function Container({ children, width, padding, margin,}) {
 return (
  <div className={`w-full ${width} mx-auto ${padding} ${margin}`}>
   {children}
  </div>
 );
}

Container.propTypes = {
 children: PropsTypes.node,
 width: PropsTypes.string,
 padding: PropsTypes.string,
 margin: PropsTypes.string
};

Container.defaultProps = {
 width: 'max-w-[1220px]',
 padding: 'px-[10px]',
 margin: '',
};

