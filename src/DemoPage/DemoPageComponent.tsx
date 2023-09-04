import Comments from "../SharableModule/BadDesign/Comments";


const DemoPageComponent = () => {

    const badDeSignComponents = () => {
        return (
            <>
                <div>
                    <h4> Client Requirement 1</h4>
                    <Comments
                        requirementId={1}
                        postOrCommentId={1}
                    />
                </div>

                <div>
                    <h4> Client Requirement 2</h4>
                    <Comments
                        requirementId={2}
                        postOrCommentId={1}
                    />
                </div>

                <div>
                    <h4> Client Requirement 3</h4>
                    <Comments
                        requirementId={3}
                        postOrCommentId={1}
                    />
                </div>
            </>
        );
    }

    return (
        <>
            <h2>Demo Page</h2>
            {badDeSignComponents()}
        </>
    );
}
export default DemoPageComponent;