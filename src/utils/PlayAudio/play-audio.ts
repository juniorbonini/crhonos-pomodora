import playBeep from "../../assets/audios/gravitational_beep_fixed.mp3";

export function loadBeep() {
  const audio = new Audio(playBeep);

  return () => {
    audio.currentTime = 0;
    audio.play().catch((error) => console.log("Erro ao tocar áudio", error));
  };
}
