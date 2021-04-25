import el from './Post.module.css'

const Post = (props) => {
	return (
		<div className={`${el.block} ${props.className}`}>
			<div className={el.text}>{props.message}</div>
			<div className={el.likes}>likes: {props.likesCount}</div>
		</div>
	)
}

export default Post