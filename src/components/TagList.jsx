function TagList({ tags }) {
    return (
        <div className="tags">
            <ul>
                {tags.map((tag, index) =>
                    <li key={index}>{tag}</li>
                )}
            </ul>
        </div>
    )
}

export default TagList;