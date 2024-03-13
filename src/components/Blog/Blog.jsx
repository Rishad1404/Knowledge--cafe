// import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover_image,reading_time,img,author,posted_date,hashtags}=blog;
    return (
        <div className='mb-16 space-y-3'>
            <img className='w-full mb-4 rounded-lg' src={cover_image} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6 items-center mb-2'>
                    <img className='w-14' src={img} alt="" />
                    <div >
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-3 text-black text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p className='mt-1'>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">{hash} </a></span>)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(id,reading_time)}
             className='text-purple-600 font-bold underline'>Mark as Read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;