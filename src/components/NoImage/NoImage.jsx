import "@/components/NoImage/style/noImage.scss";
import NoImageSVG from "@/assets/images/no-image.svg";

function NoImage() {
  return (
    <div className="no-image">
      <img src={NoImageSVG} alt="이미지 없음" />
      <span className="txt">이미지 없음</span>
    </div>
  );
}

export default NoImage;
