import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, driveLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`${title} thumbnail`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {driveLink && (
            <a href={driveLink} target="_blank" rel="noopener noreferrer">
              <button className="drive-link-btn">View on Drive</button>
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
