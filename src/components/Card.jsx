import { data } from "../data";
// import Flex from "./styled/Flex";
import { Flex2 } from "./styled/Flex";
import Image from "./styled/Image";
import Sarmal from "./styled/Sarmal";

const Card = () => {
  return (
    <div>
      <Sarmal>
        {data.map((item) => {
          const { id, body, image, title } = item;
          return (
            <Flex2 key={id} className="card">
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <Image src={image} alt={title} />
            </Flex2>
          );
        })}
      </Sarmal>
    </div>
  );
};

export default Card;
