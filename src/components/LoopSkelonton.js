const { default: Skeleton } = require("./utils/Skeleton");

const MyComponent = () => {
	const components = [];
	for (let i = 0; i < 20; i++) {
	components.push(<Skeleton key={i} />);
	}
	return <div>{components}</div>;
};