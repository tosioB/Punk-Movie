import NowPlayingMovie from "./components/NowPlayingMovie/NowPlayingMovie";
import PopularMovie from "./components/PopularMovie/PopularMovie";
import UpcomingMovie from "./components/UpcomingMovie/UpcomingMovie";

function Home() {
  return (
    <>
      <div className="home">
        <NowPlayingMovie />
        <UpcomingMovie />
        <PopularMovie />
      </div>
    </>
  );
}

export default Home;
