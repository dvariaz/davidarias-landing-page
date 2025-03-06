import "./Indicators.scss";

const StatusIndicator = ({ status }) => {
    let statusStyle;

    switch (status) {
        case "PRODUCTION":
            statusStyle = { backgroundColor: "#51e620" };
            break;
        case "DEVELOPMENT":
            statusStyle = { backgroundColor: "#e67220" };
            break;
        case "CONCEPT":
            statusStyle = { backgroundColor: "#52a8ca" };
            break;
        default:
            statusStyle = { backgroundColor: "#a0a9ad" };
    }

    return <div className="inline-block w-4 h-4 rounded-full status-indicator--rounded" style={statusStyle}></div>;
};

export default StatusIndicator;
