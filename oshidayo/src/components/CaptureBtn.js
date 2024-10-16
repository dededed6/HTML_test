import html2canvas from "html2canvas";
import '../styles/components/CaptureBtn.css'
import saveAs from "file-saver";

export default function Capture() {
    const onClickDownloadButton = async () => {
        try {
          const div = document.getElementById('capture');
          const canvas = await html2canvas(div, { scale: 2 });
          canvas.toBlob((blob) => {
            if (blob !== null) {
              saveAs(blob, "OshiDAYO.png");
            }
          });
        } catch (error) {
          alert('이미지 저장 오류!');
        }
      };

    return (
      <button className="captureBtn" onClick={onClickDownloadButton}>💾이미지 저장하기</button>
    );
}