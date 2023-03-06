
import { data } from "../data";
import Flex from "./styled/Flex";
import Image from "./styled/Image";
import Sarmal from "./styled/Sarmal";

const Card = () => {
  return (
    <div>
      <Sarmal>
        {data.map((item) => {
          const { id, body, image, title } = item;
          return (
            <Flex key={id} className="card" >
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <Image src={image} alt={title} />
            </Flex>
          );
        })}
      </Sarmal>
    </div>
  );
};

export default Card;
