import { useSelector } from "react-redux";
import { showImages } from "../slices/ShowImages";

export function ShowAllImg() {
  const urls = useSelector((state) => state.serviceShowImages);
  console.log(urls);

  return (
    <div className="wrapper">
      {urls.map((el) => {
        return (
          <figure className="container" key={el.id}>
            <img className="img" src={el.url} />
          </figure>
        );
      })}
    </div>
  );
}
