import './App.css';

const Search  = () => {
    return(
        <>
        <div className='searchbox'>
            <input type={'text'} placeholder={"Search by linkname"} /> &nbsp;&nbsp;&nbsp; <input type={'text'} placeholder={"Search by Topic"} />
        </div>
    </>
    );
}

export default Search;