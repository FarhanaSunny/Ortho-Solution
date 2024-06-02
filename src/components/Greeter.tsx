

// @ts-ignore
function Greeter(props) {
    console.log('props', props)
    return (
        <>
        <h2>
            id: {props.id}
        </h2>
        <h1>
            Hello {props.name}
        </h1>
        <h3>
            firstname is {props.firstname}
        </h3>
        </>
    )
}

export default Greeter;