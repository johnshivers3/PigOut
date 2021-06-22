import './SuggestionsCards.css'
export const SuggestionsCards = ({business}) => {
  return (
    <div className='suggestions-cards'>
      SuggestionsCard
      <h3>{business.name}</h3>
      <img alt='thumb' src={business.image_url} height='100px' width='100px'></img>
    </div>
  )
}
export default SuggestionsCards;
