import { useCatImage } from './hooks/UseCatImage'
import { useCatFact } from './hooks/UseCatFact'
import '../src/App.css'

export function App () {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new Fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl}
                alt={`Image extracted using the three words for ${fact}`} />}
        </main>
    )
}