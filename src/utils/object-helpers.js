export let updateObjectsInArray = (items, objPropName, objPropValue, newObjectProps) => {
	return items.map((item) => {
		if (item[objPropName] === objPropValue) {
			return {
				...item,
				...newObjectProps,
			}
		}
		return item
	})
}