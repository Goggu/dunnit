import React, { useContext } from 'react'
import './Postt.css'
import { StoreContext } from '../../context/StoreContext'
import PostHeader from '../../components/PostPage/PostHeader/PostHeader'
import { useParams } from 'react-router-dom'
import PostContent from '../../components/PostPage/PostContent/PostContent' 
import SimilarPosts from '../../components/PostPage/SimilarPosts/SimilarPosts'
import { useState } from 'react'
import { assets } from '../../assets/assets'

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
            <PostHeader id={article._id} namee={article.namee} owner={article.owner} profilepic={article.profilepic} datee={article.datee} />
          </div>
          <div className='post-content'>
            <PostContent id={article._id} content={article.content} />
          </div>  
          <div className='like-dislike-comment-share'>            
            <img className='like-icon' src={assets.like_icon} alt='' />
            <img className='dislike-icon' src={assets.dislike_icon} alt='' />
            <img className='comment-icon' src={assets.comment_icon} alt='' />
            <img className='share_icon' src={assets.share_icon} alt='' />
            <img className='save-article-icon' src={assets.save_article_icon} alt='' />
          </div>        
        </div>
        
        <div className='similar-articles'>
          {<SimilarPosts selectedMenu={setSelectedMenu} />}
        </div>
        
      </div>
  );
}

export default Postt

