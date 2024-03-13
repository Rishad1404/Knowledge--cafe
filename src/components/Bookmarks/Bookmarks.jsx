import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 rounded-lg m-2'>

            <div className='bg-slate-500'>
                <h3 className='text-white p-4 text-center text-2xl font-bold'>Reading Time: {readingTime} min</h3>
            </div>

            <h2 className='text-3xl text-center mt-3 p-2'>Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;