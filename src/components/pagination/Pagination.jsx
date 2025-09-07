

// export default Pagination



// import React from 'react';

// const Pagination = ({ pageNumber, paginate, next, prev, currentPage }) => {
//     // Current page set: only display 3 pages at a time
//     const startPage = Math.max(currentPage - 2, 1);
//     const endPage = Math.min(startPage + 2, pageNumber.length);

//     // Get the array of pages to display (3 at a time)
//     const displayedPages = pageNumber.slice(startPage - 1, endPage);

//     return (
//         <>
//             <div className='ml-4'>
//                 <nav aria-label="Page navigation example">
//                     <ul className="inline-flex -space-x-px text-sm cursor-pointer">
//                         <li>
//                             <a onClick={prev}
//                              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
//                         </li>
//                         {displayedPages.map((item, i) => (
//                         <li onClick={() => paginate(item)} key={i}>
//                             <a className={currentPage === item + 1 
//                                 ? "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800" 
//                                 : "flex items-center justify-center px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white"}>{item + 1}</a>
//                         </li>
//                         ))}
//                         <li>
//                             <a onClick={next}
//                              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </>
//     );
// }

// export default Pagination;


// import React from 'react';

// const Pagination = ({ pageNumber, paginate, next, prev, currentPage }) => {
//     // Calculate the range to display pages
//     let startPage, endPage;

//     // যদি শেষের তিনটা পেজ বাকি থাকে, তাহলে সেগুলোই দেখাবে
//     if (currentPage >= pageNumber.length - 2) {
//         startPage = pageNumber.length - 2;
//         endPage = pageNumber.length;
//     } else {
//         startPage = Math.max(currentPage - 1, 1);
//         endPage = Math.min(startPage + 2, pageNumber.length);
//     }

//     // Get the array of pages to display (3 at a time)
//     const displayedPages = pageNumber.slice(startPage - 1, endPage);

//     return (
//         <>
//             <div className='ml-4'>
//                 <nav aria-label="Page navigation example">
//                     <ul className="inline-flex -space-x-px text-sm cursor-pointer">
//                         <li>
//                             <a onClick={prev}
//                              disabled={currentPage === 1}
//                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
//                         </li>
//                         {displayedPages.map((item, i) => (
//                             <li onClick={() => paginate(item)} key={i}>
//                                 <a className={currentPage === item + 1
//                                     ? "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800"
//                                     : "flex items-center justify-center px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white"}>{item + 1}</a>
//                             </li>
//                         ))}
//                         <li>
//                             <a onClick={next}
//                              disabled={currentPage === pageNumber.length}
//                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </>
//     );
// }

// export default Pagination;


// this is pagenation page
import React from 'react';

const Pagination = ({ pageNumber, paginate, next, prev, currentPage }) => {
    // Calculate the range to display pages
    let startPage, endPage;

    // যদি শেষের তিনটা পেজ বাকি থাকে, তাহলে সেগুলোই দেখাবে
    if (currentPage >= pageNumber.length - 2) {
        startPage = pageNumber.length - 2;
        endPage = pageNumber.length;
    } else {
        startPage = Math.max(currentPage - 1, 1);
        endPage = Math.min(startPage + 2, pageNumber.length);
    }

    // Get the array of pages to display (3 at a time)
    const displayedPages = pageNumber.slice(startPage - 1, endPage);

    return (
        <>
            <div className='ml-4'>
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-sm cursor-pointer">
                        <li>
                            <a 
                               onClick={prev}
                               className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 rounded-s-lg 
                                   ${currentPage === 1 
                                       ? "text-gray-300 bg-gray-200 cursor-not-allowed" 
                                       : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"} 
                                   border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                               disabled={currentPage === 1}
                            >
                                Previous
                            </a>
                        </li>
                        {displayedPages.map((item, i) => (
                            <li onClick={() => paginate(item)} key={i}>
                                <a className={currentPage === item + 1
                                    ? "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800"
                                    : "flex items-center justify-center px-3 h-8 text-sm font-medium border-gray-900 border-[1px] hover:bg-gray-900 hover:text-white"}>
                                    {item + 1}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a 
                               onClick={next}
                               className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg 
                                   ${currentPage === pageNumber.length 
                                       ? "text-gray-300 bg-gray-200 cursor-not-allowed" 
                                       : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"} 
                                   border-gray-300 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                               disabled={currentPage === pageNumber.length}
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Pagination;
