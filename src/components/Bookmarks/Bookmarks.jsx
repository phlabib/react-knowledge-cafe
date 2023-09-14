
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md: w-1/3 bg-gray-400 rounded-xl p-4 m-4" >
            <h2 className="text-3xl text-center   ">Bookmarked Blogs : {bookmarks.length}</h2>
            {
               bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>) 
            }
        </div>
    );
};


Bookmarks.PropTypes = {
    bookmarks : PropTypes.array
}
export default Bookmarks;
