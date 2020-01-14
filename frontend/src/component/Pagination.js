import React from 'react'

const Pagination = ({ totalPages, paginate }) => {
    const ultimo = totalPages - 1
    const pageNumbers = [];
    
    for(let i = 0; i < totalPages; i++){
        pageNumbers.push(i);       
    }

    return (
        // <nav>
        //     <ul className="pagination">
        //         {pageNumbers.map(number => (
        //             <li key={number} className="page-item">
        //               <a onClick={() => paginate(number)} href="#" className="page-link"> {number} </a>                     
        //             </li>
        //          ))}

        //     </ul>
        // </nav>


        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">                
                <a onClick={() => paginate(0)} className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                      <a onClick={() => paginate(number)} href="#" className="page-link"> {number} </a>                     
                    </li>
                 ))}

                <li className="page-item">
                <a onClick={() => paginate(ultimo)} className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    )
}


export default Pagination