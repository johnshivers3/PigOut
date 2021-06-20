import { SuggestionsCards } from './SuggestionsCards';
import './SuggestionsContainer.css'
export const SuggestionsContainer = () => {
  return (
    <div className='suggestions-container'>
      <h2>Suggestions Container</h2>
      <div className='cards'>
      <SuggestionsCards/>
      <SuggestionsCards/>
      <SuggestionsCards/>
      <SuggestionsCards/>
      </div>
      <div className='cards'>
      <SuggestionsCards/>
      <SuggestionsCards/>
      <SuggestionsCards/>
      <SuggestionsCards/>
      </div>
      <div className='cards'>
      <SuggestionsCards/>
      <SuggestionsCards/>
      <SuggestionsCards/>
      <SuggestionsCards/>
      </div>
    </div>
  )
}
export default SuggestionsContainer;
