import ProjectProps from "@/models/project";
import { Modal, Col, Text } from "@nextui-org/react";
import TechContainer from "./tech-container";

interface ProjectModalProps {
  project: ProjectProps;
  closeHandler: () => void;
  isOpen: boolean;
}

export const ProjectModal = (projectModalProps: ProjectModalProps) => {
  const { project, closeHandler, isOpen } = projectModalProps;
  return (
    <Modal
      blur
      scroll
      width="40em"
      closeButton
      aria-labelledby="modal-title"
      open={isOpen}
      onClose={closeHandler}
      preventClose
    >
      <Modal.Header>
        <Col>
          <Text h2>{projectModalProps.project.name}</Text>
          <TechContainer techs={project.techs} />
        </Col>
      </Modal.Header>
      <Modal.Body>
        <Text h3>Overview</Text>
        <Text>{projectModalProps.project.description.overview}</Text>
        <Text h3>Solution</Text>
        <Text>{projectModalProps.project.description.solution}</Text>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
