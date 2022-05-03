import './planet-component.styles.scss';

const PlanetComponent = ({name, 
  rotationPeriod,
  orbitalPeriod, 
  diameter,
  climates,
  surfaceWater,
  population }) => {

return (
<div className="planet-component grid ">
  
  <div className="planet-title" >{name}</div>
  <div className='planet-item' >{!rotationPeriod ? 'undefined' : `${rotationPeriod}`}</div>
  <div className='planet-item'>{!orbitalPeriod ? 'undefined' : `${orbitalPeriod}`}</div>
  <div className='planet-item' >{!diameter ? 'undefined' : `${diameter}`}</div>
  <div className='planet-item'>{climates && climates.map((climate,idx) => (
    <div  key={idx} >{climate}</div>
  ) )}</div>
  <div className='planet-item'>{!surfaceWater ? 'undefined' : `${surfaceWater}`}</div>
  <div className='planet-item'>{!population ? 'undefined' : `${population}`}</div>
</div>
  )
  
};

export default PlanetComponent;
