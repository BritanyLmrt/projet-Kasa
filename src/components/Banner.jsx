function Banner(props) {
    return (
        <>
            <div className={props.className}>
            </div>
            <div className={props.title}>
                <h1>{props.text}</h1>
            </div>
        </>
    );
}

export default Banner;
