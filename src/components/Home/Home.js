import styled from "styled-components";
import Viewers from "../Viewers/Viewers";
import ImgSlider from "../ImgSlider/ImgSlider";
import Recommends from "../Recommends/Recommends";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Trending from "../Trending/Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../features/user/userSlice";
import db from "../../firebase";
import { setMovies } from "../../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends.push({ id: doc.id, ...doc.data() });
            break;
          case "new":
            newDisneys.push({ id: doc.id, ...doc.data() });
            break;
          case "original":
            originals.push({ id: doc.id, ...doc.data() });
            break;
          case "trending":
            trending.push({ id: doc.id, ...doc.data() });
            break;
          default:
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0px calc(3.5vw + 5px);
  padding-bottom: 50px;

  &:after {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat;
    position: absolute;
    opacity: 1;
    z-index: -1;
  }
`;
