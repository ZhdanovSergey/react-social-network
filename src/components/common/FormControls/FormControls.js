import styles from './FormControls.module.css'

let FormControl = (props) => {
	let isError = props.meta.touched && props.meta.error;
	return (
		<div className={`${styles.formControl} ${isError ? styles.error : ""}`} >
			{ props.children }
			{ isError && <div className={styles.errorMessage}>{props.meta.error}</div> }
		</div>
	)
}

export let Textarea = (props) => {
	let {input, meta, child, ...restProps} = props;
	return (
		<FormControl {...props} >
			<textarea {...input} {...restProps} />
		</FormControl>
	)
}

export let Input = (props) => {
	let {input, meta, child, ...restProps} = props;
	return (
		<FormControl {...props} >
			<input {...input} {...restProps} />
		</FormControl>
	)
}