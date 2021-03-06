import React from "react";
import {Badge, Card, OverlayTrigger, Tooltip} from "react-bootstrap";
import "./ResourceListItem.scss";

const ResourceListItem = (props: any) => {
    // https://visme.co/blog/logo-color-schemes/
    const colorMap = new Map();
    colorMap.set('oop', "#7582C0");
    colorMap.set('programming', "#3F8F8B");
    colorMap.set('algorithms', "#6460AA");
    colorMap.set('fun', "#FF6D56");
    colorMap.set('android', "#5BB462");
    colorMap.set('all', "#4285F4");
    colorMap.set('article', "#4A154B");
    colorMap.set('course', "#EA5252");
    colorMap.set('math', "#00897B");
    colorMap.set('algorithm design', "#FF9800");
    colorMap.set('programming', "#3F51B5");
    colorMap.set('data structures', "#FF5722");
    colorMap.set('afcs', "#3F51B5");
    colorMap.set('os', "#78517C");

    colorMap.set('programmer life', "#434343");
    colorMap.set('programmer tips', "#282828");
    colorMap.set('meme', "#2D2D2D");


    const tagListSplit = props.tagList.split(" ");

    const tagListJSX: JSX.Element[] = tagListSplit.map((tag: string, index: number) => {
        const processedTag = tag.replace(/_/g, " ");
        return (<Badge pill variant="primary" style={{backgroundColor: colorMap.get(processedTag)}} className="mr-2" key={index}>{processedTag}</Badge>);
    });

    const tooltip = <Tooltip id="tooltip-top"><strong>{props.title}</strong></Tooltip>;

    return (
        <React.StrictMode>

            <div className="list-container mt-2" style={{paddingBottom: "3rem"}}>

                <div className="grid res-container">
                    <div className="res-item-left">
                        <div className="center-on-small">
                            <OverlayTrigger placement="top" overlay={tooltip}>
                                <a href={props.linkURL} target="_blank" rel="noopener noreferrer">
                                    <div className="list-thumbnail-container">
                                        <img className="list-thumbnail" src={props.imageURL} alt="Thumbnail" />
                                    </div>
                                </a>
                            </OverlayTrigger>
                        </div>
                    </div>

                    <div className="resource-description-container res-item-right">
                        <div className="resource-description">
                            <b>{props.description}</b>
                        </div>
                    </div>
                </div>


                <div className="tag-wrapper">
                    <div className="tag-list">
                        {tagListJSX}
                    </div>
                </div>



            </div>

        </React.StrictMode>
    );
}

export default ResourceListItem;
