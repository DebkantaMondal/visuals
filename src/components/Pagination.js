import './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <center style={{display: "flex", justifyContent: "center"}}>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <span onClick={() => paginate(number)} className='page-link'>
                                {number}
                            </span>
                        </li>
                    ))}
                </ul>
            </center>
        </nav>
    );
};

export default Pagination;