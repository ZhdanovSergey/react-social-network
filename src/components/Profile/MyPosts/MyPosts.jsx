import {connect} from 'react-redux'
import {addPost} from './../../../redux/profile-reducer.js'
import el from './MyPosts.module.css'
import PostsForm from './PostsForm/PostsForm'
import Post from './Post/Post'


let MyPosts = (props) => (
	<div className={`${el.block} ${props.className}`}>
    <PostsForm onSubmit={ (formData) => { props.addPost(formData.message) } }/>
    <div>
      {props.posts.map((state) => {return(
        <Post className={el.post}
              message={state.message}
              likesCount={state.likesCount}/>
      )})}
    </div>
  </div>
)

let mstp = (state)=>({
  posts: state.profilePage.posts,
})
let mdtp = {
  addPost,
}

export default connect(mstp, mdtp)(MyPosts)