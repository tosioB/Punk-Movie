import NowPlayingMovie from "../../components/NewPlayingMovie/NewPlayingMovie";
import Upcoming from "../../components/Upcoming/Upcoming";

function Home() {
  return (
    <>
      <div className="punk-movie">
        <NowPlayingMovie />
        <Upcoming />
      </div>
    </>
  );
}

export default Home;
