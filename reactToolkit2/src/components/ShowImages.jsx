import { useSelector, useDispatch } from "react-redux";
import { showImages } from "../slices/ShowImages";

export function ShowImages() {
  const urls = useSelector((state) => state.serviceShowImages);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    evt.preventDefault();
    const url = evt.target[0].value;
    document.getElementById("form").reset();
    dispatch(showImages(url));
  };

  return (
    <>
      <form id="form" onSubmit={handleChange}>
        <input placeholder="type url"></input>
        <button>ok</button>
      </form>
    </>
  );
}
