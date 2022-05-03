import './planet-mobile-component.styles.scss'

const PlanetMobileComponent = ({name, 
    rotationPeriod,
    orbitalPeriod, 
    diameter,
    climates,
    surfaceWater,
    population,
    
}) => {
  
  

  return (
  <div className='mobile-items-container' >
    <div className='planet-mobile-item' > <div className='planet-mobile-item-title'>Planet name</div><div id="planet-name"> {name}</div> </div>
    <div className='planet-mobile-item'><div className='planet-mobile-item-title'> Rotaion period</div> {!rotationPeriod ? 'undefined' : `${rotationPeriod}`}</div>
    <div className='planet-mobile-item'><div className='planet-mobile-item-title'> Orbital period</div> {!orbitalPeriod ? 'undefined' : `${orbitalPeriod}`}</div>
    <div className='planet-mobile-item' ><div className='planet-mobile-item-title'> Diameter</div> {!diameter ? 'undefined' : `${diameter}`}</div>
    <div className='planet-mobile-item'><div className='planet-mobile-item-title'>Climate</div><div className='mobile-climate' > {climates && climates.map((climate,idx) => (
      <div className='mobile-climat' key={idx} >{climate}</div>
    ) )}</div></div>
    <div className='planet-mobile-item'><div className='planet-mobile-item-title'> Surface water</div> {!surfaceWater ? 'undefined' : `${surfaceWater}`}</div>
    <div className='planet-mobile-item'><div className='planet-mobile-item-title'>Population</div>{!population ? 'undefined' : `${population}`}</div>
  </div>
    )
    
  };
  
  export default PlanetMobileComponent;