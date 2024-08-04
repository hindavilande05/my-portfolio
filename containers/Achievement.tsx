import React from "react";
import AchievementCard from "../components/AchievementCard";
import { achievements } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Achievement = () => {
  return (
    achievements && (
      <Fade bottom duration={2000}>
        <section className="section pb-0  my-5">
          <Container>
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-books text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Achievement</h4>
              </div>
            </div>
            <Row className="row-grid ">
              {achievements.map(info => {
                return (
                  <Col className="order-lg-1" lg="12" key={info.title}>
                    <AchievementCard {...info} />
                  </Col>
                );
              })}
            </Row>
          </Container>
         
        </section>
      </Fade>
    )
  );
};

export default Achievement;
