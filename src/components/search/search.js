import './search.css' 

const Search = (props) => {
    return (
        <div className='search-div'>
            <h2>Input</h2>
            <textarea 
                id='search-text'
                className='search-text'
                onChange={props.onChange}
                type='text'
                value={props.input}
            />
            <button 
                id='search-button'
                className='search-button'
                onClick={props.onClick}
            >SEARCH</button>
        </div>
    )
};

export default Search 