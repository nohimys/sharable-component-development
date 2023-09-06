import Comments from "../SharableModule/BadDesign/Comments";
import CommentList from "../SharableModule/GoodDesign/CommentList";
import DisplayLabel from "../SharableModule/Modals/DisplayLabel";

const DemoPageComponent = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const badDeSignComponents = () => {
        return (
            <>
                <div>
                    <h4> Client Requirement 1</h4>
                    <Comments
                        requirementId={1}
                        contextId={1}
                        contextType={'COMMENT'}
                    />
                </div>

                <div>
                    <h4> Client Requirement 2</h4>
                    <Comments
                        requirementId={2}
                        contextId={1}
                        contextType={'POST'}
                    />
                </div>

                <div>
                    <h4> Client Requirement 3</h4>
                    <Comments
                        requirementId={3}
                        contextId={1}
                        contextType={'POST'}
                    />
                </div>
            </>
        );
    }

    const goodDesignComponents = () => {
        return (
            <>
                <div>
                    <h4> Client Requirement 1</h4>
                    <CommentList
                        contextId={1}
                        contextType={'COMMENT'}
                        fontColour={'red'}
                        displayLabel={DisplayLabel.NAME}
                    />
                </div>

                <div>
                    <h4> Client Requirement 2</h4>
                    <CommentList
                        contextId={1}
                        contextType={'POST'}
                        fontColour={'blue'}
                        displayLabel={DisplayLabel.EMAIL}
                    />
                </div>

                <div>
                    <h4> Client Requirement 3</h4>
                    <CommentList
                        contextId={1}
                        contextType={'POST'}
                        fontColour={'green'}
                        displayLabel={DisplayLabel.NONE}
                    />
                </div>
            </>
        );
    }

    return (
        <>
            <h2>Demo Page</h2>
            {goodDesignComponents()}
        </>
    );
}
export default DemoPageComponent;