import React from "react";
import { Card, CardBody, Badge, UncontrolledCarousel, Col } from "reactstrap";
import { AchievementType } from "../types/sections";
import Fade from "react-reveal/Fade";


const AchievementCard = ({ title, desc, photo1, photo2 }: AchievementType) => {
  return (
    <Card className="shadow-lg--hover shadow mt-4">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-info">{title}</h5>
            <h6>{desc}</h6>

            
           
          </div>
        </div>

      </CardBody>
      <UncontrolledCarousel
  items={[
    {
      
      key: 1,
      src: photo1,
    },
    {
     
      key: 2,
      src: photo2
    },
   
  ]}
 />
    </Card>
   
  );
};

export default AchievementCard;
