import React, { useContext } from 'react'
import './Postt.css'
import { StoreContext } from '../../context/StoreContext'
import PostHeader from '../../components/PostPage/PostHeader/PostHeader'
import { useParams } from 'react-router-dom'
import PostContent from '../../components/PostPage/PostContent/PostContent' 
import SimilarPosts from '../../components/PostPage/SimilarPosts/SimilarPosts'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { post_list } from '../../assets/assets'

const Postt = () => {

  const { id } = useParams();
  
  const { post_list } = useContext(StoreContext);

  const [ selectedMenu, setSelectedMenu ] = useState('');
  
  const article = post_list.find((item) => item._id === id); // Find the article that matches the ID


  if (!article) {
    return <div>Article not found</div>;
  }

  return (
      <div className='article-page'>
        
        <div className='current-article' component="main" sx={{ flexGrow: 1, p: 3, marginTop: -4, marginBottom: 2, marginRight: 0 }}>
          <div className='post-title' >
            <PostHeader id={article._id} namee={article.namee} datee={article.datee} />
          </div>
          <div>
            <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '5px 0px 5px 30px', opacity: 0.8, width: '93%' }}/>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="meta-info"> 
                <img src={assets.profilepic} alt='' />
                <p>&nbsp;{post_list.owner}</p>
              </div>
              <div className='like-dislike-comment-share'>            
                <img className='like-icon' src={assets.like_icon} alt='' />
                <img className='share_icon' src={assets.share_icon} alt='' />
                <img className='save-article-icon' src={assets.save_article_icon} alt='' />
              </div>
            </div>            
            <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '5px 0px 5px 30px', opacity: 0.8, width: '93%' }}/>
          </div>
          <div className='post-content'>
            <PostContent id={article._id} content={article.content} />
          </div>        
        </div>
        
        <div className='similar-articles'>
          {<SimilarPosts selectedMenu={setSelectedMenu} />}
        </div>
        
      </div>
  );
}

export default Postt

